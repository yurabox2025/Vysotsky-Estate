const step = {
  id: "office",
  icon: "office",
  title: "Наш офис",
  html: `
    <h1>Наш офис</h1>

    <p><strong>Прежде чем перейти к деталям, давайте познакомим вас с нашим пространством — добро пожаловать на виртуальный тур! 🌟</strong></p>
    <p>Мы прекрасно понимаем: <strong>рабочая атмосфера — залог продуктивности</strong>. Поэтому мы выбрали современный бизнес-центр и создали комфортную среду для работы и обмена опытом.</p>

    Вот пара фото:

    <style>
      /* локальные стили блока */
      .office-wrap{display:flex;flex-direction:column;gap:44px;margin:28px 0}
      .office-row{display:grid;grid-template-columns:1fr 520px;gap:40px;align-items:center}
      .office-row.reverse{grid-template-columns:520px 1fr}
      .office-row img{width:100%;height:auto;border-radius:16px;box-shadow:0 8px 24px rgba(16,24,40,.08)}
      .office-row .txt{color:#475467}
      .office-row h3{margin:0 0 10px;font-size:18px;color:#101828}
      .office-row p{margin:0}
      @media (max-width: 980px){
        .office-row,
        .office-row.reverse{grid-template-columns:1fr;gap:18px}
      }
    </style>

    <div class="office-wrap">
      <!-- 1: текст слева, фото справа -->
      <section class="office-row">
          Вход в Бизнес Центр
        <div>
          <img src="assets/office-entrance.jpg" alt="Вход в Бизнес Центр">
        </div>
      </section>

      <!-- 2: фото слева, текст справа -->
      <section class="office-row reverse">
        <div>
          <img src="assets/office-workspace.jpg" alt="Рабочие места оборудованы всем необходимым">
        </div>
          Рабочие места оборудованы всем необходимым
      </section>

      <!-- 3: текст слева, фото справа -->
      <section class="office-row">
          Место для разбора встреч и обмена опытом 😊
        <div>
          <img src="assets/office-meeting.jpg" alt="Место для разбора встреч и обмена опытом">
        </div>
      </section>
    </div>

    <p class="muted" style="margin-top:22px">
      Кратко вроде познакомили. Подробнее офис вы сможете посмотреть при личной встрече — мы с удовольствием покажем всё-всё!
    </p>

    <h2 style="text-align:center;margin-top:24px;">👇👇👇А теперь давайте перейдем к команде.</h2>
  `
};

export default step;
