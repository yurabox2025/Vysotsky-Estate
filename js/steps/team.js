const step = {
  id: "team",
  icon: "team",
  title: "Наша команда",
  html: `
    <style>
      /* локальные стили для лесенки */
      #team-ladder .muted{color:var(--muted)}
      #team-ladder figure{margin:0}
      #team-ladder img{width:100%;max-width:360px;border-radius:12px;box-shadow:var(--shadow)}
      #team-ladder .ladder{display:grid;gap:36px}
      #team-ladder .item{display:grid;grid-template-columns:minmax(280px,360px) 1fr;gap:16px;align-items:start}
      #team-ladder .item.even{grid-template-columns:1fr minmax(280px,360px)}
      #team-ladder .item.even .pic{order:2}      /* картинка справа */
      #team-ladder .item.even .txt{order:1;text-align:left}
      .txt-left{text-align:left}
      .txt-right{text-align:right}
      #team-ladder .cap{font-size:13px;margin-top:8px;color:var(--muted)}
      /* Структура офиса — типографика как в макете */
      #team-structure{margin-top:42px}
      #team-structure h2{margin:0 0 18px;font-size:28px;line-height:1.2}
      #team-structure h4{margin:22px 0 8px;font-size:18px}
      #team-structure p{margin:0 0 18px;color:var(--muted)}
      #team-structure .accent{margin:26px 0 6px;font-weight:600}
      @media (max-width: 820px){
        #team-ladder .item,
        #team-ladder .item.even{grid-template-columns:1fr}
        #team-ladder .item.even .card{text-align:left}
        #team-ladder .item.even .pic{order:1}
      }
    </style>

    <div id="team-ladder">
      <h1>Наша команда</h1>

      <p>
        Мы работаем с большей частью коллектива с самого основания офиса.
        Многие пришли из других сфер, но сегодня это сильные эксперты рынка недвижимости.
      </p>

      <div class="ladder">
        <!-- 1. фото слева, текст справа -->
        <div class="item">
          <div class="pic">
            <figure>
              <img src="assets/team.jpg" alt="Команда с новыми контрактами">
            </figure>
          </div>
          <div class="txt muted">
                Добрая традиция фотографироваться с новыми контрактами ☺️
                 <figcaption class="cap">Руководитель группы — Алексей Прядилин.      </figcaption>
          </div>
        </div>

        <!-- 2. фото справа, текст слева -->
        <div class="item even">
          <div class="pic">
            <figure>
              <img src="assets/elena.jpg" alt="Елена Гросс">             
            </figure>
          </div>
          <div class="txt-left muted">
            Елена Гросс
          </div>
        </div>

        <!-- 3. фото слева, текст справа -->
        <div class="item">
          <div class="pic">
            <figure>
              <img src="assets/margarita.jpg" alt="Маргарита Белая">
            </figure>
          </div>
          <div class="txt-right muted">
            Маргарита Белая
          </div>
        </div>
      </div>

    <!-- Структура офиса (как на скрине) -->
    <section id="team-structure">
      <h2>Немного о структуре офиса:</h2>

      <h4>Группа стажёров</h4>
      <p>Ребята, которые только начинают свой путь в новой профессии.</p>

      <h4>Группа продаж – агенты</h4>
      <p>Опытные эксперты.</p>

      <h4>Юридический отдел</h4>
      <p>Юристы собирают весь необходимый пакет документов для сделки, проверяют документы по объекту и полностью сопровождают клиентов на сделках.</p>

      <p class="accent">Все отделы работают вместе, и мы стараемся создать позитивную рабочую атмосферу.</p>

      <h4>Получилось задать настрой?)</h4>
      <p>Давайте по организационным моментам теперь пройдёмся. 👇👇👇</p>
    </section>
  `,
};
export default step;
