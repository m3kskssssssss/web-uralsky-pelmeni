const Contacts = () => {

    return (    
    <main className="section">
    <div className="container">
            <h1 className="title-1">Контакты:</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Местоположение</h2>
                    <p>Администрация города Екатеринбург, Россия</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:webdev@protonmail.com">ekb@uralmash.zavod</a></p>
                </li>
            </ul>

    </div>
</main>);

}
export default Contacts;