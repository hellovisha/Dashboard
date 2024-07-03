export default function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Data Dashboard</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
