const PaketCreateUpdate = (props) => {
  const Create = props.Create;

  return (
    <div>
      {Create ? (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label htmlFor="jenis_paket">Nama</label>
            <input
              type="text"
              id="jenis_paket"
              value={props.jenis_paket}
              name="jenis_paket"
              onChange={props.onChangeInput}
              className="form-control"
              placeholder="jenis paket"
            />
          </div>
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
            <label htmlFor="harga">Harga</label>
            <input
              type="text"
              id="harga"
              name="harga"
              value={props.harga}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="outlet_id">Outlet Id</label>
            <input
              type="text"
              id="oulet_id"
              name="outlet_id"
              value={props.outlet_id}
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
            <label htmlFor="jenis_paket">Nama</label>
            <input
              type="text"
              id="jenis_paket"
              value={props.jenis_paket}
              name="jenis_paket"
              onChange={props.onChangeInput}
              className="form-control"
              placeholder="jenis paket"
            />
          </div>
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
            <label for="harga">Harga</label>
            <input
              type="text"
              id="harga"
              name="harga"
              value={props.harga}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="outlet_id">Outlet Id</label>
            <input
              type="text"
              id="oulet_id"
              name="outlet_id"
              value={props.outlet_id}
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

export default PaketCreateUpdate;
