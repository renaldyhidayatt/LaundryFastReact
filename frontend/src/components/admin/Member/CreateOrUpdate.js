const MemberCreateOrUpdate = (props) => {
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
            <label for="jenis-kelamin">Jenis-kelamin</label>
            <input
              type="text"
              id="jenis-kelamin"
              name="jenis_kelamin"
              value={props.jenis_kelamin}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="telp-member">Telp Member</label>
            <input
              type="text"
              id="telp-member"
              name="telp_member"
              value={props.telp_member}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="no-ktp">No ktp</label>
            <input
              type="text"
              id="no-ktp"
              name="no_ktp"
              value={props.no_ktp}
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
            <label for="jenis-kelamin">Jenis-kelamin</label>
            <input
              type="text"
              id="jenis-kelamin"
              name="jenis_kelamin"
              value={props.jenis_kelamin}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="telp-member">Telp Member</label>
            <input
              type="text"
              id="telp-member"
              name="telp_member"
              value={props.telp_member}
              onChange={props.onChangeInput}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="no-ktp">No ktp</label>
            <input
              type="text"
              id="no-ktp"
              name="no_ktp"
              value={props.no_ktp}
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

export default MemberCreateOrUpdate;
