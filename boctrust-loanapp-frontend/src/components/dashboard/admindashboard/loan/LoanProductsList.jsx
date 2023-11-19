import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../../../redux/reducers/productReducer";
import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import EditLoanProduct from "./EditLoanProduct";
import ActionNotification from "../../shared/ActionNotification";
import NoResult from "../../../shared/NoResult";
// function
import searchList from "../../../../../utilities/searchListFunc";

const LoanProductsList = ({ count, searchTerm }) => {
  // styles
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    select: {
      backgroundColor: "#ecaa00",
      color: "#fff",
      border: "none",
      fontSize: "1rem",
      marginTop: "0.1rem",
      padding: "0.2rem 0.5rem",
    },
  };

  // fetch products
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const products = useSelector(
    (state) => state.productReducer.products.products
  );
  const status = useSelector((state) => state.productReducer.status);
  const [productsList, setProductsList] = useState(products);
  const [editLoanProduct, setEditLoanProduct] = useState({});
  const [showEditModel, setShowEditModel] = useState(false);
  const [action, setAction] = useState(false);
  const [productId, setProductId] = useState("");

  // update productsList to show 10 products on page load
  // or when count changes
  useEffect(() => {
    setProductsList(products?.slice(0, count));
  }, [products, count]);

  // update productsList on search
  const handleSearch = () => {
    const currProducts = searchList(products, searchTerm, "productName");
    setProductsList(currProducts?.slice(0, count));
  };
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  // action  handler
  const handleEdit = () => {
    setShowEditModel(true);
  };

  // handle delete action
  const handleDelete = async () => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    await fetch(`${apiUrl}/api/product/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(fetchProduct());
    setAction(false);
  };

  // handle select action
  const handleSelect = (e) => {
    // setOptionVal(e.target.value);
    const option = e.target.value;
    const productId = e.target.id;
    setProductId(productId);

    // filter product by id
    const productObj = products?.find((product) => product._id === productId);
    setEditLoanProduct(productObj);

    if (option === "edit") {
      handleEdit();
    } else if (option === "delete") {
      setAction(true);
    }
  };

  return (
    <>
      {status === "loading" ? (
        <PageLoader />
      ) : (
        <div>
          <DashboardHeadline
            height="52px"
            mspacer="2rem 0 -2.95rem -1rem"
            bgcolor="#145098"
          ></DashboardHeadline>
          <div style={styles.table}>
            <Table borderless hover responsive="sm">
              <thead style={styles.head}>
                <tr>
                  <th>Name</th>
                  <th>Interest Rate</th>
                  <th>Interest Type</th>
                  <th>Max Term</th>
                  <th>Term Period</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsList?.length === 0 && <NoResult name="Product" />}
                {productsList?.map((product) => (
                  <tr key={product._id}>
                    <td>{product.productName}</td>
                    <td>{product.interestRate.toFixed(2)}%</td>
                    <td>{product.interestType}</td>
                    <td>{product.maxTerm}</td>
                    <td>{product.termPeriod}</td>
                    <td>
                      <div>
                        <select
                          name="action"
                          id={product._id}
                          onChange={(e) => handleSelect(e)}
                          style={styles.select}
                        >
                          <option value="">Action</option>
                          <option value="edit">Edit</option>
                          <option value="delete">Delete</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}

      {/* edit loan product modal */}
      <EditLoanProduct
        show={showEditModel}
        product={editLoanProduct}
        onHide={() => setShowEditModel(false)}
      />
      <ActionNotification
        show={action}
        handleClose={() => setAction(false)}
        handleProceed={handleDelete}
      />
    </>
  );
};

LoanProductsList.propTypes = {
  count: PropTypes.number,
  searchTerm: PropTypes.string,
};

export default LoanProductsList;
