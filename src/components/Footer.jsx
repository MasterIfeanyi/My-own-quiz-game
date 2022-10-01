const Footer = () => {

    const today = new Date();

    return (
        <footer className="py-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Chima Ifeanyi &copy; {today.getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
