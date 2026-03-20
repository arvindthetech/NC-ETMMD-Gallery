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
    
    
    // ========== ORAL AND POSTER SESSIONS (ID: 124 onwards) ==========
    
    { id: 124, src: "https://drive.google.com/thumbnail?id=1X5_AnZre9mVdhLCIfOb4dhST9Ag81m-b&sz=w1000", category: "oral_poster" },
    { id: 125, src: "https://drive.google.com/thumbnail?id=1-5NPCjSbK0kg_OKsBlceheIkibxaSRdb&sz=w1000", category: "oral_poster" },
    { id: 126, src: "https://drive.google.com/thumbnail?id=1e7NaDJY_Duy6BU7KtePfkIsfXPHQ0pcc&sz=w1000", category: "oral_poster" },
    { id: 127, src: "https://drive.google.com/thumbnail?id=1T6iQto2s6RmpTYO6dxRcoH9yh7ce1scG&sz=w1000", category: "oral_poster" },
    { id: 128, src: "https://drive.google.com/thumbnail?id=1rQuXZ3635k1YaaIPhsW5Y-IO4L5U7JHK&sz=w1000", category: "oral_poster" },
    { id: 129, src: "https://drive.google.com/thumbnail?id=1CooLG1Dym_QurkMS6khcTnh1SU2BDVq3&sz=w1000", category: "oral_poster" },
    { id: 130, src: "https://drive.google.com/thumbnail?id=1X8lTrjbyxxNB9rxxPC5Mv5OZsPtrhs1Z&sz=w1000", category: "oral_poster" },
    { id: 131, src: "https://drive.google.com/thumbnail?id=1cPTC3mWzhGffq6eFhgGzSodt_AdejXZv&sz=w1000", category: "oral_poster" },
    { id: 132, src: "https://drive.google.com/thumbnail?id=1icAbu36i2GbTGGgu4fPa_OiwajUP2Ig5&sz=w1000", category: "oral_poster" },
    { id: 133, src: "https://drive.google.com/thumbnail?id=1EdYfK-CdqryKOboKxrIsVm3eL1KRKzXK&sz=w1000", category: "oral_poster" },
    { id: 134, src: "https://drive.google.com/thumbnail?id=1qg2FDMJ35FvQMLq84W-wZm8HfRbXIP03&sz=w1000", category: "oral_poster" },
    { id: 135, src: "https://drive.google.com/thumbnail?id=1WQva7YHm-ZXWKuzIsOk6wtqvU7sPiUfI&sz=w1000", category: "oral_poster" },
    { id: 137, src: "https://drive.google.com/thumbnail?id=1yZjltV4SRft4afHDM-EGxNQR_AHDWkRB&sz=w1000", category: "oral_poster" },
    { id: 136, src: "https://drive.google.com/thumbnail?id=17kJM92SQDJYHoklI6lfJfSm9PW1fOchh&sz=w1000", category: "oral_poster" },
    { id: 138, src: "https://drive.google.com/thumbnail?id=1R9qLFiyNkgYX_GkHWqkLEHd_JUFTn6C8&sz=w1000", category: "oral_poster" },
    { id: 139, src: "https://drive.google.com/thumbnail?id=10DTsyIAMT59X4NXFCX7W2KIY0pUibAkQ&sz=w1000", category: "oral_poster" },
    { id: 140, src: "https://drive.google.com/thumbnail?id=1I1pKo0wcyHd40LiO4W4QIirkZyFMD2kZ&sz=w1000", category: "oral_poster" },
    { id: 141, src: "https://drive.google.com/thumbnail?id=15ScEgeRzTWHHB7VZ76w9YoidIq9FDxlO&sz=w1000", category: "oral_poster" },
    { id: 142, src: "https://drive.google.com/thumbnail?id=1rTid4XEGq26ElZwCt841DJVrv8ZyAxQq&sz=w1000", category: "oral_poster" },
    { id: 143, src: "https://drive.google.com/thumbnail?id=1gAQxqjZmpUHBjiWmb01QkJ_K568eH4KZ&sz=w1000", category: "oral_poster" },
    { id: 144, src: "https://drive.google.com/thumbnail?id=1ZvCugjBAqqQX3RyCkjry4hsh7VaXaeko&sz=w1000", category: "oral_poster" },
    { id: 145, src: "https://drive.google.com/thumbnail?id=1Vz1nOUxDi8kp1Fmu_hV5Rx5jIkQP1v76&sz=w1000", category: "oral_poster" },
    { id: 146, src: "https://drive.google.com/thumbnail?id=1uMTP3nUzrS0A4VXhtzD3PwsYz8vWaH_9&sz=w1000", category: "oral_poster" },
    { id: 147, src: "https://drive.google.com/thumbnail?id=1ZjCVltMD3sc8pmkJGRhCPK2oU6PJsyrn&sz=w1000", category: "oral_poster" },
    { id: 148, src: "https://drive.google.com/thumbnail?id=1GRZZiLAz5k-MjURL7i4xtcTndbVqyAi5&sz=w1000", category: "oral_poster" },
    { id: 149, src: "https://drive.google.com/thumbnail?id=1uFg0ifOFtPXlkQIheWogqrYOIZHcU6CU&sz=w1000", category: "oral_poster" },
    { id: 150, src: "https://drive.google.com/thumbnail?id=1YdNtyEBLwv1IIkhnevpcINxw7ox7lyQH&sz=w1000", category: "oral_poster" },
    { id: 151, src: "https://drive.google.com/thumbnail?id=1nWRMHzTTCBqsV3awKU8OJJ7snMeb7mCT&sz=w1000", category: "oral_poster" },
    { id: 152, src: "https://drive.google.com/thumbnail?id=1cuRYsmmRYHnGGB1AYscq3a-AFAe4DJQL&sz=w1000", category: "oral_poster" },
    { id: 153, src: "https://drive.google.com/thumbnail?id=12yvrciuTHGFjClqrnXhkuqe0nc1WJPZd&sz=w1000", category: "oral_poster" },
    { id: 154, src: "https://drive.google.com/thumbnail?id=1AwydDB8bugK7lNAO8eSmZcFkoVk7s5FH&sz=w1000", category: "oral_poster" },
    { id: 155, src: "https://drive.google.com/thumbnail?id=1ebjYzqUY2EpJ96CF8MFDda39zsgilZK4&sz=w1000", category: "oral_poster" },
    { id: 156, src: "https://drive.google.com/thumbnail?id=1_7z8NnIJAIv8k0mimiRHawYdHT1t6Sss&sz=w1000", category: "oral_poster" },
    { id: 157, src: "https://drive.google.com/thumbnail?id=1IDw009XJfIo9UylFlSn9FwwSVhSLEGGb&sz=w1000", category: "oral_poster" },
    { id: 158, src: "https://drive.google.com/thumbnail?id=1wXgNdGNf3EIlJ3R_d7BlHH7WGeymjXxD&sz=w1000", category: "oral_poster" },
    { id: 159, src: "https://drive.google.com/thumbnail?id=1UM-Bnmwv4jlAjkMAhSlkQQwmM1rBWvPP&sz=w1000", category: "oral_poster" },
    { id: 160, src: "https://drive.google.com/thumbnail?id=1PlsUyeCAl80JkaRilJks3OYOVfxiW6Ge&sz=w1000", category: "oral_poster" },
    { id: 161, src: "https://drive.google.com/thumbnail?id=1dODSLQe_ZYZUXJjzN_ljWItM0FpUvIYL&sz=w1000", category: "oral_poster" },
    { id: 162, src: "https://drive.google.com/thumbnail?id=1IoM4soBFBGVsd1XLHpPPy3T6kNfaPdDG&sz=w1000", category: "oral_poster" },
    { id: 163, src: "https://drive.google.com/thumbnail?id=1bSbORFXhbIa3Aw6iPv43h6Xvm_WqgXrj&sz=w1000", category: "oral_poster" },
    { id: 164, src: "https://drive.google.com/thumbnail?id=1aXO0rsX2u_sxuqdfgkROjCZoFiHLOpld&sz=w1000", category: "oral_poster" },
    { id: 165, src: "https://drive.google.com/thumbnail?id=18AlFqjOJ8nMqa_8K8OFfJS-mG28V77wV&sz=w1000", category: "oral_poster" },
    { id: 166, src: "https://drive.google.com/thumbnail?id=1MuWnAYuWAZOdr4T1E-ShASlZKv6RTM8A&sz=w1000", category: "oral_poster" },
    { id: 167, src: "https://drive.google.com/thumbnail?id=1y46dJMF_GmnUQ2mhO_UN8KrQwS963pQZ&sz=w1000", category: "oral_poster" },
    { id: 168, src: "https://drive.google.com/thumbnail?id=1XE5T_nAKxCRoGx-BqZkxxPUXVa06RrgG&sz=w1000", category: "oral_poster" },
    { id: 169, src: "https://drive.google.com/thumbnail?id=1qKoXbkAWerCBL_Vxk9JmXCcXUmcTaYBr&sz=w1000", category: "oral_poster" },
    { id: 170, src: "https://drive.google.com/thumbnail?id=1Rd4KhUYdeKiy5glYz3_l56zQGnVV8bKe&sz=w1000", category: "oral_poster" },
    { id: 171, src: "https://drive.google.com/thumbnail?id=1BzgJY6dWuWaNKaAx9pTptt-UDkol-vsY&sz=w1000", category: "oral_poster" },
    { id: 172, src: "https://drive.google.com/thumbnail?id=1__41qwQmGHjt0CsaIWb70L_hdzlIMDBr&sz=w1000", category: "oral_poster" },
    
    // ========== VALEDICTORY CEREMONY (ID: 173 onwards) ==========
    { id: 173, src: "https://drive.google.com/thumbnail?id=1rKpdh3sW2-HGIXvsS3ve4VNUOTI3QEB5&sz=w1000", category: "valedictory" },
    { id: 174, src: "https://drive.google.com/thumbnail?id=1RYiP-wxR4e406zoPwdD_MJnTZW6OsZht&sz=w1000", category: "valedictory" },
    { id: 175, src: "https://drive.google.com/thumbnail?id=1-Mc9p6wkCSJam8sBo9_WnPHng8uPxchk&sz=w1000", category: "valedictory" },
    { id: 176, src: "https://drive.google.com/thumbnail?id=16FDS7cWvy7eEoPdAOHtD5Y00URRY0DgF&sz=w1000", category: "valedictory" },
    { id: 177, src: "https://drive.google.com/thumbnail?id=1AD30wYw8uPEPZPRIZQMZ6mr_aPTQS-lU&sz=w1000", category: "valedictory" },
    { id: 178, src: "https://drive.google.com/thumbnail?id=17402oNxLve1DxJEN_ZVgy6z3gYS00ZoK&sz=w1000", category: "valedictory" },
    { id: 179, src: "https://drive.google.com/thumbnail?id=1NojrZbY38erqO9NlBMYKCH3CD6AQTJVh&sz=w1000", category: "valedictory" },
    { id: 180, src: "https://drive.google.com/thumbnail?id=1qPS4_nmg2aCr97k8kM2Lry3PppWbY-1D&sz=w1000", category: "valedictory" },
    { id: 181, src: "https://drive.google.com/thumbnail?id=18mvtdSPa-9vg26uJLKWZElqQKOqBU6jz&sz=w1000", category: "valedictory" },
    { id: 182, src: "https://drive.google.com/thumbnail?id=1myBTzXUwSKmLXs6QOyumd0d6iKdWO9bX&sz=w1000", category: "valedictory" },
    { id: 183, src: "https://drive.google.com/thumbnail?id=18TcZ0w9fl1zYmcyTJ19y0k80qrqQR1fc&sz=w1000", category: "valedictory" },
    { id: 184, src: "https://drive.google.com/thumbnail?id=1hM5uyrj247LtC-x_jJv3yBB8-KcSHY3L&sz=w1000", category: "valedictory" },
    { id: 185, src: "https://drive.google.com/thumbnail?id=1lqlV1eC6obyAgiM5nQLG8jaH-qUi26Ml&sz=w1000", category: "valedictory" },
    { id: 186, src: "https://drive.google.com/thumbnail?id=1YCwxhNQ1j8u7soCL2OaKVs8cEaEsiRLX&sz=w1000", category: "valedictory" },
    { id: 187, src: "https://drive.google.com/thumbnail?id=16tWbLOTCtQ_cCll4_014l73PbvXhQbjr&sz=w1000", category: "valedictory" },
    { id: 188, src: "https://drive.google.com/thumbnail?id=1nzD_2Xv8z1RpwGV7zXVD187b7VprVMkZ&sz=w1000", category: "valedictory" },
    { id: 189, src: "https://drive.google.com/thumbnail?id=1yUIYys4HLC9L95yViVDwCLtBCwabe0eI&sz=w1000", category: "valedictory" },
    { id: 190, src: "https://drive.google.com/thumbnail?id=10nw36oTJieinJQTu7GObsWBAxu1Bnt3n&sz=w1000", category: "valedictory" },
    { id: 191, src: "https://drive.google.com/thumbnail?id=1XVEJUg3p8QNKdM9tWED6J-E01IheqdwO&sz=w1000", category: "valedictory" },
    { id: 192, src: "https://drive.google.com/thumbnail?id=1QZ5czmYfQWRoDDsLt1-jMCofmRsq4HhL&sz=w1000", category: "valedictory" },
    { id: 193, src: "https://drive.google.com/thumbnail?id=1Jl8z2BxaD4a0mlx31f7yY8IlY31p4CQT&sz=w1000", category: "valedictory" },
    { id: 194, src: "https://drive.google.com/thumbnail?id=1F_ZWPSvT9NYagEG48nL1eeNmLRpvBIQ6&sz=w1000", category: "valedictory" },
    { id: 195, src: "https://drive.google.com/thumbnail?id=1L_knLSr93waO9EpSKqvGgGQB4vpWd2cO&sz=w1000", category: "valedictory" },
    { id: 196, src: "https://drive.google.com/thumbnail?id=1ev9Zcq1NZDPCDep-Dr79dSht4c0tN1Eq&sz=w1000", category: "valedictory" },
    { id: 197, src: "https://drive.google.com/thumbnail?id=1XMHNlBUlsOnnqdHHv3lnAI2YHAdETPMa&sz=w1000", category: "valedictory" },
    

    // ========== GROUP PHOTOS (ID: 198 onwards) ==========
    { id: 198, src: "https://drive.google.com/thumbnail?id=1HRfqRFEudIyClg7h9jEuoGsVpPH5yY89&sz=w1000", category: "group" },
    { id: 199, src: "https://drive.google.com/thumbnail?id=1snueSR5YsWQ6Hqqmb4TpOXeXXi0IzhaT&sz=w1000", category: "group" },
    { id: 200, src: "https://drive.google.com/thumbnail?id=1bI0ZsAgc3T6emgLXCVZoj_Nafu3kxhHY&sz=w1000", category: "group" },
    { id: 201, src: "https://drive.google.com/thumbnail?id=1GnxUXkkh3idnM-rc7dbwDVNxShxwAwYQ&sz=w1000", category: "group" },
    { id: 202, src: "https://drive.google.com/thumbnail?id=1cJ5WlNYrb_iYDZofPLvW50ZU1vG_6qSK&sz=w1000", category: "group" },
    { id: 203, src: "https://drive.google.com/thumbnail?id=1fj9-tG8fUxKnlZki9hQDE4A-XpcsjNvT&sz=w1000", category: "group" },
    { id: 204, src: "https://drive.google.com/thumbnail?id=1cEZ4N_QqQMv9fAkxF8XgoYNb0GyfxxO2&sz=w1000", category: "group" },
    { id: 205, src: "https://drive.google.com/thumbnail?id=1dajXFpduUlD2Jsep6A8ih15Ev3zXlpWL&sz=w1000", category: "group" },
    { id: 206, src: "https://drive.google.com/thumbnail?id=1na-qqIZ4qi3aX4l2-tQLFohMt9dHF8vr&sz=w1000", category: "group" },
    { id: 207, src: "https://drive.google.com/thumbnail?id=1OG3VplKUbPcTe8MDP0Og9mmwRYbJaCd2&sz=w1000", category: "group" },
    { id: 208, src: "https://drive.google.com/thumbnail?id=1CB-c-68AkycQdCN-8yy_yPvfhLBNYkGj&sz=w1000", category: "group" },
    { id: 209, src: "https://drive.google.com/thumbnail?id=1VRB6qsSWiSWj3mJR-hhTpVihm13UE64-&sz=w1000", category: "group" },
    { id: 210, src: "https://drive.google.com/thumbnail?id=188gkvMbQLek3S08bSByIhMf_ZRLZeowF&sz=w1000", category: "group" },
    { id: 211, src: "https://drive.google.com/thumbnail?id=1b2jkFqIXcrXWJQxTKd7hnbfQx2txBqGU&sz=w1000", category: "group" },
    { id: 212, src: "https://drive.google.com/thumbnail?id=1f0sZeSOlysBvNQWAo-G7rbjZ9ZMcQngK&sz=w1000", category: "group" },
    { id: 213, src: "https://drive.google.com/thumbnail?id=1jD_0cfBba9b0eP3CbBiDILLboBHaB5_S&sz=w1000", category: "group" },
    { id: 214, src: "https://drive.google.com/thumbnail?id=11NO-zJVcx8lpnTn939xk5tFJ84FUxJVn&sz=w1000", category: "group" },
    { id: 215, src: "https://drive.google.com/thumbnail?id=1ao9d6hEOuiZSif6NHqqnEH2WP_dOVhnN&sz=w1000", category: "group" },
    { id: 216, src: "https://drive.google.com/thumbnail?id=14LZNZYSEQRGeofsFgrJvMn-glxPGdYb7&sz=w1000", category: "group" },
    { id: 217, src: "https://drive.google.com/thumbnail?id=1DfpwOHK-jGZgCDhcJkdEp9DZx7OnyryZ&sz=w1000", category: "group" },
    { id: 218, src: "https://drive.google.com/thumbnail?id=1UX-EdovZzA7VKmVhPAtzqMJB_B4kpG3G&sz=w1000", category: "group" },
    { id: 219, src: "https://drive.google.com/thumbnail?id=1cB0t6D28tEv7skc9eWAYio_73yvDTPm4&sz=w1000", category: "group" },
    { id: 220, src: "https://drive.google.com/thumbnail?id=1sIakTYf9dMU5qM9qBBQAvgVXZRtm8tnY&sz=w1000", category: "group" },
    { id: 221, src: "https://drive.google.com/thumbnail?id=1AIQFYlqs2F30GERri1qeEU1r72oRFasK&sz=w1000", category: "group" },
    { id: 222, src: "https://drive.google.com/thumbnail?id=1LUbWkiIk5487xESxq0Zz6tW_uFXqsDb5&sz=w1000", category: "group" },
    { id: 223, src: "https://drive.google.com/thumbnail?id=1VvVnsaizGzD365x7G7ZsL96QScoM3mNS&sz=w1000", category: "group" },
    { id: 224, src: "https://drive.google.com/thumbnail?id=1ZMSNaiSF9NS14avAceE3_ze5VCdMFB2F&sz=w1000", category: "group" },
    { id: 225, src: "https://drive.google.com/thumbnail?id=1Fpvb1A29OJg1hdU6ZHdsauIjLDNsBztb&sz=w1000", category: "group" },
    { id: 226, src: "https://drive.google.com/thumbnail?id=1h4kDTQK1t6LlQXRz-Ngj1T1L8WVSD4UU&sz=w1000", category: "group" },
    { id: 227, src: "https://drive.google.com/thumbnail?id=1IjfIBEBvjT_cssMsznFVc08hbEpTx47a&sz=w1000", category: "group" },
    { id: 228, src: "https://drive.google.com/thumbnail?id=1oT3yyekVDHa4G_9HO0EFIoWeEPgLdHxG&sz=w1000", category: "group" },
    { id: 229, src: "https://drive.google.com/thumbnail?id=1i78OECObf4CkSofLVCoDH9RE3fM_UPFC&sz=w1000", category: "group" },
    { id: 230, src: "https://drive.google.com/thumbnail?id=1I1tzcadaOA8OgtIUjhgfZQg2cxyNcgvK&sz=w1000", category: "group" },
    { id: 231, src: "https://drive.google.com/thumbnail?id=1IXtJK4on3MgMhVRCRqUlbOXaT2237CYr&sz=w1000", category: "group" },

    // ========== MEMORY LANE - NC-ETMMD-26 (ID: 232 onwards) ==========
    { id: 232, src: "https://drive.google.com/thumbnail?id=1KAAGB0EEeFm0lBnuGM8ATp3frQR2OkUu&sz=w1000", category: "memory" },
    { id: 233, src: "https://drive.google.com/thumbnail?id=1URyFXtSE7ZU4XJRTQNXn6GlIhjeNqVGO&sz=w1000", category: "memory" },
    { id: 234, src: "https://drive.google.com/thumbnail?id=1d6HiXugLu55Zwp6k93659Cu_aH9Upx0A&sz=w1000", category: "memory" },
    { id: 235, src: "https://drive.google.com/thumbnail?id=1zqK3xXkddPV89eg0xG8StuYKKr3KpjVI&sz=w1000", category: "memory" },
    { id: 236, src: "https://drive.google.com/thumbnail?id=1-tXNzEIStC7aSDpucY3JN8-xsUuWrp3q&sz=w1000", category: "memory" },
    { id: 237, src: "https://drive.google.com/thumbnail?id=106awlFANlMnMSNi9fhG63HvA4ZXAh4dY&sz=w1000", category: "memory" },
    { id: 238, src: "https://drive.google.com/thumbnail?id=1AAPC64D5Fa2yDnKZOo3tLMlvBpggQmrD&sz=w1000", category: "memory" },
    { id: 239, src: "https://drive.google.com/thumbnail?id=1yTjPm8qXyu3F-rlHWOAozNmkppE3XTck&sz=w1000", category: "memory" },
    { id: 240, src: "https://drive.google.com/thumbnail?id=1Oaese-_vY6o04OkSOx93rs6g3oW9hA0l&sz=w1000", category: "memory" },
    { id: 241, src: "https://drive.google.com/thumbnail?id=1pRifuYdJ_to0bZyqet4y1pHtyTgLOlTg&sz=w1000", category: "memory" },
    { id: 242, src: "https://drive.google.com/thumbnail?id=1xif6v5KHLyg1jAhuQIW1QIcvDLPO2m8R&sz=w1000", category: "memory" },
    { id: 243, src: "https://drive.google.com/thumbnail?id=1GdsfP8j9rPvUVwWG-X57qAcpI0brSt4R&sz=w1000", category: "memory" },
    { id: 244, src: "https://drive.google.com/thumbnail?id=1_Ze7QG01G3HC0eb-0IaGxB7rf9OIon5z&sz=w1000", category: "memory" },
    { id: 245, src: "https://drive.google.com/thumbnail?id=1gxZQgY_lC_sATfe3dWW6j7GyCtY6jJ9-&sz=w1000", category: "memory" },
    { id: 246, src: "https://drive.google.com/thumbnail?id=17uwb1wNvfHt0_TNhGiPvvjP3kGtDMGRQ&sz=w1000", category: "memory" },
    { id: 247, src: "https://drive.google.com/thumbnail?id=1D5DUHU2YoauEkAP3oEQCE9SJCMOBS3R8&sz=w1000", category: "memory" },
    { id: 248, src: "https://drive.google.com/thumbnail?id=1jNjq8sVQHgJURsijxRfT99hzrXDHZuiS&sz=w1000", category: "memory" },
    { id: 249, src: "https://drive.google.com/thumbnail?id=1NzXITAQk8T5Tm37F8oN64TYVTA3APPYo&sz=w1000", category: "memory" },
    { id: 250, src: "https://drive.google.com/thumbnail?id=15XBCTffZ8j9GbGvIvFr4JY_kOZ0VLqQH&sz=w1000", category: "memory" },
    { id: 251, src: "https://drive.google.com/thumbnail?id=1IYWRzlfl-9hCs7RVugz_QU_GlcF9HKNX&sz=w1000", category: "memory" },
    { id: 252, src: "https://drive.google.com/thumbnail?id=1xS4bMit3bO3XIpbGcvx1EIlPrAyfFQp2&sz=w1000", category: "memory" },
    { id: 253, src: "https://drive.google.com/thumbnail?id=1aNc4bIeMAk1GqDiH6FnaKb0rmGap8hJz&sz=w1000", category: "memory" },
    { id: 254, src: "https://drive.google.com/thumbnail?id=1d8V2cd7DChC5ASY4zwogf1QKQDBX5mUy&sz=w1000", category: "memory" },
    { id: 255, src: "https://drive.google.com/thumbnail?id=1CtA2XQMJp9BuWAeUuyfyT4e74OYgUZ7Y&sz=w1000", category: "memory" },
    { id: 256, src: "https://drive.google.com/thumbnail?id=1jSHyq6ZVym-z70m5RfRzMc8O1IEQQ3AL&sz=w1000", category: "memory" },
    { id: 257, src: "https://drive.google.com/thumbnail?id=11wXplqzeMf4ei_RMfpTHj8Sm9ymROKcA&sz=w1000", category: "memory" },
    { id: 258, src: "https://drive.google.com/thumbnail?id=17UgfPb2PnXyeukSOK0F4yTIjt-9p2CII&sz=w1000", category: "memory" },
    { id: 259, src: "https://drive.google.com/thumbnail?id=1rolkKfd12RWuq1R_6F8DMyTy7_56ZGZY&sz=w1000", category: "memory" },
    { id: 260, src: "https://drive.google.com/thumbnail?id=1hdYxSqA2pGtY60XleHATCFlrK5aahWgo&sz=w1000", category: "memory" },
    { id: 261, src: "https://drive.google.com/thumbnail?id=1WVe24i-s-4sji5V5Bp4Q7LqI2g7_9MoY&sz=w1000", category: "memory" },
    { id: 262, src: "https://drive.google.com/thumbnail?id=1mwM89tD59N8dGSy2nSEenQo8t8yVpV0Y&sz=w1000", category: "memory" },
    { id: 263, src: "https://drive.google.com/thumbnail?id=17JjXgW5OJbNGTdNY4lT9_RDJdEszhxbS&sz=w1000", category: "memory" },
    { id: 264, src: "https://drive.google.com/thumbnail?id=1Bn3xjgteyVQv5-sC9lr-1YaIaceZmEW1&sz=w1000", category: "memory" },
    { id: 265, src: "https://drive.google.com/thumbnail?id=188-1pfnzaeD-xHvcT0mun1wFJXlfBdon&sz=w1000", category: "memory" },
    { id: 266, src: "https://drive.google.com/thumbnail?id=1mdtHvjpN-NSrXHzHniZKVmc-TkFec6qK&sz=w1000", category: "memory" },
    { id: 267, src: "https://drive.google.com/thumbnail?id=1J8uqZ8ESs_9aAHd506nRTo6NaXE-2Uuy&sz=w1000", category: "memory" },
    { id: 268, src: "https://drive.google.com/thumbnail?id=1ptpxVOQ9VsaxkvsVrEkKz7PzGf3mWhPY&sz=w1000", category: "memory" },
    { id: 269, src: "https://drive.google.com/thumbnail?id=1S9JT0rhV69vAuNhfhomEZLwzoTOqCj72&sz=w1000", category: "memory" },
    { id: 270, src: "https://drive.google.com/thumbnail?id=1ANUaDPqawXtHh0rghCY9-TtVK2y3KbPY&sz=w1000", category: "memory" },
    { id: 271, src: "https://drive.google.com/thumbnail?id=147QHSXIuTWuROLSJ2kwM7HhBIdAZWr5v&sz=w1000", category: "memory" },
    { id: 272, src: "https://drive.google.com/thumbnail?id=1jwuWV0ClnyfCr7n59Z6TsUhzlx5FqrRe&sz=w1000", category: "memory" },
    { id: 273, src: "https://drive.google.com/thumbnail?id=1uaTYwWesKTEXHO3ecLy_XgyG7RwTH-QW&sz=w1000", category: "memory" },
    { id: 274, src: "https://drive.google.com/thumbnail?id=1FmDLXLDVXYBoQq2xXxxPxZZqggnH_N9c&sz=w1000", category: "memory" },
    { id: 275, src: "https://drive.google.com/thumbnail?id=1eauxXJJFRmLhvuALRXP63zhULntnf49d&sz=w1000", category: "memory" },
    { id: 276, src: "https://drive.google.com/thumbnail?id=1EZ6HjkgK1Fo-2FsRR8jEePwWAzOgYC67&sz=w1000", category: "memory" },
    { id: 277, src: "https://drive.google.com/thumbnail?id=1Sdra3wbnHRVoAuGCiiTS-aSJ8MDX6ZQ6&sz=w1000", category: "memory" },
    { id: 278, src: "https://drive.google.com/thumbnail?id=1CDcDyh_LVusFX2fp7fXie9nkXZbwmfwP&sz=w1000", category: "memory" },
    { id: 279, src: "https://drive.google.com/thumbnail?id=1YcvvyyWSizCZeL1DZL8j_WlVYcbkOBS5&sz=w1000", category: "memory" },
    { id: 280, src: "https://drive.google.com/thumbnail?id=1hCvy_f9ffd2IY1imqniGyQk3MLmSAo0h&sz=w1000", category: "memory" },
    { id: 281, src: "https://drive.google.com/thumbnail?id=16QzX0e0RfznuJ2lQaHyJWXSPhrg4fkEz&sz=w1000", category: "memory" },
    { id: 282, src: "https://drive.google.com/thumbnail?id=1EFIqQfhHN9ddBudJxhTpSF_97wQImg9E&sz=w1000", category: "memory" },
    { id: 283, src: "https://drive.google.com/thumbnail?id=1B5vgfvgmR9thYY_58mAdiLyoTByHZws7&sz=w1000", category: "memory" },
    { id: 284, src: "https://drive.google.com/thumbnail?id=1UvU5SJbk64zwr4Bi1LiZT6UQ7-l9qcHR&sz=w1000", category: "memory" },
    { id: 285, src: "https://drive.google.com/thumbnail?id=1ILe_WpTDwv0kC5qanub_c9L13Ov8-vgr&sz=w1000", category: "memory" },
    { id: 286, src: "https://drive.google.com/thumbnail?id=15hUigGDdeGRIhyoh0yH0b0ZO8k0jV1v1&sz=w1000", category: "memory" },
    { id: 287, src: "https://drive.google.com/thumbnail?id=1jn1intwyEthr6o_hdymsEYQ0l9K831Nf&sz=w1000", category: "memory" },
    { id: 288, src: "https://drive.google.com/thumbnail?id=1siWPfe3pZaVa8sAj7oNDfk63-SMt8Hqv&sz=w1000", category: "memory" },
    { id: 289, src: "https://drive.google.com/thumbnail?id=1RaYk3gvjEY95vKC3qRspfqVKQatjOODN&sz=w1000", category: "memory" },
    { id: 290, src: "https://drive.google.com/thumbnail?id=1naNmU6s42SQGG8VFt3E6u4NZis8ii4zQ&sz=w1000", category: "memory" },
    { id: 291, src: "https://drive.google.com/thumbnail?id=11iXbtykHH3IocGxQKLeGJgjf5qa-MmJl&sz=w1000", category: "memory" },
    { id: 292, src: "https://drive.google.com/thumbnail?id=15Zs9EKFHlMFwDxHxX7YllmPjyu1IZD1S&sz=w1000", category: "memory" },
    { id: 293, src: "https://drive.google.com/thumbnail?id=1VrxEaXdv2Qe65FHCs4iHT9YmbK_6MPK7&sz=w1000", category: "memory" },
    { id: 294, src: "https://drive.google.com/thumbnail?id=1Dk8I0KtlIPQsWG2d6hawzToJ7ZOF-8r0&sz=w1000", category: "memory" },
    { id: 295, src: "https://drive.google.com/thumbnail?id=1GU3oVTSrQfApvuN0I1u11HGyJFxMiVGl&sz=w1000", category: "memory" },
    { id: 296, src: "https://drive.google.com/thumbnail?id=1epsWAcbF1lFcmHeC65FsEYrBgh7Q7gEY&sz=w1000", category: "memory" },
    { id: 297, src: "https://drive.google.com/thumbnail?id=1oPawwTIybvdNmGJbvMFdxJjT0maf4hEs&sz=w1000", category: "memory" },
    { id: 298, src: "https://drive.google.com/thumbnail?id=14MBHV3qZBTjSO8C4CIkM6zmL8ZrCX_Bk&sz=w1000", category: "memory" },
    { id: 299, src: "https://drive.google.com/thumbnail?id=1RswHxEli1BxqebB7BcstCXLUDMODkSdw&sz=w1000", category: "memory" },
    { id: 300, src: "https://drive.google.com/thumbnail?id=1UkXM5N1drPQqpFnU_i6OB6U6XOh2vut6&sz=w1000", category: "memory" },
    { id: 301, src: "https://drive.google.com/thumbnail?id=15TnZ8Gss4Ef9f78nZ1WHKCS-1-uz6eT0&sz=w1000", category: "memory" },
    { id: 302, src: "https://drive.google.com/thumbnail?id=1ER2GORG0quMED-J0ecICEud70UQft3rc&sz=w1000", category: "memory" },
    { id: 303, src: "https://drive.google.com/thumbnail?id=1AU1BXnejgPeUeSJNr8xWfjZ3buwFP4-T&sz=w1000", category: "memory" },
    { id: 304, src: "https://drive.google.com/thumbnail?id=1NyAuCBBWQz3rNYTlkHTATwCglbr6zaWQ&sz=w1000", category: "memory" },
    { id: 305, src: "https://drive.google.com/thumbnail?id=1Qbru-RBA463MxpvpIdIC5_PcrtwLLEoV&sz=w1000", category: "memory" },
    { id: 306, src: "https://drive.google.com/thumbnail?id=19R57NfIQpvLw8T4pFf7U773Bt_JN807k&sz=w1000", category: "memory" },
    { id: 307, src: "https://drive.google.com/thumbnail?id=1THLmmZUZbirkqSEzTcg5ECQE5Zu2uEHH&sz=w1000", category: "memory" },
    { id: 308, src: "https://drive.google.com/thumbnail?id=1nvL5kS0Oz098uvCsqtHaLTUNstCuCPco&sz=w1000", category: "memory" },
    { id: 309, src: "https://drive.google.com/thumbnail?id=1LAiQXDq1kJTr1GSB3oVE81Q8x1NCr46M&sz=w1000", category: "memory" },
    { id: 310, src: "https://drive.google.com/thumbnail?id=1zd8rPvh_sms3yqKkVzapCMYmKxq89JcG&sz=w1000", category: "memory" },
    { id: 311, src: "https://drive.google.com/thumbnail?id=1m2lxjN6GB3IayyDt6A3pj72qI4ddDvRy&sz=w1000", category: "memory" },
    { id: 312, src: "https://drive.google.com/thumbnail?id=1DDjwI724uU2dQGYnenEQi21UU8Djr07J&sz=w1000", category: "memory" },
    { id: 313, src: "https://drive.google.com/thumbnail?id=1rg0HxdIXWuYVdFvbA7IUJaaXvq9tKeSE&sz=w1000", category: "memory" },
    { id: 314, src: "https://drive.google.com/thumbnail?id=1yGB5bYs-Ewb8bxNZ5z_A0krB9wCPMr8A&sz=w1000", category: "memory" },
    { id: 315, src: "https://drive.google.com/thumbnail?id=1rGGbgrHnijqHZq5ybH-or9E3QOAwBXCN&sz=w1000", category: "memory" },
    { id: 316, src: "https://drive.google.com/thumbnail?id=1FjHNDePBWBcqLCnhwNLePSOSRnN5LqY4&sz=w1000", category: "memory" }
];

