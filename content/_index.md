---
title: ""
date: 2026-01-01
type: landing

sections:
  - block: html
    id: home
    content:
      title: ""
      text: |-
        <style>
          .vn-wrap{max-width:980px;margin:0 auto;padding:48px 20px 24px 20px;}
          .vn-hero{display:grid;grid-template-columns:260px 1fr;gap:36px;align-items:center;}
          .vn-avatar{width:240px;height:240px;object-fit:cover;border-radius:24px;box-shadow:0 10px 28px rgba(0,0,0,.12);}
          .vn-name{font-size:56px;line-height:1.05;margin:0;color:#666;font-weight:300;letter-spacing:.2px}
          .vn-role{font-size:22px;margin:12px 0 14px 0;color:#9a9a9a;font-style:italic}
          .vn-line{height:1px;background:#d9d9d9;margin:18px 0 14px 0}
          .vn-tags{font-size:14px;color:#9b9b9b;margin:0}
          .vn-bio{font-size:15px;color:#7d7d7d;line-height:1.65;margin:14px 0 0 0;max-width:640px}
          .vn-contact{margin-top:34px}
          .vn-contact-title{font-size:18px;color:#9a9a9a;letter-spacing:.8px;font-weight:600;margin:0 0 12px 0}
          .vn-icons{display:flex;gap:22px;align-items:center;justify-content:center;flex-wrap:wrap;margin:18px 0 18px 0}
          .vn-ic{width:62px;height:62px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;transition:.15s transform ease}
          .vn-ic:hover{transform:translateY(-2px)}
          .vn-ic svg{width:54px;height:54px}
          .vn-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;border-radius:26px;background:#cfcfcf;color:#fff;text-decoration:none;font-weight:600;letter-spacing:.4px}
          .vn-btn:hover{background:#bdbdbd}
          .vn-footer{display:flex;justify-content:space-between;align-items:center;margin-top:34px;color:#9a9a9a;font-size:13px}
          @media (max-width:820px){
            .vn-hero{grid-template-columns:1fr;justify-items:center;text-align:center}
            .vn-name{font-size:46px}
            .vn-bio{max-width:720px}
            .vn-footer{flex-direction:column;gap:8px}
          }
        </style>

        <div class="vn-wrap">
          <div class="vn-hero">

            <!-- Avatar -->
            <div>
              <!-- HugoBlox sẽ serve assets/media/authors/me/avatar.jpg thành /media/authors/me/avatar.jpg -->
              <img class="vn-avatar" src="/media/authors/me/avatar.jpg" alt="Van Nhat Minh Vo" />
            </div>

            <!-- Text -->
            <div>
              <h1 class="vn-name">Van Nhat Minh Vo</h1>
              <div class="vn-role">Imaging Scientist</div>
              <div class="vn-line"></div>
              <p class="vn-tags">MRI • Neuroimaging • Cardiovascular Imaging</p>

              <p class="vn-bio">
                Imaging Scientist at <b>King’s College London (IoPPN), Department of Neuroimaging</b>.
                I work on <b>preclinical MRI</b> for <b>neuro</b> and <b>cardiovascular</b> applications,
                focusing on <b>quantitative biomarkers</b> and <b>reproducible acquisition/analysis pipelines</b>.
              </p>
            </div>

          </div>

          <!-- Contact -->
          <div class="vn-contact">
            <div class="vn-line" style="margin-top:34px"></div>
            <div style="display:flex;justify-content:space-between;gap:18px;align-items:center;margin-top:10px;">
              <div class="vn-contact-title">CONTACT ME</div>
              <div style="flex:1;height:1px;background:#d9d9d9"></div>
            </div>

            <div class="vn-icons">

              <!-- ORCID -->
              <a class="vn-ic" href="https://orcid.org/0000-0003-3306-5006" target="_blank" rel="noopener" aria-label="ORCID">
                <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#a6ce39"></circle>
                  <text x="32" y="39" text-anchor="middle" font-size="22" font-family="Arial, Helvetica, sans-serif" fill="#fff">iD</text>
                </svg>
              </a>

              <!-- Google Scholar (simple cap icon) -->
              <a class="vn-ic" href="https://scholar.google.com/citations?user=ImwA5u0AAAAJ&hl=vi" target="_blank" rel="noopener" aria-label="Google Scholar">
                <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#111"></circle>
                  <path d="M10 26l22-10 22 10-22 10-22-10zm7 8v8c0 6 30 6 30 0v-8l-15 7-15-7z" fill="#fff"/>
                </svg>
              </a>

              <!-- GitHub -->
              <a class="vn-ic" href="https://github.com/MinhVo89" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#111"></circle>
                  <path fill="#fff" d="M32 14c-10 0-18 8-18 18 0 8 5 15 12 17 1 0 2-1 2-2v-4c-5 1-6-2-6-2-1-2-2-3-2-3-2-1 0-1 0-1 2 0 3 2 3 2 2 3 5 2 6 2 0-2 1-3 2-3-4 0-8-2-8-9 0-2 1-4 2-5 0-1-1-3 0-5 0 0 2 0 5 2 1-1 3-1 4-1s3 0 4 1c3-2 5-2 5-2 1 2 0 4 0 5 1 1 2 3 2 5 0 7-4 9-8 9 1 1 2 2 2 4v6c0 1 1 2 2 2 7-2 12-9 12-17 0-10-8-18-18-18z"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a class="vn-ic" href="https://www.linkedin.com/in/minh-vo-778323120/?originalSubdomain=uk" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#111"></circle>
                  <path fill="#fff" d="M20 26h6v20h-6V26zm3-10a4 4 0 110 8 4 4 0 010-8zm11 10h6v3c1-2 3-4 7-4 6 0 9 4 9 10v11h-6V36c0-3-1-6-4-6s-5 2-5 6v10h-6V26z"/>
                </svg>
              </a>

              <!-- Email -->
              <a class="vn-ic" href="mailto:minhvo89@gmail.com" aria-label="Email">
                <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#111"></circle>
                  <path fill="#fff" d="M18 22h28a4 4 0 014 4v12a4 4 0 01-4 4H18a4 4 0 01-4-4V26a4 4 0 014-4zm0 4l14 10 14-10H18zm28 12V28L32 38 18 28v10h28z"/>
                </svg>
              </a>

            </div>

            <div style="text-align:center;margin-top:14px;">
              <a class="vn-btn" href="/uploads/resume.pdf" target="_blank" rel="noopener">DOWNLOAD CV</a>
            </div>

            <div class="vn-line" style="margin-top:34px"></div>
            <div class="vn-footer">
              <div>2021 Copyrights - All Rights Reserved</div>
              <div>Van Nhat Minh Vo</div>
            </div>
          </div>
        </div>

  # (Tuỳ chọn) Nếu muốn có Publications ở trang riêng thì làm sau. Hiện tại trang home giống hình 2.
---
