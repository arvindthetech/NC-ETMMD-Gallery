// script.js

// ==================== YOUR GOOGLE DRIVE LINKS ====================
// Yahan apne saare photo links dalo (jo text file mein collect kiye the)
// ==================== FIXED GALLERY DATA WITH THUMBNAIL LINKS ====================
const galleryData = [
    // ========== INAUGURAL CEREMONY (ID: 1-25) ==========
    { id: 1, src: "https://drive.google.com/thumbnail?id=1JQis4Jxq9Y0-Fic8C4DWokIxFYt_meJK&sz=w1000", category: "inaugural" },
    { id: 2, src: "https://drive.google.com/thumbnail?id=1g6X4X_uYR9xUMIF7p4cLo7BLmH7vUg30&sz=w1000", category: "inaugural" },
    { id: 3, src: "https://drive.google.com/thumbnail?id=1b7KkPIKDYmLHXCSP2XYOtzv27lNgJOJq&sz=w1000", category: "inaugural" },
    { id: 4, src: "https://drive.google.com/thumbnail?id=1ax1FDWokaPLxxPIUQZTKDNIUHyZJAmzC&sz=w1000", category: "inaugural" },
    { id: 5, src: "https://drive.google.com/thumbnail?id=1-BFQHd9EXf1w9-itGshske8FRrhkGVwn&sz=w1000", category: "inaugural" },
    { id: 6, src: "https://drive.google.com/thumbnail?id=13MsXxRIvOpm_nNaTusdwHHjmp-QwWI8C&sz=w1000", category: "inaugural" },
    { id: 7, src: "https://drive.google.com/thumbnail?id=1aTDCOHgfNKuooczWc3QQfC3Dj6wZA5Ul&sz=w1000", category: "inaugural" },
    { id: 8, src: "https://drive.google.com/thumbnail?id=153K1ikp_68E2SDWKcR9CK47ozAu6gYQ3&sz=w1000", category: "inaugural" },
    { id: 9, src: "https://drive.google.com/thumbnail?id=1SFXJQWlkHIEKk6DI4UZ_xaLv3DwN49eb&sz=w1000", category: "inaugural" },
    { id: 10, src: "https://drive.google.com/thumbnail?id=1eCSXzkMN9UxHdJnef94MRCBEm197q6Fg&sz=w1000", category: "inaugural" },
    { id: 11, src: "https://drive.google.com/thumbnail?id=1-g3Ts9icC-nHVVy02CwvuAYuelcy-XAx&sz=w1000", category: "inaugural" },
    { id: 12, src: "https://drive.google.com/thumbnail?id=1UGhkmtLY5MB1BOOTwyLfOsElb74idgd2&sz=w1000", category: "inaugural" },
    { id: 13, src: "https://drive.google.com/thumbnail?id=1htSoi48kv9YmlZtV8jXxLzl0qqUYN_yJ&sz=w1000", category: "inaugural" },
    { id: 14, src: "https://drive.google.com/thumbnail?id=1j2Nv5qe3XyiKZE8FAve71YvE8XeRA88-&sz=w1000", category: "inaugural" },
    { id: 15, src: "https://drive.google.com/thumbnail?id=1bywsrzaNFD_gSWl-xrXPApVmzQiKTmpO&sz=w1000", category: "inaugural" },
    { id: 16, src: "https://drive.google.com/thumbnail?id=1kRzVrBWsFKBKJx5ibS_fQDpSFP9mkpie&sz=w1000", category: "inaugural" },
    { id: 17, src: "https://drive.google.com/thumbnail?id=15UWgEYk7Hy9Xedv5uU0p-1KlIj8JxM1y&sz=w1000", category: "inaugural" },
    { id: 18, src: "https://drive.google.com/thumbnail?id=1CwOQ3Dku69jw5Ws3tje48YwMaD-_7OHW&sz=w1000", category: "inaugural" },
    { id: 19, src: "https://drive.google.com/thumbnail?id=1hrWPZZnsxCKEWWRtAbXpaysubLIgldsj&sz=w1000", category: "inaugural" },
    { id: 20, src: "https://drive.google.com/thumbnail?id=1bxW_PcVB2kLQGaZnDtq92lAyp2MaIHcR&sz=w1000", category: "inaugural" },
    { id: 21, src: "https://drive.google.com/thumbnail?id=1qbpElsdtUAe5ea1yBFv6oZe-EFhWvLEH&sz=w1000", category: "inaugural" },
    { id: 22, src: "https://drive.google.com/thumbnail?id=1jAwNLJ5d0VyDZbNAON726aidZxs7vFjV&sz=w1000", category: "inaugural" },
    { id: 23, src: "https://drive.google.com/thumbnail?id=1gVSn2IdcD9a9n5H7fHXpnOigzV68gFGe&sz=w1000", category: "inaugural" },
    { id: 24, src: "https://drive.google.com/thumbnail?id=1AKs0zbZ7GAEfow-FR0fm_Pd8fAFv4ry3&sz=w1000", category: "inaugural" },
    { id: 25, src: "https://drive.google.com/thumbnail?id=1iSvubs9OqQll0jIyFJxzfQTjm7Dcks7B&sz=w1000", category: "inaugural" },

    // ========== SPEAKER SESSIONS (ID: 26-123) ==========
    { id: 26, src: "https://drive.google.com/thumbnail?id=1dFfVBMxoSl4GWjR1PBSK4R6q0YB8QFUp&sz=w1000", category: "speaker" },
    { id: 27, src: "https://drive.google.com/thumbnail?id=1lsZbOYTqxWFL3PE4mT9eboLJCC_eflCs&sz=w1000", category: "speaker" },
    { id: 28, src: "https://drive.google.com/thumbnail?id=1j78IDS6YZ8QFpVinbMm-qsX0SuEplt_x&sz=w1000", category: "speaker" },
    { id: 29, src: "https://drive.google.com/thumbnail?id=15EHLyV-q5j6Wco_ZZYUaTCZvkV8-__c3&sz=w1000", category: "speaker" },
    { id: 30, src: "https://drive.google.com/thumbnail?id=1S5eJ_AcebHETSJWP1GGk3NYJnH2nmtay&sz=w1000", category: "speaker" },
    { id: 31, src: "https://drive.google.com/thumbnail?id=1hPKrQjZ7AOScD6lo4H8C3naCBzUWY3j6&sz=w1000", category: "speaker" },
    { id: 32, src: "https://drive.google.com/thumbnail?id=1DbLqacHP-_8LMCzwNo4V-Ah6q2jDvQ1O&sz=w1000", category: "speaker" },
    { id: 33, src: "https://drive.google.com/thumbnail?id=1t1PAiAa3qhc56I8-amiSEnzx3rP1ohYr&sz=w1000", category: "speaker" },
    { id: 34, src: "https://drive.google.com/thumbnail?id=13OgiWkNNWrjYIWAobzldZYddcBIFEMEs&sz=w1000", category: "speaker" },
    { id: 35, src: "https://drive.google.com/thumbnail?id=1jzoqc8sQ2__5NPoUdO9T6YbwxIQrBMtX&sz=w1000", category: "speaker" },
    { id: 36, src: "https://drive.google.com/thumbnail?id=1bBbdRLyYH5WOzmw8BBHJt7OH60vbiXAb&sz=w1000", category: "speaker" },
    { id: 37, src: "https://drive.google.com/thumbnail?id=18UHIYbhWRQayKewm00V994cpVe7U0Bsg&sz=w1000", category: "speaker" },
    { id: 38, src: "https://drive.google.com/thumbnail?id=1XBdBH9t9DXmOGJu6fs3HPApiZNrHyAzW&sz=w1000", category: "speaker" },
    { id: 39, src: "https://drive.google.com/thumbnail?id=1dZlceMYw11GPEYEx2gFmVVAsYmTTEcxj&sz=w1000", category: "speaker" },
    { id: 40, src: "https://drive.google.com/thumbnail?id=1UBCFZ0xY_gKBs9Wi6OI8MTK4mqZ39ysv&sz=w1000", category: "speaker" },
    { id: 41, src: "https://drive.google.com/thumbnail?id=1eLEqCTsFbztygrUYORGtIoxXyJfacqYC&sz=w1000", category: "speaker" },
    { id: 42, src: "https://drive.google.com/thumbnail?id=1SM0-NRA7WcnRjwcJQjAJvu5ayKp0YRtx&sz=w1000", category: "speaker" },
    { id: 43, src: "https://drive.google.com/thumbnail?id=1qSXTvP08L7J9Bu8X8Fozh0QsAzEf4syo&sz=w1000", category: "speaker" },
    { id: 44, src: "https://drive.google.com/thumbnail?id=1kK4_IW4MMh6mcziSOhLS7CxRUsFZK96Z&sz=w1000", category: "speaker" },
    { id: 45, src: "https://drive.google.com/thumbnail?id=18ut4ldAbzWeEC2AcdPuOiWvs1C2ys5Xc&sz=w1000", category: "speaker" },
    { id: 46, src: "https://drive.google.com/thumbnail?id=1K5K5V-POB5iIGwdPOQxSSbJNcUuXkJX6&sz=w1000", category: "speaker" },
    { id: 47, src: "https://drive.google.com/thumbnail?id=1jZ4QxXSjJKfv3xlp7XuTDGFbSVqmAr_L&sz=w1000", category: "speaker" },
    { id: 48, src: "https://drive.google.com/thumbnail?id=1tM7NH0lBZzu2ZkV262g_0350rD6Dq_vP&sz=w1000", category: "speaker" },
    { id: 49, src: "https://drive.google.com/thumbnail?id=1lsOjAGjbSzsOmHEKFcrvjC1HCn_9hl_z&sz=w1000", category: "speaker" },
    { id: 50, src: "https://drive.google.com/thumbnail?id=1k8Tz7SSVxbuMZCVZcPjcyjYec-_K8yl2&sz=w1000", category: "speaker" },
    { id: 51, src: "https://drive.google.com/thumbnail?id=11_pCAkcKjZr26fazqUpngDd68nNKoCRY&sz=w1000", category: "speaker" },
    { id: 52, src: "https://drive.google.com/thumbnail?id=1Rcs6CykAQvH_nPLsi2plBEB9qnHlAlG7&sz=w1000", category: "speaker" },
    { id: 53, src: "https://drive.google.com/thumbnail?id=18K-h2rXe46vIFYnc3oalZWb7uQim8f3f&sz=w1000", category: "speaker" },
    { id: 54, src: "https://drive.google.com/thumbnail?id=1YvIsXYcqJENVwapA2gix7r8fL8dkLHws&sz=w1000", category: "speaker" },
    { id: 55, src: "https://drive.google.com/thumbnail?id=1elAkLAicqRuRkgPYptKLDR77VUTRWiog&sz=w1000", category: "speaker" },
    { id: 56, src: "https://drive.google.com/thumbnail?id=1qMaQCRS_HFcPzhmUe2CCHBDR2A3_KZbD&sz=w1000", category: "speaker" },
    { id: 57, src: "https://drive.google.com/thumbnail?id=1DG39rNYb-zZHfJ1CxNqSwTPCxH7-QP37&sz=w1000", category: "speaker" },
    { id: 58, src: "https://drive.google.com/thumbnail?id=1jYQMUcAQAPQJdqAM7ia8mWaVCTJGEA4O&sz=w1000", category: "speaker" },
    { id: 59, src: "https://drive.google.com/thumbnail?id=1xxR4TlteRRpPHZg2kgYWqLGShTRq0r6Z&sz=w1000", category: "speaker" },
    { id: 60, src: "https://drive.google.com/thumbnail?id=1wSz1ixvDR4mfcp7ZkJfAHJyBI4BXcP2t&sz=w1000", category: "speaker" },
    { id: 61, src: "https://drive.google.com/thumbnail?id=16mNOnkB2QxxP7SYas7TDHIFHRotWwFDR&sz=w1000", category: "speaker" },
    { id: 62, src: "https://drive.google.com/thumbnail?id=1xbNuVqedETMDthlLWNNfuYsyJzWmAV3h&sz=w1000", category: "speaker" },
    { id: 63, src: "https://drive.google.com/thumbnail?id=1bHYLqs4EuziDxfqNckJvKjyi3iRHijx-&sz=w1000", category: "speaker" },
    { id: 64, src: "https://drive.google.com/thumbnail?id=1M0ZIWM7lA6nSLVV009LJLdnqUPAGcItP&sz=w1000", category: "speaker" },
    { id: 65, src: "https://drive.google.com/thumbnail?id=1XiyEPLWe9bPNegH2mSH1dOW7Cg3EL2qb&sz=w1000", category: "speaker" },
    { id: 66, src: "https://drive.google.com/thumbnail?id=1fDjaqDz9Idz2kfrMBZEf-iCjchjx-P_c&sz=w1000", category: "speaker" },
    { id: 67, src: "https://drive.google.com/thumbnail?id=1n3_5rW4_BWQJgtM0PXZh6xthOFQHrCuj&sz=w1000", category: "speaker" },
    { id: 68, src: "https://drive.google.com/thumbnail?id=1jV-9juBcjj0yc57az6X_BBupNa0GqJxw&sz=w1000", category: "speaker" },
    { id: 69, src: "https://drive.google.com/thumbnail?id=1PRZZR50LR4L4Sa3iRPIS4-SX59e2KcTk&sz=w1000", category: "speaker" },
    { id: 70, src: "https://drive.google.com/thumbnail?id=1EYnUenBrhHHA1issi6MJIT95YN9WhKzG&sz=w1000", category: "speaker" },
    { id: 71, src: "https://drive.google.com/thumbnail?id=1XfyTwqaA8P_I9zT_ByVEmC-XY5Io5Dgz&sz=w1000", category: "speaker" },
    { id: 72, src: "https://drive.google.com/thumbnail?id=13Fd5iM7W31UpI-AwFp8ErBzfZ-fMOjkw&sz=w1000", category: "speaker" },
    { id: 73, src: "https://drive.google.com/thumbnail?id=1XFcAQX5Xy1aV3IiChUD4qAjxTbApntid&sz=w1000", category: "speaker" },
    { id: 74, src: "https://drive.google.com/thumbnail?id=1p1ZBMtKTSRcQjP7wgJuFLOfdbtpbaSyM&sz=w1000", category: "speaker" },
    { id: 75, src: "https://drive.google.com/thumbnail?id=1-D-rEuhAubbB5boLxxn7_qF7slTPeI4x&sz=w1000", category: "speaker" },
    { id: 76, src: "https://drive.google.com/thumbnail?id=15q6iJfiq8-7-p1cBHsZAuaoKiukVIsMU&sz=w1000", category: "speaker" },
    { id: 77, src: "https://drive.google.com/thumbnail?id=1PKMajHyd7O63-btw_OAmRjHetA-hKwsv&sz=w1000", category: "speaker" },
    { id: 78, src: "https://drive.google.com/thumbnail?id=1oF5Gb8o_w4EcRzBvjRRFNcMnFp4FxJYR&sz=w1000", category: "speaker" },
    { id: 79, src: "https://drive.google.com/thumbnail?id=17Ty9BAnrzV5LB2Nw5_TZ88CPpdbLM_Bu&sz=w1000", category: "speaker" },
    { id: 80, src: "https://drive.google.com/thumbnail?id=158BD-NjvW6SSx8oPgiCGqNJczesDGFiY&sz=w1000", category: "speaker" },
    { id: 81, src: "https://drive.google.com/thumbnail?id=1R6OqNbO6X52Q-QiAvYgEQ5i8x3PKu9Rx&sz=w1000", category: "speaker" },
    { id: 82, src: "https://drive.google.com/thumbnail?id=1pY7FAZl76uf4rHoFVCA-yyuD9LJt4yXg&sz=w1000", category: "speaker" },
    { id: 83, src: "https://drive.google.com/thumbnail?id=11FJ0Tj-cAPgp1kZ29P11zo9ENftmbGvF&sz=w1000", category: "speaker" },
    { id: 84, src: "https://drive.google.com/thumbnail?id=1lwvJg7VVxVSLVU4gZ5KF5TCRPuRkD5ag&sz=w1000", category: "speaker" },
    { id: 85, src: "https://drive.google.com/thumbnail?id=1K7DCIzjhszQNZ8-yNupe1BBNCeFMpq1J&sz=w1000", category: "speaker" },
    { id: 86, src: "https://drive.google.com/thumbnail?id=17mQAXlt5kqHYHYqRsXIgytm0z8iYLREO&sz=w1000", category: "speaker" },
    { id: 87, src: "https://drive.google.com/thumbnail?id=1jsJlAE6Geq4SjEjuAeUDug-vb1Ho7kR_&sz=w1000", category: "speaker" },
    { id: 88, src: "https://drive.google.com/thumbnail?id=1fxW9crR0ygbEtVUlXMvaF8q29pthKL25&sz=w1000", category: "speaker" },
    { id: 89, src: "https://drive.google.com/thumbnail?id=188H2hdaWx4GjsWtJ1mPJM8tDdkKfn10W&sz=w1000", category: "speaker" },
    { id: 90, src: "https://drive.google.com/thumbnail?id=1H-8MzYlzOx_Gbto0BvvYKX5OtLThB1yC&sz=w1000", category: "speaker" },
    { id: 91, src: "https://drive.google.com/thumbnail?id=173vSOKzxBn04uY5XQsJmkvM4g2APjQyt&sz=w1000", category: "speaker" },
    { id: 92, src: "https://drive.google.com/thumbnail?id=1kZZIZnjcgayXFzzznk3aE-qFqKRwoLu1&sz=w1000", category: "speaker" },
    { id: 93, src: "https://drive.google.com/thumbnail?id=1bEPIbQrOn8DnkYQvOD3siZPHtZeBW6P1&sz=w1000", category: "speaker" },
    { id: 94, src: "https://drive.google.com/thumbnail?id=10YBrFdIje0dt9h4mmTRInNGXDSKfHhlb&sz=w1000", category: "speaker" },
    { id: 95, src: "https://drive.google.com/thumbnail?id=1FI77CvUULEogVWHr1p3hXk1M3MstUyjk&sz=w1000", category: "speaker" },
    { id: 96, src: "https://drive.google.com/thumbnail?id=1Pt65pyeF_Cq5UcnoLWaf6WHQIC1hnwjr&sz=w1000", category: "speaker" },
    { id: 97, src: "https://drive.google.com/thumbnail?id=1c6vLvqWsMILHx0XDxijUEJ3elXNWYbqZ&sz=w1000", category: "speaker" },
    { id: 98, src: "https://drive.google.com/thumbnail?id=1R4kkCbJHEnnoKWwF1-rVORhrgp935z3n&sz=w1000", category: "speaker" },
    { id: 99, src: "https://drive.google.com/thumbnail?id=1LMGArwavyggAtFObdEOtVUGni5C7D4Tq&sz=w1000", category: "speaker" },
    { id: 100, src: "https://drive.google.com/thumbnail?id=19Y-Kj0JpqE1ADqfgM_dt0ukZ3F76WL6r&sz=w1000", category: "speaker" },
    { id: 101, src: "https://drive.google.com/thumbnail?id=1D3qsKNau7wt3BqQLJylKsNYioCrdAzqm&sz=w1000", category: "speaker" },
    { id: 102, src: "https://drive.google.com/thumbnail?id=1b1Ap7tmKUNybMmeUL4o3gBDgzFb4rB1b&sz=w1000", category: "speaker" },
    { id: 103, src: "https://drive.google.com/thumbnail?id=1bZxg1O0OZvZxc3bIbAVCxFwseRwAIxW5&sz=w1000", category: "speaker" },
    { id: 104, src: "https://drive.google.com/thumbnail?id=1A4nEjs3t0hIqP2U-fQFQEijZ3OdU1Pci&sz=w1000", category: "speaker" },
    { id: 105, src: "https://drive.google.com/thumbnail?id=1oh2zvIql9N60vw5mTemySao3x4k8dafn&sz=w1000", category: "speaker" },
    { id: 106, src: "https://drive.google.com/thumbnail?id=1s_nmaew2hmdqtFTd7RiDIpUUvKk9Q-gE&sz=w1000", category: "speaker" },
    { id: 107, src: "https://drive.google.com/thumbnail?id=1sYRm7QM5RSEDlKocPZu53gqePvNdHO3U&sz=w1000", category: "speaker" },
    { id: 108, src: "https://drive.google.com/thumbnail?id=1NZ_-aydBVV8wQP1xBwT71iMkmmtFd329&sz=w1000", category: "speaker" },
    { id: 109, src: "https://drive.google.com/thumbnail?id=1KOfq08rAjtGc6Y0NVo9D7-kp2RdYMUvZ&sz=w1000", category: "speaker" },
    { id: 110, src: "https://drive.google.com/thumbnail?id=1ObatAumOLM4Qy3NpTQiI0iyjS65vOQOF&sz=w1000", category: "speaker" },
    { id: 111, src: "https://drive.google.com/thumbnail?id=1s7M45D2Cj_Rzd83zOIwyutj5nZabTnML&sz=w1000", category: "speaker" },
    { id: 112, src: "https://drive.google.com/thumbnail?id=15EABIq3_ehiAR1FF5-GiOmi4bNKVCdi0&sz=w1000", category: "speaker" },
    { id: 113, src: "https://drive.google.com/thumbnail?id=1h_XiiYOeLIRwK25UdnPrOSij-fQgv4pq&sz=w1000", category: "speaker" },
    { id: 114, src: "https://drive.google.com/thumbnail?id=1rxY1Ew2v3Mj5muLphouFyXR8vdq-FJP6&sz=w1000", category: "speaker" },
    { id: 115, src: "https://drive.google.com/thumbnail?id=1y8xxXKZVg6rSUn8qIeVmkxD6rv8iBkSO&sz=w1000", category: "speaker" },
    { id: 116, src: "https://drive.google.com/thumbnail?id=1iJJ_qoXh7tTY3sicxxluuyjXmIjgQfFR&sz=w1000", category: "speaker" },
    { id: 117, src: "https://drive.google.com/thumbnail?id=1XTvid9Ijd51lnFrSiL7qqwu3f4cJ3DTl&sz=w1000", category: "speaker" },
    { id: 118, src: "https://drive.google.com/thumbnail?id=191gKbCDBjHA7m49QfAjumBrM93EVjCRa&sz=w1000", category: "speaker" },
    { id: 119, src: "https://drive.google.com/thumbnail?id=11szfWeIAOFJFX1PFNKuDXjYLTu-ETxSw&sz=w1000", category: "speaker" },
    { id: 120, src: "https://drive.google.com/thumbnail?id=1-cnpFrJSXHoHG9NUEOqQiGFEm0r-N-un&sz=w1000", category: "speaker" },
    { id: 121, src: "https://drive.google.com/thumbnail?id=1jWCtCIDnATG0tngnmFQiJoHUYoAltuSS&sz=w1000", category: "speaker" },
    { id: 122, src: "https://drive.google.com/thumbnail?id=1ybuLYLC7QHBSzJMfj4y8R69UGCH9PIJ5&sz=w1000", category: "speaker" },
    { id: 123, src: "https://drive.google.com/thumbnail?id=1GJOR_dKnlbCRjzmZmh1T8EaJ1Xq-8cKU&sz=w1000", category: "speaker" },
    
    // POSTER SESSIONS
    {
        id: 7,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_7",
        category: "poster"
    },
    {
        id: 8,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_8",
        category: "poster"
    },
    
    // ORAL PRESENTATIONS
    {
        id: 9,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_9",
        category: "oral"
    },
    {
        id: 10,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_10",
        category: "oral"
    },
    
    // VALEDICTORY CEREMONY
    {
        id: 11,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_11",
        category: "valedictory"
    },
    {
        id: 12,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_12",
        category: "valedictory"
    },
    
    // GROUP PHOTOS
    {
        id: 13,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_13",
        category: "group"
    },
    {
        id: 14,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_14",
        category: "group"
    },
    {
        id: 15,
        src: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_15",
        category: "group"
    }
];

