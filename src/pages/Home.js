import Header from "./../components/header/Header";

const Home = () => {
return (
    <>

    <Header />

        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Почему именно у нас?</h2>
                            <p>В Екатеринбурге очень много классных заводов...</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Улучшай свои навыки!</h2>
                            <p>Греби лопатой много денег и опыта.</p>
                        </li>
                    </ul>

            </div>
        </main>
    </>
);

}
export default Home;