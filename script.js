/* Royal Agape School Complex
   Builds the page content and the mobile menu.
   Update the SCHOOL details below before publishing. */

const SCHOOL = {
  name: "Royal Agape School Complex",
  tagline: "Bright At The Corner Where You Are",
  location: "Adoteiman - Amrahia",
  // Text Google Maps searches for, e.g. "Royal Agape School Complex, Kumasi, Ghana".
  // Leave empty to show a placeholder instead of the map.
  mapQuery: "ROYAL AGAPE SCHOOL COMPLEX, KALE STREET, Accra",
  phone: "233593798620",
  whatsapp: "233593798620",
  email: "",
  headmistress: "Mrs. Rejoice Oklu",
  // File name of her photo, saved in the same folder as index.html, e.g. "madam.jpeg". Leave empty to show a placeholder.
  headmistressPhoto: "",
  headmistressRole: "Headmistress",
  headmistressMessage:
    "At Royal Agape School Complex, we work with families to provide a caring environment where learners can grow in knowledge, character and confidence.",
  about:
    "Royal Agape School Complex is committed to helping learners develop strong foundations for learning and life. We value a safe school environment, responsible behaviour, curiosity and a close partnership between the school and parents.",
  calendarEmbedUrl: "https://calendar.google.com/calendar/embed?src=royalagapeschoolcomplex13%40gmail.com&ctz=Africa%2FAbidjan",
  socials: {
    facebook: "",
    instagram: "",
    tiktok: "https://www.tiktok.com/@royalagapeschoolcomplex",
    youtube: ""
  },
  // Replace these with actual file names if you have the photos.
  photos: [
    { src: "unnamed.webp", alt: "School life at Royal Agape School Complex" },
    { src: "school2.webp", alt: "Learners taking part in a school activity" },
    { src: "school3.webp", alt: "A school activity" },
    { src: "school4.webp", alt: "The school community" }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);

const icon = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M10 18h4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h3"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21Z"/><circle cx="12" cy="9.500" r="2.500"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.4 2 2 3.8 4.5 4.5l1.2-1.2 2 1c-.3 1.6-1.5 2.2-2.7 2.1-3.8-.6-6.8-3.7-7.2-7.2-.1-1.2.6-2.3 2.1-2.6l1 2L9 8.5Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.1 1.5 3.4 3.4 3.5v3.2a8 8 0 0 1-3.4-.9v6.6a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.4a2.4 2.4 0 1 0 1.2 2.1V3h3.2Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.9a3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>'
};

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function sectionMarkup() {
  $("#about").className = "section";
  $("#leadership").className = "section headmistress-section";
  $("#gallery").className = "section";
  $("#calendar").className = "section calendar-section";
  $("#socials").className = "social-section";

  $("#about").innerHTML = `
    <div class="container about-grid">
      <div class="about-copy">
        <div class="section-heading">
          <p class="section-kicker">Who we are</p>
          <h2 id="about-heading">A strong foundation for every learner.</h2>
          <p class="section-intro">${escapeHTML(SCHOOL.about)}</p>
        </div>
        <ul class="values-list">
          <li><span class="value-mark">✓</span><span>A caring and respectful learning environment</span></li>
          <li><span class="value-mark">✓</span><span>Strong foundations in learning and character</span></li>
          <li><span class="value-mark">✓</span><span>A meaningful partnership with parents</span></li>
        </ul>
      </div>
      <aside class="facts-panel">
        <h3>School information</h3>
        <div class="fact-row"><span>School</span><strong>${escapeHTML(SCHOOL.name)}</strong></div>
        <div class="fact-row"><span>Location</span><strong>${escapeHTML(SCHOOL.location)}</strong></div>
        <div class="fact-row"><span>Contact</span><strong>${SCHOOL.phone ? escapeHTML(SCHOOL.phone) : "Contact details coming soon"}</strong></div>
      </aside>
    </div>`;

  $("#leadership").innerHTML = `
    <div class="container headmistress-grid">
      <div class="portrait-frame${SCHOOL.headmistressPhoto ? " has-photo" : ""}">
        ${SCHOOL.headmistressPhoto
          ? `<img src="${escapeHTML(SCHOOL.headmistressPhoto)}" alt="${escapeHTML(SCHOOL.headmistress)}, ${escapeHTML(SCHOOL.headmistressRole)}">`
          : `<div class="portrait-placeholder">
              ${icon.person}
              <div>
                <strong>${escapeHTML(SCHOOL.headmistress)}</strong>
                <p>${escapeHTML(SCHOOL.headmistressRole)}</p>
              </div>
            </div>`}
      </div>
      <div class="headmistress-copy">
        <p class="section-kicker">School leadership</p>
        <h2 id="headmistress-heading">A message from our headmistress</h2>
        <p class="role-label">${escapeHTML(SCHOOL.headmistressRole)}</p>
        <h3>${escapeHTML(SCHOOL.headmistress)}</h3>
        <p>${escapeHTML(SCHOOL.headmistressMessage)}</p>
      </div>
    </div>`;

  const galleryItems = SCHOOL.photos.map(photo => `
    <figure class="gallery-item">
      <img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.alt)}" loading="lazy"
        onerror="this.closest('figure').classList.add('image-missing'); this.remove();">
    </figure>`).join("");

  $("#gallery").innerHTML = `
    <div class="container">
      <div class="section-heading">
        <p class="section-kicker">Life at school</p>
        <h2 id="gallery-heading">Learning, friendship and growth.</h2>
        <p class="section-intro">A glimpse of the people and moments that make up our school community.</p>
      </div>
      <div class="gallery-grid">${galleryItems}</div>
    </div>`;

  $("#calendar").innerHTML = `
    <div class="container">
      <div class="section-heading">
        <p class="section-kicker">Stay informed</p>
        <h2 id="calendar-heading">Academic calendar</h2>
        <p class="section-intro">Keep track of term dates, PTA meetings and important school events.</p>
      </div>
      <div class="calendar-frame">
        ${SCHOOL.calendarEmbedUrl
          ? `<iframe src="${escapeHTML(SCHOOL.calendarEmbedUrl)}" title="School academic calendar" loading="lazy"></iframe>`
          : `<div class="calendar-placeholder">${icon.calendar}<div><strong>School calendar</strong><p>Add the school's public Google Calendar embed link in script.js to display events here.</p></div></div>`}
      </div>
    </div>`;

  $("#socials").innerHTML = `
    <div class="container social-inner">
      <div>
        <p class="section-kicker">Keep in touch</p>
        <h2 id="socials-heading">Follow our school community</h2>
      </div>
      <div class="social-links">
        ${socialLink("facebook", "Facebook")}
        ${socialLink("instagram", "Instagram")}
        ${socialLink("tiktok", "TikTok")}
        ${socialLink("youtube", "YouTube")}
      </div>
    </div>`;

  $("#location").className = "section location-section";
  const mapQuery = encodeURIComponent(SCHOOL.mapQuery);
  $("#location").innerHTML = `
    <div class="container">
      <div class="section-heading">
        <p class="section-kicker">Find us</p>
        <h2 id="location-heading">Visit our school</h2>
        <p class="section-intro">${escapeHTML(SCHOOL.location)}</p>
      </div>
      <div class="map-frame">
        ${SCHOOL.mapQuery
          ? `<iframe src="https://www.google.com/maps?q=${mapQuery}&output=embed" title="Map showing the school's location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`
          : `<div class="map-placeholder">${icon.pin}<div><strong>School location</strong><p>Add the school's address to mapQuery in script.js to show the Google map here.</p></div></div>`}
      </div>
      ${SCHOOL.mapQuery ? `<a class="button" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener noreferrer">Get directions</a>` : ""}
    </div>`;

  $("#footer").innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand">
            <img class="brand-logo" src="agapelogo.png" alt="" onerror="this.style.display='none'">
            <div class="brand-copy">
              <p class="brand-name">${escapeHTML(SCHOOL.name)}</p>
              <span class="brand-tagline">${escapeHTML(SCHOOL.tagline)}</span>
            </div>
          </div>
          <p class="footer-summary">Working together with families to help every learner grow in knowledge, character and confidence.</p>
        </div>
        <div class="footer-column">
          <h3>Contact the school</h3>
          <address>${escapeHTML(SCHOOL.location)}</address>
          ${SCHOOL.phone ? `<p><a href="tel:${escapeHTML(SCHOOL.phone.replace(/[^+\d]/g, ""))}">${escapeHTML(SCHOOL.phone)}</a></p>` : "<p>Phone number to be added</p>"}
          ${SCHOOL.email ? `<p><a href="mailto:${escapeHTML(SCHOOL.email)}">${escapeHTML(SCHOOL.email)}</a></p>` : ""}
          ${SCHOOL.whatsapp ? `<p><a href="${whatsappURL()}">Message us on WhatsApp</a></p>` : ""}
        </div>
        <div class="footer-column">
          <h3>Quick links</h3>
          <p><a href="#about">About the school</a></p>
          <p><a href="#leadership">School leadership</a></p>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#calendar">Academic calendar</a></p>
          <p><a href="#location">Find us</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="current-year"></span> ${escapeHTML(SCHOOL.name)}.</span>
        <span>Made for our school community.</span>
      </div>
    </div>`;

  $("#current-year").textContent = new Date().getFullYear();
}

