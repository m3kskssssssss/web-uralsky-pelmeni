const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-5">Контакты разработчиков</h1>
        <div className="contacts-wrapper">
          <div className="contacts-info">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-4">Местоположение</h2>
                <p>Физико-технологический институт УрФУ</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-4">Телефон для обратной связи</h2>
                <p>
                  <a href="tel:+73432538844">+7 (901) 220-50-40</a>
                </p>
              </li>
              <li className="content-list__item">
                <h2 className="title-4">вопросы по работе сайта</h2>
                <p>
                  <a href="mailto:misha_2003_5@mail.ru">misha_2003_5@mail.ru</a>
                </p>
              </li>
              <li className="content-list__item">
                <h2 className="title-4">Авторы работы</h2>
                <p>Артём Артюшин</p>
                <p>Матвей Черняков</p>
                <p>Алёна Маркова</p>
                <p>Стрельников Михаил</p>
              </li>
            </ul>
          </div>
          <div className="contacts-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.7776405378556!2d60.61239046046614!3d56.82689237966561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e9313b87eb3%3A0x5efc6e1573d0b178!2z0YPQuy4g0KDQvtC30Ysg0JvRjtC60YHQtdC80LHRg9GA0LMsIDU20JAsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDAyNg!5e0!3m2!1sru!2sru!4v1726973167125!5m2!1sru!2sru" width="600" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;