// ==================== CONFIGURATION ====================
const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'inaugural', label: 'INAUGURAL' },
    { id: 'speaker', label: 'SPEAKER' },
    { id: 'oral_poster', label: 'POSTER & ORAL' },
    { id: 'valedictory', label: 'VALEDICTORY' },
    { id: 'group', label: 'GROUP' },
    { id: 'memory', label: 'MEMORY' }
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
    
    // Font Awesome icons for each category
    const categoryIconsFA = {
        inaugural: '<i class="fa-solid fa-menorah"></i>',           // Lamp icon
        speaker: '<i class="fas fa-chalkboard-user"></i>',  // Speaker/Teacher icon
        oral_poster: '<i class="fas fa-file-alt"></i>',     // Document icon
        valedictory: '<i class="fas fa-trophy"></i>',       // Trophy icon
        group: '<i class="fas fa-users"></i>',              // People group icon
        memory: '<i class="fas fa-clock-rotate-left"></i>'   // History/Memory icon
    };
    
    timeline.innerHTML = mainCategories.map((cat, idx) => {
        const count = galleryData.filter(img => img.category === cat.id).length;
        return `
            ${idx > 0 ? '<div class="timeline-line"></div>' : ''}
            <div class="timeline-point" data-filter="${cat.id}">
                <div class="point-icon-wrapper">
                    <div class="point-icon">${categoryIconsFA[cat.id] || '<i class="fas fa-circle"></i>'}</div>
                </div>
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
            
            // Update active state in timeline
            document.querySelectorAll('.timeline-point').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
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

// ==================== REGISTRATION POP-UP (Conference Ended) ====================
function showConferenceEndedPopup() {
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'popup-overlay';
    popup.innerHTML = `
        <div class="popup-content">
            <button class="popup-close">&times;</button>
            <div class="popup-icon">🎉</div>
            <h2>NC-ETMMD-2026</h2>
            <h3>Successfully Concluded!</h3>
            <div class="popup-dates">March 11-12, 2026</div>
            <div class="popup-message">
                <p>The conference has been successfully completed with remarkable participation from researchers, academicians, and industry experts across the nation.</p>
                <p>Thank you to all speakers, delegates, and organizers for making this event a grand success!</p>
            </div>
            <div class="popup-stats">
                <div class="stat">
                    <span class="stat-number">300+</span>
                    <span class="stat-label">Participants</span>
                </div>
                <div class="stat">
                    <span class="stat-number">30+</span>
                    <span class="stat-label">Speakers</span>
                </div>
                <div class="stat">
                    <span class="stat-number">100+</span>
                    <span class="stat-label">Presentations</span>
                </div>
            </div>
            <div class="popup-footer">
                <p> Visit our <a href="#" id="galleryLinkFromPopup">Gallery</a> to relive the memories</p>
                <p class="popup-thanks">— Organizing Committee, School of Physical Sciences, JNU —</p>
            </div>
            <button class="popup-button">Close</button>
        </div>
    `;
    
    document.body.appendChild(popup);
    document.body.style.overflow = 'hidden';
    
    // Close popup function
    function closePopup() {
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();
            document.body.style.overflow = '';
        }, 300);
    }
    
    // Event listeners for close buttons
    const closeBtn = popup.querySelector('.popup-close');
    const closeButton = popup.querySelector('.popup-button');
    const galleryLink = popup.querySelector('#galleryLinkFromPopup');
    
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    if (closeButton) closeButton.addEventListener('click', closePopup);
    
    // Click outside to close
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });
    
    // Gallery link handler
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            closePopup();
            const gallerySection = document.querySelector('.gallery-section');
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// STRONGER EVENT LISTENER - Multiple ways to ensure it works
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - checking for registration link');
    
    // Method 1: Get by ID
    const registrationLink = document.getElementById('registrationLink');
    
    if (registrationLink) {
        console.log('Registration link found!');
        
        // Remove any existing listeners
        const newLink = registrationLink.cloneNode(true);
        registrationLink.parentNode.replaceChild(newLink, registrationLink);
        
        // Add fresh event listener
        newLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Registration link clicked - showing popup');
            showConferenceEndedPopup();
            return false;
        });
    } else {
        console.log('Registration link NOT found - checking with selector');
        
        // Method 2: Find by text content (fallback)
        const allLinks = document.querySelectorAll('.footer-section a');
        let registrationLinkFound = null;
        
        allLinks.forEach(link => {
            if (link.textContent.trim() === 'Registration') {
                registrationLinkFound = link;
            }
        });
        
        if (registrationLinkFound) {
            console.log('Found registration link by text!');
            registrationLinkFound.setAttribute('href', 'javascript:void(0);');
            registrationLinkFound.id = 'registrationLink';
            
            registrationLinkFound.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Registration link clicked - showing popup');
                showConferenceEndedPopup();
                return false;
            });
        }
    }
});

// Extra fallback - if footer loads after DOMContentLoaded (due to fetch)
setTimeout(function() {
    const registrationLink = document.getElementById('registrationLink');
    if (registrationLink) {
        // Make sure it has the right href
        registrationLink.setAttribute('href', 'javascript:void(0);');
        
        // Add event listener if not already added
        if (!registrationLink.hasAttribute('data-listener-added')) {
            registrationLink.setAttribute('data-listener-added', 'true');
            registrationLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showConferenceEndedPopup();
                return false;
            });
        }
    }
}, 1000);

// ==================== INITIALIZATION ====================
// Note: Most initialization happens after components load