// ==================== CONFIGURATION ====================
const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'inaugural', label: 'INAUGURAL' },
    { id: 'speaker', label: 'SPEAKER' },
    { id: 'poster', label: 'POSTER' },
    { id: 'oral', label: 'ORAL' },
    { id: 'valedictory', label: 'VALEDICTORY' },
    { id: 'group', label: 'GROUP' }
];

// Category icons (simple geometric shapes)
const categoryIcons = {
    inaugural: '◉',
    speaker: '◆',
    poster: '■',
    oral: '▲',
    valedictory: '⬟',
    group: '⬤'
};

// ==================== GLOBAL VARIABLES ====================
let currentFilter = 'all';
let currentImages = [];
let lightboxIndex = 0;

// ==================== LOAD COMPONENTS ====================
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerHtml;
        
        // Load footer
        const footerResponse = await fetch('footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerHtml;
        
        // Initialize everything after components are loaded
        initCarousel();
        renderFilters();
        renderGallery(galleryData);
        renderTimeline();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// ==================== HEADER CAROUSEL ====================
function initCarousel() {
    // Get 5 random images for carousel
    const carouselImages = [...galleryData]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    
    const header = document.getElementById('header');
    
    carouselImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${img.src})`;
        header.appendChild(slide);
    });

    // Rotate slides every 5 seconds
    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }, 5000);
}

// ==================== FILTER FUNCTIONS ====================
function renderFilters() {
    const filterContainer = document.getElementById('filterContainer');
    
    filterContainer.innerHTML = categories.map(cat => {
        const count = cat.id === 'all' ? galleryData.length : 
            galleryData.filter(img => img.category === cat.id).length;
        
        return `
            <button class="filter-btn ${currentFilter === cat.id ? 'active' : ''}" data-filter="${cat.id}">
                ${cat.label}
                <span class="count">${count}</span>
            </button>
        `;
    }).join('');

    // Add event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            currentFilter = filter;
            renderFilters(); // Re-render to update active state
            renderGallery(filterImages(filter));
        });
    });
}

function filterImages(category) {
    if (category === 'all') return galleryData;
    return galleryData.filter(img => img.category === category);
}

// ==================== GALLERY FUNCTIONS ====================
function renderGallery(images) {
    currentImages = images;
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (images.length === 0) {
        galleryGrid.innerHTML = '<div class="loading">No images in this category</div>';
        return;
    }

    galleryGrid.innerHTML = images.map((img, index) => {
        // Global index for consistent numbering across filters
        const globalIndex = galleryData.findIndex(item => item.id === img.id) + 1;
        
        return `
            <div class="gallery-item" data-index="${index}">
                <img src="${img.src}" alt="Gallery image ${globalIndex}" loading="lazy">
                <div class="count-badge">${globalIndex}</div>
                <div class="gallery-item-overlay">
                    <p>#${globalIndex}</p>
                </div>
            </div>
        `;
    }).join('');

    // Add click listeners
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openLightbox(index);
        });
    });
}

// ==================== TIMELINE FUNCTIONS ====================
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    const mainCategories = categories.filter(c => c.id !== 'all');
    
    timeline.innerHTML = mainCategories.map((cat, idx) => {
        const count = galleryData.filter(img => img.category === cat.id).length;
        return `
            ${idx > 0 ? '<div class="timeline-line"></div>' : ''}
            <div class="timeline-point" data-filter="${cat.id}">
                <span class="point-icon">${categoryIcons[cat.id]}</span>
                <span class="point-label">${cat.label}</span>
                <span class="point-count">${count}</span>
            </div>
        `;
    }).join('');

    // Add click listeners
    document.querySelectorAll('.timeline-point').forEach(point => {
        point.addEventListener('click', function() {
            const filter = this.dataset.filter;
            currentFilter = filter;
            renderFilters();
            renderGallery(filterImages(filter));
            
            // Scroll to gallery
            document.querySelector('.gallery-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
}

// ==================== LIGHTBOX FUNCTIONS ====================
function openLightbox(index) {
    lightboxIndex = index;
    updateLightboxContent();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
    const img = currentImages[lightboxIndex];
    const globalIndex = galleryData.findIndex(item => item.id === img.id) + 1;
    const totalCurrent = currentImages.length;
    
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxCaption').innerHTML = 
        `Image ${globalIndex} of ${galleryData.length}`;
}

function closeLightboxHandler() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    lightboxIndex = (lightboxIndex + 1) % currentImages.length;
    updateLightboxContent();
}

function prevImage() {
    lightboxIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxContent();
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightboxHandler();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    
    // Lightbox controls (will work after components are loaded)
    setTimeout(() => {
        document.getElementById('closeLightbox')?.addEventListener('click', closeLightboxHandler);
        document.getElementById('prevImage')?.addEventListener('click', prevImage);
        document.getElementById('nextImage')?.addEventListener('click', nextImage);
        
        document.getElementById('lightbox')?.addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) closeLightboxHandler();
        });
    }, 500);
});

// ==================== INITIALIZATION ====================
// Note: Most initialization happens after components load