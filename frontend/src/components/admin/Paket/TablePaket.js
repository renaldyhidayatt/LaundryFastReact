import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useSelector, useDispatch } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import Error from "../../Error";
import Loader from "../../Loader";
import { deletePaket } from "../../../redux/action/paket.action";

const { SearchBar } = Search;

const TablePaket = (props) => {
  const paket = useSelector((state) => state.paketListReducer);
  const { pakets, loading, error } = paket;
  const dispatch = useDispatch();

  const HandleDelete = (id) => {
    dispatch(deletePaket(id));
  };

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "jenis_paket",
      text: "Jenis Paket",
      sort: true,
    },
    {
      dataField: "harga",
      text: "Harga",
      sort: true,
    },
    {
      dataField: "outlet_id",
      text: "Outlet",
      sort: true,
    },

    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/admin/paket/update/" + row.id}>
              <button className="btn btn-primary mr-2">
                <i className="fa fa-edit"></i> Edit
              </button>
            </Link>

            <button
              className="btn btn-danger mr-2"
              onClick={() => HandleDelete(row.id)}
            >
              <i className="fa fa-trash"></i> Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div className="table-responsive">
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={pakets}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="row">
                <div className="container">
                  <Link to="/admin/paket/create">
                    <button className="btn btn-dark mr-10">
                      <i className="fa fa-user"></i> Create Member
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="float-right mr-5">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </div>
              </div>

              <BootstrapTable
                className="table table-bordered"
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </>
  );
};

export default TablePaket;
