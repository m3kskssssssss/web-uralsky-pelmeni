const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты Администрации Екатеринбурга</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Местоположение</h2>
            <p>просп. Ленина, 24А, Екатеринбург,620014</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Телефон</h2>
            <p>
              <a href="tel:+73432538844">+7 (343) 253-88-44</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Часы работы</h2>
            <p>Понедельник - Пятница: 9:00 - 18:00</p>
            <p>Суббота, Воскресенье: выходные</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
