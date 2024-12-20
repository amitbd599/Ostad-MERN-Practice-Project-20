import { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import navLogo from "../assets/images/logo.svg";
const PaginatedPosts = () => {
  const [posts, setPosts] = useState([]); // All posts
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10; 

  // Fetch posts data
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setCurrentPageData(data.slice(0, itemsPerPage));
    };

    fetchPosts();
  }, []);

  // Handle page click
  const handlePageClick = (event) => {
    const selectedPage = event.selected; // Get selected page index
    const offset = selectedPage * itemsPerPage; // Calculate offset
    const newPageData = posts.slice(offset, offset + itemsPerPage); // Slice data
    setCurrentPageData(newPageData); // Update current page data
  };

  return (
    <>
      <Navbar className='sticky-top nav' bg='light'>
        <Container>
          <Navbar.Brand>
            <img className='nav-logo' src={navLogo} alt='' />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='container mt-4'>
        <h1 className='text-center mb-4'>Paginated Posts</h1>
        <table className='table table-striped table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-center mt-4'>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            breakClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
          />
        </div>
      </div>
    </>
  );
};

export default PaginatedPosts;
