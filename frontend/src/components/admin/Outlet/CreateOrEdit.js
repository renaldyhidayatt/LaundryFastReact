const OutletCreateOrUpdate = (props) => {
  const Create = props.Create;

  return (
    <div>
      {Create ? (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              value={props.nama}
              name="nama"
              onChange={props.onChangeInput}
              className="form-control"
              placeholder="Nama"
            />
          </div>
          <div className="form-group">
            <label for="alamat">Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={props.alamat}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="telp">Telp</label>
            <input
              type="text"
              id="telp"
              name="telp"
              value={props.telp}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      ) : (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              value={props.nama}
              name="nama"
              onChange={props.onChangeInput}
              className="form-control"
              placeholder="Nama"
            />
          </div>
          <div className="form-group">
            <label for="alamat">Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={props.alamat}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="telp">Telp</label>
            <input
              type="text"
              id="telp"
              name="telp"
              value={props.telp}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default OutletCreateOrUpdate;
