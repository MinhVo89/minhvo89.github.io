---
title: ""
date: 2026-01-01
type: landing

sections:
  - block: markdown
    id: home
    content:
      title: ""
      text: |-
        <style>
          .vn-page{max-width:980px;margin:0 auto;padding:56px 18px 24px}
          .vn-hero{display:grid;grid-template-columns:260px 1fr;gap:44px;align-items:center}
          .vn-avatar{
            width:240px;height:240px;object-fit:cover;border-radius:28px;
            box-shadow:0 14px 36px rgba(0,0,0,.14)
          }
          .vn-name{
            font-size:64px;line-height:1.02;margin:0;
            color:#7a7a7a;font-weight:300;letter-spacing:.2px
          }
          .vn-role{
            font-size:22px;margin:12px 0 10px;color:#9a9a9a;font-style:italic
          }
          .vn-divider{height:1px;background:#d6d6d6;margin:18px 0 14px}
          .vn-tags{font-size:14px;color:#9a9a9a;margin:0;letter-spacing:.2px}
          .vn-bio{font-size:15px;color:#7b7b7b;line-height:1.75;margin:18px 0 0;max-width:640px}

          .vn-contact-head{display:flex;align-items:center;gap:16px;margin-top:34px}
          .vn-contact-title{font-size:18px;color:#9a9a9a;letter-spacing:.9px;font-weight:700;margin:0}
          .vn-contact-line{flex:1;height:1px;background:#d6d6d6}

          .vn-icons{display:flex;gap:26px;align-items:center;justify-content:center;flex-wrap:wrap;margin:26px 0 18px}
          .vn-ic{
            width:66px;height:66px;border-radius:16px;
            display:inline-flex;align-items:center;justify-content:center;
            transition:.15s transform ease, .15s filter ease;
            filter:grayscale(0);
          }
          .vn-ic:hover{transform:translateY(-2px);filter:brightness(.95)}
          .vn-ic svg{width:60px;height:60px;display:block}

          .vn-btnwrap{text-align:center;margin-top:14px}
          .vn-btn{
            display:inline-flex;align-items:center;justify-content:center;
            padding:16px 44px;border-radius:30px;background:#cfcfcf;
            color:#fff;text-decoration:none;font-weight:700;letter-spacing:.5px;
            text-transform:uppercase;font-size:13px
          }
          .vn-btn:hover{background:#bdbdbd}

          .vn-footer{
            display:flex;justify-content:space-between;align-items:center;
            margin-top:34px;color:#9a9a9a;font-size:13px
          }

          /* Make it look like Eilidh: lots of white space + centered */
          .vn-center{display:flex;flex-direction:column;align-items:center}
          .vn-topline{height:1px;background:#d6d6d6;margin:22px 0 0}

          @media (max-width:860px){
            .vn-hero{grid-template-columns:1fr;justify-items:center;text-align:center}
            .vn-name{font-size:54px}
            .vn-bio{max-width:740px}
            .vn-footer{flex-direction:column;gap:8px}
          }
        </style>

        <div class="vn-page">

          <div class="vn-hero">
            <img class="vn-avatar" src="/media/authors/me/avatar.jpg" alt="Van Nhat Minh Vo" />

            <div class="vn-center" style="align-items:flex-start;">
              <h1 class="vn-name">Van Nhat<br/>Minh Vo</h1>
              <div class="vn-role">Imaging Scientist</div>
              <div class="vn-divider" style="width:100%"></div>
              <p class="vn-tags">MRI data processing and analysis | Neuroimaging | Cardiovascular imaging</p>

              <p class="vn-bio">
                Imaging Scientist at <b>King’s College London (IoPPN), Department of Neuroimaging</b>.
                Working on <b>preclinical MRI</b> across <b>neuro</b> and <b>cardiovascular</b> applications,
                with an emphasis on <b>quantitative biomarkers</b> and <b>reproducible pipelines</b>.
              </p>
            </div>
          </div>

          <div class="vn-contact-head">
            <div class="vn-contact-title">CONTACT ME</div>
            <div class="vn-contact-line"></div>
          </div>

          <div class="vn-icons">
            <!-- ORCID -->
            <a class="vn-ic" href="https://orcid.org/0000-0003-3306-5006" target="_blank" rel="noopener" aria-label="ORCID">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#a6ce39"></circle>
                <text x="32" y="40" text-anchor="middle" font-size="22" font-family="Arial, Helvetica, sans-serif" fill="#fff">iD</text>
              </svg>
            </a>

            <!-- Google Scholar -->
            <a class="vn-ic" href="https://scholar.google.com/citations?user=ImwA5u0AAAAJ&hl=vi" target="_blank" rel="noopener" aria-label="Google Scholar">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#3a3a3a"></circle>
                <path d="M10 26l22-10 22 10-22 10-22-10zm7 8v8c0 6 30 6 30 0v-8l-15 7-15-7z" fill="#fff"/>
              </svg>
            </a>

            <!-- GitHub -->
            <a class="vn-ic" href="https://github.com/MinhVo89" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#3a3a3a"></circle>
                <path fill="#fff" d="M32 14c-10 0-18 8-18 18 0 8 5 15 12 17 1 0 2-1 2-2v-4c-5 1-6-2-6-2-1-2-2-3-2-3-2-1 0-1 0-1 2 0 3 2 3 2 2 3 5 2 6 2 0-2 1-3 2-3-4 0-8-2-8-9 0-2 1-4 2-5 0-1-1-3 0-5 0 0 2 0 5 2 1-1 3-1 4-1s3 0 4 1c3-2 5-2 5-2 1 2 0 4 0 5 1 1 2 3 2 5 0 7-4 9-8 9 1 1 2 2 2 4v6c0 1 1 2 2 2 7-2 12-9 12-17 0-10-8-18-18-18z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a class="vn-ic" href="https://www.linkedin.com/in/minh-vo-778323120/?originalSubdomain=uk" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#3a3a3a"></circle>
                <path fill="#fff" d="M20 26h6v20h-6V26zm3-10a4 4 0 110 8 4 4 0 010-8zm11 10h6v3c1-2 3-4 7-4 6 0 9 4 9 10v11h-6V36c0-3-1-6-4-6s-5 2-5 6v10h-6V26z"/>
              </svg>
            </a>

            <!-- Email -->
            <a class="vn-ic" href="mailto:minhvo89@gmail.com" aria-label="Email">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#3a3a3a"></circle>
                <path fill="#fff" d="M18 22h28a4 4 0 014 4v12a4 4 0 01-4 4H18a4 4 0 01-4-4V26a4 4 0 014-4zm0 4l14 10 14-10H18zm28 12V28L32 38 18 28v10h28z"/>
              </svg>
            </a>
          </div>

          <div class="vn-btnwrap">
            <a class="vn-btn" href="/uploads/resume.pdf" target="_blank" rel="noopener">Download CV</a>
          </div>

          <div class="vn-divider" style="margin-top:34px"></div>

          <div class="vn-footer">
            <div>2021 Copyrights - All Rights Reserved</div>
            <div>Van Nhat Minh Vo</div>
          </div>

        </div>
    design:
      columns: "1"
---
