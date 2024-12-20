import path from "path";
import fs from "fs";
import { exec } from "child_process";
import util from "util";

// Promisify exec
const execPromise = util.promisify(exec);

export const downloadRepo = async (req, res) => {
  try {
    const { owner, repo } = req.params;
    //! 1 GitHub repository URL
    const repoUrl = `https://github.com/${owner}/${repo}.git`;

    //! 2 Generate a unique folder name based on timestamp
    const timestamp = Date.now(); // Current timestamp

    //!  3 localFolder create
    const localFolder = path.join(
      process.cwd(), // Current working directory
      "myRepository",
      `${repo}-${timestamp}`
    );

    //! 4 Ensure the folder exists or create it
    if (!fs.existsSync(localFolder)) {
      fs.mkdirSync(localFolder, { recursive: true });
    }

    //! 5 Wrap the localFolder path in quotes to handle spaces
    const cloneCommand = `git clone ${repoUrl} "${localFolder}"`;

    //! 6 Execute the clone command
    console.log(`Executing: ${cloneCommand}`);
    await execPromise(cloneCommand);

    res
      .status(200)
      .json({ message: `Repository cloned successfully to ${localFolder}` });
  } catch (e) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while cloning the repository.",
      error: error.message,
    });
  }
};