function socialLink(key, label) {
  const url = SCHOOL.socials[key];
  const iconMarkup = icon[key] || "";
  if (!url) return "";
  return `<a class="social-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${iconMarkup}<span>${label}</span></a>`;
}

function whatsappURL() {
  const digits = SCHOOL.whatsapp.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "#footer";
}

function createHeaderAndNavigation() {
  const header = document.querySelector("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="${escapeHTML(SCHOOL.name)} home">
        <img class="brand-logo" src="agapelogo.png" alt="" onerror="this.style.display='none'">
        <span class="brand-copy">
          <span class="brand-name">${escapeHTML(SCHOOL.name)}</span>
          <span class="brand-tagline">${escapeHTML(SCHOOL.tagline)}</span>
        </span>
      </a>
      <nav class="primary-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#leadership">Leadership</a>
        <a href="#gallery">Gallery</a>
        <a href="#calendar">Calendar</a>
        <a href="#footer">Contact</a>
      </nav>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">${icon.menu}</button>
    </div>
    <nav class="mobile-menu" aria-label="Mobile navigation">
      <a href="#about">About the school</a>
      <a href="#leadership">School leadership</a>
      <a href="#gallery">Gallery</a>
      <a href="#calendar">Academic calendar</a>
      <a href="#footer">Contact</a>
    </nav>`;

  const toggle = $(".menu-toggle");
  const mobileMenu = $(".mobile-menu");

  toggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.innerHTML = open ? icon.close : icon.menu;
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.innerHTML = icon.menu;
    });
  });
}

function createHero() {
  const hero = document.createElement("section");
  hero.className = "hero";
  hero.id = "top";
  hero.innerHTML = `
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">Welcome to our school</p>
        <h1>Every child deserves <span>a strong start.</span></h1>
        <p class="hero-description">We partner with families to create a positive place to learn, discover and grow.</p>
        <div class="hero-actions">
          ${SCHOOL.whatsapp ? `<a class="button" href="${whatsappURL()}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>` : ""}
          ${SCHOOL.phone ? `<a class="button button-secondary" href="tel:${escapeHTML(SCHOOL.phone.replace(/[^+\d]/g, ""))}">Call the school</a>` : ""}
        </div>
      </div>
      <aside class="hero-note">
        <strong>School and home, together.</strong>
        <p>Find school information, important dates and updates in one simple place.</p>
      </aside>
    </div>`;
  const header = $("header");
  header.insertAdjacentElement("afterend", hero);
}

function createContactButtons() {
  const wrapper = document.createElement("div");
  wrapper.className = "floating-contact";
  wrapper.setAttribute("aria-label", "Quick contact");
  if (SCHOOL.phone) {
    wrapper.insertAdjacentHTML("beforeend", `
      <a href="tel:${escapeHTML(SCHOOL.phone.replace(/[^+\d]/g, ""))}" aria-label="Call the school" title="Call the school">${icon.phone}</a>`);
  }
  if (SCHOOL.whatsapp) {
    wrapper.insertAdjacentHTML("beforeend", `
      <a class="whatsapp" href="${whatsappURL()}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the school" title="WhatsApp the school">${icon.whatsapp}</a>`);
  }
  if (wrapper.children.length) document.body.appendChild(wrapper);
}

function initialise() {
  document.title = `${SCHOOL.name} | Home`;
  createHeaderAndNavigation();
  createHero();
  sectionMarkup();
  createContactButtons();
}

document.addEventListener("DOMContentLoaded", initialise);
