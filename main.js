/* ================= js/assets.js (شعار الكشوفات) ================= */
/* شعار الكشوفات المطبوعة */
const SHEET_LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAADGCAYAAAC+XKUFAAAhD0lEQVR42u2de7RdRX3HP/fe0D+q9+YmULWAEFJeEqKCCSESHpLEQOuqlVeAFJe2EQil4rJLiKC2VV5BDIZHIFHbUiUkPKR1uYAkQAV5hSRYyQqJlZdgkNVKknuDf9TcR/+YOb377rv3Pvu9Z5/z/ax11jn7eWbPzJ7v/GZ+M9Ox9MCDEUIIIVqFTkWBEEIICZsQQgghYRNCCCEkbEIIIYSETQghhIRNCCGEcI13A3cAw/bzPHB6s4vGKd6EEEI4ymPAYcA9wEvAZOBB4KPAM7LYhBBC1Im5VtQWANOBw4FzgcXArVEXStiEEEK4yLHAI8DbwL7APGu5PWGPhaKmSCGEEC7Sj2l67MQ0Q/4X0Af0AK/KYhNCCFE3foBpivwk8DCm+fEjwNXACllsQggh6sYeYA6w3lpoMzD9bHcDS7II2zHATxS/ztMBfAzYXKMw3wfMLqHVYMjzHx3AIPAPwLIM91wHdNl7Ne59KbC9hHg7G1ho390B+0yd9jk/7jt3PvDX9niHZ/9gwLlTgW/Z3437eXkbOK/C/NINrATeY8M/bNOgkaaPBhR2jeevEn88TwFuqiAcjfzaBXwB2OI7/oiNy2Gb9l02T28rIWxnApd4wtfIo5uBLwMHACcAhwCXAVub3bCZsO2Hac8U7rNfzcL7cVtYVcEHMl4/N2DfBlujLFrcDgkoLMOYFBLWILZYQZsdcc4TwO0VpdklGI+4MC4L2Hdwgucvix4HwvSHAftmh+TpmXGEJCOHAqeGiDHAO8DaJDfszHhcuMOgwlt5gbXBWj51pZl1s6Siysj7gesjjl8fYll0OBjHQw6EIW653g08XWGeHi7qASVs9aFL4XVC3J4quCAoMt5+hRkjFFXQLa4gXpdGHHsNuEavf63zdGfZNxxSutaGulVChiv87yLzdTfwJKYvpY41/juIdqW+ssBnC+IE4KyI4xdjmqpcy2Nh7FPDsqLoPB3WetNR1gMKd1ElxJ1834OZ7qeOzZJ9wKIm5ywrMTyrIo49RnTfi4tNkS40wQ+kzNMbyN4/nSSdUldM5O4vRLGW2/GU41mWJ2sx3tCnhByfjXHkWF1wOC4HDoo4/ukM937UwXh/HjMoeS8jnqxZrc6Gh2PDg3cwwsJtxruAZ4ETgRdczsASNiGKtdyepRxvybxZAOyIOL4E+HGGQrIZ7wa+EnF8cZPwNWOOg3F+ibWKXM/TjwOzKN5bMjVqihSi+IJgA+X2S+XBm0Q7ihxkC+KiuJFwD8zXMX2BrUZdyuNeiu1zk7AJURNxe7qG4rYc43UYZbUdUMD/zgQuiji+ENMXKGGTuEnYhJC4JWIPxuswin8u4H9vjji2DjPFUitSNwewXqod5yZhE6IEVsYUtyNr9ExrmwjJXMxyInkxH5gWcfyvWjj/uChsK2Lk6aLHuUnYhKiQf8E4XTQrCIpymy6Kz2YU9Lh0N7nXFWRzGBHJuZPoqcwa6eZUs6SETYh836dVNJ8suOEtWRdx20FzR5Ircvifqwifm/ZVqpunst3L4zUxxK3HituRikghWpPVMQuCZ6lPn9tyms9Isn+G+09pIo4XYfr8Wpkhh8MUR9x6cWS+VI1jE6KYgmkNZoDt3U3E7RngQoof7JyVPcDfAA9GPMtNmD6yNEQ5jDxG8Q4jUzBj58YlFJiGcTBgf3fa3++QfJyXvzx+P3BgzvlzQ4YwrfFU3KLy9BPASYxdGkfCJkSLWG57MWvPhdFtxW8QuNfx53nICkzYsivnYCYsTlp4ziN42ZIGny7h2ZYSfzmgOKwjuVONX1DPo8mCminoyBimOBW2XkyzZGUTE6gpUohi36f7ae5QAnAPzZt6XKCZI8nyhPcbT3Tf2Zcox2Gky4H7dRYcpqytEN4K2zlNrmu0Rkxx5UUUQuRXCIBxKDknxvV3k74pryx2EN0XdiymaTUun8MsnhrEazR3N8+LwZLyQpJrXJgwOaxV716aO0n1UtE4NwmbEOUQpyBo1IbPdvxZbid6RpJvYvqrmnEA8LWI4xdTnsNI3t0ywy2Sb/c2yatxnKRKH+cmYROivPdpNWa2/2aFtevNks1mJOkBbohxn6WEzwf5KNFL0rhOlyP3yEqz9ePieEuWPs5NziNC5Eec5qcNmMUzn4oo1ME0Sw4z4onmGmsx3ophTh+LgNsI9wycSXTz7KdLfp477DN1+KyuOM4WnTbthz2C9FIOYXqU/FYsH04plHHydFwP4Cdtum+PWSFMvZ6ehE2I8tliX/Bnmojbaozr+P2+AsoVFgC/iTi+jPDlYaIWEL0Ss7pAmbjgkeov4J+znzqwGtMneE/EOb22YjeLeEMBBvKKSCFcsm5ama3Wcvtdk/PuY3RTT5dDz/BWE4tiNsH9hYuASSHXvAbconeilsTpR26Mc5sa47lTG14SNr0UCm+1ltsMYHeT87zekq7F23Lg1xHHV/qs0m7g2ojzL6G4xUtFOZZbHG/JONNvpW6dkLC1DnVLSzWDj1huJ9HcoWQ1bg4F2INZHy2qELvSs/1Nuy+IxzCDwEX9xS3uOLdC5kuVsMliE25YbjNrLG5rMTNthLEYM4/kDKIXEL1AWaFliDvObSNm7KNqzaIlKikdSrIxltsJmP6H3ojzjnE0/AuB1yOO/2uT679E+Q4jeoeLt9yGiZ5b8l3Em7xAwtamPIzpqxmy6dqFGVxZ9csy5Htph2zYupVkgZbbLIzn2LtqFvY3rGV2fcjx2RHXvk55M4y4TCu2usSZODn3+JCwtRa9ioKWsNxm0nycm4vchhm4PSnhdefQ+kvStKPF5hW3IaKHAuQaHxI2Idy03OKMc3ONdzDzRK5LcM1qkq8GkAeX25aDoq2kJLPzX2At9qJoDNK+k2rGCZ5LScszuS5sp9Wk+WAfTLPfugrD8XWMC20jLI3ZEFyoBXrD0ihIHpZ+NbXc4vS5ucZ6zNi7s2Kc228FpgqWOPg/F5UUpp9STX/mGkyz84+Bie0qbP3Ue664snmS4hdjzJPdqOk0juV2EvVrlrwMs7ZZT5PzrsX0zYly+X2F//2MzdOFtka43KYr9/Vk7FOz8GqoSXxxm2krenXhTcKdSBq8XqLVJEZTtUdyox+5Wb9qag1wuXDpUv5LxF5FQcuyFTixZuJ2HdELhJ6jZG3rSmWjqX1PEZV1l4VtWPmvpS0gWeTJeAH4KPXyHjw9ZP9KqnEYEW7RbGKC1JV1NQe1DnUTCuW99LXc3TUquM5h9MDt6ynPSUK4/+5txcxI059nOOXur8wqkjMD01Tu9fIcBH5ZklgcDRxo/7/L/ndQxeYHGK9KL4Mlx9W99nNYSfHj5c6A56+a7Z78U3b5MGTTf1tIniYgXD8vIWzbgKM8eboR1tRN7xI2IZJT9RpZO4juv0p6Xhn8soL/fMt+XGIXbq6xVpc8rVq+EEKI9kPCJoQQQsImhBBCSNiEEEIICZsQQgghYRNCCCFhE0IIISRsQgghhIRNCCGEkLAJIYQQEjYhhBASNiGEEELCJkTbMZzzx0+f59h3MobVe68VvmMrUoZ3O3BZyvDcASwHJuWQDpfaZ7gl4pxdmFni+wKOTbP7s3x2BWz/MOLZG3HYl/HZ58a8V5r07QNuw6zIkIQ5Ob8Xmt1fiBYlz2Vm8lq89wjg2/ZzGrA2wbWNtdgWAfsCOzOE4xqgx/7+25BzeiOu/yPP9Xkyp4R84S27O3K+dw9wif08AJwR87p9XMn7stiEcI+Okv4nD6F72FpOaXgbmFhhPA85HK9Jwl7k/32qpOcpTPWFEMn5GrDJV9h0Ziw4qyhIfmotoKGACq/3uRYCZ/mO3wI8BLycUtyyWm5peYmxzbNBArLIF08veo512orIsCeetjuaV0/zhHuc/fan9xHANwIs2eXWgotiIOT/mhlXA57wePf/t4RNiGrYZAv1urONeE2Ka4HxwDPABzz7/wU4MaPltqvkZ34ZuDjGeQs8Bf11NU7vuOl7M/B3wI2e/YuAL5Osb3BtVQ+qpkghsjHQIs+RxErsA44CfufZNyvj/++0gqn0doNvMbbf8ot1CbyETYhstEqrR5pm0w/6tv80Yxh210Tc2oVbGe2ZOL8u74KETQjV4NOWBa/4tg9NeH1viLhNULZyhq96fu8vi00IUSfSemJ6a/RTEl7bhxlL5menY+I21Mb5YlsdK3kSNiH0DkH6MUMdGeNic4S4TXQwjce1cf5u1g/rTNzIK1KIfGrzE4DjiHalDmKtI8+RVqC7Pb/vS3mPzcDxwLO+/c28JTsqiKcsVklHDa3AhQniOyxuJtjKSyfQBez1/B4MiI9Om+bPSdiEqFYQjsMMVs5S2EUJZx7kLQSf922/lOFeG4AZ9ttvufUS7GY+WLO8MlxQuhYlkhMYPWbxBynvMw1Yl/CafjI4EqkpUoh8hC3Pd2kox3d0oCChOwZY5tneTboB2l6eI7hZcjfBfW51Lr/GFZAH8+ZHvu1/KvFZB1yJXCHamacZPdNCJyPNkVkKqqxWlnf+vv+IsCCS/M/nfaIGcH5O8bgZOBZ43rf/Neo/FCBPi/kkz++3cg7nYZiJB7yzj2xjZIadNNb4x33vhbdCOBCQ79+WsAlRHXvtdx/59Zd5C8B9M97L2wcWNbOHt1nvUswAbG9BBDCV4IHYD5DvbBw/A6YDGz37ejDTWZ1Y47wy6HueLHhnfflJwmsnY2YWGWcrNx2eSs55IWE7KUNYdwLr62oOC9GOdBVwz0cwk88CnJmx5u23hsIE1GvZXesTxCiuBa4qIA42AecCqz37ZvnEraNmeeXfGT3v5LQMVtCnPL+3psgXl8Q8dzdmiaG+OkW0+tiEcI9rfdufT3mf7/m2f+vbHgixJuI6ZUwvSNQarGHsum+zgCdqmq5+i35pyvvM823fWVC5/wCmb7OvbhEtYRMiG0V4pPlr8ctI3r80h9HNdl9IYG1OsNaQ//ML33kbKX6s2c0B4nYipvltsIb5ZaXvOeYlvH4Co71vn0whPA+FpO+CAKvw/Dq+lBI2IdzEX8jsBvaLee0xjO3TWBZwXtKmvI8G7Hub4p06bg4Q5pOJXkS0KLJ231zu234Y+EjMa8czdnmfC3J8tlUB8XwXZihLrfREwiaEm6zC9Cd5+R/g9CbXXc1Yj8LpIecOJhS5sNlANpQQH8tCrM4y8Fq2WaeN6sM4aPgt9H9sct3ptnLj5esYb9G84/nxgPSdVlHrRSW1DyHanSIrhycxdhqjB+33N4CnPIXJhYxdABTM0iObYoQ97rI1uxjrsXgE5XgsLrNhXlpyGg/lnN6rgfcC3/bs+5r93IcZL9b4zxNtGvo9FR8H/r6g5z0F09R7smffRswA+ucSvAtzY8SXd1hM4/c4T2tAqtlHJGxCuN3q0YFxlvCLxldjXHsa0UMQulLWtjdhlqh50LNvli0MTyk4Pm7CDLG4pcQ0Hg6xcrOK9DBjm4jPCqmgeFlBvAVSs3AGY8eSbYghbl7WZQxD6tlH1BQpRH61+SIttwUJzn8c0//UbFzdYIay4CHGLkR5MsnHVKXhVsxYuyrIc4jBzcDhjG1iDGO3FZaLS3jOxlRmBIjbxJLehdRxLYtNiHQ1ySFr8fy2pP9cZT/HYQbX/hkjg8M7gR2YZqxvM9bBIIwXgT1W4F5MKTDvsQLXsP4+hPFiXBZROOdRob4N+BimuSuqHGs8X5b/XM/IzBm7ck7XX2I8HQ8HPm2ttff6wns3pnkyTbNclufvs0LacEQasPdZGWJV7rL/5600JfnfDo+FPMDYvr74N1p64MFRx+eRbmLXvAqPuk2hM1zhfzdrdnKNPrLPvpCWMppyhBAVoaZIIYQQEjYhhBBCwiaEEEJI2IQQQggJWxD7A9dgxlUMYxwX1mEGtXYrG4yiG+NY8SjwKxtfj2IcLo5T9AghJGzVcx3GFfpKjGswGG+8ubaw/jXykGswz8bH7cCpwEF2/6m2ErAB43qsyoAQQsJWEXcAi5uc02ML8uvaPC+cjxna0cwF/1zMIFyJmxBCwlYyVwAXJTh/Mc0nmG1VpmBm8Y7LscB39foIISRs5fFu0i2AuLxN88HXUlxzDjBVr5AQQsJWDn9JuqayScDMNssDE6xIpeF8vUKihfgApqXnCuD9ig4Jm2t8OMO1J7RZHjgyw7XT9QqJFuFszHyZ19vPC21YFkjYHOfQDNd2tVkeyNKcKPd/0QqMB+7x7evFzL4vJGzOkEWchtssD0zIcK08I0UrcFTI/mMVNRI2l8iyGGCXsoUQbcWvQ/a/qqiRsLnEUEXXKg8IUT/eYGxTJJgJHEQN0UKjY2m3psi9SnIhWAhsxsy+Mwx8B1ijaFFt3SW6Krq2jvyuomuFqJIpwPNWxIaBBzAzEM0G5thz+uyxfswQAFEcB2DGET8C/AfGS1XC5uOlDNe2W1Pk8xmufVrvo6gpPwaO8WzPBpbY3ycAqxmZXq4bMwRgrqKtEMbbsmSRTYdTME3D50rYRvOzjBm+ndie4drNeidFDZmBmYzBzyL7fXJIBfdURV0hHMXIhOteFkrYRrOGdM1krwFb2yxT9RHccR6HVXonRQ1p5lswHFI2TlTUFULurWStKmy7gG+kuO6SNs1YV6e4ZjWwRe+kqCFPAa8H7L/ffv8k5LrHFHWF8GbI/pclbGNZgukMTnL+Q22asbYA5yU4fxNmfTYh6sqfYlpovKL1Wfv7GcY6iyxBXpJF8UZAfL8KXC5hC7fArm9yzh7M8jaL2zxzrQZOs/ERxT2YvoY9eh9jMQfTF9lYuV3edW6wFTgEOBrTvzPbl6dvwDiPfBTjPLJYUVYoNwAftPF9PDDZvi+paIdxbF8GbgUuxUzaOx3TprvZNj18H3hH+QqAtZhZzedjZvw/zL7064FXgDttbVbE42Abdw16bEXrP21cCzcELqrSq/xeHrl1bbTLAO0dVuBEc/qAlfYjshHmrvwZCZsQxaHplIQojrBZbN6nqBFCwiZEHQlzRrpbUSNEcWiuSCGKYwvGMck7me5qWqOZd3/MSvUdvv1PUK9+qfmYAdlHMHoA9qv28wjwI+o1vvVM4HCML0EnI+PEljga3vcD52NaODo8YX4FuFfCJoR7rMS4iR+FGTu1o0We65CQgvLKmgjbFTasPRHPd4gVu2sxwwG+QD3Gbl5E8PRfrgrbQQR7rz8mYRPCXfpoPe+6gZD9g46HuxszADvpIqKnAi9gHIJcH8/W2SJ5abhdIkAI4Xbh6fLqGN3WCsiyMvZqMkzOWxIdLZKX2kbZhWhFrmBk+RTvZ6bDYR5KuN8FvgtMy+E+KzDLrAhH85KaIoVwt8Zax4qnq02RMzGTDoTxM2uNddkC9diI83uAq3B3btnhFsn/qa1/CZsQsn6cKIwK5jMRx86zoubnixiPyKCmy/kOC1urNEUO5H1DIYRoJWshbJHQRSGiBsaD9c8xK2j7mYhZhVtWc3EVuz+QsAlRPlcD8xQNteCQgH39wB1NrttB+ID6HkVroexNe6GaIoVIx3xMPwvAbsyqB/9G+yx9FFYprlMz2MaY571as7TpapG81Jn3DYUQ0Zzl+d2LWZ/uQeQtVyeOy2DtuVx+DrR7wkrYhEjOeJ+wNdhE68ws0oz9Q/b3Ohrenwfs6wbObnJdN2bqsCBecPRZJ4bsd7XSFdbHtkvCJkR5fDxk//faKA4+kjBuquahiDSbGnHdEuBdAfvX4+5iu2Fj9WY5Gt6DQvZvkrAJUX2hvqVNnn88po8xiGNjWEFVsDzEMugGniR4MPwKjNdkEDc5mjbzI47dCLzbwTB/Lu8bStiESE7YlExPtcGzH4BZeX5SxDn3AJc7Voi+Qfhiwz3A01b85mJmgunH9JuGPZ+LTkLzge9EHD8Qs/rCDEfC220rD7NDjj+R9sbyihQiOYflfL+wsV+3Am878LydGG/H6bYwisMS+9kEvAP8nhGPSW+FuuhB6F2e+G3msbkowkLzcihmOZtBqvcCbTzf7JjnHwM8a4V7E8WPeevy5PEhz/bkJpWjPWSYOFzCJkRyJuV8v46ElmGdmNaC6d8K6dLD6PXnXOPqrDUxIUS17KsoEOL/2YhpFpawCVEiu0P2p3Wn/ljN4+M+TP/NJmUNp+gHFhA9+bNLDAHPY/o535GwCVEum0P2n5fiXu+lvs1192BcyM/GjN+bDnwJs1J4HXkNeLTG4W/wOmZF6qOBVZhVqD9I+JyYLrAJuADjcdyX9WbqYxMiOesJ7qy/CuOVluTF/MeI2vY1uDFFVScjjhJP2O0wD9Ab7edITBNr0NipuM4ceTLs+79dmOEZQzautwVcMwUz4HwA06/Wbe/RCH9jiRsXeAl4CzP915sBx7fYitfn7HMdYj9DJeahvTbOujDORFts3Oe+uryETYjkrLI1Yj+9mBWaTyHe4N35wEUhx+4CbqhxHG2333UeArHV83tDi+Tdd+yzbGjlF1RNkUIk5w0rYEEci2mWu4Jw1/ipwBqim4buUjQLIYtNiDK5gPB5IbutRXc9pmnoVUxTXidwPMFTNHl5lPYY7C2ELDYhHOJN4NwY5x2CGS80F9Mv10zU+oG/cPB5u62VOWw/3/FZpPOsgA9j+hgvVhYpjbmeuH8DODOgktVvjz+CuwukStiEcIA1McUtLq9Zi+4dB5/1R4x2G1+IcRIBOBh4mJGB6z3A7cDpyiKFMwNY54n7AzHDL06w21cyull8NvBjCZsQopm4HW9FKQsrMC7Z2xx8xgMwDjF+GnMpnh9y3WeUPQrnlJD9DWELspwntbrVJmETIjsbME2O52IGmMZlN7DSCsfFuLsMysQmx8NcxvdT1qiMxtCG3pDjva388HIeESJf620N8D6M5+M0jNPIHFuJ3IgZP9WPcQ6pyzI3W6xFOsm3/9f2+8kQsbtPWaJwwloKfmW/72Psorg7cXeRVAmbEI7ylv2st9s3tMAzfQKztEuPp0D9hP39FHAtpj+nwQ8x/Wyi+MrUVMzkAA1WMDKU5DLMTPqNiZv7gb9xuHVAwiaEKI2tmAVGZ1przD/A9yrMxLUHYZpYtynKSuMrVsz+GPgNxjOywZuYaaqmAn8I/JdtNWhpJGxCiCRETX+0g/CxfaJY3vAJmp8t7RQZch4RQgghYRNCCCEkbEIIIYSETQghhJCwCSGEkLAJIYQQEjbhFkOKAiGE0Dg2VVKEEHmxH2ZC6KOAJzADoR9StEjYRPtYbLIwRSvxeWCZZ/si+92hqFEtXygtRTHcxsgiobsUHbkyySdqK4H7ge82ua7fkyZ3KBrHxEmfLDbRqfCKCLoU94Wx2FMoj09w3bCibgyDrV64qKkqGQM1C6+aaKqLb8W9YZrHOhgGJqS8z2/t93q9A25okmpurUPdrO+9SjLFfcXc5du+LuV9HrDfZypKczVoUhs3LheGvZgFGrvayYTOwExrtY3zZIohRyovQ76K1BDNV2UW+eJt9tpH0QGYBWHJWJDOA87wbP8Qs8JBl83vNwCvxEgTWW9jja3UZZfrtfz1SufYfFVRICLoCClQ25lFPqvteynu8SngQt+235p7RWlSLnIeEaIaJgD/DnwYeN4WiPJWLIfJtsVgFbAJszjqq8BO4HTMSuFxPfLutwLVEKYuRlpvOoCXYlrRoo2EbWdNxLfR5NejLCVishI40f4+Gfg7zErIolhW+CysDsyq0sf5RGgasDnG/dajliUJWwL6gX1rFp+qgYm4zPNtnyFhK4ULA9JhLfB93/5vAacouuqJvCKFqIabfdvLFSWVMpixbJxsRXIeMDfmNXIYaUOLTePYRCvzFeAt4GhgG3CroqQU7gPO8myvtd+fATZ49n8x4X0vZ2QarbiipRaeNhQ2WZOi1ZgLrLO/7wHm298TMM4KPZgm+IPIMJ2QiORs4DAb194+tOcwXR8zSOY8osq7xEOItmad5/c5GIcFMI4kDcejHoy3pCiOXxLsGLITMxt/WZUKlb+KWCFajsYUTlN9+49R1AghYROiDvzCt/2c/f4H334NthciAxqgLUR5HIlZt2sKZqqlxoDs1fb3WRjnhrWKKiEkbELUhZtD9q9NKWiTMR55DS+8GzF9SCJe3H0ZMyl0J3CxokTCJoSoniMY7WZ+r4QtkbAt9GxL2FoE9bEJUW/8LuNdipLYaIC0hE0I4WEBZraQ4/ROq/wTbqGmSCHS8VVMM+AiYA/uTIA9oKSRsClhhRBpOMLz++4KwzGkympucSfcInWzuoRNiOTM8W3/sAaF9aAKdKeFVf19Y9krYROiPPyrJFc57iyuhdaVR024xehUWFozfRSZQiTHOwXWbkctND/DIdabLKbq6JIVrVqCEK7wIc/v39awsNZ774aYeCsbv1dyjCF186wyuBDZWF/Dyqr6c9wT1n0UHfnpk4RNiGwscOzlV5NWfN5T8f/3en5PUXKMyb//K2ETojy8Y8WqHr/mHyAeZy2xbiUhACc4FJajlRxjxP5FCZsQ5bHat31phWE5z7f9XMzrJisZmV3hf58fUKBPbPP0GO/b3lKUsFUpfGpSEa6y1Ld9CzCtgnCczuiB4v0R5/pX5X6wzdNwGnC4Z/vxjPdLMoRiAnBXwP6VbZ4mS3zbTxYlbFWKi8baCFd5OaAg3IhZa60s5gaI05UR5z/k2z4C+Ckjq3i3m6htbFKoFsVkYGfIsTMxqzO0Y5rMZfQqFUF5NjbNBndWabFprI1wuTXgDOBt375l9vML4DH7/tyf8X86PWE+034vCjhvJ3Bbk3tdA1zl2Z5lr3vchvlFYLv9j04HKrd5MA7TJ/oBjIPGKT5LDcxYxLBC9DArRkO+8rDT7uvCzJBxWEBBDcbbcTrwx8DHAv7bz1n281ObHluAVzz/3/ge8Dyby3T6jJW9mGEO+9h3aDBA0ABuZ2Qh3sR0LD3w4Kjj84CHK4qQ3TWsuQxLM2rBypCXKSnjqX6AdoOJMQuCnwAnKwuM4k+seASxAriwwP/+ImZKtteUDKO1KS81dc1iU1OkcL01oM++gLdX+CwPJBA1rMXydWWB/688T4wQtTzzip89mCbRm4BfAYc6VEmqkhXkMM6yWVPkb4jukM6Lhkk/6BG1dTVMlH6bKJ32WTpkxVXOkKeSNGy3t+f8H5fYzzzgk8Bf2vTvzCn8jSaoRmXz55gmzrtIN/PJ39vPfEzz2PmeuOn0/W+rpT+Y1Ri+C2yKcf1W4Hf2Po00bbzXYe934z87PWVao1y42xbe/v9+GdNCNQP4K+Bc3/2HPGXjcAukjzdf/9xW0L5PeP9jMnOvSVOkEEIIUSs0jk0IIYSETQghhJCwCSGEEBI2IYQQIhn/B1OgmVk2rOf2AAAAAElFTkSuQmCC';

/* ================= js/seed-data.js (البيانات المدمجة) ================= */
/* بيانات الحضور المدمجة (تُحمَّل مرة واحدة) */
const SEED_DATA={"company": "نيفين للأثاث", "settings": {"shift1Start": "14:30", "shift1End": "00:00", "grace": 5, "workdays": 26, "hours": 8, "currency": "ر.ي"}, "employees": [{"name": "مازن مسعود", "job": "الحسابات", "dept": "الإدارة", "salary": 200000, "workdays": "30", "hours": "", "grace": "5", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljcnyhwoyq", "type": "موظف", "annualLeave": ""}, {"name": "عبدالرحمن علي قايد الرعيني", "job": "لحام", "dept": "الأثاث", "salary": 130000, "workdays": "30", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljkwq98a15"}, {"name": "محمد احمد ابراهيم النشري", "job": "خدمات", "dept": "الإدارة", "salary": 100000, "workdays": "30", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljlhmodzpz"}, {"name": "رائد اسكندر ردمان الاصبحي", "job": "دهان", "dept": "الأثاث", "salary": 182000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljnildgyte"}, {"name": "حمدي احمد الحضرمي", "job": "حارس", "dept": "الإدارة", "salary": 75000, "workdays": "30", "hours": "12", "grace": "", "shift1Start": "12:00", "shift1End": "00:00", "active": true, "id": "emtljnvcha2wm"}, {"name": "صقر حزام سابحة", "job": "حارس", "dept": "الإدارة", "salary": 75000, "workdays": "30", "hours": "12", "grace": "", "shift1Start": "12:00", "shift1End": "00:00", "active": true, "id": "emtljoahtj17t"}, {"name": "دحان اسكندر ردمان الاصبحي", "job": "عامل", "dept": "الأثاث", "salary": 91000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljpepll908"}, {"name": "علاء الدين عبدالكريم شعلان", "job": "نجارة", "dept": "الأثاث", "salary": 91000, "workdays": "13", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljq5exw2nz"}, {"name": "ابراهيم احمد ابراهيم النشري", "job": "عامل", "dept": "الأثاث", "salary": 104000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljqnipyxii"}, {"name": "ابراهيم شعلان", "job": "قسم التركيب", "dept": "الأثاث", "salary": 104000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljr4ttg0l0"}, {"name": "عبدالرحمن عبدالجليل ياتم", "job": "مساعد", "dept": "الأثاث", "salary": 169000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljs4c9evg7"}, {"name": "فيصل محمد محمد الاسلمي", "job": "خدمات", "dept": "الأثاث", "salary": 80000, "workdays": "30", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljshnt9huf"}, {"name": "احمد  الميموني", "job": "دهان", "dept": "الأثاث", "salary": 208000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljszq9p218"}, {"name": "يوسف محمد حسن الداعري", "job": "نجار", "dept": "الأثاث", "salary": 312000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtljtn817nbe"}, {"name": "بندر محمد حسن الداعري", "job": "نجار", "dept": "الأثاث", "salary": 208000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtlju7mijlnd"}, {"name": "خالد احمد احمد الماوري", "job": "دهان", "dept": "الأثاث", "salary": 182000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtlnfm4hxgt0"}, {"name": "احمد شايع", "job": "صنفره", "dept": "الأثاث", "salary": 65000, "workdays": "", "hours": "", "grace": "", "shift1Start": "", "shift1End": "", "active": true, "id": "emtwctjyelgro"}], "sheets": {"2026-09-03": {"records": {"emtliqne92jwb": {"checkIn": "14:47", "checkOut": "23:46", "leave": false, "absent": false, "checkOutOriginal": "11:46"}, "emtljcnyhwoyq": {"checkIn": "12:03", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:47", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:05", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:03", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-01": {"records": {"emtljcnyhwoyq": {"checkIn": "15:40", "checkOut": "03:03", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "15:03"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 1}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljnildgyte": {"checkIn": "15:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-02": {"records": {"emtljcnyhwoyq": {"checkIn": "16:00", "checkOut": "00:55", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "00:10", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:23", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-03": {"records": {"emtljcnyhwoyq": {"checkIn": "14:58", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "15:15", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "02:10", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "14:10"}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-04": {"records": {"emtljcnyhwoyq": {"checkIn": "14:56", "checkOut": "04:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "16:00"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:55", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-05": {"records": {"emtljcnyhwoyq": {"checkIn": "17:30", "checkOut": "01:39", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:39"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljlhmodzpz": {"checkIn": "10:00", "checkOut": "01:39", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:39"}, "emtljnildgyte": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 1}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 2}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:35", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-06": {"records": {"emtljcnyhwoyq": {"checkIn": "15:39", "checkOut": "00:50", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "12:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-05": {"records": {"emtljcnyhwoyq": {"checkIn": "18:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "09:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "21:15", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "09:15"}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljs4c9evg7": {"checkIn": "14:58", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-07": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-08": {"records": {"emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljcnyhwoyq": {"checkIn": "18:42", "checkOut": "00:42", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:04", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:48", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljq5exw2nz": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljqnipyxii": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtlju7mijlnd": {"checkIn": "14:48", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-09": {"records": {"emtljcnyhwoyq": {"checkIn": "14:44", "checkOut": "01:04", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:04"}, "emtljkwq98a15": {"checkIn": "19:05", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "02:10", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "14:10"}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-10": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "00:49", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:16", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-11": {"records": {"emtljcnyhwoyq": {"checkIn": "14:45", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:03", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:45", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-12": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "01:40", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:40"}, "emtljkwq98a15": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "01:40", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:40"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "16:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:03", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:10", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "15:00", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-13": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "15:12", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:16", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-14": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-15": {"records": {"emtljcnyhwoyq": {"checkIn": "14:20", "checkOut": "23:45", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "11:45"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:26", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-16": {"records": {"emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljcnyhwoyq": {"checkIn": "16:30", "checkOut": "00:29", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 1}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:35", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-17": {"records": {"emtljcnyhwoyq": {"checkIn": "14:58", "checkOut": "00:50", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 4}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:23", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "13:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-18": {"records": {"emtljcnyhwoyq": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:25", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-19": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "11:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:46", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:21", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "13:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-06": {"records": {"emtljcnyhwoyq": {"checkIn": "17:00", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnildgyte": {"checkIn": "02:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "00:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-20": {"records": {"emtljcnyhwoyq": {"checkIn": "15:40", "checkOut": "01:59", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:59"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-22": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "22:11", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-28": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-21": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-23": {"records": {"emtljcnyhwoyq": {"checkIn": "15:10", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:04", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:03", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:03", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-24": {"records": {"emtljcnyhwoyq": {"checkIn": "15:28", "checkOut": "00:37", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "16:37", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:35", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:10", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "13:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:32", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:55", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:01", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-25": {"records": {"emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "18:35", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-26": {"records": {"emtljcnyhwoyq": {"checkIn": "16:24", "checkOut": "00:29", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:35", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-27": {"records": {"emtljcnyhwoyq": {"checkIn": "15:40", "checkOut": "00:56", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:56", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:27", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-29": {"records": {"emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "13:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtlnfm4hxgt0": {"checkIn": "13:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-30": {"records": {"emtljcnyhwoyq": {"checkIn": "17:35", "checkOut": "01:27", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:27"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-08-31": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:28", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-11": {"records": {}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-01": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-02": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "overtimeApproved": false, "overtimeApprovedBy": null, "overtimeApprovedAt": null, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:03", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-04": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2025-09-05": {"records": {"emtljcnyhwoyq": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljkwq98a15": {"checkIn": "14:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "09:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "21:15", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "09:15"}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:58", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2025-09-06": {"records": {"emtljcnyhwoyq": {"checkIn": "17:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2025-09-07": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "13:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:49", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "13:46", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:08", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2025-09-08": {"records": {"emtljcnyhwoyq": {"checkIn": "17:08", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "15:14", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:25", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:10", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2025-09-09": {"records": {"emtljcnyhwoyq": {"checkIn": "16:23", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:24", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:15", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-07": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "00:35", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "13:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:49", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljs4c9evg7": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "13:46", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 3}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:08", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:32", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-08": {"records": {"emtljcnyhwoyq": {"checkIn": "17:48", "checkOut": "01:26", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:26"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "23:30", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "11:30"}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "15:14", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:25", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:10", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-09": {"records": {"emtljcnyhwoyq": {"checkIn": "16:23", "checkOut": "00:12", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "17:59", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:24", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 4}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljr4ttg0l0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljtn817nbe": {"checkIn": "14:45", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtlju7mijlnd": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtlnfm4hxgt0": {"checkIn": "13:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtwctjyelgro": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-10": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-09-12": {"records": {}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-10-12": {"records": {}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-12": {"records": {"emtljcnyhwoyq": {"checkIn": "15:15", "checkOut": "00:35", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "16:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-12": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-11": {"records": {"emtljcnyhwoyq": {"checkIn": "13:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:21", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljpepll908": {"checkIn": "16:17", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljq5exw2nz": {"checkIn": "17:54", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "17:00", "checkOut": "00:00", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "17:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-10": {"records": {"emtljcnyhwoyq": {"checkIn": "15:21", "checkOut": "21:21", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "09:21"}, "emtljkwq98a15": {"checkIn": "15:21", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljr4ttg0l0": {"checkIn": "16:41", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljs4c9evg7": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-09": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:25", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-08": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:15", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "15:10", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-07": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:55", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-06": {"records": {"emtljcnyhwoyq": {"checkIn": "12:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "17:47", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-05": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-04": {"records": {"emtljcnyhwoyq": {"checkIn": "14:03", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-03": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-02": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "12:00", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-01": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-13": {"records": {"emtljcnyhwoyq": {"checkIn": "15:40", "checkOut": "01:15", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:15"}, "emtljkwq98a15": {"checkIn": "13:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:28", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-14": {"records": {"emtljcnyhwoyq": {"checkIn": "13:00", "checkOut": "23:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "11:00"}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-15": {"records": {"emtljcnyhwoyq": {"checkIn": "14:22", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-16": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "23:44", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "11:44"}, "emtljkwq98a15": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljr4ttg0l0": {"checkIn": "15:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-17": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:45", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-18": {"records": {"emtljcnyhwoyq": {"checkIn": "17:00", "checkOut": "00:50", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "23:00", "leave": false, "absent": false, "fingerprintForgotten": false, "overtimeApproved": true, "overtimeApprovedBy": "مازن", "overtimeApprovedAt": "2026-09-12T02:11:04.430Z"}, "emtljoahtj17t": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-19": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-20": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljq5exw2nz": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-21": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-22": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:46", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-23": {"records": {"emtljcnyhwoyq": {"checkIn": "14:40", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljq5exw2nz": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "16:43", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-24": {"records": {"emtljcnyhwoyq": {"checkIn": "14:40", "checkOut": "00:20", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:48", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljq5exw2nz": {"checkIn": "14:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-25": {"records": {"emtljcnyhwoyq": {"checkIn": "14:46", "checkOut": "23:40", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "11:40"}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false, "_fingerprintOccurrence": 6}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljq5exw2nz": {"checkIn": "16:25", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:38", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-26": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-27": {"records": {"emtljcnyhwoyq": {"checkIn": "16:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-28": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 10}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:25", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 10}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-29": {"records": {"emtljcnyhwoyq": {"checkIn": "10:31", "checkOut": "03:30", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2, "checkOutOriginal": "15:30"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 11}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 10}, "emtljq5exw2nz": {"checkIn": "18:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 11}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-06-30": {"records": {"emtljcnyhwoyq": {"checkIn": "", "checkOut": "", "leave": true, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljoahtj17t": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-01": {"records": {"emtljcnyhwoyq": {"checkIn": "11:30", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljlhmodzpz": {"checkIn": "11:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-02": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljlhmodzpz": {"checkIn": "01:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljnvcha2wm": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-03": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-04": {"records": {"emtljcnyhwoyq": {"checkIn": "16:40", "checkOut": "00:55", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "17:15", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "02:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "14:00"}, "emtljoahtj17t": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "16:05", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-05": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljpepll908": {"checkIn": "14:10", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:47", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-06": {"records": {"emtljcnyhwoyq": {"checkIn": "15:43", "checkOut": "01:05", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:05"}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-07": {"records": {"emtljcnyhwoyq": {"checkIn": "15:40", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:16", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-08": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:50", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "", "checkOut": "", "leave": false, "absent": true, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-09": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-10": {"records": {"emtljcnyhwoyq": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-11": {"records": {"emtljcnyhwoyq": {"checkIn": "13:30", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:50", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-13": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-14": {"records": {"emtljcnyhwoyq": {"checkIn": "14:57", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljnildgyte": {"checkIn": "14:33", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:22", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-15": {"records": {"emtljcnyhwoyq": {"checkIn": "15:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:32", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-16": {"records": {"emtljcnyhwoyq": {"checkIn": "14:48", "checkOut": "01:40", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:40"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "18:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-17": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-18": {"records": {"emtljcnyhwoyq": {"checkIn": "15:17", "checkOut": "00:20", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:45", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljlhmodzpz": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:55", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljq5exw2nz": {"checkIn": "16:07", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljqnipyxii": {"checkIn": "14:33", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-19": {"records": {"emtljcnyhwoyq": {"checkIn": "14:36", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "20:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "08:00"}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "01:40", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:40"}, "emtljnildgyte": {"checkIn": "15:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-20": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:40", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-21": {"records": {"emtljcnyhwoyq": {"checkIn": "00:00", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "12:00", "checkOut": "02:52", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "14:52"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "16:28", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 10}, "emtljqnipyxii": {"checkIn": "18:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-22": {"records": {"emtljcnyhwoyq": {"checkIn": "15:20", "checkOut": "00:21", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "13:30", "checkOut": "00:30", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 3}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:21", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "16:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-23": {"records": {"emtljcnyhwoyq": {"checkIn": "12:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljq5exw2nz": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "13:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-24": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-25": {"records": {"emtljcnyhwoyq": {"checkIn": "15:50", "checkOut": "00:47", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "02:30", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "14:30"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 4}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 11}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-26": {"records": {"emtljcnyhwoyq": {"checkIn": "17:05", "checkOut": "01:30", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:30"}, "emtljkwq98a15": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 10}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "14:10", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 5}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "16:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-27": {"records": {"emtljcnyhwoyq": {"checkIn": "16:10", "checkOut": "01:00", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:00"}, "emtljkwq98a15": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 11}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "15:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 6}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-28": {"records": {"emtljcnyhwoyq": {"checkIn": "15:03", "checkOut": "01:30", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "13:30"}, "emtljkwq98a15": {"checkIn": "16:38", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:30", "checkOut": "21:45", "leave": false, "absent": false, "fingerprintForgotten": false, "checkOutOriginal": "09:45"}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 8}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 9}, "emtljq5exw2nz": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 12}, "emtljqnipyxii": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 7}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-29": {"records": {"emtljcnyhwoyq": {"checkIn": "15:44", "checkOut": "00:48", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "19:15", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:40", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:00", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 1}}, "approved": false, "approvedBy": null, "approvedAt": null}, "2026-07-30": {"records": {"emtljcnyhwoyq": {"checkIn": "14:30", "checkOut": "00:50", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljkwq98a15": {"checkIn": "15:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljlhmodzpz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnildgyte": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljnvcha2wm": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljoahtj17t": {"checkIn": "12:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljpepll908": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljq5exw2nz": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljqnipyxii": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljr4ttg0l0": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljs4c9evg7": {"checkIn": "14:30", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljshnt9huf": {"checkIn": "14:00", "checkOut": "00:00", "leave": false, "absent": false, "fingerprintForgotten": false}, "emtljszq9p218": {"checkIn": "14:30", "checkOut": "", "leave": false, "absent": false, "fingerprintForgotten": true, "_fingerprintOccurrence": 2}}, "approved": false, "approvedBy": null, "approvedAt": null}}, "withdrawals": {"2026-08-01": {"emtljcnyhwoyq": 185500}, "2026-09-01": {"emtljtn817nbe": 9000, "emtljkwq98a15": 3000, "emtljnildgyte": 6000, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljpepll908": 3000, "emtljqnipyxii": 3500, "emtljr4ttg0l0": 3000, "emtljs4c9evg7": 5000, "emtljshnt9huf": 2500, "emtljszq9p218": 7000, "emtlnfm4hxgt0": 6000, "emtwctjyelgro": 2500}, "2026-09-02": {"emtljcnyhwoyq": 5000, "emtljkwq98a15": 4000, "emtljnildgyte": 6000, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljpepll908": 3000, "emtljqnipyxii": 3500, "emtljr4ttg0l0": 3700, "emtljs4c9evg7": 5000, "emtljshnt9huf": 2500, "emtljszq9p218": 7000, "emtljtn817nbe": 9000, "emtlnfm4hxgt0": 11000, "emtwctjyelgro": 2500}, "2026-09-03": {"emtljcnyhwoyq": 7500, "emtljtn817nbe": 13000, "emtljkwq98a15": 4500, "emtljlhmodzpz": 5000, "emtljnildgyte": 9000, "emtljnvcha2wm": 4000, "emtljoahtj17t": 4000, "emtljpepll908": 4500, "emtljqnipyxii": 5500, "emtljr4ttg0l0": 4500, "emtljs4c9evg7": 7500, "emtljszq9p218": 10000, "emtlnfm4hxgt0": 9000, "emtwctjyelgro": 2500}, "2026-09-05": {"emtljcnyhwoyq": 4500, "emtljkwq98a15": 3000, "emtljnildgyte": 5500, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljpepll908": 2500, "emtljqnipyxii": 3000, "emtljr4ttg0l0": 2500, "emtljs4c9evg7": 4500, "emtljshnt9huf": 2000, "emtljszq9p218": 7000, "emtljtn817nbe": 9000, "emtlnfm4hxgt0": 5500, "emtwctjyelgro": 2000}, "2026-09-06": {"emtljcnyhwoyq": 4000, "emtljkwq98a15": 2500, "emtljlhmodzpz": 2000, "emtljnildgyte": 5500, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljpepll908": 2500, "emtljqnipyxii": 1500, "emtljr4ttg0l0": 2500, "emtljs4c9evg7": 4500, "emtljshnt9huf": 2500, "emtljtn817nbe": 9000, "emtlnfm4hxgt0": 5000, "emtwctjyelgro": 2000}, "2026-09-07": {"emtljcnyhwoyq": 5000, "emtljtn817nbe": 9000, "emtljkwq98a15": 3000, "emtljlhmodzpz": 2000, "emtljnildgyte": 6000, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljpepll908": 3000, "emtljr4ttg0l0": 3000, "emtljs4c9evg7": 6000, "emtljshnt9huf": 2500, "emtlnfm4hxgt0": 6000, "emtwctjyelgro": 2500}, "2026-09-08": {"emtljcnyhwoyq": 5000, "emtljkwq98a15": 3000, "emtljlhmodzpz": 2000, "emtljnildgyte": 6000, "emtljnvcha2wm": 2000, "emtljoahtj17t": 2000, "emtljr4ttg0l0": 3000, "emtljs4c9evg7": 6000, "emtljtn817nbe": 9000, "emtlnfm4hxgt0": 6000, "emtwctjyelgro": 2500}, "2026-09-09": {"emtljcnyhwoyq": 1500, "emtljkwq98a15": 2500, "emtljlhmodzpz": 3000, "emtljnildgyte": 5000, "emtljnvcha2wm": 1500, "emtljoahtj17t": 1500, "emtljqnipyxii": 3000, "emtljs4c9evg7": 5000, "emtljshnt9huf": 2000, "emtljtn817nbe": 8000, "emtlnfm4hxgt0": 5000, "emtwctjyelgro": 2000}, "2026-09-10": {"emtljcnyhwoyq": 10000}, "2026-06-01": {"emtljcnyhwoyq": 92000, "emtljkwq98a15": 107500, "emtljlhmodzpz": 75050, "emtljnildgyte": 120500, "emtljnvcha2wm": 51500, "emtljoahtj17t": 49000, "emtljpepll908": 65000, "emtljq5exw2nz": 98000, "emtljqnipyxii": 61250, "emtljr4ttg0l0": 91000, "emtljshnt9huf": 24500, "emtljszq9p218": 23000}}, "advances": {"2026-08": {}}, "invoices": {}};

/* سحبيات أغسطس 2026 (استيراد لمرة واحدة) */
const WD_AUG={"2026-08-01":{"emtljnildgyte":5000,"emtljszq9p218":6000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-02":{"emtljnildgyte":6000,"emtljszq9p218":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-03":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":4000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-04":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":4000,"emtljkwq98a15":3000,"emtljnvcha2wm":4000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljcnyhwoyq":5000},"2026-08-05":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":4000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":7000},"2026-08-06":{"emtljnildgyte":10000,"emtljszq9p218":12000,"emtljq5exw2nz":10000,"emtljpepll908":6000,"emtljqnipyxii":6500,"emtljr4ttg0l0":7000,"emtljtn817nbe":27000,"emtljs4c9evg7":14000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":8000,"emtljkwq98a15":5000,"emtljnvcha2wm":7000,"emtfuadghafari1":5000,"emtljlhmodzpz":5000,"emtljshnt9huf":4000,"emtljcnyhwoyq":10000},"2026-08-07":{"emtlnfm4hxgt0":20000,"emtljnvcha2wm":2000},"2026-08-08":{"emtljnildgyte":6000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":4000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-09":{"emtljnildgyte":6000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":7000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-10":{"emtljnildgyte":5000,"emtljszq9p218":5000,"emtljq5exw2nz":5000,"emtljpepll908":2000,"emtljqnipyxii":2500,"emtljr4ttg0l0":2000,"emtljtn817nbe":9000,"emtljs4c9evg7":4000,"emtlju7mijlnd":6000,"emtlnfm4hxgt0":4000,"emtljkwq98a15":3000,"emtljnvcha2wm":3000,"emtljlhmodzpz":2500,"emtljshnt9huf":2000,"emtljoahtj17t":3000},"2026-08-11":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-12":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":10000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-13":{"emtljnildgyte":8000,"emtljszq9p218":9000,"emtljq5exw2nz":8000,"emtljpepll908":4500,"emtljqnipyxii":4500,"emtljr4ttg0l0":4500,"emtljtn817nbe":14000,"emtljs4c9evg7":8000,"emtlju7mijlnd":9000,"emtlnfm4hxgt0":12000,"emtljkwq98a15":5000,"emtljnvcha2wm":6000,"emtfuadghafari1":9000,"emtljlhmodzpz":4000,"emtljshnt9huf":4000,"emtljoahtj17t":2000,"emtljcnyhwoyq":4500},"2026-08-15":{"emtljnildgyte":6000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":4000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtljlhmodzpz":3000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":10000},"2026-08-16":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-17":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":20000,"emtljnvcha2wm":2000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-18":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljq5exw2nz":6000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-19":{"emtljnildgyte":5000,"emtljszq9p218":6000,"emtljpepll908":2500,"emtljqnipyxii":3000,"emtljr4ttg0l0":3000,"emtljtn817nbe":8000,"emtlju7mijlnd":7000,"emtlnfm4hxgt0":2500,"emtljkwq98a15":2500,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":4000},"2026-08-20":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":8000,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":5500,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":6000,"emtljshnt9huf":11000,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-22":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-23":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-24":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":32050,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-25":{"emtljnildgyte":3000,"emtljpepll908":1500,"emtljqnipyxii":2000,"emtljr4ttg0l0":1500,"emtljtn817nbe":7000,"emtljs4c9evg7":2500,"emtlju7mijlnd":4000,"emtlnfm4hxgt0":3000,"emtljnvcha2wm":2000,"emtljshnt9huf":5950,"emtljoahtj17t":4000,"emtljcnyhwoyq":2500},"2026-08-26":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljcnyhwoyq":5000},"2026-08-27":{"emtljnildgyte":9000,"emtljszq9p218":17500,"emtljpepll908":4500,"emtljqnipyxii":5500,"emtljr4ttg0l0":4500,"emtljtn817nbe":39000,"emtljs4c9evg7":7500,"emtlju7mijlnd":10000,"emtlnfm4hxgt0":9000,"emtljkwq98a15":28500,"emtljnvcha2wm":4000,"emtfuadghafari1":15000,"emtljlhmodzpz":5000,"emtljshnt9huf":4000,"emtljoahtj17t":4000,"emtljcnyhwoyq":7500},"2026-08-29":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":8000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":5000,"emtljshnt9huf":2500,"emtljoahtj17t":2000},"2026-08-30":{"emtljnildgyte":6000,"emtljszq9p218":7000,"emtljpepll908":3000,"emtljqnipyxii":3500,"emtljr4ttg0l0":3000,"emtljtn817nbe":9000,"emtljs4c9evg7":5000,"emtlju7mijlnd":10000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":10000,"emtljlhmodzpz":5000,"emtljshnt9huf":2500,"emtljoahtj17t":2000,"emtljcnyhwoyq":5000},"2026-08-31":{"emtljnildgyte":5000,"emtljszq9p218":6000,"emtljpepll908":2500,"emtljqnipyxii":3000,"emtljr4ttg0l0":2500,"emtljtn817nbe":7000,"emtljs4c9evg7":7000,"emtlju7mijlnd":6000,"emtlnfm4hxgt0":6000,"emtljkwq98a15":3000,"emtljnvcha2wm":2000,"emtfuadghafari1":8000,"emtljshnt9huf":2000,"emtljoahtj17t":2000,"emtljcnyhwoyq":55000}};

/* ================= js/output.js (الطباعة والمشاركة والحفظ) ================= */
/* =====================================================================
   output.js — الطباعة والمشاركة والحفظ (وحدة واحدة موحّدة)
   كل كشوفات التطبيق تمر من هنا:
     Output.preview({ title, name, orient, bodyHtml }, { autoShare })
     Output.save(name, data, mime)

   أسباب المشاكل السابقة وما يعالجها هذا الملف:
   1) window.print() داخل تطبيقات WebView / iOS يغلق التطبيق أو يطبع صفحة خاطئة
      -> هناك الطباعة تتم عبر ملف PDF يُفتح من قائمة المشاركة (iOS فيها خيار Print).
   2) navigator.share() يُرفض إن مرّ وقت طويل بعد الضغط (أثناء توليد PDF)
      -> نحاول المشاركة، وإن رُفضت نعرض نافذة فيها زر «مشاركة» جديد يعمل فورًا.
   3) PDF فارغ أو قُصّ جانبه على الجوال (عرض الصفحة = عرض الشاشة، وكانفاس أكبر من حد المتصفح)
      -> عرض ثابت بمقاس A4 + تصغير تلقائي لدقة الكانفاس حسب حجم الكشف.
   4) مكتبة html2pdf لا تُحمَّل أحيانًا -> محاولة 3 مصادر (محلي ثم cdnjs ثم jsdelivr)
      وإن فشلت كلها تُحفظ نسخة HTML بدل أن لا يحدث شيء.
   ===================================================================== */
(function () {
'use strict';

var UA = navigator.userAgent || '';
var IS_IOS = /iPhone|iPad|iPod/.test(UA) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(UA));
var IS_MOBILE = IS_IOS || /Android/i.test(UA);
var IN_WV = /; wv\)|\bwv\b|WebView|GoNative|Median|WebViewGold/i.test(UA) || (/iPhone|iPad|iPod/.test(UA) && !/Safari\//.test(UA));
var PAGE_W = { landscape: 1123, portrait: 794 };           /* عرض A4 بالبكسل عند 96dpi */
var LIB_SOURCES = [
  new URL('libs/html2pdf.bundle.min.js', document.baseURI).href,
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js'
];

var $ = function (id) { return document.getElementById(id); };
function escH(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function safeName(n) { return String(n || 'file').replace(/[\\\/:*?"<>|]+/g, '_').trim() || 'file'; }
function isBlobLike(d) { return d && typeof d === 'object' && typeof d.size === 'number' && typeof d.slice === 'function'; }
function isTextType(t) { return /^text\/|json|csv|xml/i.test(t || ''); }

function toast(t, ms) {
  var el = $('shToast'); if (!el) return;
  el.textContent = t; el.style.display = 'block';
  clearTimeout(toast._t); toast._t = setTimeout(function () { el.style.display = 'none'; }, ms || 3000);
}

/* ---------------- النوافذ + زر الرجوع في الجوال ---------------- */
var ovStack = [], ovSkip = 0;
function ovShow(id) { $(id).classList.add('open'); ovStack.push(id); history.pushState({ ov: id }, ''); }
function ovHideTop() {
  var id = ovStack.pop(); if (!id) return;
  $(id).classList.remove('open');
  if (id === 'rv') { var f = $('rvFrame'); f.onload = null; f.removeAttribute('srcdoc'); RV.doc = null; RV.pdf = null; cleanupMainPrint(); }
  if (id === 'sv') svCleanup();
}
function ovClose() {
  if (!ovStack.length) return;
  ovHideTop(); ovSkip++; setTimeout(function () { ovSkip = 0; }, 500);
  try { history.back(); } catch (e) {}
}
window.addEventListener('popstate', function () {
  if (ovSkip > 0) { ovSkip--; return; }
  if (ovStack.length) ovHideTop();
});

/* ---------------- حفظ / تنزيل ---------------- */
function anchorDownload(name, blob) {
  var u = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = u; a.download = name; a.rel = 'noopener'; a.style.display = 'none';
  document.body.appendChild(a); a.click();
  /* لا يُلغى الرابط بسرعة: الإلغاء المبكر هو سبب الملف ذي الحجم صفر */
  setTimeout(function () { a.remove(); URL.revokeObjectURL(u); }, 120000);
}
function canShareFile(blob, name) {
  try {
    var f = new File([blob], name, { type: blob.type || 'application/octet-stream' });
    return (navigator.canShare && navigator.canShare({ files: [f] })) ? f : null;
  } catch (e) { return null; }
}
function save(name, data, mime) {
  var blob = isBlobLike(data) ? data : new Blob([data], { type: mime || 'application/octet-stream' });
  name = safeName(name);
  if (IN_WV) { svOpen(name, blob); return; }          /* WebView لا يدعم تنزيل blob: -> نافذة داخل التطبيق */
  anchorDownload(name, blob);
  toast('تم تنزيل الملف: ' + name, 3500);
}

/* ---------------- نافذة الحفظ الاحتياطية (#sv) ---------------- */
var SV = { name: '', blob: null };
function svSay(t) { $('svMsg').textContent = t || ''; }
function svCleanup() { $('svPrev').innerHTML = ''; svSay(''); SV.blob = null; }
function svOpen(name, blob, note) {
  SV.name = name; SV.blob = blob;
  var kb = Math.max(1, Math.round(blob.size / 1024));
  $('svInfo').textContent = name + ' — ' + (kb > 1024 ? (kb / 1024).toFixed(1) + ' MB' : kb + ' KB');
  var prev = $('svPrev'); prev.innerHTML = '';
  if (/^image\//.test(blob.type)) {
    var im = document.createElement('img'); im.src = URL.createObjectURL(blob); prev.appendChild(im);
    svSay('اضغط مطوّلًا على الصورة لحفظها، أو استخدم الأزرار.');
  } else if (isTextType(blob.type) && blob.size < 300000) {
    var ta = document.createElement('textarea'); ta.readOnly = true; prev.appendChild(ta);
    var r = new FileReader(); r.onload = function () { ta.value = r.result; }; r.readAsText(blob);
  }
  if (note) svSay(note);
  $('svShare').style.display = canShareFile(blob, name) ? '' : 'none';
  $('svCopy').style.display = isTextType(blob.type) ? '' : 'none';
  if (!ovStack.length || ovStack[ovStack.length - 1] !== 'sv') ovShow('sv');
}
$('svClose').addEventListener('click', ovClose);
$('sv').addEventListener('click', function (e) { if (e.target === $('sv')) ovClose(); });
$('svShare').addEventListener('click', function () {
  var f = SV.blob && canShareFile(SV.blob, SV.name);
  if (!f) { svSay('المشاركة غير متاحة على هذا الجهاز.'); return; }
  /* هذا الاستدعاء يحدث مباشرة داخل ضغطة المستخدم فلا يُرفض */
  navigator.share({ files: [f], title: SV.name }).catch(function (e) {
    if (e && e.name !== 'AbortError') svSay('تعذّرت المشاركة، جرّب «تنزيل الملف».');
  });
});
$('svDl').addEventListener('click', function () {
  if (!SV.blob) return;
  /* data: بدل blob: لأن بعض تطبيقات WebView لا تستطيع قراءة روابط blob */
  var r = new FileReader();
  r.onload = function () {
    var a = document.createElement('a'); a.href = r.result; a.download = SV.name; a.style.display = 'none';
    document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 2000);
    svSay('بدأ التنزيل. إن لم يظهر الملف في التنزيلات فاستخدم «مشاركة».');
  };
  r.onerror = function () { svSay('تعذّر تجهيز الملف.'); };
  r.readAsDataURL(SV.blob);
});
$('svCopy').addEventListener('click', function () {
  if (!SV.blob) return;
  var r = new FileReader();
  r.onload = function () {
    var txt = r.result;
    var fb = function () {
      var ta = document.createElement('textarea'); ta.value = txt; ta.style.cssText = 'position:fixed;opacity:0;top:0';
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove();
      svSay(ok ? 'تم نسخ المحتوى.' : 'تعذّر النسخ تلقائيًا، حدّد النص من المربع أعلاه وانسخه.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { svSay('تم نسخ المحتوى.'); }, fb); else fb();
  };
  r.readAsText(SV.blob);
});

/* ---------------- بناء مستند الكشف ---------------- */
var cssPromise = null;
function readSheetsCss() {
  var out = '';
  for (var i = 0; i < document.styleSheets.length; i++) {
    var rules;
    try { rules = document.styleSheets[i].cssRules; } catch (e) { return null; }   /* file:// أو مصدر خارجي */
    if (!rules) continue;
    for (var j = 0; j < rules.length; j++) out += rules[j].cssText + '\n';
  }
  return out;
}
function getCss() {
  if (cssPromise) return cssPromise;
  cssPromise = new Promise(function (res) {
    var c = readSheetsCss();
    if (c) return res(c);
    fetch(new URL('css/style.css', document.baseURI).href).then(function (r) { return r.text(); }).then(res, function () { res(''); });
  });
  return cssPromise;
}
function buildDoc(o, css) {
  var orient = o.orient === 'landscape' ? 'landscape' : 'portrait', W = PAGE_W[orient];
  var overrides =
    'html,body{background:#fff!important;color:#000!important;margin:0!important;padding:0!important;display:block!important;height:auto!important;min-height:0!important;overflow:visible!important}' +
    '#rvRoot{background:#fff;margin:0}' +
    '.osheet{max-width:none!important;margin:0!important;box-shadow:none!important}' +
    'section.tabpage{display:block!important}' +
    '@page{size:A4 ' + orient + ';margin:10mm}' +
    '@media print{#rvRoot{width:auto!important;zoom:1!important}section.tabpage{display:block!important}.no-print{display:none!important}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
  var cssTag = css ? '<style>' + css + '</style>'
                   : '<link rel="stylesheet" href="' + escH(new URL('css/style.css', document.baseURI).href) + '">';
  return '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"><title>' + escH(o.name) + '</title>' +
    cssTag + '<style>' + overrides + '</style></head><body>' +
    '<div id="rvRoot" style="width:' + W + 'px"><div class="osheet">' + o.bodyHtml + '</div></div></body></html>';
}

/* ---------------- المعاينة ---------------- */
var RV = { name: 'report', orient: 'landscape', W: PAGE_W.landscape, doc: null, pdf: null, ready: Promise.resolve(), busy: false };
function say(t) { $('rvMsg').textContent = t || ''; }
function setBusy(b) {
  RV.busy = b;
  ['rvPrint', 'rvShare', 'rvPdf'].forEach(function (id) { $(id).disabled = b; });
}
function fitPreview() {
  var f = $('rvFrame'), d;
  try { d = f.contentDocument; } catch (e) { return; }
  var root = d && d.getElementById('rvRoot'); if (!root) return;
  var avail = f.clientWidth || RV.W;
  root.style.zoom = avail < RV.W ? (avail / RV.W) : 1;   /* على الجوال: تصغير المعاينة لتناسب الشاشة */
}
window.addEventListener('resize', fitPreview);

function preview(o, opts) {
  RV.name = safeName(o.name || o.title);
  RV.orient = o.orient === 'landscape' ? 'landscape' : 'portrait';
  RV.W = PAGE_W[RV.orient]; RV.pdf = null; setBusy(false);
  say((IS_MOBILE || IN_WV) ? 'للطباعة اضغط «طباعة»، وللإرسال «مشاركة PDF».' : '');
  if (!$('rv').classList.contains('open')) ovShow('rv');
  var f = $('rvFrame');
  RV.ready = new Promise(function (res) { f.onload = function () { fitPreview(); res(); }; });
  return getCss().then(function (css) {
    RV.doc = buildDoc({ name: RV.name, orient: RV.orient, bodyHtml: o.bodyHtml }, css);
    f.srcdoc = RV.doc;
    if (opts && opts.autoShare) return RV.ready.then(function () { return exportPdf('share'); });
  });
}

function imagesReady(d) {
  var imgs = [].slice.call((d && d.images) || []);
  var all = Promise.all(imgs.map(function (im) {
    if (im.complete) return Promise.resolve();
    return im.decode ? im.decode().catch(function () {}) : new Promise(function (r) { im.onload = im.onerror = r; });
  }));
  return Promise.race([all, new Promise(function (r) { setTimeout(r, 4000); })]);
}

/* ---------------- الطباعة ---------------- */
var rvOldTitle = null;
function cleanupMainPrint() {
  var r = $('rvPrintRoot'); if (r) r.remove();
  var s = $('rvPrintStyle'); if (s) s.remove();
  if (rvOldTitle !== null) { document.title = rvOldTitle; rvOldTitle = null; }
}
window.addEventListener('afterprint', function () { setTimeout(cleanupMainPrint, 1500); });

function mainWindowPrint(d) {         /* خطة بديلة: طباعة نسخة من الكشف من النافذة الرئيسية */
  var root = d.getElementById('rvRoot'); if (!root) { say('المعاينة غير جاهزة.'); return; }
  cleanupMainPrint();
  var css = ''; [].forEach.call(d.querySelectorAll('style'), function (s) { css += s.textContent + '\n'; });
  var st = document.createElement('style'); st.id = 'rvPrintStyle'; st.media = 'print';
  st.textContent = css + '\n@media print{html body>*:not(#rvPrintRoot){display:none!important}' +
    'html body>#rvPrintRoot{display:block!important;position:static!important;background:#fff!important;color:#000!important}' +
    'html,body{background:#fff!important;height:auto!important;overflow:visible!important;display:block!important;padding:0!important}}';
  document.head.appendChild(st);
  var box = document.createElement('div'); box.id = 'rvPrintRoot'; box.style.display = 'none';
  box.innerHTML = root.innerHTML; document.body.appendChild(box);
  rvOldTitle = document.title; document.title = RV.name;
  setTimeout(function () { try { window.focus(); window.print(); } catch (e) { cleanupMainPrint(); say('الطباعة المباشرة غير مدعومة هنا — استخدم «حفظ PDF».'); } }, 200);
}
function printNow() {
  if (!RV.doc) { say('المعاينة غير جاهزة بعد.'); return; }
  /* WebView وiOS: لا طباعة مباشرة (تغلق التطبيق أو تطبع الصفحة الخطأ) -> PDF ثم قائمة المشاركة (فيها Print) */
  if (IN_WV || IS_IOS) {
    say(IS_IOS && !IN_WV ? 'بعد ظهور قائمة المشاركة اختر «Print / طباعة».' : 'سيُجهَّز ملف PDF — افتحه من عارض الملفات واطبعه.');
    exportPdf('print'); return;
  }
  RV.ready.then(function () {
    var f = $('rvFrame'), w = f.contentWindow, d = f.contentDocument;
    var old = document.title; document.title = RV.name;
    try { d.title = RV.name; } catch (e) {}
    w.addEventListener('afterprint', function h() { w.removeEventListener('afterprint', h); document.title = old; });
    imagesReady(d).then(function () {
      setTimeout(function () {
        try { w.focus(); w.print(); } catch (e) { document.title = old; mainWindowPrint(d); }
      }, 150);
    });
  });
}

/* ---------------- توليد PDF ---------------- */
function loadLib(w) {
  if (w.html2pdf) return Promise.resolve();
  return new Promise(function (res, rej) {
    var i = 0;
    (function next() {
      if (i >= LIB_SOURCES.length) return rej(new Error('html2pdf unavailable'));
      var sc = w.document.createElement('script'); sc.src = LIB_SOURCES[i++];
      sc.onload = function () { w.html2pdf ? res() : next(); };
      sc.onerror = function () { sc.remove(); next(); };
      w.document.head.appendChild(sc);
    })();
  });
}
function makePdf() {
  var f = $('rvFrame');
  return RV.ready
    .then(function () { return imagesReady(f.contentDocument); })
    .then(function () { return loadLib(f.contentWindow); })
    .then(function () {
      var w = f.contentWindow, d = f.contentDocument, root = d.getElementById('rvRoot');
      if (!root) throw new Error('no root');
      var W = RV.W, oldZoom = root.style.zoom;
      root.style.zoom = 1;
      /* تحديد دقة الكانفاس حسب حجم الكشف حتى لا يتجاوز حد المتصفح (وإلا يخرج PDF فارغًا) */
      var est = Math.max(root.scrollHeight, root.offsetHeight) * 1.15;
      var lim = IS_IOS ? { area: 14e6, dim: 8192 } : IS_MOBILE ? { area: 30e6, dim: 16384 } : { area: 90e6, dim: 32767 };
      var scale = Math.min(IS_MOBILE ? 1.5 : 2, Math.sqrt(lim.area / (W * est)), lim.dim / est, lim.dim / W);
      scale = Math.max(0.5, Math.round(scale * 100) / 100);
      var restore = function () { root.style.zoom = oldZoom; };
      return w.html2pdf().set({
        margin: [8, 8, 8, 8],
        image: { type: 'jpeg', quality: 0.92 },
        html2canvas: { scale: scale, useCORS: true, backgroundColor: '#ffffff', windowWidth: W, scrollX: 0, scrollY: 0, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: RV.orient },
        pagebreak: { mode: ['css', 'legacy'], avoid: ['tr', '.sign'] }
      }).from(root).outputPdf('blob').then(function (b) { restore(); return b; }, function (e) { restore(); throw e; });
    })
    .then(function (blob) {
      if (!blob || blob.size < 1500) throw new Error('empty pdf');
      return blob.type === 'application/pdf' ? blob : new Blob([blob], { type: 'application/pdf' });
    });
}

/* mode: 'share' | 'save' | 'print' */
function deliver(blob, name, mode, fresh) {
  if (mode === 'save') { save(name, blob, 'application/pdf'); return Promise.resolve(); }
  var f = canShareFile(blob, name);
  if (!f) { save(name, blob, 'application/pdf'); return Promise.resolve(); }
  var active = fresh || !navigator.userActivation || navigator.userActivation.isActive;
  var note = mode === 'print' ? 'اضغط «مشاركة» ثم اختر Print / طباعة، أو احفظ الملف واطبعه.' : 'الملف جاهز — اضغط «مشاركة» لإرساله.';
  if (!active) { svOpen(name, blob, note); return Promise.resolve(); }   /* انتهت صلاحية الضغطة: زر جديد يعمل فورًا */
  return navigator.share({ files: [f], title: RV.name }).catch(function (e) {
    if (e && e.name === 'AbortError') return;
    svOpen(name, blob, note);
  });
}
function exportPdf(mode) {
  if (RV.busy) return Promise.resolve();
  if (!RV.doc) { say('المعاينة غير جاهزة بعد.'); return Promise.resolve(); }
  var name = RV.name + '.pdf';
  if (RV.pdf) return deliver(RV.pdf, name, mode, true);
  setBusy(true); say('جارٍ تجهيز ملف PDF… قد يستغرق دقيقة للكشوف الكبيرة.');
  return makePdf().then(function (blob) {
    RV.pdf = blob; setBusy(false); say('تم تجهيز الملف ✓');
    return deliver(blob, name, mode, false);
  }).catch(function (err) {
    setBusy(false); console.warn('PDF failed', err);
    say('تعذّر إنشاء PDF (تحقق من الإنترنت) — تم تجهيز نسخة HTML بدلًا منها.');
    save(RV.name + '.html', RV.doc, 'text/html');
  });
}

$('rvPrint').addEventListener('click', printNow);
$('rvShare').addEventListener('click', function () { exportPdf('share'); });
$('rvPdf').addEventListener('click', function () { exportPdf('save'); });
$('rvClose').addEventListener('click', ovClose);

window.Output = { preview: preview, save: save, toast: toast };
window.shellSave = save;      /* اسم قديم للتوافق */
})();

/* ================= js/app.js (منطق التطبيق) ================= */
(function(){
  "use strict";

  /* ================= Storage ================= */
  const LS_SETTINGS='niveen_att_settings_v3', LS_EMPLOYEES='niveen_att_employees_v3', LS_SHEETS='niveen_att_sheets_v3', LS_COMPANY='niveen_att_company', LS_WITHDRAWALS='niveen_att_withdrawals_v1', LS_ADVANCES='niveen_att_advances_v1', LS_INVOICES='niveen_att_invoices_v1';

  function loadJSON(key, fallback){
    try{ const raw=localStorage.getItem(key); if(!raw) return fallback; return JSON.parse(raw); }
    catch(e){ return fallback; }
  }
  function saveJSON(key, val){
    try{ localStorage.setItem(key, JSON.stringify(val)); return true; }
    catch(e){ console.error('Storage error', e); return false; }
  }

  const defaultSettings={
    shift1Start:'14:30', shift1End:'00:00',
    grace:15, workdays:26, hours:8, currency:'ر.ي', overtimeMultiplier:1
  };
  const seedEmployees=[
    {id:'e1', name:'مازن مسعود عبدالله حسين السنفاني', type:'موظف', job:'نجار', dept:'الأثاث', salary:90000, workdays:'', hours:'', grace:'', shift1Start:'', shift1End:'', active:true},
    {id:'e2', name:'سالم قايد', type:'موظف', job:'مسؤول مخزون', dept:'كاليون للتنظيف', salary:75000, workdays:'', hours:'', grace:'', shift1Start:'', shift1End:'', active:true},
    {id:'e3', name:'أحمد ناصر', type:'موظف', job:'بائع', dept:'نقاط البيع بالتجزئة', salary:60000, workdays:'', hours:'', grace:'', shift1Start:'', shift1End:'', active:true}
  ];

  let STATE={
    company: localStorage.getItem(LS_COMPANY) || 'نيفين للأثاث',
    settings: loadJSON(LS_SETTINGS, defaultSettings),
    employees: loadJSON(LS_EMPLOYEES, seedEmployees),
    sheets: loadJSON(LS_SHEETS, {}),
    withdrawals: loadJSON(LS_WITHDRAWALS, {}),
    advances: loadJSON(LS_ADVANCES, {}),
    penalties: loadJSON('niveen_att_penalties_v1', {}),
    invoices: loadJSON(LS_INVOICES, {})
  };
  if(!localStorage.getItem(LS_EMPLOYEES)) saveJSON(LS_EMPLOYEES, STATE.employees);
  if(!localStorage.getItem(LS_SETTINGS)) saveJSON(LS_SETTINGS, STATE.settings);

  function persist(){
    saveJSON(LS_SETTINGS, STATE.settings);
    saveJSON(LS_EMPLOYEES, STATE.employees);
    saveJSON(LS_SHEETS, STATE.sheets);
    saveJSON(LS_WITHDRAWALS, STATE.withdrawals);
    saveJSON(LS_ADVANCES, STATE.advances);
    saveJSON('niveen_att_penalties_v1', STATE.penalties);
    saveJSON(LS_INVOICES, STATE.invoices);
    localStorage.setItem(LS_COMPANY, STATE.company);
  }

  /* ===== بيانات مدمجة (نسخة 12 سبتمبر 2026 بعد تعديل الدوام إلى 14:30 — 00:00) تُحمَّل مرة واحدة ===== */
  const SEED_FLAG='niveen_seed_2026_10_28b';
  /* SEED_DATA -> js/seed-data.js */
  if(!localStorage.getItem(SEED_FLAG)){
    const hasLocal = Object.keys(STATE.sheets||{}).length>0;
    if(!hasLocal || confirm('يحتوي هذا الملف على بيانات الحضور المحدّثة (دوام 14:30 — 00:00). استبدال البيانات الحالية في هذا المتصفح بها؟')){
      STATE=SEED_DATA;
      if(!STATE.withdrawals) STATE.withdrawals={}; if(!STATE.advances) STATE.advances={}; if(!STATE.invoices) STATE.invoices={}; if(!STATE.penalties) STATE.penalties={};
      persist();
    }
    localStorage.setItem(SEED_FLAG,'1');
  }

  /* ===== دمج سحبيات شهر أغسطس 2026 (من ملف «كشف سحبيات الموظفين») — مرة واحدة، يستبدل أغسطس لهؤلاء الموظفين فقط ولا يمس باقي البيانات ===== */
  (function(){
    const WD_FLAG='niveen_wd_import_aug2026';
    if(localStorage.getItem(WD_FLAG)) return;
    /* WD_AUG -> js/seed-data.js */
    const WD_EMPS=[{"id":"emtljnildgyte","t":["رائد","اسكندر"],"no":[]},{"id":"emtljszq9p218","t":["احمد","الميموني"],"no":[]},{"id":"emtljq5exw2nz","t":["علاء","شعلان"],"no":[]},{"id":"emtljpepll908","t":["دحان"],"no":[]},{"id":"emtljqnipyxii","t":["ابراهيم","النشري"],"no":["محمد"]},{"id":"emtljr4ttg0l0","t":["ابراهيم","شعلان"],"no":[]},{"id":"emtljtn817nbe","t":["يوسف"],"no":[]},{"id":"emtljs4c9evg7","t":["ياتم"],"no":[]},{"id":"emtlju7mijlnd","t":["بندر"],"no":[]},{"id":"emtlnfm4hxgt0","t":["الماوري"],"no":[]},{"id":"emtljkwq98a15","t":["الرعيني"],"no":[]},{"id":"emtljnvcha2wm","t":["حمدي"],"no":[]},{"id":"emtfuadghafari1","t":["فؤاد","الغفاري"],"no":[]},{"id":"emtljlhmodzpz","t":["محمد","النشري"],"no":[]},{"id":"emtljshnt9huf","t":["فيصل"],"no":[]},{"id":"emtljoahtj17t","t":["صقر"],"no":[]},{"id":"emtljcnyhwoyq","t":["مازن"],"no":[]}];
    const norm=s=>String(s||'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[\u064B-\u0652]/g,'').replace(/\s+/g,' ').trim();
    const NEW_EMP={id:'emtfuadghafari1',name:'فؤاد عبده الغفاري',type:'موظف',job:'الإدارة',dept:'الإدارة',salary:300000,workdays:'',hours:'',grace:'',shift1Start:'',shift1End:'',active:true,annualLeave:''};
    const map={}, miss=[]; let added=false;
    WD_EMPS.forEach(w=>{
      let e=STATE.employees.find(x=>x.id===w.id);
      if(!e){
        const c=STATE.employees.filter(x=>{const n=norm(x.name);return w.t.every(t=>n.includes(t))&&!w.no.some(t=>n.includes(t));});
        if(c.length===1) e=c[0];
      }
      if(!e && w.id===NEW_EMP.id){ STATE.employees.push(NEW_EMP); e=NEW_EMP; added=true; }
      if(e) map[w.id]=e.id; else miss.push(w.t.join(' '));
    });
    let total=0;
    for(let d=1; d<=31; d++){
      const ds='2026-08-'+String(d).padStart(2,'0'), src=WD_AUG[ds]||{};
      const day=STATE.withdrawals[ds]||(STATE.withdrawals[ds]={});
      Object.keys(map).forEach(k=>{ const t=map[k]; if(src[k]>0){ day[t]=src[k]; total+=src[k]; } else delete day[t]; });
      if(!Object.keys(day).length) delete STATE.withdrawals[ds];
    }
    persist();
    localStorage.setItem(WD_FLAG,'1');
    setTimeout(()=>alert('تم دمج سحبيات أغسطس 2026: '+Object.keys(map).length+' موظفاً، الإجمالي '+total.toLocaleString('en-US')+(added?'\nتمت إضافة الموظف: فؤاد عبده الغفاري (لم يكن في القائمة).':'')+(miss.length?'\nلم تتم مطابقة: '+miss.join('، '):'')),700);
  })();

  /* ================= Utils ================= */
  function uid(){ return 'e'+Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
  function todayStr(){ const d=new Date(); return d.toISOString().slice(0,10); }
  function timeToMin(t){ if(!t) return null; const [h,m]=t.split(':').map(Number); return h*60+m; }
  function normMin(t){
    return timeToMin(t);
  }
  function minToHM(min){
    if(min<=0) return '0 د';
    const h=Math.floor(min/60), m=Math.round(min%60);
    let out=''; if(h>0) out+= h+' س '; out+= m+' د'; return out.trim();
  }
  function fmtMoney(n){ return (Math.round(n*100)/100).toLocaleString('ar-EG', {maximumFractionDigits:2}); }
  function fmtTime(t){ return t||'—'; }
  function escapeHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function activeEmployees(){ return STATE.employees.filter(e=>e.active!==false); }
  function empById(id){ return STATE.employees.find(e=>e.id===id); }
  function empType(emp){ return emp.type==='عامل' ? 'عامل' : 'موظف'; }
  function daysInMonth(monthStr){ const [y,m]=monthStr.split('-').map(Number); return new Date(y,m,0).getDate(); }
  function dateInMonth(monthStr, day){ return monthStr+'-'+String(day).padStart(2,'0'); }
  function weekdayShort(dateStr){ return new Date(dateStr+'T00:00:00').toLocaleDateString('ar-EG',{weekday:'long'}); }
  function withdrawalOf(date, empId){ const day=STATE.withdrawals[date]; return day && day[empId] ? Number(day[empId]) : 0; }
  function setWithdrawal(date, empId, val){
    if(!STATE.withdrawals[date]) STATE.withdrawals[date]={};
    if(val>0) STATE.withdrawals[date][empId]=val; else delete STATE.withdrawals[date][empId];
  }
  function withdrawalsForMonth(month, empId){
    let sum=0;
    Object.keys(STATE.withdrawals).forEach(date=>{
      if(!date.startsWith(month)) return;
      sum += withdrawalOf(date, empId);
    });
    return sum;
  }
  function invoiceAmountOf(month, empId){ const m=STATE.invoices[month]; return m && m[empId] ? Number(m[empId]) : 0; }
  function setInvoiceAmount(month, empId, val){
    if(!STATE.invoices[month]) STATE.invoices[month]={};
    if(val>0) STATE.invoices[month][empId]=val; else delete STATE.invoices[month][empId];
  }
  function penaltyOf(date, empId){ const d=STATE.penalties[date]; return d && d[empId] ? Number(d[empId]) : 0; }
  function setPenalty(date, empId, val){
    if(!STATE.penalties[date]) STATE.penalties[date]={};
    if(val>0) STATE.penalties[date][empId]=val; else delete STATE.penalties[date][empId];
  }
  function penaltiesForMonth(month, empId){
    let sum=0; Object.keys(STATE.penalties).forEach(d=>{ if(d.startsWith(month)) sum+=penaltyOf(d, empId); }); return sum;
  }
  function advanceOf(month, empId){ const m=STATE.advances[month]; return m && m[empId] ? Number(m[empId]) : 0; }
  function setAdvance(month, empId, val){
    if(!STATE.advances[month]) STATE.advances[month]={};
    if(val>0) STATE.advances[month][empId]=val; else delete STATE.advances[month][empId];
  }

  function getEmpRule(emp){
    const s=STATE.settings;
    return {
      shift1Start: emp.shift1Start || s.shift1Start,
      shift1End: emp.shift1End || s.shift1End,
      grace: (emp.grace===''||emp.grace==null) ? s.grace : Number(emp.grace),
      workdays: (emp.workdays===''||emp.workdays==null) ? s.workdays : Number(emp.workdays),
      hours: (emp.hours===''||emp.hours==null) ? s.hours : Number(emp.hours)
    };
  }
  function annualLeaveEntitlement(emp){
    return (emp.annualLeave===''||emp.annualLeave==null) ? 30 : Number(emp.annualLeave);
  }
  function leaveDaysUsedInYear(emp, year){
    let n=0;
    Object.keys(STATE.sheets).forEach(date=>{
      if(!date.startsWith(year)) return;
      const rec=STATE.sheets[date].records && STATE.sheets[date].records[emp.id];
      if(rec && rec.leave) n++;
    });
    return n;
  }
  function leaveBalanceRemaining(emp, year){
    return annualLeaveEntitlement(emp) - leaveDaysUsedInYear(emp, year);
  }
  function minuteRate(emp){
    const r=getEmpRule(emp);
    const denom = Number(r.workdays)*Number(r.hours)*60;
    if(Number(emp.dailyWage)>0){ const hd=Number(r.hours)*60; return hd? Number(emp.dailyWage)/hd : 0; }
    if(!denom) return 0;
    return Number(emp.salary||0)/denom;
  }
  function dayRate(emp){
    const r=getEmpRule(emp);
    if(Number(emp.dailyWage)>0) return Number(emp.dailyWage);
    if(!r.workdays) return 0;
    return Number(emp.salary||0)/Number(r.workdays);
  }

  function ensureSheet(date){
    if(!STATE.sheets[date]) STATE.sheets[date]={ records:{}, approved:false, approvedBy:null, approvedAt:null };
    return STATE.sheets[date];
  }

  function computeShift(startRaw, endRaw, inRaw, outRaw, grace){
    const worked = !!(inRaw || outRaw);
    let late=0, early=0, overtime=0;
    if(!worked) return {late:0, early:0, overtime:0, worked:false};
    const startMin=normMin(startRaw); let endMin=normMin(endRaw);
    // دوام ليلي: إذا كان وقت الانصراف (مثل 00:00) أصغر من أو يساوي وقت الحضور فهو في اليوم التالي
    const overnight = endMin<=startMin;
    if(overnight) endMin+=1440;
    if(inRaw){ const inMin=normMin(inRaw); late=Math.max(0, Math.round(inMin-startMin-grace)); }
    if(outRaw){
      let outMin=normMin(outRaw);
      if(overnight && outMin<startMin) outMin+=1440; // انصراف بعد منتصف الليل
      early=Math.max(0, Math.round(endMin-outMin-grace));
      overtime=Math.max(0, Math.round(outMin-endMin-grace));
    }
    return {late, early, overtime, worked:true};
  }

  function computeRecord(emp, rec, date){
    const r=getEmpRule(emp);
    const out={
      checkIn:rec.checkIn||'', checkOut:rec.checkOut||'',
      leave: !!rec.leave, absent: !!rec.absent,
      fingerprintForgotten: !!rec.fingerprintForgotten,
      fingerprintDeduction: 0, fingerprintOccurrence: null,
      lateMinutesRaw:0, overtimeMinutesRaw:0, overtimeMinutes:0,
      overtimeApproved: !!rec.overtimeApproved, overtimeRate: minuteRate(emp)*(STATE.settings.overtimeMultiplier||1),
      overtimePay:0
    };
    if(rec.leave){
      out.status='إجازة'; out.lateMinutes=0; out.earlyMinutes=0; out.deduction=0;
    } else if(rec.absent){
      out.status='غياب'; out.lateMinutes=0; out.earlyMinutes=0; out.deduction=dayRate(emp);
    } else {
      const s1=computeShift(r.shift1Start,r.shift1End,rec.checkIn,rec.checkOut,r.grace);
      if(!s1.worked){
        out.status='غائب'; out.lateMinutes=0; out.earlyMinutes=0; out.deduction=0;
        out.fingerprintDeduction = fingerprintPenalty(emp, date, rec);
        out.deduction += out.fingerprintDeduction;
      } else {
        // معادلة الإضافي: تُخصم دقائق الإضافي أولاً من دقائق التأخير في نفس اليوم،
        // وما تبقّى من الإضافي بعد تغطية التأخير هو الرصيد القابل للاعتماد والصرف.
        const rawLate=s1.late, earlyMinutes=s1.early, rawOvertime=s1.overtime;
        const lateMinutes=Math.max(0, rawLate - rawOvertime);
        const overtimeMinutes=Math.max(0, rawOvertime - rawLate);
        out.lateMinutesRaw=rawLate; out.overtimeMinutesRaw=rawOvertime;
        out.lateMinutes=lateMinutes; out.earlyMinutes=earlyMinutes; out.overtimeMinutes=overtimeMinutes;
        const parts=[];
        if(lateMinutes>0) parts.push('متأخر');
        if(earlyMinutes>0) parts.push('خروج مبكر');
        if(overtimeMinutes>0 && !parts.length) parts.push('إضافي');
        out.status = parts.length ? parts.join(' + ') : 'حاضر';
        out.lateDeduction = lateMinutes * minuteRate(emp);
        out.earlyDeduction = earlyMinutes * minuteRate(emp);
        out.fingerprintDeduction = fingerprintPenalty(emp, date, rec);
        out.deduction = out.lateDeduction + out.earlyDeduction + out.fingerprintDeduction;
        out.overtimePay = out.overtimeApproved ? overtimeMinutes * out.overtimeRate : 0;
      }
    }
    if(rec.leave || rec.absent){
      out.lateDeduction = 0; out.earlyDeduction = 0;
      out.fingerprintDeduction = fingerprintPenalty(emp, date, rec);
      out.deduction += out.fingerprintDeduction;
    }
    out.fingerprintOccurrence = rec._fingerprintOccurrence || null;
    return out;
  }

  function fingerprintPenalty(emp, date, rec){
    if(!rec || !rec.fingerprintForgotten) return 0;
    // تُحتسب مرات نسيان البصمة من جديد مع بداية كل شهر: أول مرة في الشهر مسموحة (بدون خصم)،
    // ثم ٥٠٠ للمرة الثانية، ٧٥٠ للثالثة، ١٠٠٠ للرابعة وما بعدها — والعدّ يبدأ صفراً في أول كل شهر.
    const month = date ? date.slice(0,7) : todayStr().slice(0,7);
    const prior = Object.keys(STATE.sheets).filter(d=>d.slice(0,7)===month && (!date || d < date)).sort().reduce((n,d)=>{
      const r=STATE.sheets[d].records && STATE.sheets[d].records[emp.id];
      return n + (r && r.fingerprintForgotten ? 1 : 0);
    },0);
    const occurrence=prior+1;
    rec._fingerprintOccurrence=occurrence;
    return occurrence===1 ? 0 : occurrence===2 ? 500 : occurrence===3 ? 750 : 1000;
  }
  function tagClassFor(status){
    if(status==='حاضر') return 'tag-ontime';
    if(status==='إجازة') return 'tag-leave';
    if(status==='غياب') return 'tag-dayoff';
    if(status==='غائب') return 'tag-absent';
    if(status.indexOf('+')>-1) return 'tag-both';
    if(status==='متأخر') return 'tag-late';
    if(status==='خروج مبكر') return 'tag-early';
    if(status==='إضافي') return 'tag-ontime';
    return 'tag-absent';
  }

  /* ================= Tabs (cards) ================= */
  const ICONS={
    dashboard:'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
    employees:'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    daily:'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V9h14v11z',
    reports:'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z',
    empreport:'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    withdrawals:'M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z',
    finalpay:'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z',
    settings:'M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.59-.22l-2.39.96a7 7 0 00-1.62-.94l-.36-2.54A.5.5 0 0013.9 2h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.5.5 0 00-.59.22L2.7 8.48a.5.5 0 00.12.64l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94L2.82 14.16a.5.5 0 00-.12.64l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.01-1.58zM12 15.6A3.6 3.6 0 1112 8.4a3.6 3.6 0 010 7.2z',
    voucher:'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
    wages:'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
    home:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
  };
  const svgIcon=k=>'<svg viewBox="0 0 24 24"><path d="'+ICONS[k]+'"></path></svg>';
  const TABS=[
    {key:'dashboard',title:'لوحة التحكم',sub:'مؤشرات اليوم وآخر 7 أيام',c:['#b3405a','#800020','#5a0016'],items:['الحاضرون والمتأخرون','الخروج المبكر والغياب','إجمالي خصم اليوم','رسم بياني أسبوعي'],foot:()=>activeEmployees().length+' موظف نشط'},
    {key:'employees',title:'الموظفون',sub:'إدارة بيانات العمال والموظفين',c:['#a64a5e','#6b1226','#4a0d1c'],items:['إضافة وتعديل موظف','الراتب وقيمة الدقيقة','رصيد الإجازة السنوية','الاستغناء وإعادة التفعيل'],foot:()=>STATE.employees.length+' سجل'},
    {key:'daily',title:'كشف اليوم',sub:'الحضور والانصراف اليومي',c:['#b3405a','#800020','#5a0016'],items:['تسجيل الحضور والانصراف','نسيان البصمة وجزاؤه','إجازة / غياب','اعتماد الكشف والإضافي'],foot:()=>{const sh=STATE.sheets[todayStr()];return 'سجلات اليوم: '+(sh?Object.keys(sh.records).length:0);}},
    {key:'reports',title:'التقارير الشهرية',sub:'إجمالي الخصومات لكل موظف',c:['#a64a5e','#6b1226','#4a0d1c'],items:['تصفية الموظفين','مخطط الخصومات','تفصيل التأخير والبصمة','نسخة احتياطية JSON'],foot:()=>'شهر '+todayStr().slice(0,7)},
    {key:'empreport',title:'كشف الموظف الشهري',sub:'تفصيل يومي لكل موظف',c:['#b3405a','#800020','#5a0016'],items:['اختيار الموظف والشهر','أيام الحضور والتأخير','صافي الراتب','طباعة كشف مستقل'],foot:()=>'طباعة فردية'},
    {key:'voucher',title:'سند الصرف والأجور اليومي',sub:'اطبع السند ثم سجّل الحضور والانصراف',c:['#b3405a','#800020','#5a0016'],items:['طباعة سند الصرف اليومي','الأجر اليومي والمسحوب','تسجيل الحضور والانصراف','الصافي يغذّي كشف الرواتب'],foot:()=>{try{const w=STATE.withdrawals[vLocalToday()]||{};let t=0;activeEmployees().forEach(e=>t+=Number(w[e.id])||0);return fmtMoney(t)+' '+STATE.settings.currency+' اليوم';}catch(e){return '';}}},
    {key:'withdrawals',title:'سحبيات العمال والموظفين',sub:'السحب اليومي وكشف كل شخص',c:['#a64a5e','#6b1226','#4a0d1c'],items:['سحب يومي لكل شخص','إجمالي شهري تلقائي','فواتير وسلف','كشف فردي للتوقيع'],foot:()=>{const m=todayStr().slice(0,7);let t=0;activeEmployees().forEach(e=>t+=withdrawalsForMonth(m,e.id));return fmtMoney(t)+' '+STATE.settings.currency;}},
    {key:'finalpay',title:'كشف الرواتب النهائي',sub:'صافي أجور العمال والموظفين',c:['#b3405a','#800020','#5a0016'],items:['أيام الدوام والأجر اليومي','خصم السحبيات والسلف','الغياب والتأخير والبصمة','عمود توقيع الاستلام'],foot:()=>'صافي الشهر'},
    {key:'settings',title:'الإعدادات',sub:'الدوام والعملة والإضافي',c:['#a64a5e','#6b1226','#4a0d1c'],items:['مواعيد الدوام الرسمي','فترة السماح','أيام وساعات العمل','معامل الأجر الإضافي'],foot:()=>'الإعدادات العامة'}
  ];
  function setColors(el,t){el.style.setProperty('--f1',t.c[0]);el.style.setProperty('--fb',t.c[1]);el.style.setProperty('--f2',t.c[2]);el.style.setProperty('--c',t.c[1]);el.style.setProperty('--c1',t.c[0]);el.style.setProperty('--c2',t.c[2]);el.style.setProperty('--b1',t.c[0]);el.style.setProperty('--b2',t.c[2]);}
  function buildHub(){
    const grid=document.getElementById('hubGrid');
    grid.innerHTML='';
    TABS.forEach(t=>{
      const wrap=document.createElement('div'); wrap.className='fc-viewport';
      wrap.innerHTML=`<div class="fc-folder" tabindex="0" role="button" data-tab="${t.key}" aria-label="${t.title}">
        <div class="fc-glow"></div><div class="fc-back"></div><div class="fc-tab"></div><div class="fc-swoop"></div>
        <div class="fc-paper"><div class="fc-memo-h"><span>${t.title}</span><span class="fc-open">فتح ←</span></div>
          <div class="fc-memo-b"><ul class="fc-list">${t.items.map(i=>'<li>'+i+'</li>').join('')}</ul></div></div>
        <div class="fc-front"><div class="fc-fhead"><div><div class="fc-title">${t.title}</div><div class="fc-sub">${t.sub}</div></div><div class="fc-ico">${svgIcon(t.key)}</div></div>
          <div class="fc-foot"><span class="fc-count"></span><span class="fc-go">←</span></div></div></div>`;
      const fo=wrap.firstElementChild; setColors(fo,t);
      fo.addEventListener('click',()=>showTab(t.key));
      fo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showTab(t.key);}});
      grid.appendChild(wrap);
    });
    const nav=document.getElementById('mainNav');
    const dual=k=>svgIcon(k)+svgIcon(k);
    nav.innerHTML='<button type="button" class="home" data-tab="hub" aria-label="الرئيسية" data-tip="الرئيسية">'+dual('home')+'</button>'+TABS.map(t=>'<button type="button" data-tab="'+t.key+'" aria-label="'+t.title+'" data-tip="'+t.title+'">'+dual(t.key)+'</button>').join('');
    const tip=document.createElement('div'); tip.className='fc-dock-tip no-print'; document.body.appendChild(tip);
    const showTip=b=>{const r=b.getBoundingClientRect(); tip.textContent=b.dataset.tip; tip.style.left=Math.min(Math.max(r.left+r.width/2,70),window.innerWidth-70)+'px'; tip.style.top=(r.top-40)+'px'; tip.classList.add('on');};
    nav.querySelectorAll('button').forEach(b=>{const t=TABS.find(x=>x.key===b.dataset.tab); if(t) setColors(b,t);
      b.addEventListener('click',()=>showTab(b.dataset.tab));
      b.addEventListener('mouseenter',()=>showTip(b)); b.addEventListener('mouseleave',()=>tip.classList.remove('on'));
      b.addEventListener('focus',()=>showTip(b)); b.addEventListener('blur',()=>tip.classList.remove('on'));
      b.addEventListener('touchstart',()=>{showTip(b); setTimeout(()=>tip.classList.remove('on'),1200);},{passive:true});
    });
    TABS.forEach(t=>{
      const page=document.getElementById('tab-'+t.key); if(!page||page.querySelector('.fc-banner')) return;
      const ban=document.createElement('div'); ban.className='fc-banner no-print'; setColors(ban,t);
      ban.innerHTML='<div class="fc-ico">'+svgIcon(t.key)+'</div><div><b>'+t.title+'</b><span>'+t.sub+'</span></div>';
      page.insertBefore(ban,page.firstChild);
    });
  }
  function renderHub(){
    document.querySelectorAll('#hubGrid .fc-folder').forEach(fo=>{
      const t=TABS.find(x=>x.key===fo.dataset.tab); fo.querySelector('.fc-count').textContent=t.foot();
    });
    const date=todayStr(), sh=STATE.sheets[date]; let ded=0, rec=0;
    activeEmployees().forEach(e=>{const r=sh&&sh.records[e.id]; if(r){rec++; ded+=computeRecord(e,r,date).deduction;}});
    const m=date.slice(0,7); let wd=0; activeEmployees().forEach(e=>wd+=withdrawalsForMonth(m,e.id));
    document.getElementById('hubStats').innerHTML=
      '<div class="hub-stat"><span>الموظفون النشطون</span><b>'+activeEmployees().length+'</b></div>'+
      '<div class="hub-stat"><span>سجلات اليوم</span><b>'+rec+'</b></div>'+
      '<div class="hub-stat"><span>خصم اليوم</span><b>'+fmtMoney(ded)+' '+STATE.settings.currency+'</b></div>'+
      '<div class="hub-stat"><span>سحبيات هذا الشهر</span><b>'+fmtMoney(wd)+' '+STATE.settings.currency+'</b></div>';
  }
  function showTab(key){
    const hub=document.getElementById('homeHub'), nav=document.getElementById('mainNav'), panel=document.querySelector('main.panel');
    document.querySelectorAll('section.tabpage').forEach(s=>s.classList.remove('active'));
    if(key==='hub'){ hub.style.display=''; nav.style.display='none'; document.body.classList.remove('has-dock'); panel.style.display='none'; renderHub(); window.scrollTo({top:0,behavior:'smooth'}); return; }
    hub.style.display='none'; nav.style.display='flex'; document.body.classList.add('has-dock'); panel.style.display='';
    document.getElementById('tab-'+key).classList.add('active');
    nav.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.dataset.tab===key));
    const ab=nav.querySelector('button.active'); if(ab&&ab.scrollIntoView) ab.scrollIntoView({inline:'center',block:'nearest'});
    const t=TABS.find(x=>x.key===key); panel.style.setProperty('--accent',t.c[1]);
    if(key==='dashboard') renderDashboard();
    if(key==='daily') renderDailySheet();
    if(key==='reports') renderReports();
    if(key==='empreport') renderEmployeeReport();
    if(key==='withdrawals'){ renderWithdrawals(); renderWithdrawEmpStatement(); }
    if(key==='voucher') renderVoucher();
    if(key==='finalpay') renderFinalPay();
    window.scrollTo({top:0,behavior:'smooth'});
  }

  /* ================= Header ================= */
  function renderHeader(){
    document.getElementById('companyNameInput').value=STATE.company;
    document.getElementById('todayLabel').textContent=new Date().toLocaleDateString('ar-EG',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('empCountLabel').textContent=activeEmployees().length;
    document.getElementById('currencyLabel').textContent=STATE.settings.currency;
    document.getElementById('s1Range').textContent=STATE.settings.shift1Start+' — '+STATE.settings.shift1End;
  }
  document.getElementById('companyNameInput').addEventListener('input', e=>{ STATE.company=e.target.value; persist(); });

  /* ================= Dashboard ================= */
  function renderDashboard(){
    const date=todayStr();
    const sheet=STATE.sheets[date];
    const emps=activeEmployees();
    let present=0, late=0, early=0, absent=0, dayoff=0, lateMinutesTotal=0, earlyMinutesTotal=0, deductionTotal=0;
    emps.forEach(emp=>{
      const rec = sheet && sheet.records[emp.id];
      if(!rec){ absent++; return; }
      const c=computeRecord(emp, rec, date);
      if(c.status==='غائب'){ absent++; return; }
      if(c.status==='غياب'){ dayoff++; deductionTotal+=c.deduction; return; }
      if(c.status==='إجازة') return;
      if(c.lateMinutes>0) late++;
      if(c.earlyMinutes>0) early++;
      present++;
      lateMinutesTotal+=c.lateMinutes; earlyMinutesTotal+=c.earlyMinutes; deductionTotal+=c.deduction;
    });

    document.getElementById('dashCards').innerHTML=`
      <div class="card"><div class="label">الحاضرون اليوم</div><div class="value">${present}</div></div>
      <div class="card late"><div class="label">المتأخرون اليوم</div><div class="value">${late}</div></div>
      <div class="card late"><div class="label">الخروج المبكر اليوم</div><div class="value">${early}</div></div>
      <div class="card"><div class="label">الغائبون (غير مؤشَّر)</div><div class="value">${absent}</div></div>
      <div class="card late"><div class="label">أيام غياب مخصومة</div><div class="value">${dayoff}</div></div>
      <div class="card gold"><div class="label">إجمالي خصم اليوم</div><div class="value small">${fmtMoney(deductionTotal)} ${STATE.settings.currency}</div></div>
    `;

    const labels=[], data=[];
    for(let i=6;i>=0;i--){
      const d=new Date(); d.setDate(d.getDate()-i);
      const ds=d.toISOString().slice(0,10);
      labels.push(d.toLocaleDateString('ar-EG',{month:'short',day:'numeric'}));
      const sh=STATE.sheets[ds];
      let tot=0;
      if(sh){ activeEmployees().forEach(emp=>{ const rec=sh.records[emp.id]; if(rec){ tot+=computeRecord(emp,rec,ds).deduction; } }); }
      data.push(Math.round(tot*100)/100);
    }
    drawChart('trendChart','bar',labels,[{label:'الخصم',data,color:'#800020'}]);
  }

  let chartInstances={};
  function drawChart(canvasId,type,labels,datasets){
    const ctx=document.getElementById(canvasId);
    if(!ctx || typeof Chart==='undefined') return;
    if(chartInstances[canvasId]) chartInstances[canvasId].destroy();
    chartInstances[canvasId]=new Chart(ctx,{
      type,
      data:{ labels, datasets: datasets.map(ds=>({
        label:ds.label, data:ds.data,
        backgroundColor: type==='bar' ? ds.color+'cc' : ds.color+'33',
        borderColor: ds.color, borderWidth:2, borderRadius:4, tension:.3, fill: type!=='bar'
      })) },
      options:{ responsive:true,
        plugins:{ legend:{display:datasets.length>1, rtl:true, labels:{font:{family:'Segoe UI'}}} },
        scales:{ x:{ticks:{font:{family:'Segoe UI'}}}, y:{beginAtZero:true,ticks:{font:{family:'Segoe UI'}}} }
      }
    });
  }

  /* ================= Employees ================= */
  const empForm=document.getElementById('empForm');
  empForm.addEventListener('submit', e=>{
    e.preventDefault();
    const id=document.getElementById('empId').value;
    const data={
      name: document.getElementById('empName').value.trim(),
      type: document.getElementById('empType').value,
      job: document.getElementById('empJob').value.trim(),
      dept: document.getElementById('empDept').value,
      salary: Number(document.getElementById('empSalary').value||0),
      dailyWage: Number(document.getElementById('empDailyWage').value||0),
      workdays: document.getElementById('empWorkdays').value,
      hours: document.getElementById('empHours').value,
      grace: document.getElementById('empGrace').value,
      annualLeave: document.getElementById('empAnnualLeave').value,
      shift1Start: document.getElementById('empS1Start').value,
      shift1End: document.getElementById('empS1End').value,
      active:true
    };
    if(!data.name || (!data.salary && !data.dailyWage)){ alert('الرجاء إدخال اسم الموظف والراتب الشهري أو الأجر اليومي'); return; }
    let savedId=id, isNew=!id;
    if(id){ const emp=empById(id); Object.assign(emp,data); }
    else{ data.id=uid(); savedId=data.id; STATE.employees.push(data); }
    syncEmpToVoucher(savedId);
    persist();
    empForm.reset();
    document.getElementById('empId').value='';
    document.getElementById('empCancelBtn').style.display='none';
    refreshEmpViews();
    sheetNotice(isNew
      ? 'تمت إضافة «'+data.name+'» تلقائياً إلى سند الصرف وكشف الأجر اليومي وبقية الكشوف'
      : 'تم تحديث بيانات «'+data.name+'» في سند الصرف وكشف الأجر اليومي وبقية الكشوف', 4000);
  });

  /* تحديث كل الشاشات المرتبطة بالموظفين فور أي إضافة/تعديل/استغناء/حذف */
  function refreshEmpViews(){
    try{ fillEmpVGroupSelect(); }catch(e){}
    [renderEmployees, renderHeader, renderHub, renderDashboard, fillEmpReportSelect, renderReportEmpFilter,
     renderDailySheet, renderReports, renderEmployeeReport, renderVoucher, fillWithdrawEmpSelect,
     renderWithdrawals, renderWithdrawEmpStatement, renderFinalPay
    ].forEach(function(f){ try{ f(); }catch(e){ console.warn('refresh', e); } });
  }
  /* ربط الموظف بسند الصرف: المجموعة + رقم الحساب الرئيسي والتحليلي */
  function syncEmpToVoucher(id){
    try{
      const emp=empById(id); if(!emp) return;
      const g=document.getElementById('empVGroup').value;
      let acc=document.getElementById('empAcc').value.trim();
      if(g) V.grp[id]=g; else delete V.grp[id];
      if(!acc){
        const myG=vGroupOf(emp);
        const peer=STATE.employees.find(o=>o.id!==id && V.acc[o.id] && vGroupOf(o)===myG);
        if(peer) acc=V.acc[peer.id];
      }
      if(acc) V.acc[id]=acc; else delete V.acc[id];
      delete V.accMain[id];
      vSave();
    }catch(e){ console.warn('syncEmpToVoucher', e); }
  }
  document.getElementById('empCancelBtn').addEventListener('click', ()=>{
    empForm.reset(); document.getElementById('empId').value=''; document.getElementById('empCancelBtn').style.display='none';
  });

  function renderEmployees(){
    const wrap=document.getElementById('empTableWrap');
    if(!STATE.employees.length){ wrap.innerHTML='<div class="empty">لا يوجد موظفون بعد. أضف أول موظف من النموذج أعلاه.</div>'; return; }
    let rows=STATE.employees.map(emp=>{
      const rate=minuteRate(emp);
      const leaveBal=leaveBalanceRemaining(emp, String(new Date().getFullYear()));
      return `<tr>
        <td class="name-cell">${escapeHtml(emp.name)}</td>
        <td><span class="tag ${empType(emp)==='عامل'?'tag-both':'tag-ontime'}">${empType(emp)}</span></td>
        <td>${escapeHtml(emp.job||'—')}</td>
        <td>${escapeHtml(emp.dept||'—')}</td>
        <td>${fmtMoney(emp.salary)} ${STATE.settings.currency}</td>
        <td>${fmtMoney(rate)} ${STATE.settings.currency}</td>
        <td>${annualLeaveEntitlement(emp)}</td>
        <td style="font-weight:700;${leaveBal<0?'color:var(--seal);':''}">${leaveBal}</td>
        <td>${emp.active===false?'<span class="tag tag-absent">مستغنى عنه</span>':'<span class="tag tag-ontime">نشط</span>'}</td>
        <td>
          <div class="btn-row" style="justify-content:center;">
            <button class="btn btn-ghost btn-sm" data-edit="${emp.id}">تعديل</button>
            <button class="btn btn-ghost btn-sm" data-toggle="${emp.id}">${emp.active===false?'إعادة تفعيل':'استغناء'}</button>
            <button class="btn btn-seal btn-sm" data-del="${emp.id}">حذف</button>
          </div>
        </td>
      </tr>`;
    }).join('');
    wrap.innerHTML=`<div class="table-scroll"><table class="ledger" style="min-width:0;">
      <thead><tr><th>الاسم</th><th>الفئة</th><th>الوظيفة</th><th>القسم</th><th>الراتب</th><th>قيمة دقيقة الخصم</th><th>رصيد الإجازة السنوية</th><th>المتبقي هذا العام</th><th>الحالة</th><th>إجراءات</th></tr></thead>
      <tbody>${rows}</tbody></table></div>`;

    wrap.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>{
      const emp=empById(b.dataset.edit);
      document.getElementById('empId').value=emp.id;
      document.getElementById('empName').value=emp.name;
      document.getElementById('empType').value=empType(emp);
      document.getElementById('empJob').value=emp.job||'';
      document.getElementById('empDept').value=emp.dept||'الإنتاج والنجارة';
      document.getElementById('empSalary').value=emp.salary||'';
      document.getElementById('empDailyWage').value=emp.dailyWage||'';
      document.getElementById('empWorkdays').value=emp.workdays||'';
      document.getElementById('empHours').value=emp.hours||'';
      document.getElementById('empGrace').value=emp.grace||'';
      document.getElementById('empAnnualLeave').value=emp.annualLeave||'';
      document.getElementById('empS1Start').value=emp.shift1Start||'';
      document.getElementById('empS1End').value=emp.shift1End||'';
      try{
        document.getElementById('empVGroup').value=V.grp[emp.id]||'';
        document.getElementById('empAcc').value=V.acc[emp.id]||V.accMain[emp.id]||'';
      }catch(e){}
      document.getElementById('empCancelBtn').style.display='inline-block';
      window.scrollTo({top:0,behavior:'smooth'});
    }));
    wrap.querySelectorAll('[data-toggle]').forEach(b=>b.addEventListener('click',()=>{
      const emp=empById(b.dataset.toggle);
      if(emp.active!==false){
        if(!confirm('تأكيد الاستغناء عن هذا الموظف؟ سيتم إخفاؤه من كشف اليوم والتقارير الجارية، وتبقى سجلاته السابقة محفوظة.')) return;
        emp.active=false;
      } else {
        emp.active=true;
      }
      persist(); refreshEmpViews();
    }));
    wrap.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      if(!confirm('حذف الموظف نهائياً من القائمة؟ سجلات الحضور السابقة باسمه ستبقى محفوظة كما هي.')) return;
      const delId=b.dataset.del;
      STATE.employees=STATE.employees.filter(e=>e.id!==delId);
      try{ delete V.grp[delId]; delete V.acc[delId]; delete V.accMain[delId]; delete V.draft[delId]; vSave(); }catch(e){}
      persist(); refreshEmpViews();
    }));
  }

  /* ================= Daily Sheet ================= */
  const sheetDateInput=document.getElementById('sheetDate');
  sheetDateInput.value=todayStr();
  sheetDateInput.addEventListener('change', renderDailySheet);
  const showTerminatedBox=document.getElementById('showTerminatedBox');
  showTerminatedBox.addEventListener('change', renderDailySheet);

  function renderDailySheet(){
    const date=sheetDateInput.value || todayStr();
    const sheet=ensureSheet(date);
    // فلترة: الموظفون الذين تم الاستغناء عنهم مخفيون تلقائياً من كشف اليوم،
    // ما لم يُفعَّل خيار "إظهار الموظفين الذين تم الاستغناء عنهم أيضاً" للمراجعة فقط.
    const emps = showTerminatedBox.checked ? STATE.employees.slice() : activeEmployees();
    const wrap=document.getElementById('dailySheetWrap');

    if(!emps.length){ wrap.innerHTML='<div class="empty">لا يوجد موظفون نشطون. أضف موظفين من تبويب "الموظفون" أولاً.</div>'; document.getElementById('approvalWrap').innerHTML=''; return; }

    let totalLate=0, totalEarly=0, totalDeduct=0, totalLateDeduct=0, totalOvertime=0, totalOvertimePay=0, allDone=true;
    let rows=emps.map(emp=>{
      const terminated = emp.active===false;
      const rec=sheet.records[emp.id] || {checkIn:'',checkOut:'',leave:false,absent:false,fingerprintForgotten:false};
      const c=computeRecord(emp, rec, date);
      if(!terminated){
        totalLate+=c.lateMinutes||0; totalEarly+=c.earlyMinutes||0; totalDeduct+=c.deduction; totalLateDeduct+=c.lateDeduction||0;
        totalOvertime+=c.overtimeMinutes||0; totalOvertimePay+=c.overtimePay||0;
        if(!rec.leave && !rec.absent && !rec.checkOut) allDone=false;
      }

      const tagClass=tagClassFor(c.status);
      const disabled = (sheet.approved || terminated) ? 'disabled' : '';
      const lateOffsetNote = (c.lateMinutesRaw>c.lateMinutes) ? `<br><small style="color:var(--ok);">(كان ${minToHM(c.lateMinutesRaw)} قبل خصم الإضافي)</small>` : '';
      let overtimeCell='—';
      if(c.overtimeMinutes>0){
        overtimeCell = `<div>${minToHM(c.overtimeMinutes)}</div>
          <label style="display:flex;align-items:center;gap:4px;font-size:10.5px;justify-content:center;margin-top:3px;">
            <input type="checkbox" class="otApproveBox" ${rec.overtimeApproved?'checked':''} style="width:auto;"> اعتماد المدير العام
          </label>
          ${rec.overtimeApproved
            ? `<div style="font-size:10.5px;color:var(--ok);margin-top:2px;">+${fmtMoney(c.overtimePay)} ${STATE.settings.currency}${rec.overtimeApprovedBy?'<br>بواسطة: '+escapeHtml(rec.overtimeApprovedBy):''}</div>`
            : `<div style="font-size:10px;color:var(--ink-soft);margin-top:2px;">بانتظار الاعتماد</div>`}`;
      }

      return `<tr data-emp="${emp.id}" ${terminated?'style="opacity:.55;background:var(--paper-2);"':''}>
        <td class="name-cell">${escapeHtml(emp.name)}${terminated?' <span class="tag tag-absent" style="font-size:10px;">مستغنى عنه</span>':''}<br><span style="font-weight:400;color:var(--ink-soft);font-size:11px;">${escapeHtml(emp.dept||'')}</span></td>
        <td><input type="time" class="ci1" value="${rec.checkIn||''}" ${disabled}></td>
        <td><input type="time" class="co1" value="${rec.checkOut||''}" ${disabled}></td>
        <td><span class="tag ${tagClass}">${c.status}</span></td>
        <td>${c.lateMinutes>0?minToHM(c.lateMinutes):'—'}${lateOffsetNote}</td>
        <td>${c.lateDeduction>0?`<span class="deduct">${fmtMoney(c.lateDeduction)} ${STATE.settings.currency}</span>`:'—'}</td>
        <td>${c.earlyMinutes>0?minToHM(c.earlyMinutes):'—'}</td>
        <td>${overtimeCell}</td>
        <td>${c.deduction>0?`<span class="deduct">${fmtMoney(c.deduction)} ${STATE.settings.currency}</span>`:'—'}</td>
        <td><label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;"><input type="checkbox" class="fingerprintBox" ${rec.fingerprintForgotten?'checked':''} ${disabled} style="width:auto;"> نسيان البصمة<br><small>المرة ${c.fingerprintForgotten ? (c.fingerprintOccurrence||'المسجلة') : '—'}</small></label></td>
        <td><label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;"><input type="checkbox" class="leaveBox" ${rec.leave?'checked':''} ${disabled} style="width:auto;"> إجازة</label></td>
        <td><label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;"><input type="checkbox" class="absentBox" ${rec.absent?'checked':''} ${disabled} style="width:auto;"> غياب (خصم يوم)</label></td>
      </tr>`;
    }).join('');

    wrap.innerHTML=`<table class="ledger">
      <thead><tr>
        <th>الموظف</th><th>الحضور</th><th>الانصراف</th>
        <th>الحالة</th><th>دقائق التأخير<br><small style="font-weight:400;">(بعد خصم الإضافي)</small></th><th>مبلغ خصم التأخير</th><th>دقائق الخروج المبكر</th>
        <th>الوقت الإضافي<br><small style="font-weight:400;">(بعد تغطية التأخير)</small></th>
        <th>مبلغ الخصم الكلي</th><th>نسيان البصمة</th><th>إجازة</th><th>غياب</th>
      </tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr>
        <td colspan="3" style="text-align:left;font-weight:700;background:var(--paper-2);">الإجمالي</td>
        <td style="background:var(--paper-2);"></td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(totalLate)}</td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(totalLateDeduct)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(totalEarly)}</td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(totalOvertime)}<br><small style="color:var(--ok);">معتمد: ${fmtMoney(totalOvertimePay)} ${STATE.settings.currency}</small></td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(totalDeduct)} ${STATE.settings.currency}</td>
        <td style="background:var(--paper-2);"></td><td style="background:var(--paper-2);"></td><td style="background:var(--paper-2);"></td>
      </tr></tfoot>
      </table>`;

    if(!sheet.approved){
      wrap.querySelectorAll('tr[data-emp]').forEach(tr=>{
        const empId=tr.dataset.emp;
        const ci1=tr.querySelector('.ci1'), co1=tr.querySelector('.co1');
        const leaveBox=tr.querySelector('.leaveBox'), absentBox=tr.querySelector('.absentBox'), fingerprintBox=tr.querySelector('.fingerprintBox');
        function updateRec(){
          const rec=sheet.records[empId] || (sheet.records[empId]={});
          rec.checkIn=ci1.value; rec.checkOut=co1.value;
          rec.leave=leaveBox.checked; rec.absent=absentBox.checked; rec.fingerprintForgotten=fingerprintBox.checked;
          persist(); renderDailySheet();
        }
        [ci1,co1].forEach(inp=>inp.addEventListener('change', updateRec));
        absentBox.addEventListener('change', ()=>{ if(absentBox.checked) leaveBox.checked=false; updateRec(); });
        leaveBox.addEventListener('change', ()=>{ if(leaveBox.checked) absentBox.checked=false; updateRec(); });
        fingerprintBox.addEventListener('change', updateRec);
      });
    }

    // اعتماد الوقت الإضافي: متاح دائماً (حتى بعد اعتماد كشف اليوم) لأنه يتطلب تأكيداً مستقلاً من المدير العام.
    wrap.querySelectorAll('tr[data-emp]').forEach(tr=>{
      const empId=tr.dataset.emp;
      const otBox=tr.querySelector('.otApproveBox');
      if(!otBox) return;
      otBox.addEventListener('change', ()=>{
        const rec=sheet.records[empId] || (sheet.records[empId]={});
        if(otBox.checked){
          const name=prompt('اسم المدير العام المعتمِد للوقت الإضافي:');
          if(!name || !name.trim()){ otBox.checked=false; return; }
          rec.overtimeApproved=true; rec.overtimeApprovedBy=name.trim(); rec.overtimeApprovedAt=new Date().toISOString();
        } else {
          rec.overtimeApproved=false; rec.overtimeApprovedBy=null; rec.overtimeApprovedAt=null;
        }
        persist(); renderDailySheet(); renderDashboard();
      });
    });

    renderApprovalBox(date, sheet, allDone);
  }

  function renderApprovalBox(date, sheet, allDone){
    const wrap=document.getElementById('approvalWrap');
    if(sheet.approved){
      wrap.innerHTML=`
        <div class="approval-box done">
          <div class="seal">معتمد</div>
          <div class="approval-text">
            <b>تم اعتماد كشف يوم ${date}</b>
            <span>بواسطة: ${escapeHtml(sheet.approvedBy)} — بتاريخ ووقت: ${new Date(sheet.approvedAt).toLocaleString('ar-EG')}</span>
          </div>
          <button class="btn btn-ghost no-print" id="reopenBtn">إلغاء الاعتماد وإعادة الفتح للتعديل</button>
        </div>`;
      document.getElementById('reopenBtn').addEventListener('click', ()=>{
        if(!confirm('سيتم إلغاء اعتماد هذا الكشف والسماح بتعديله من جديد. متابعة؟')) return;
        sheet.approved=false; sheet.approvedBy=null; sheet.approvedAt=null;
        persist(); renderDailySheet(); renderDashboard();
      });
    } else {
      const hasAnyRecord = Object.keys(sheet.records).length>0;
      wrap.innerHTML=`
        <div class="approval-box no-print">
          <div class="approval-text">
            <b>${allDone && hasAnyRecord ? 'جميع الموظفين وقّعوا الانصراف — جاهز للرفع' : 'بانتظار توقيع الانصراف (الفترة الثانية) لبعض الموظفين'}</b>
            <span>يمكن رفع الكشف للاعتماد بعد تسجيل انصراف الجميع (أو تحديد إجازة/غياب لمن لا يعمل اليوم).</span>
          </div>
          <button class="btn btn-gold" id="raiseSheetBtn" ${(!hasAnyRecord)?'disabled':''}>رفع الكشف واعتماده</button>
        </div>`;
      const btn=document.getElementById('raiseSheetBtn');
      if(btn) btn.addEventListener('click', ()=>openApproveModal(date));
    }
  }

  const approveModal=document.getElementById('approveModal');
  let modalDate=null;
  function openApproveModal(date){
    modalDate=date;
    document.getElementById('approveModalDate').textContent='كشف تاريخ: '+date;
    document.getElementById('approverName').value='';
    document.getElementById('approveConfirmCheck').checked=false;
    approveModal.classList.add('show');
  }
  document.getElementById('cancelApproveBtn').addEventListener('click', ()=>approveModal.classList.remove('show'));
  document.getElementById('confirmApproveBtn').addEventListener('click', ()=>{
    const name=document.getElementById('approverName').value.trim();
    const checked=document.getElementById('approveConfirmCheck').checked;
    if(!name){ alert('الرجاء إدخال اسم المعتمِد'); return; }
    if(!checked){ alert('الرجاء تأكيد مراجعة البيانات قبل الاعتماد'); return; }
    const sheet=ensureSheet(modalDate);
    sheet.approved=true; sheet.approvedBy=name; sheet.approvedAt=new Date().toISOString();
    persist();
    approveModal.classList.remove('show');
    renderDailySheet(); renderDashboard();
  });


  /* ================= Reports ================= */
  let reportExcludedIds = new Set();

  function renderReportEmpFilter(){
    const wrap=document.getElementById('reportEmpFilterWrap');
    if(!STATE.employees.length){ wrap.innerHTML='<span style="color:var(--ink-soft);font-size:12.5px;">لا يوجد موظفون بعد.</span>'; return; }
    wrap.innerHTML = STATE.employees.map(e=>`
      <label style="display:inline-flex;align-items:center;gap:6px;font-size:12.5px;background:var(--white);border:1px solid var(--line);border-radius:20px;padding:5px 12px;cursor:pointer;">
        <input type="checkbox" class="reportEmpCheck" data-emp="${e.id}" ${reportExcludedIds.has(e.id)?'':'checked'} style="width:auto;">
        ${escapeHtml(e.name)}${e.active===false?' (مستغنى عنه)':''}
      </label>
    `).join('');
    wrap.querySelectorAll('.reportEmpCheck').forEach(cb=>{
      cb.addEventListener('change', ()=>{
        if(cb.checked) reportExcludedIds.delete(cb.dataset.emp);
        else reportExcludedIds.add(cb.dataset.emp);
        renderReports();
      });
    });
  }
  document.getElementById('reportFilterAllBtn').addEventListener('click', ()=>{
    reportExcludedIds.clear();
    renderReports();
  });
  document.getElementById('reportFilterNoneBtn').addEventListener('click', ()=>{
    STATE.employees.forEach(e=>reportExcludedIds.add(e.id));
    renderReports();
  });

  const reportMonthInput=document.getElementById('reportMonth');
  reportMonthInput.value=todayStr().slice(0,7);
  reportMonthInput.addEventListener('change', renderReports);

  function renderReports(){
    renderReportEmpFilter();
    const month=reportMonthInput.value || todayStr().slice(0,7);
    const emps=STATE.employees.filter(e=>!reportExcludedIds.has(e.id));
    const perEmp={};
    emps.forEach(e=>perEmp[e.id]={emp:e, lateMinutes:0, earlyMinutes:0, lateDeduction:0, earlyDeduction:0, fingerprintDeduction:0, fingerprintCount:0, deduction:0, daysLate:0, daysEarly:0, daysPresent:0, daysAbsentMarked:0, daysAbsentUnmarked:0, daysLeave:0, overtimeMinutes:0, overtimePay:0});

    let daysWithData=0, approvedDays=0, monthDeduction=0, monthLateDeduction=0, monthOvertimePay=0;
    Object.keys(STATE.sheets).forEach(date=>{
      if(!date.startsWith(month)) return;
      const sheet=STATE.sheets[date];
      daysWithData++;
      if(sheet.approved) approvedDays++;
      Object.keys(sheet.records).forEach(empId=>{
        const emp=empById(empId);
        if(!emp || !perEmp[empId]) return;
        const c=computeRecord(emp, sheet.records[empId], date);
        perEmp[empId].lateMinutes+=c.lateMinutes||0;
        perEmp[empId].earlyMinutes+=c.earlyMinutes||0;
        perEmp[empId].lateDeduction+=c.lateDeduction||0;
        perEmp[empId].earlyDeduction+=c.earlyDeduction||0;
        perEmp[empId].fingerprintDeduction+=c.fingerprintDeduction||0;
        if(sheet.records[empId].fingerprintForgotten) perEmp[empId].fingerprintCount++;
        perEmp[empId].deduction+=c.deduction;
        perEmp[empId].overtimeMinutes+=c.overtimeMinutes||0;
        perEmp[empId].overtimePay+=c.overtimePay||0;
        if(c.status==='إجازة') perEmp[empId].daysLeave++;
        else if(c.status==='غياب') perEmp[empId].daysAbsentMarked++;
        else if(c.status==='غائب') perEmp[empId].daysAbsentUnmarked++;
        else{
          perEmp[empId].daysPresent++;
          if(c.lateMinutes>0) perEmp[empId].daysLate++;
          if(c.earlyMinutes>0) perEmp[empId].daysEarly++;
        }
        monthDeduction+=c.deduction;
        monthLateDeduction+=c.lateDeduction||0;
        monthOvertimePay+=c.overtimePay||0;
      });
    });

    document.getElementById('reportCards').innerHTML=`
      <div class="card"><div class="label">أيام مسجّلة هذا الشهر</div><div class="value">${daysWithData}</div></div>
      <div class="card"><div class="label">أيام معتمدة</div><div class="value">${approvedDays}</div></div>
      <div class="card late"><div class="label">إجمالي مبلغ خصم التأخير هذا الشهر</div><div class="value small">${fmtMoney(monthLateDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">إجمالي خصومات الشهر</div><div class="value small">${fmtMoney(monthDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card"><div class="label">إجمالي أجر الإضافي المعتمد هذا الشهر</div><div class="value small">${fmtMoney(monthOvertimePay)} ${STATE.settings.currency}</div></div>
    `;

    const list=Object.values(perEmp).sort((a,b)=>b.deduction-a.deduction);
    drawChart('reportChart','bar', list.map(x=>x.emp.name), [{label:'مبلغ الخصم', data:list.map(x=>Math.round(x.deduction*100)/100), color:'#800020'}]);

    if(!list.length){ document.getElementById('reportTableWrap').innerHTML='<div class="empty">لا توجد بيانات لهذا الشهر بعد.</div>'; return; }
    let rows=list.map(x=>`<tr>
      <td class="name-cell">${escapeHtml(x.emp.name)}</td>
      <td>${escapeHtml(x.emp.dept||'—')}</td>
      <td>${x.daysPresent}</td>
      <td>${x.daysLate}</td>
      <td>${x.daysEarly}</td>
      <td>${x.daysAbsentMarked}</td>
      <td>${x.daysLeave}</td>
      <td>${minToHM(x.lateMinutes)}</td>
      <td>${fmtMoney(x.lateDeduction)} ${STATE.settings.currency}</td>
      <td>${minToHM(x.earlyMinutes)}</td>
      <td>${fmtMoney(x.earlyDeduction)} ${STATE.settings.currency}</td>
      <td>${x.fingerprintCount}</td>
      <td>${fmtMoney(x.fingerprintDeduction)} ${STATE.settings.currency}</td>
      <td class="deduct">${fmtMoney(x.deduction)} ${STATE.settings.currency}</td>
      <td>${minToHM(x.overtimeMinutes)}</td>
      <td>${fmtMoney(x.overtimePay)} ${STATE.settings.currency}</td>
    </tr>`).join('');
    document.getElementById('reportTableWrap').innerHTML=`<table class="ledger">
      <thead><tr><th>الموظف</th><th>القسم</th><th>أيام الحضور</th><th>أيام التأخير</th><th>أيام الخروج المبكر</th><th>أيام الغياب المخصوم</th><th>أيام الإجازة</th><th>إجمالي التأخير</th><th>مبلغ خصم التأخير</th><th>إجمالي الخروج المبكر</th><th>خصم الخروج المبكر</th><th>مرات نسيان البصمة</th><th>خصم نسيان البصمة</th><th>إجمالي الخصم</th><th>دقائق الإضافي (بعد خصم التأخير)</th><th>أجر الإضافي المعتمد</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }


  /* ================= Employee Monthly Slip ================= */
  const empReportSelect=document.getElementById('empReportSelect');
  const empReportMonthInput=document.getElementById('empReportMonth');
  empReportMonthInput.value=todayStr().slice(0,7);

  function fillEmpReportSelect(){
    const prev=empReportSelect.value;
    empReportSelect.innerHTML = STATE.employees.map(e=>`<option value="${e.id}">${escapeHtml(e.name)}${e.active===false?' (مستغنى عنه)':''}</option>`).join('');
    if(prev && empById(prev)) empReportSelect.value=prev;
  }
  empReportSelect.addEventListener('change', renderEmployeeReport);
  empReportMonthInput.addEventListener('change', renderEmployeeReport);

  function renderEmployeeReport(){
    fillEmpReportSelect();
    const empId=empReportSelect.value;
    const emp=empById(empId);
    const wrapCards=document.getElementById('empReportCards');
    const wrapTable=document.getElementById('empReportTableWrap');
    if(!emp){
      wrapCards.innerHTML='';
      wrapTable.innerHTML='<div class="empty">لا يوجد موظفون بعد. أضف موظفاً من تبويب "الموظفون" أولاً.</div>';
      return;
    }
    const month=empReportMonthInput.value || todayStr().slice(0,7);

    let daysPresent=0, daysLate=0, daysEarly=0, daysAbsentMarked=0, daysAbsentUnmarked=0, daysLeave=0, fingerprintCount=0;
    let lateMinutes=0, earlyMinutes=0, lateDeduction=0, earlyDeduction=0, fingerprintDeduction=0, absentDeduction=0, totalDeduction=0;
    let overtimeMinutes=0, overtimePay=0;

    const dates=Object.keys(STATE.sheets).filter(d=>d.startsWith(month)).sort();
    let rows='';
    dates.forEach(date=>{
      const sheet=STATE.sheets[date];
      const rec=sheet.records[empId];
      if(!rec) return;
      const c=computeRecord(emp, rec, date);
      lateMinutes+=c.lateMinutes||0; earlyMinutes+=c.earlyMinutes||0;
      lateDeduction+=c.lateDeduction||0; earlyDeduction+=c.earlyDeduction||0;
      fingerprintDeduction+=c.fingerprintDeduction||0;
      overtimeMinutes+=c.overtimeMinutes||0; overtimePay+=c.overtimePay||0;
      if(rec.fingerprintForgotten) fingerprintCount++;
      totalDeduction+=c.deduction;
      if(c.status==='إجازة') daysLeave++;
      else if(c.status==='غياب'){ daysAbsentMarked++; absentDeduction+=c.deduction; }
      else if(c.status==='غائب') daysAbsentUnmarked++;
      else{
        daysPresent++;
        if(c.lateMinutes>0) daysLate++;
        if(c.earlyMinutes>0) daysEarly++;
      }
      const tagClass=tagClassFor(c.status);
      rows+=`<tr>
        <td>${date}</td>
        <td>${fmtTime(rec.checkIn)}</td>
        <td>${fmtTime(rec.checkOut)}</td>
        <td><span class="tag ${tagClass}">${c.status}</span></td>
        <td>${c.lateMinutes>0?minToHM(c.lateMinutes):'—'}</td>
        <td>${c.lateDeduction>0?fmtMoney(c.lateDeduction)+' '+STATE.settings.currency:'—'}</td>
        <td>${c.earlyMinutes>0?minToHM(c.earlyMinutes):'—'}</td>
        <td>${c.earlyDeduction>0?fmtMoney(c.earlyDeduction)+' '+STATE.settings.currency:'—'}</td>
        <td>${c.overtimeMinutes>0?minToHM(c.overtimeMinutes):'—'}</td>
        <td>${c.overtimeMinutes>0?(rec.overtimeApproved?'معتمد':'بانتظار الاعتماد'):'—'}</td>
        <td>${c.overtimePay>0?fmtMoney(c.overtimePay)+' '+STATE.settings.currency:'—'}</td>
        <td>${rec.fingerprintForgotten?'نعم':'—'}</td>
        <td>${c.fingerprintDeduction>0?fmtMoney(c.fingerprintDeduction)+' '+STATE.settings.currency:'—'}</td>
        <td class="deduct">${c.deduction>0?fmtMoney(c.deduction)+' '+STATE.settings.currency:'—'}</td>
      </tr>`;
    });

    const netSalary=Number(emp.salary||0)-totalDeduction+overtimePay;
    const leaveBal=leaveBalanceRemaining(emp, month.slice(0,4));

    wrapCards.innerHTML=`
      <div class="card"><div class="label">اسم الموظف</div><div class="value small">${escapeHtml(emp.name)}</div></div>
      <div class="card"><div class="label">أيام الحضور</div><div class="value">${daysPresent}</div></div>
      <div class="card late"><div class="label">أيام التأخير</div><div class="value">${daysLate}</div></div>
      <div class="card late"><div class="label">إجمالي دقائق التأخير</div><div class="value small">${minToHM(lateMinutes)}</div></div>
      <div class="card late"><div class="label">إجمالي مبلغ خصم التأخير</div><div class="value small">${fmtMoney(lateDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">أيام الخروج المبكر</div><div class="value">${daysEarly}</div></div>
      <div class="card late"><div class="label">إجمالي مبلغ خصم الخروج المبكر</div><div class="value small">${fmtMoney(earlyDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">أيام الغياب المخصوم</div><div class="value">${daysAbsentMarked}</div></div>
      <div class="card"><div class="label">أيام الإجازة (مداومة مدفوعة)</div><div class="value">${daysLeave}</div></div>
      <div class="card gold"><div class="label">الرصيد المتبقي من الإجازة السنوية (${month.slice(0,4)})</div><div class="value">${leaveBal}</div></div>
      <div class="card late"><div class="label">مرات نسيان البصمة</div><div class="value">${fingerprintCount}</div></div>
      <div class="card late"><div class="label">خصم نسيان البصمة</div><div class="value small">${fmtMoney(fingerprintDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card"><div class="label">دقائق الإضافي (بعد خصم التأخير)</div><div class="value small">${minToHM(overtimeMinutes)}</div></div>
      <div class="card"><div class="label">أجر الإضافي المعتمد</div><div class="value small">${fmtMoney(overtimePay)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">إجمالي الخصم الشهري</div><div class="value small">${fmtMoney(totalDeduction)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">صافي الراتب (بعد الخصم + أجر الإضافي المعتمد)</div><div class="value small">${fmtMoney(netSalary)} ${STATE.settings.currency}</div></div>
    `;

    if(!rows){
      wrapTable.innerHTML='<div class="empty">لا توجد بيانات لهذا الموظف خلال الشهر المحدد.</div>';
      return;
    }
    wrapTable.innerHTML=`<table class="ledger">
      <thead><tr>
        <th>التاريخ</th><th>الحضور</th><th>الانصراف</th><th>الحالة</th>
        <th>دقائق التأخير</th><th>مبلغ خصم التأخير</th>
        <th>دقائق الخروج المبكر</th><th>مبلغ خصم الخروج المبكر</th>
        <th>دقائق الإضافي</th><th>حالة اعتماد الإضافي</th><th>أجر الإضافي</th>
        <th>نسيان البصمة</th><th>خصم نسيان البصمة</th><th>إجمالي خصم اليوم</th>
      </tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr>
        <td colspan="4" style="text-align:left;font-weight:700;background:var(--paper-2);">الإجمالي</td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(lateMinutes)}</td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(lateDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(earlyMinutes)}</td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(earlyDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${minToHM(overtimeMinutes)}</td>
        <td style="background:var(--paper-2);"></td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(overtimePay)} ${STATE.settings.currency}</td>
        <td style="background:var(--paper-2);"></td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(fingerprintDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(totalDeduction)} ${STATE.settings.currency}</td>
      </tr></tfoot>
      </table>`;
  }


  /* ================= Daily Withdrawals (Workers + Employees) ================= */
  const withdrawMonthInput=document.getElementById('withdrawMonth');
  withdrawMonthInput.value=todayStr().slice(0,7);
  withdrawMonthInput.addEventListener('change', ()=>{ renderWithdrawals(); renderWithdrawEmpStatement(); });

  function renderWithdrawals(){
    const month=withdrawMonthInput.value || todayStr().slice(0,7);
    const workers=activeEmployees().filter(e=>empType(e)==='عامل');
    const staff=activeEmployees().filter(e=>empType(e)==='موظف');
    const allEmps=workers.concat(staff);
    const wrap=document.getElementById('withdrawTableWrap');

    if(!allEmps.length){
      wrap.innerHTML='<div class="empty">لا يوجد عمال أو موظفون نشطون. أضفهم من تبويب "الموظفون" أولاً (حدد الفئة: عامل أو موظف).</div>';
      document.getElementById('withdrawCards').innerHTML='';
      return;
    }

    const days=daysInMonth(month);
    const colTotals={}; allEmps.forEach(e=>colTotals[e.id]=0);
    let grandTotal=0;

    let bodyRows='';
    for(let d=1; d<=days; d++){
      const date=dateInMonth(month,d);
      const weekday=weekdayShort(date);
      let rowTotal=0;
      const cells=allEmps.map(e=>{
        const val=withdrawalOf(date, e.id);
        rowTotal+=val; colTotals[e.id]+=val;
        return `<td><input type="number" min="0" step="1" class="wd-input" data-date="${date}" data-emp="${e.id}" value="${val>0?val:''}" style="width:76px;text-align:center;" placeholder="0"></td>`;
      }).join('');
      grandTotal+=rowTotal;
      bodyRows+=`<tr><td class="name-cell" style="white-space:nowrap;">${date}</td><td style="white-space:nowrap;">${weekday}</td>${cells}<td style="font-weight:700;white-space:nowrap;">${rowTotal>0?fmtMoney(rowTotal)+' '+STATE.settings.currency:'—'}</td></tr>`;
    }

    const groupHeader=(workers.length? `<th colspan="${workers.length}" style="text-align:center;background:var(--paper-2);">عمال المصنع</th>`:'') +
                       (staff.length? `<th colspan="${staff.length}" style="text-align:center;background:var(--paper-2);">الموظفون</th>`:'');
    const nameHeaders=allEmps.map(e=>`<th style="white-space:nowrap;font-size:11px;">${escapeHtml(e.name)}</th>`).join('');
    const footCells=allEmps.map(e=>`<td style="font-weight:700;background:var(--paper-2);white-space:nowrap;">${fmtMoney(colTotals[e.id])} ${STATE.settings.currency}</td>`).join('');

    wrap.innerHTML=`<table class="ledger">
      <thead>
        <tr><th rowspan="2">التاريخ</th><th rowspan="2">اليوم</th>${groupHeader}<th rowspan="2">الإجمالي اليومي</th></tr>
        <tr>${nameHeaders}</tr>
      </thead>
      <tbody>${bodyRows}</tbody>
      <tfoot><tr>
        <td colspan="2" style="text-align:left;font-weight:700;background:var(--paper-2);">الإجمالي الشهري</td>
        ${footCells}
        <td style="font-weight:700;background:var(--paper-2);white-space:nowrap;">${fmtMoney(grandTotal)} ${STATE.settings.currency}</td>
      </tr></tfoot>
    </table>`;

    wrap.querySelectorAll('.wd-input').forEach(inp=>{
      inp.addEventListener('change', ()=>{
        const val=Number(inp.value||0);
        setWithdrawal(inp.dataset.date, inp.dataset.emp, val);
        persist();
        renderWithdrawals();
        renderWithdrawEmpStatement();
      });
    });

    const workersTotal=workers.reduce((s,e)=>s+colTotals[e.id],0);
    const staffTotal=staff.reduce((s,e)=>s+colTotals[e.id],0);
    document.getElementById('withdrawCards').innerHTML=`
      <div class="card"><div class="label">عدد العمال</div><div class="value">${workers.length}</div></div>
      <div class="card"><div class="label">عدد الموظفين</div><div class="value">${staff.length}</div></div>
      <div class="card late"><div class="label">إجمالي سحوبات العمال هذا الشهر</div><div class="value small">${fmtMoney(workersTotal)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">إجمالي سحوبات الموظفين هذا الشهر</div><div class="value small">${fmtMoney(staffTotal)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">إجمالي السحوبات الكلي</div><div class="value small">${fmtMoney(grandTotal)} ${STATE.settings.currency}</div></div>
    `;
  }

  /* ================= سند الصرف اليومي ================= */
  var LS_VOUCHER='niveen_voucher_v1';
  var V=(function(){ var d={notes:{},acc:{},accMain:{},grp:{},draft:{},extra:{},hide:{},gnames:{},cgroups:{}}; try{ var o=JSON.parse(localStorage.getItem(LS_VOUCHER)||'null'); if(o&&typeof o==='object'){ Object.keys(d).forEach(function(k){ if(o[k]&&typeof o[k]==='object') d[k]=o[k]; }); } }catch(e){} return d; })();
  if(!V.grp['emtfuadghafari1']) V.grp['emtfuadghafari1']='g3';
  function vSave(){ try{ localStorage.setItem(LS_VOUCHER,JSON.stringify(V)); }catch(e){} }
  var V_GROUPS=[{id:'g1',t:'سحبيات ورشة الأثاث'},{id:'g2',t:'سحبيات الحراسة'},{id:'g3',t:'سحبيات الإداريين'},{id:'g4',t:'سحبيات العناية بالمكان'}];
  function vLocalToday(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function vEsc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function vFmt(n){ return (Number(n)||0).toLocaleString('en-US'); }
  function vInfer(e){
    var j=String(e.job||''), dp=String(e.dept||'');
    if(/حارس|حراس/.test(j)) return 'g2';
    if(/خدمات|نظاف|تنظيف/.test(j)||/تنظيف/.test(dp)) return 'g4';
    if(/الإدارة|الادارة|حسابات|إدار|ادار/.test(dp+' '+j)) return 'g3';
    return 'g1';
  }
  /* المجموعات: الافتراضية قابلة لإعادة التسمية + مجموعات مخصصة يضيفها المستخدم */
  function vGroups(){
    return V_GROUPS.map(function(g){ return {id:g.id,t:V.gnames[g.id]||g.t}; })
      .concat(Object.keys(V.cgroups).map(function(id){ return {id:id,t:V.gnames[id]||V.cgroups[id]}; }));
  }
  function vGroupOf(e){
    var g=V.grp[e.id];
    if(g && vGroups().some(function(x){ return x.id===g; })) return g;
    return vInfer(e);
  }
  function fillEmpVGroupSelect(){
    var sel=document.getElementById('empVGroup'); if(!sel) return; var cur=sel.value;
    sel.innerHTML='<option value="">تلقائي (حسب الوظيفة والقسم)</option>'+vGroups().map(function(g){ return '<option value="'+g.id+'">'+vEsc(g.t)+'</option>'; }).join('');
    sel.value=cur;
  }
  var vDateEl=document.getElementById('vDate'), vBodyEl=document.getElementById('vBody');
  vDateEl.value=vLocalToday();
  function vHasPosted(date){ var d=STATE.withdrawals[date]; return !!(d&&Object.keys(d).some(function(k){ return Number(d[k])>0; })); }
  function vExtras(date){ return (V.extra[date]=V.extra[date]||[]); }
  /* إخفاء عامل/موظف من سند يوم معيّن فقط (لا يحذفه من النظام) */
  function vHidden(date){ return (V.hide[date]=V.hide[date]||[]); }
  function vVisible(date){ var h=vHidden(date); return activeEmployees().filter(function(e){ return h.indexOf(e.id)<0; }); }
  function vRenderHidden(){
    var bar=document.getElementById('vHiddenBar'); if(!bar) return;
    var date=vDateEl.value, h=vHidden(date).filter(function(id){ return activeEmployees().some(function(e){ return e.id===id; }); });
    if(!h.length){ bar.innerHTML=''; bar.style.display='none'; return; }
    bar.style.display='';
    bar.innerHTML='<b>مخفيون من سند هذا اليوم:</b> '+h.map(function(id){ var e=empById(id); return '<span class="v-hchip">'+vEsc(e?e.name:'')+' <button type="button" class="btn btn-ghost btn-sm v-unhide" data-id="'+id+'">إعادة</button></span>'; }).join(' ')+
      ' <button type="button" class="btn btn-ghost btn-sm v-unhide-all">إعادة الكل</button>';
  }
  /* المبلغ المطلوب ترحيله لكل عامل = مبلغه في السند + أي مصروف آخر مربوط به */
  function vTarget(date){
    var t={}; vVisible(date).forEach(function(e){ var a=Number(V.draft[e.id])||0; if(a>0) t[e.id]=a; });
    vExtras(date).forEach(function(x){
      var a=Number(x.amt)||0; if(a>0&&x.emp&&vVisible(date).some(function(e){ return e.id===x.emp; })) t[x.emp]=(t[x.emp]||0)+a;
    });
    return t;
  }
  function vLoadDate(){
    var date=vDateEl.value; if(!date||!vHasPosted(date)) return;
    var d=STATE.withdrawals[date], linked={}; V.draft={};
    vExtras(date).forEach(function(x){ if(x.emp&&Number(x.amt)>0) linked[x.emp]=(linked[x.emp]||0)+Number(x.amt); });
    Object.keys(d).forEach(function(k){ var a=Number(d[k])-(linked[k]||0); if(a>0) V.draft[k]=a; });
    vSave();
  }
  function vTotal(){
    var date=vDateEl.value, t=0;
    vVisible(date).forEach(function(e){ t+=Number(V.draft[e.id])||0; });
    vExtras(date).forEach(function(x){ t+=Number(x.amt)||0; });
    return t;
  }
  function vStatusRefresh(){
    var date=vDateEl.value, el=document.getElementById('vStatus'); if(!el) return;
    vRenderHidden();
    vNetRefresh();
    document.getElementById('vTotal').textContent=vFmt(vTotal());
    document.getElementById('vDateTxt').textContent=date||'';
    document.getElementById('vDayTxt').textContent=date?weekdayShort(date):'';
    if(!date){ el.textContent='اختر التاريخ.'; return; }
    var d=STATE.withdrawals[date]||{}, tg=vTarget(date), same=true;
    activeEmployees().forEach(function(e){ if((tg[e.id]||0)!==(Number(d[e.id])||0)) same=false; });
    el.textContent=vHasPosted(date)||Object.keys(d).length
      ? (same?'✓ هذا اليوم مُرحَّل إلى كشف السحبيات بنفس المبالغ.':'⚠ هذا اليوم مُرحَّل سابقاً وتوجد تعديلات لم تُرحَّل — ستُستبدل مبالغ هذا اليوم عند الطباعة أو الترحيل.')
      : 'لم يُرحَّل هذا اليوم بعد. سيُرحَّل عند الطباعة أو المشاركة.';
  }
  function vRec(id){ var sh=STATE.sheets[vDateEl.value], r=(sh&&sh.records[id])||{}; return {checkIn:r.checkIn||'', checkOut:r.checkOut||''}; }
  /* الصافي = الأجر (إن سُجّل حضور) − خصم التأخير/الخروج المبكر − المبلغ المسحوب في السند */
  function vNetRefresh(){
    var date=vDateEl.value, tg=vTarget(date), tw=0, tn=0, tp=0, sh=STATE.sheets[date];
    vVisible(date).forEach(function(e){
      var rec=sh&&sh.records[e.id], wage=0, cut=0;
      if(rec&&(rec.checkIn||rec.checkOut||rec.leave)){ var c=computeRecord(e,rec,date); wage=dayRate(e); cut=(c.lateDeduction||0)+(c.earlyDeduction||0); }
      var pen=penaltyOf(date,e.id), net=wage-cut-(tg[e.id]||0)-pen; tw+=wage; tn+=net; tp+=pen;
      var cell=vBodyEl.querySelector('.v-net[data-id="'+e.id+'"]');
      if(cell){ cell.textContent=fmtMoney(net); cell.style.color=net<0?'var(--seal)':''; cell.style.fontWeight='700'; }
    });
    var a=document.getElementById('vTotWage'), b=document.getElementById('vTotNet'), c=document.getElementById('vTotPen');
    if(a) a.textContent=fmtMoney(tw); if(b) b.textContent=fmtMoney(tn); if(c) c.textContent=fmtMoney(tp);
  }
  function renderVoucher(){
    var date=vDateEl.value, emps=vVisible(date), h='', n=0, ex=vExtras(date);
    if(!emps.length&&!ex.length){ vBodyEl.innerHTML='<tr><td colspan="14">لا يوجد عمال أو موظفون ظاهرون في هذا السند. أضفهم من تبويب «الموظفون» أو أعدهم من شريط «المخفيون» أعلاه.</td></tr>'; vStatusRefresh(); return; }
    vGroups().forEach(function(g){
      var list=emps.filter(function(e){ return vGroupOf(e)===g.id; }); if(!list.length && !V.cgroups[g.id]) return;
      h+='<tr class="v-grp"><td colspan="14"><input class="vin v-gname" type="text" data-g="'+g.id+'" value="'+vEsc(g.t)+'" title="اضغط لتعديل اسم المجموعة" style="width:60%;min-width:180px;text-align:center;font-weight:700;background:transparent;border-color:transparent;">'+
        (V.cgroups[g.id]?' <button type="button" class="btn btn-ghost btn-sm no-print v-gdel" data-g="'+g.id+'">حذف المجموعة</button>':'')+'</td></tr>';
      list.forEach(function(e){
        n++; var a=Number(V.draft[e.id])||0, note=(V.notes[date]||{})[e.id]||'';
        var opts=vGroups().map(function(x){ return '<option value="'+x.id+'"'+(x.id===g.id?' selected':'')+'>'+x.t.replace('سحبيات ','')+'</option>'; }).join('');
        h+='<tr><td class="no-print">'+n+'</td>'+
          '<td><input class="vin v-acc" type="text" data-id="'+e.id+'" value="'+vEsc(V.acc[e.id]||V.accMain[e.id]||'')+'"></td>'+
          '<td style="text-align:start">'+vEsc(e.name)+'</td>'+
          '<td class="no-print">'+vEsc(e.job||e.dept||'')+'</td>'+
          '<td class="no-print"><input class="vin w-wage" type="number" inputmode="numeric" min="0" data-id="'+e.id+'" value="'+(dayRate(e)||'')+'"></td>'+
          '<td><input class="vin v-amt" type="number" inputmode="numeric" min="0" data-id="'+e.id+'" value="'+(a||'')+'" data-print="'+(a?vFmt(a):'-')+'"></td>'+
          '<td class="no-print"><input class="vin w-pen" type="number" inputmode="numeric" min="0" data-id="'+e.id+'" value="'+(penaltyOf(date,e.id)||'')+'" data-print="'+(penaltyOf(date,e.id)?vFmt(penaltyOf(date,e.id)):'-')+'"></td>'+
          '<td class="no-print"><input class="vin w-in" type="time" data-id="'+e.id+'" value="'+vRec(e.id).checkIn+'"></td>'+
          '<td class="no-print"><input class="vin w-out" type="time" data-id="'+e.id+'" value="'+vRec(e.id).checkOut+'"></td>'+
          '<td class="no-print v-net" data-id="'+e.id+'"></td>'+
          '<td></td><td></td>'+
          '<td><input class="vin v-note" type="text" data-id="'+e.id+'" value="'+vEsc(note)+'"></td>'+
          '<td class="no-print"><select class="vin v-gsel" data-id="'+e.id+'">'+opts+'</select> <button type="button" class="btn btn-ghost v-hide" data-id="'+e.id+'" title="إخفاء من سند هذا اليوم فقط">×</button></td></tr>';
      });
    });
    if(ex.length){
      h+='<tr class="v-grp"><td colspan="14"><input class="vin v-gname" type="text" data-g="extra" value="'+vEsc(V.gnames.extra||'مصاريف أخرى')+'" title="اضغط لتعديل العنوان" style="width:60%;min-width:180px;text-align:center;font-weight:700;background:transparent;border-color:transparent;"></td></tr>';
      var empOpts='<option value="">بدون — مصروف عام</option>'+emps.map(function(e){ return '<option value="'+e.id+'">'+vEsc(e.name)+'</option>'; }).join('');
      ex.forEach(function(x){
        n++; var a=Number(x.amt)||0;
        h+='<tr data-x="'+x.id+'"><td class="no-print">'+n+'</td><td></td>'+
          '<td><input class="vin x-name" type="text" data-x="'+x.id+'" value="'+vEsc(x.name)+'" placeholder="مثال: عشاء العمال"></td>'+
          '<td class="no-print"><input class="vin x-job" type="text" data-x="'+x.id+'" value="'+vEsc(x.job)+'"></td>'+
          '<td class="no-print"></td>'+
          '<td><input class="vin x-amt v-amt" type="number" inputmode="numeric" min="0" data-x="'+x.id+'" value="'+(a||'')+'" data-print="'+(a?vFmt(a):'-')+'"></td>'+
          '<td class="no-print"></td>'+
          '<td class="no-print"></td><td class="no-print"></td><td class="no-print"></td>'+
          '<td></td><td></td>'+
          '<td><input class="vin x-note" type="text" data-x="'+x.id+'" value="'+vEsc(x.note)+'"></td>'+
          '<td class="no-print"><select class="vin x-emp" data-x="'+x.id+'" title="اختياري: يُضاف هذا المبلغ إلى سحبيات العامل المختار">'+empOpts.replace('value="'+x.emp+'"','value="'+x.emp+'" selected')+'</select> <button type="button" class="btn btn-ghost x-del" data-x="'+x.id+'" title="حذف السطر">×</button></td></tr>';
      });
    }
    vBodyEl.innerHTML=h; vStatusRefresh();
  }
  function vFindX(id){ return vExtras(vDateEl.value).filter(function(x){ return x.id===id; })[0]; }
  vBodyEl.addEventListener('input',function(ev){
    var t=ev.target, id=t.getAttribute('data-id'), xid=t.getAttribute('data-x');
    if(xid){
      var x=vFindX(xid); if(!x) return;
      if(t.classList.contains('x-amt')){ var q=parseFloat(t.value); x.amt=q>0?q:0; t.setAttribute('data-print',q>0?vFmt(q):'-'); }
      else if(t.classList.contains('x-name')) x.name=t.value;
      else if(t.classList.contains('x-job')) x.job=t.value;
      else if(t.classList.contains('x-note')) x.note=t.value;
      vSave(); vStatusRefresh(); return;
    }
    if(!id) return;
    if(t.classList.contains('v-amt')){
      var v=parseFloat(t.value);
      if(v>0){ V.draft[id]=v; t.setAttribute('data-print',vFmt(v)); } else { delete V.draft[id]; t.setAttribute('data-print','-'); }
    } else if(t.classList.contains('w-pen')){
      var pv=parseFloat(t.value); setPenalty(vDateEl.value,id,pv>0?pv:0); t.setAttribute('data-print',pv>0?vFmt(pv):'-'); persist();
    } else if(t.classList.contains('v-acc')){
      if(t.value) V.acc[id]=t.value; else delete V.acc[id];
    } else if(t.classList.contains('v-note')){
      var date=vDateEl.value; V.notes[date]=V.notes[date]||{};
      if(t.value) V.notes[date][id]=t.value; else delete V.notes[date][id];
    }
    vSave(); vStatusRefresh();
  });
  vBodyEl.addEventListener('change',function(ev){
    var t=ev.target, wid=t.getAttribute('data-id');
    if(t.classList.contains('v-gname')){
      var gid=t.getAttribute('data-g'), nv=t.value.trim();
      if(nv && !(V.cgroups[gid]===nv) && !(gid==='extra'&&nv==='مصاريف أخرى')) V.gnames[gid]=nv; else delete V.gnames[gid];
      vSave(); fillEmpVGroupSelect(); renderVoucher(); return;
    }
    if(t.classList.contains('w-wage')){ var em=empById(wid); if(em){ em.dailyWage=Number(t.value||0); persist(); vStatusRefresh(); } return; }
    if(t.classList.contains('w-in')||t.classList.contains('w-out')){
      var field=t.classList.contains('w-in')?'checkIn':'checkOut', date=vDateEl.value, sheet=ensureSheet(date);
      if(!sheet.records[wid]) sheet.records[wid]={};
      var r=sheet.records[wid]; if(t.value) r[field]=t.value; else delete r[field];
      if(!Object.keys(r).length) delete sheet.records[wid];
      persist(); vStatusRefresh(); return;
    }
    if(t.classList.contains('v-gsel')){ V.grp[t.getAttribute('data-id')]=t.value; vSave(); renderVoucher(); }
    else if(t.classList.contains('x-emp')){ var x=vFindX(t.getAttribute('data-x')); if(x){ x.emp=t.value; vSave(); vStatusRefresh(); } }
  });
  vBodyEl.addEventListener('click',function(ev){
    var gd=ev.target.closest?ev.target.closest('.v-gdel'):null;
    if(gd){
      var gid2=gd.getAttribute('data-g');
      if(!confirm('حذف هذه المجموعة؟ سينتقل أعضاؤها إلى التصنيف التلقائي.')) return;
      delete V.cgroups[gid2]; delete V.gnames[gid2];
      Object.keys(V.grp).forEach(function(k){ if(V.grp[k]===gid2) delete V.grp[k]; });
      vSave(); fillEmpVGroupSelect(); renderVoucher(); return;
    }
    var hb=ev.target.closest?ev.target.closest('.v-hide'):null;
    if(hb){ var dt=vDateEl.value, hl=vHidden(dt), hid=hb.getAttribute('data-id'); if(hl.indexOf(hid)<0) hl.push(hid); vSave(); renderVoucher(); return; }
    var b=ev.target.closest?ev.target.closest('.x-del'):null; if(!b) return;
    var date=vDateEl.value; V.extra[date]=vExtras(date).filter(function(x){ return x.id!==b.getAttribute('data-x'); });
    vSave(); renderVoucher();
  });
  document.getElementById('vHiddenBar').addEventListener('click',function(ev){
    var dt=vDateEl.value, t=ev.target.closest?ev.target.closest('.v-unhide,.v-unhide-all'):null; if(!t) return;
    if(t.classList.contains('v-unhide-all')) V.hide[dt]=[];
    else V.hide[dt]=vHidden(dt).filter(function(id){ return id!==t.getAttribute('data-id'); });
    vSave(); renderVoucher();
  });
  document.getElementById('vAddGroupBtn').addEventListener('click',function(){
    var id='c'+Date.now().toString(36); V.cgroups[id]='مجموعة جديدة';
    vSave(); fillEmpVGroupSelect(); renderVoucher();
    var ins=vBodyEl.querySelectorAll('.v-gname'); if(ins.length){ var l=ins[ins.length-1]; l.focus(); l.select(); }
  });
  document.getElementById('vAddBtn').addEventListener('click',function(){
    vExtras(vDateEl.value).push({id:'x'+Date.now().toString(36),name:'',job:'',amt:0,note:'',emp:''});
    vSave(); renderVoucher();
    var ins=vBodyEl.querySelectorAll('.x-name'); if(ins.length) ins[ins.length-1].focus();
  });
  vDateEl.addEventListener('change',function(){ vLoadDate(); renderVoucher(); });
  /* الترحيل: يستبدل مبالغ هذا التاريخ لكل العاملين النشطين (المبلغ الفارغ = حذف السحب) فلا يتكرر الترحيل */
  function vPost(){
    var date=vDateEl.value; if(!date){ alert('اختر تاريخ السند أولاً.'); return null; }
    var day=STATE.withdrawals[date]||(STATE.withdrawals[date]={}), tg=vTarget(date), cnt=0, tot=0;
    activeEmployees().forEach(function(e){
      var a=tg[e.id]||0;
      if(a>0){ day[e.id]=a; cnt++; tot+=a; } else delete day[e.id];
    });
    if(!Object.keys(day).length) delete STATE.withdrawals[date];
    persist(); vSave(); vStatusRefresh();
    sheetNotice('تم ترحيل '+cnt+' مبلغاً (الإجمالي '+vFmt(tot)+') إلى كشف سحبيات '+date+' — المصاريف العامة غير المربوطة بعامل لا تُرحَّل',4500);
    return {cnt:cnt,tot:tot};
  }
  document.addEventListener('click',function(ev){
    var b=ev.target.closest?ev.target.closest('#printVoucherBtn,#shareVoucherBtn'):null;
    if(b) vPost();
  },true);
  document.getElementById('vPostBtn').addEventListener('click',function(){
    vPost();
  });
  document.getElementById('vClearBtn').addEventListener('click',function(){
    if(!confirm('تفريغ كل المبالغ وحذف المصاريف الأخرى لهذا اليوم؟ (لا يغيّر كشف السحبيات حتى تطبع أو ترحّل)')) return;
    V.draft={}; V.extra[vDateEl.value]=[]; vSave(); renderVoucher();
  });
  vLoadDate(); fillEmpVGroupSelect();


  /* ================= كشف سحبيات وفواتير خاص بموظف واحد ================= */
  const withdrawEmpSelect=document.getElementById('withdrawEmpSelect');
  withdrawEmpSelect.addEventListener('change', renderWithdrawEmpStatement);

  function fillWithdrawEmpSelect(){
    const prev=withdrawEmpSelect.value;
    const workers=activeEmployees().filter(e=>empType(e)==='عامل');
    const staff=activeEmployees().filter(e=>empType(e)==='موظف');
    const opt=list=>list.map(e=>`<option value="${e.id}">${escapeHtml(e.name)}</option>`).join('');
    withdrawEmpSelect.innerHTML=
      (workers.length? `<optgroup label="عمال المصنع">${opt(workers)}</optgroup>`:'') +
      (staff.length? `<optgroup label="الموظفون">${opt(staff)}</optgroup>`:'');
    if(prev && activeEmployees().some(e=>e.id===prev)) withdrawEmpSelect.value=prev;
  }

  function renderWithdrawEmpStatement(){
    fillWithdrawEmpSelect();
    const empId=withdrawEmpSelect.value;
    const emp=empById(empId);
    const cardsWrap=document.getElementById('withdrawEmpCards');
    const tableWrap=document.getElementById('withdrawEmpTableWrap');
    if(!emp){
      cardsWrap.innerHTML='';
      tableWrap.innerHTML='<div class="empty">لا يوجد عمال أو موظفون نشطون بعد.</div>';
      return;
    }
    const month=withdrawMonthInput.value || todayStr().slice(0,7);
    const days=daysInMonth(month);
    let rows='', totalWithdrawals=0;
    for(let d=1; d<=days; d++){
      const date=dateInMonth(month,d);
      const val=withdrawalOf(date, empId);
      if(val>0){
        totalWithdrawals+=val;
        rows+=`<tr><td>${date}</td><td>${weekdayShort(date)}</td><td style="font-weight:700;">${fmtMoney(val)} ${STATE.settings.currency}</td></tr>`;
      }
    }
    const invoiceAmount=invoiceAmountOf(month, empId);
    const advanceAmount=advanceOf(month, empId);
    const grandTotal=totalWithdrawals+invoiceAmount+advanceAmount;

    cardsWrap.innerHTML=`
      <div class="card"><div class="label">الاسم</div><div class="value small">${escapeHtml(emp.name)}</div></div>
      <div class="card"><div class="label">الفئة</div><div class="value small">${empType(emp)}</div></div>
      <div class="card"><div class="label">القسم</div><div class="value small">${escapeHtml(emp.dept||'—')}</div></div>
      <div class="card late"><div class="label">إجمالي السحوبات اليومية هذا الشهر</div><div class="value small">${fmtMoney(totalWithdrawals)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">فواتير مبيعات مسحوبة</div><div class="value small">${fmtMoney(invoiceAmount)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">سلف مقسطة سابقة</div><div class="value small">${fmtMoney(advanceAmount)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">إجمالي المستحق خصمه هذا الشهر</div><div class="value small">${fmtMoney(grandTotal)} ${STATE.settings.currency}</div></div>
    `;

    tableWrap.innerHTML=`
      <div class="shift-note" style="margin-bottom:14px;">
        <b>كشف سحبيات وفواتير — ${escapeHtml(emp.name)}</b> — شهر ${month}
      </div>
      <table class="ledger" style="max-width:520px;">
        <thead><tr><th>التاريخ</th><th>اليوم</th><th>المبلغ المسحوب</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="3" style="text-align:center;color:var(--ink-soft);">لا توجد سحوبات مسجّلة لهذا الشهر</td></tr>'}</tbody>
        <tfoot>
          <tr><td colspan="2" style="text-align:left;font-weight:700;background:var(--paper-2);">إجمالي السحوبات اليومية</td><td style="font-weight:700;background:var(--paper-2);">${fmtMoney(totalWithdrawals)} ${STATE.settings.currency}</td></tr>
          <tr><td colspan="2" style="text-align:left;background:var(--paper-2);">فواتير مبيعات مسحوبة</td><td style="background:var(--paper-2);">${fmtMoney(invoiceAmount)} ${STATE.settings.currency}</td></tr>
          <tr><td colspan="2" style="text-align:left;background:var(--paper-2);">سلف مقسطة سابقة</td><td style="background:var(--paper-2);">${fmtMoney(advanceAmount)} ${STATE.settings.currency}</td></tr>
          <tr><td colspan="2" style="text-align:left;font-weight:700;background:var(--gold-light);">الإجمالي الكلي</td><td style="font-weight:700;background:var(--gold-light);">${fmtMoney(grandTotal)} ${STATE.settings.currency}</td></tr>
        </tfoot>
      </table>
      <div class="btn-row" style="margin-top:34px;justify-content:space-between;max-width:520px;">
        <div>توقيع الموظف: ______________________</div>
        <div>توقيع المستلم / المحاسب: ______________________</div>
      </div>
    `;
  }

  window.addEventListener('afterprint', ()=>{ document.body.classList.remove('print-emp-statement'); });

  /* ================= Final Payroll — Net Salaries ================= */
  const finalPayMonthInput=document.getElementById('finalPayMonth');
  finalPayMonthInput.value=todayStr().slice(0,7);
  finalPayMonthInput.addEventListener('change', renderFinalPay);

  function computeFinalPayRow(emp, month){
    const dates=Object.keys(STATE.sheets).filter(d=>d.startsWith(month)).sort();
    let daysPresent=0, daysLeave=0, daysAbsentMarked=0, absentDeduction=0, lateEarlyDeduction=0, fingerprintDeduction=0, overtimeMinutes=0, overtimePay=0;
    dates.forEach(date=>{
      const sheet=STATE.sheets[date];
      const rec=sheet.records[emp.id];
      if(!rec) return;
      const c=computeRecord(emp, rec, date);
      fingerprintDeduction += c.fingerprintDeduction||0;
      overtimeMinutes += c.overtimeMinutes||0;
      overtimePay += c.overtimePay||0; // لا يُحتسب إلا بعد اعتماد المدير العام (rec.overtimeApproved)
      if(c.status==='إجازة'){ daysPresent++; daysLeave++; /* يُحتسب مداوماً ويُصرف أجر اليوم، ويُخصم يوم من رصيد إجازته السنوية بدل الأجر */ }
      else if(c.status==='غياب'){ daysAbsentMarked++; absentDeduction+=c.deduction; }
      else if(c.status==='غائب'){ /* غياب غير مرصود — بدون خصم يوم تلقائي */ }
      else{
        daysPresent++;
        lateEarlyDeduction += (c.lateDeduction||0) + (c.earlyDeduction||0);
      }
    });
    const year=month.slice(0,4);
    const leaveBalance=leaveBalanceRemaining(emp, year);
    const rate=dayRate(emp);
    const gross=rate*daysPresent;
    const withdrawals=withdrawalsForMonth(month, emp.id);
    const invoiceDeduction=invoiceAmountOf(month, emp.id);
    const advance=advanceOf(month, emp.id);
    const penalties=penaltiesForMonth(month, emp.id);
    const totalDeduct=penalties+withdrawals+invoiceDeduction+advance+absentDeduction+lateEarlyDeduction+fingerprintDeduction;
    const net=gross-totalDeduct+overtimePay;
    return {emp, daysPresent, daysLeave, leaveBalance, rate, gross, penalties, withdrawals, invoiceDeduction, advance, daysAbsentMarked, absentDeduction, lateEarlyDeduction, fingerprintDeduction, totalDeduct, overtimeMinutes, overtimePay, net};
  }

  function renderFinalPay(){
    const month=finalPayMonthInput.value || todayStr().slice(0,7);
    const workers=activeEmployees().filter(e=>empType(e)==='عامل');
    const staff=activeEmployees().filter(e=>empType(e)==='موظف');
    const wrap=document.getElementById('finalPayTableWrap');

    if(!workers.length && !staff.length){
      wrap.innerHTML='<div class="empty">لا يوجد عمال أو موظفون نشطون بعد.</div>';
      document.getElementById('finalPayCards').innerHTML='';
      return;
    }

    function groupRows(list){
      const sub={gross:0, penalties:0, withdrawals:0, invoiceDeduction:0, advance:0, absentDeduction:0, lateEarlyDeduction:0, fingerprintDeduction:0, totalDeduct:0, overtimePay:0, net:0};
      const rowsHtml=list.map(emp=>{
        const r=computeFinalPayRow(emp, month);
        sub.gross+=r.gross; sub.penalties+=r.penalties; sub.withdrawals+=r.withdrawals; sub.invoiceDeduction+=r.invoiceDeduction; sub.advance+=r.advance;
        sub.absentDeduction+=r.absentDeduction; sub.lateEarlyDeduction+=r.lateEarlyDeduction;
        sub.fingerprintDeduction+=r.fingerprintDeduction; sub.totalDeduct+=r.totalDeduct; sub.overtimePay+=r.overtimePay; sub.net+=r.net;
        return `<tr>
          <td class="name-cell">${escapeHtml(emp.name)}</td>
          <td>${r.daysPresent}</td>
          <td>${fmtMoney(r.rate)} ${STATE.settings.currency}</td>
          <td>${fmtMoney(r.gross)} ${STATE.settings.currency}</td>
          <td>${fmtMoney(r.withdrawals)} ${STATE.settings.currency}</td>
          <td><input type="number" min="0" step="1" class="inv-input" data-emp="${emp.id}" value="${r.invoiceDeduction>0?r.invoiceDeduction:''}" style="width:90px;text-align:center;" placeholder="0"></td>
          <td><input type="number" min="0" step="1" class="adv-input" data-emp="${emp.id}" value="${r.advance>0?r.advance:''}" style="width:90px;text-align:center;" placeholder="0"></td>
          <td>${r.daysAbsentMarked}</td>
          <td>${fmtMoney(r.absentDeduction)} ${STATE.settings.currency}</td>
          <td>${fmtMoney(r.lateEarlyDeduction)} ${STATE.settings.currency}</td>
          <td>${fmtMoney(r.fingerprintDeduction)} ${STATE.settings.currency}</td>
          <td>${fmtMoney(r.penalties)} ${STATE.settings.currency}</td>
          <td class="deduct">${fmtMoney(r.totalDeduct)} ${STATE.settings.currency}</td>
          <td>${minToHM(r.overtimeMinutes)}</td>
          <td style="color:var(--ok);font-weight:700;">+${fmtMoney(r.overtimePay)} ${STATE.settings.currency}</td>
          <td style="font-weight:700;${r.net<0?'color:var(--seal);':''}">${fmtMoney(r.net)} ${STATE.settings.currency}</td>
          <td><div class="sign-line" style="min-width:100px;height:24px;border-bottom:1px solid #999;"></div></td>
        </tr>`;
      }).join('');
      return {rowsHtml, sub};
    }

    const workersRes=groupRows(workers);
    const staffRes=groupRows(staff);

    function groupHeaderRow(title, count){
      return count? `<tr><td colspan="17" style="background:var(--gold-light);font-weight:700;">${title} (${count})</td></tr>` : '';
    }
    function subtotalRow(label, sub){
      return `<tr>
        <td colspan="3" style="text-align:left;font-weight:700;background:var(--paper-2);">${label}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.gross)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.withdrawals)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.invoiceDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.advance)} ${STATE.settings.currency}</td>
        <td style="background:var(--paper-2);"></td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.absentDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.lateEarlyDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.fingerprintDeduction)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.penalties)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);" class="deduct">${fmtMoney(sub.totalDeduct)} ${STATE.settings.currency}</td>
        <td style="background:var(--paper-2);"></td>
        <td style="font-weight:700;background:var(--paper-2);color:var(--ok);">+${fmtMoney(sub.overtimePay)} ${STATE.settings.currency}</td>
        <td style="font-weight:700;background:var(--paper-2);">${fmtMoney(sub.net)} ${STATE.settings.currency}</td>
        <td style="background:var(--paper-2);"></td>
      </tr>`;
    }

    let bodyRows='';
    if(workers.length){ bodyRows+=groupHeaderRow('عمال المصنع', workers.length) + workersRes.rowsHtml + subtotalRow('إجمالي العمال', workersRes.sub); }
    if(staff.length){ bodyRows+=groupHeaderRow('الموظفون', staff.length) + staffRes.rowsHtml + subtotalRow('إجمالي الموظفين', staffRes.sub); }

    const grand={
      gross: workersRes.sub.gross+staffRes.sub.gross,
      penalties: workersRes.sub.penalties+staffRes.sub.penalties,
      withdrawals: workersRes.sub.withdrawals+staffRes.sub.withdrawals,
      invoiceDeduction: workersRes.sub.invoiceDeduction+staffRes.sub.invoiceDeduction,
      advance: workersRes.sub.advance+staffRes.sub.advance,
      absentDeduction: workersRes.sub.absentDeduction+staffRes.sub.absentDeduction,
      lateEarlyDeduction: workersRes.sub.lateEarlyDeduction+staffRes.sub.lateEarlyDeduction,
      fingerprintDeduction: workersRes.sub.fingerprintDeduction+staffRes.sub.fingerprintDeduction,
      totalDeduct: workersRes.sub.totalDeduct+staffRes.sub.totalDeduct,
      overtimePay: workersRes.sub.overtimePay+staffRes.sub.overtimePay,
      net: workersRes.sub.net+staffRes.sub.net
    };
    bodyRows+=subtotalRow('الإجمالي العام', grand);

    wrap.innerHTML=`<table class="ledger">
      <thead><tr>
        <th>البيان (الاسم)</th><th>أيام الدوام الفعلية</th><th>الأجر اليومي</th><th>الإجمالي</th>
        <th>مصروف يومي (سحوبات)</th><th>فواتير مبيعات مسحوبة</th><th>سلف مقسطة سابقة</th>
        <th>أيام الغياب</th><th>اجمالي الغياب</th><th>التأخيرات</th><th>نسيان بصمة</th><th>جزاءات وغرامات وتحميل</th>
        <th>اجمالي الخصومات</th><th>دقائق الإضافي</th><th>أجر الإضافي المعتمد</th><th>الصافي</th>
        <th>توقيع الموظف</th>
      </tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>`;

    wrap.querySelectorAll('.adv-input').forEach(inp=>{
      inp.addEventListener('change', ()=>{
        const val=Number(inp.value||0);
        setAdvance(month, inp.dataset.emp, val);
        persist();
        renderFinalPay();
      });
    });

    wrap.querySelectorAll('.inv-input').forEach(inp=>{
      inp.addEventListener('change', ()=>{
        const val=Number(inp.value||0);
        setInvoiceAmount(month, inp.dataset.emp, val);
        persist();
        renderFinalPay();
      });
    });

    document.getElementById('finalPayCards').innerHTML=`
      <div class="card"><div class="label">عدد العمال</div><div class="value">${workers.length}</div></div>
      <div class="card"><div class="label">عدد الموظفين</div><div class="value">${staff.length}</div></div>
      <div class="card"><div class="label">إجمالي الأجور المستحقة (قبل الخصم)</div><div class="value small">${fmtMoney(grand.gross)} ${STATE.settings.currency}</div></div>
      <div class="card late"><div class="label">إجمالي الخصومات (سحبيات+فواتير مبيعات+سلف+غياب+تأخير+بصمة+جزاءات)</div><div class="value small">${fmtMoney(grand.totalDeduct)} ${STATE.settings.currency}</div></div>
      <div class="card"><div class="label">إجمالي أجر الإضافي المعتمد (يُضاف للصافي)</div><div class="value small">${fmtMoney(grand.overtimePay)} ${STATE.settings.currency}</div></div>
      <div class="card gold"><div class="label">صافي المستحق للجميع</div><div class="value small">${fmtMoney(grand.net)} ${STATE.settings.currency}</div></div>
    `;
  }

  window.addEventListener('afterprint', ()=>{ document.body.classList.remove('print-finalpay'); });


  /* ================= طباعة ومشاركة الكشوفات والتقارير (بنفس أسلوب قسم طلبات العملاء) ================= */
  /* SHEET_LOGO -> js/assets.js */
  const SHEET_BTNS=[
    {btn:'printDailyBtn',     tab:'tab-daily',       title:'كشف الحضور والانصراف اليومي', orient:'landscape'},
    {btn:'printReportBtn',    tab:'tab-reports',     sign:true, title:'التقرير الشهري للحضور والتأخير', orient:'landscape'},
    {btn:'printEmpReportBtn', tab:'tab-empreport',   sign:true, title:'كشف الموظف الشهري', orient:'landscape'},
    {btn:'printWithdrawBtn',  tab:'tab-withdrawals', hide:'#withdrawEmpStatementSection', sign:true, title:'كشف السحبيات الإجمالي', orient:'landscape'},
    {btn:'printWithdrawEmpBtn',tab:'tab-withdrawals',hide:'#withdrawGroupSection', sign:true, title:'كشف سحبيات موظف', orient:'landscape'},
    {btn:'printVoucherBtn',  tab:'tab-voucher', title:'سند الصرف اليومي', orient:'landscape'},
    {btn:'printFinalPayBtn',  tab:'tab-finalpay',    footer:true, title:'كشف الرواتب النهائي', orient:'landscape'}
  ];

  function oEsc(v){ return String(v==null?'':v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function sheetNotice(msg, ms){
    let n=document.getElementById('sheetNotice');
    if(!n){
      n=document.createElement('div'); n.id='sheetNotice';
      n.style.cssText='position:fixed;left:50%;top:18px;transform:translateX(-50%);z-index:99999;background:#4a0d1c;color:#fff;padding:10px 20px;border-radius:24px;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,.35);max-width:90vw;text-align:center;';
      document.body.appendChild(n);
    }
    n.textContent=msg; n.style.display='block';
    clearTimeout(n._t);
    if(ms) n._t=setTimeout(()=>{ n.style.display='none'; }, ms);
  }
  function sheetHideNotice(){ const n=document.getElementById('sheetNotice'); if(n) n.style.display='none'; }
  function sheetFileName(cfg){ return cfg.title.replace(/[\\/:*?"<>|]+/g,' ').trim()+'-'+todayStr(); }

  /* محتوى الكشف بنفس تنسيق أوامر الطلبات: شعار + عنوان + جدول بيانات + الجداول + التوقيعات */
  function buildSheetHtml(cfg){
    const orig=document.getElementById(cfg.tab);
    const clone=orig.cloneNode(true);
    const o=orig.querySelectorAll('input,select,textarea'), c=clone.querySelectorAll('input,select,textarea');
    o.forEach((el,i)=>{
      const t=c[i]; if(!t) return;
      if(el.tagName==='SELECT'){ Array.from(t.options).forEach((op,j)=>{ if(j===el.selectedIndex) op.setAttribute('selected',''); else op.removeAttribute('selected'); }); }
      else if(el.tagName==='TEXTAREA'){ t.textContent=el.value; }
      else if(el.type==='checkbox'||el.type==='radio'){ if(el.checked) t.setAttribute('checked',''); else t.removeAttribute('checked'); }
      else t.setAttribute('value',el.value);
    });
    const oc=orig.querySelectorAll('canvas'), cc=clone.querySelectorAll('canvas');
    oc.forEach((cv,i)=>{ try{ const img=document.createElement('img'); img.src=cv.toDataURL('image/png'); img.style.cssText='max-width:100%;height:auto;display:block;'; cc[i].replaceWith(img); }catch(e){ cc[i].remove(); } });
    clone.querySelectorAll('.no-print,h2.section-title,p.section-sub,hr').forEach(n=>n.remove());
    if(cfg.hide) clone.querySelectorAll(cfg.hide).forEach(n=>n.remove());
    clone.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));
    /* البطاقات الدوّارة ثلاثية الأبعاد -> جدول بيانات بسيط */
    clone.querySelectorAll('.cards').forEach(host=>{
      let items=Array.from(host.querySelectorAll('.c3d-item')).map(it=>[
        (it.querySelector('.c3d-title')||{}).textContent||'', (it.querySelector('.c3d-value')||{}).textContent||'']);
      if(!items.length) items=Array.from(host.querySelectorAll(':scope > .card')).map(cd=>[
        (cd.querySelector('.label')||{}).textContent||'', (cd.querySelector('.value')||{}).textContent||'']);
      if(!items.length){ host.remove(); return; }
      let rows='';
      for(let i=0;i<items.length;i+=3){
        const grp=items.slice(i,i+3);
        rows+='<tr>'+grp.map(x=>'<td>'+oEsc(x[0])+'</td><td><b>'+oEsc(x[1])+'</b></td>').join('')+(grp.length<3?'<td></td><td></td>'.repeat(3-grp.length):'')+'</tr>';
      }
      const t=document.createElement('table'); t.className='kv'; t.innerHTML=rows;
      host.replaceWith(t);
    });
    clone.querySelectorAll('tr.v-grp td').forEach(td=>td.setAttribute('colspan', cfg.tab==='tab-voucher'?'6':'10'));
    /* الحقول -> نص عادي كما في كشوف الطلبات */
    clone.querySelectorAll('input,select,textarea').forEach(el=>{
      let txt='';
      if(el.tagName==='SELECT'){ const op=el.querySelector('option[selected]')||el.options[0]; txt=op?op.textContent:''; }
      else if(el.tagName==='TEXTAREA'){ txt=el.textContent; }
      else if(el.type==='checkbox'||el.type==='radio'){ txt=el.hasAttribute('checked')?'✓':'☐'; }
      else txt=el.getAttribute('data-print')||el.getAttribute('value')||'';
      const sp=document.createElement('span'); sp.textContent=txt; sp.style.fontWeight='700';
      el.replaceWith(sp);
    });
    if(cfg.tab==='tab-voucher'){
      /* سند الصرف المطبوع: الحساب (رئيسي / تحليلي أفقياً) + الاسم + المبلغ المسحوب + التوقيعان + الملاحظات فقط */
      /* تقسيم السند إلى صفحات: كل صفحة بجدولها وإجماليها، وفي آخر صفحة الإجمالي الكلي */
      const vt=clone.querySelector('table.vtbl'), host=clone.querySelector('.table-scroll');
      if(vt && host){
        const theadHtml=vt.querySelector('thead').outerHTML;
        const rows=Array.from(vt.querySelector('tbody').children);
        const num=tr=>{ if(tr.classList.contains('v-grp')||!tr.children[2]) return 0; const n=Number(String(tr.children[2].textContent).replace(/[^0-9.\-]/g,'')); return isFinite(n)?n:0; };
        const pages=[[]]; let cnt=0, lim=9;
        rows.forEach(tr=>{
          if(cnt>=lim){
            const cur=pages[pages.length-1], carry=[];
            while(cur.length && cur[cur.length-1].classList.contains('v-grp')) carry.unshift(cur.pop());
            pages.push(carry); cnt=carry.length; lim=13;
          }
          pages[pages.length-1].push(tr); cnt++;
        });
        const fmt=n=>Number(n).toLocaleString('en-US');
        let grand=0, out='';
        pages.forEach((pg,i)=>{
          const sum=pg.reduce((a,tr)=>a+num(tr),0); grand+=sum;
          const last=i===pages.length-1;
          let foot='<tr class="v-ptot"><td colspan="2"><b>'+(pages.length>1?'إجمالي الصفحة '+(i+1):'الإجمالي')+'</b></td><td><b>'+fmt(sum)+'</b></td><td colspan="3"></td></tr>';
          if(last && pages.length>1){
            foot+='<tr class="v-gtot"><td colspan="2"><b>'+(pages.length===2?'إجمالي الصفحتين':'الإجمالي الكلي لجميع الصفحات')+'</b></td><td><b>'+fmt(grand)+'</b></td><td colspan="3"></td></tr>';
          }
          out+='<div class="v-page" style="'+(last?'':'page-break-after:always;break-after:page;')+'">'+
            (pages.length>1?'<div style="text-align:center;font-weight:700;margin:4px 0;">صفحة '+(i+1)+' من '+pages.length+'</div>':'')+
            '<table class="ledger vtbl">'+theadHtml+'<tbody>'+pg.map(tr=>tr.outerHTML).join('')+'</tbody><tfoot>'+foot+'</tfoot></table></div>';
        });
        host.innerHTML=out;
      }
    }
    let sign='';
    const f=clone.querySelector('.finalpay-sign-footer');
    if(f){
      if(cfg.footer){ sign='<div class="sign">'+Array.from(f.children).map(d=>'<div>'+oEsc(d.textContent.split(':')[0].trim())+'</div>').join('')+'</div>'; }
      f.remove();
    }
    if(cfg.sign && !sign){ sign='<div class="sign"><div>المحاسب</div><div>المراجع</div><div>المدير العام</div></div>'; }
    const company=(document.getElementById('companyNameInput')||{}).value||'';
    const cur=(STATE&&STATE.settings&&STATE.settings.currency)||'';
    const meta='<table class="kv"><tr><td>الشركة</td><td>'+oEsc(company)+'</td><td>تاريخ الطباعة</td><td>'+oEsc(todayStr())+'</td><td>عملة الاحتساب</td><td>'+oEsc(cur)+'</td></tr></table>';
    return '<div class="sheetlogo"><img src="'+SHEET_LOGO+'" alt="نيفين للأثاث"></div>'+
      '<h2>'+oEsc(cfg.title)+'</h2>'+meta+clone.innerHTML+sign;
  }
  /* ---- معاينة الكشف داخل التطبيق ثم الطباعة / المشاركة / الحفظ عبر js/output.js ---- */
  function openSheet(cfg, autoShare){
    return Output.preview({title:cfg.title, name:sheetFileName(cfg), orient:cfg.orient, bodyHtml:buildSheetHtml(cfg)}, {autoShare:!!autoShare});
  }
  SHEET_BTNS.forEach(cfg=>{
    const pb=document.getElementById(cfg.btn); if(!pb) return;
    pb.className='btn btn-gold';
    pb.addEventListener('click',()=>openSheet(cfg,false));
    const sb=document.createElement('button');
    sb.type='button'; sb.className='btn btn-navy'; sb.id=cfg.btn.replace('print','share');
    sb.textContent='مشاركة'+pb.textContent.replace('طباعة','').replace(' PDF','');
    sb.addEventListener('click',()=>openSheet(cfg,true));
    pb.insertAdjacentElement('afterend',sb);
  });

  /* ================= Backup ================= */
  /* لا يعتمد على تنزيل الملفات (يتسبب في إغلاق التطبيق داخل تطبيقات الجوال): النسخة تُنسخ كنص وتُلصق عند الاستيراد */
  function backupObject(){ const o=JSON.parse(JSON.stringify(STATE)); try{ o._voucher=JSON.parse(JSON.stringify(V)); }catch(e){} o._backupDate=new Date().toISOString(); return o; }
  function bkModal(title, bodyHtml){
    let m=document.getElementById('bkModal'); if(m) m.remove();
    m=document.createElement('div'); m.id='bkModal'; m.className='no-print';
    m.style.cssText='position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:12px;';
    m.innerHTML='<div style="background:#fff;border-radius:12px;max-width:680px;width:100%;max-height:92vh;overflow:auto;padding:16px;direction:rtl;"><h3 style="margin:0 0 8px;">'+title+'</h3>'+bodyHtml+'</div>';
    document.body.appendChild(m);
    m.addEventListener('click',e=>{ if(e.target===m) m.remove(); });
    return m;
  }
  function bkCopy(ta){
    ta.focus(); ta.select(); try{ ta.setSelectionRange(0,ta.value.length); }catch(e){}
    let ok=false; try{ ok=document.execCommand('copy'); }catch(e){}
    if(!ok && navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(()=>sheetNotice('تم نسخ النسخة الاحتياطية')).catch(()=>{}); return; }
    sheetNotice(ok?'تم نسخ النسخة الاحتياطية — الصقها في واتساب أو ملاحظات أو بريدك':'تعذّر النسخ تلقائياً: اضغط مطولاً على النص واختر «نسخ الكل»');
  }
  document.getElementById('exportBtn').addEventListener('click', ()=>{
    const text=JSON.stringify(backupObject());
    const m=bkModal('نسخة احتياطية',
      '<p style="margin:0 0 8px;font-size:14px;">اضغط «نسخ» ثم الصق النص في مكان آمن (واتساب لنفسك، ملاحظات، أو بريدك الإلكتروني). لاستعادتها استخدم «استيراد نسخة احتياطية» والصق النص.</p>'+
      '<textarea id="bkText" readonly style="width:100%;height:170px;direction:ltr;font-size:12px;"></textarea>'+
      '<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-gold" id="bkCopy">نسخ</button><button class="btn btn-ghost" id="bkShare">مشاركة</button><button class="btn btn-ghost" id="bkClose">إغلاق</button></div>');
    const ta=m.querySelector('#bkText'); ta.value=text;
    m.querySelector('#bkCopy').onclick=()=>bkCopy(ta);
    m.querySelector('#bkClose').onclick=()=>m.remove();
    m.querySelector('#bkShare').onclick=()=>{
      try{ if(navigator.share){ navigator.share({title:'نسخة احتياطية - '+todayStr(), text:text}).catch(()=>{}); return; } }catch(e){}
      bkCopy(ta);
    };
  });
  const isObj=v=>v&&typeof v==='object'&&!Array.isArray(v);
  function mergeDeep(a,b){ Object.keys(b).forEach(k=>{ if(isObj(b[k])&&isObj(a[k])) mergeDeep(a[k],b[k]); else a[k]=b[k]; }); return a; }
  function validBackup(d){ return isObj(d) && Array.isArray(d.employees) && isObj(d.sheets); }
  function applyBackup(data, mode){
    /* نسخة أمان من البيانات الحالية قبل أي تغيير */
    try{ localStorage.setItem('niveen_pre_import_backup', JSON.stringify(backupObject())); }catch(e){}
    if(mode==='replace'){
      ['withdrawals','advances','invoices','penalties'].forEach(k=>{ if(!isObj(data[k])) data[k]={}; });
      if(!isObj(data.settings)) data.settings=STATE.settings;
      STATE=data;
    } else {
      data.employees.forEach(ne=>{ const i=STATE.employees.findIndex(e=>e.id===ne.id); if(i>=0) STATE.employees[i]=Object.assign({},STATE.employees[i],ne); else STATE.employees.push(ne); });
      ['sheets','withdrawals','advances','invoices','penalties'].forEach(k=>{ if(isObj(data[k])){ if(!isObj(STATE[k])) STATE[k]={}; mergeDeep(STATE[k],data[k]); } });
    }
    if(isObj(data._voucher)){
      if(mode==='replace'){ Object.keys(V).forEach(k=>{ if(isObj(data._voucher[k])) V[k]=data._voucher[k]; }); }
      else Object.keys(V).forEach(k=>{ if(isObj(data._voucher[k])) mergeDeep(V[k],data._voucher[k]); });
      vSave();
    }
    persist(); renderAll(); try{ renderVoucher(); }catch(e){}
  }
  document.getElementById('importBtn').addEventListener('click', ()=>{
    const m=bkModal('استيراد نسخة احتياطية',
      '<p style="margin:0 0 8px;font-size:14px;">الصق نص النسخة الاحتياطية هنا ثم اضغط «استيراد». قبل أي استيراد تُحفظ نسخة أمان تلقائية من بياناتك الحالية.</p>'+
      '<textarea id="bkIn" placeholder="الصق النسخة هنا…" style="width:100%;height:150px;direction:ltr;font-size:12px;"></textarea>'+
      '<div style="margin:8px 0;font-size:14px;"><label style="display:block;"><input type="radio" name="bkMode" value="merge" checked> دمج مع البيانات الحالية (لا يحذف شيئاً — الموصى به)</label>'+
      '<label style="display:block;"><input type="radio" name="bkMode" value="replace"> استبدال كل البيانات بالنسخة</label></div>'+
      '<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-gold" id="bkDo">استيراد</button><button class="btn btn-ghost" id="bkClose">إلغاء</button></div>');
    m.querySelector('#bkClose').onclick=()=>m.remove();
    m.querySelector('#bkDo').onclick=()=>{
      let data; try{ data=JSON.parse(m.querySelector('#bkIn').value.trim()); }catch(err){ alert('النص غير صالح — تأكد من لصق النسخة كاملة.'); return; }
      if(!validBackup(data)){ alert('هذه ليست نسخة احتياطية صالحة.'); return; }
      const mode=m.querySelector('input[name=bkMode]:checked').value;
      if(mode==='replace' && !confirm('سيتم استبدال جميع البيانات الحالية. متابعة؟')) return;
      try{ applyBackup(data, mode); m.remove(); sheetNotice('تم الاستيراد بنجاح'); }catch(err){ alert('تعذّر الاستيراد: '+err.message); }
    };
  });

  /* ================= Settings ================= */
  function fillSettingsForm(){
    document.getElementById('setS1Start').value=STATE.settings.shift1Start;
    document.getElementById('setS1End').value=STATE.settings.shift1End;
    document.getElementById('setGrace').value=STATE.settings.grace;
    document.getElementById('setWorkdays').value=STATE.settings.workdays;
    document.getElementById('setHours').value=STATE.settings.hours;
    document.getElementById('setCurrency').value=STATE.settings.currency;
    document.getElementById('setOvertimeMultiplier').value=STATE.settings.overtimeMultiplier==null?1:STATE.settings.overtimeMultiplier;
  }
  document.getElementById('saveSettingsBtn').addEventListener('click', ()=>{
    STATE.settings={
      shift1Start: document.getElementById('setS1Start').value || '08:30',
      shift1End: document.getElementById('setS1End').value || '17:00',
      grace: Number(document.getElementById('setGrace').value||0),
      workdays: Number(document.getElementById('setWorkdays').value||26),
      hours: Number(document.getElementById('setHours').value||8),
      currency: document.getElementById('setCurrency').value || 'ر.ي',
      overtimeMultiplier: Number(document.getElementById('setOvertimeMultiplier').value||1)
    };
    persist(); renderAll(); alert('تم حفظ الإعدادات');
  });

  /* ================= Init ================= */
  function renderAll(){
    renderHeader(); renderHub(); renderDashboard(); renderEmployees(); renderDailySheet(); renderReports(); renderEmployeeReport(); renderWithdrawals(); renderWithdrawEmpStatement(); renderFinalPay(); fillSettingsForm();
  }
  buildHub(); renderAll(); showTab('hub');

  /* ================= 3D rotating stat cards ================= */
  (function(){
    const IDS=['dashCards','reportCards','empReportCards','withdrawCards','withdrawEmpCards','finalPayCards'];
    const CW=200;
    const KEY='niveen_cards_mode';
    function wantGrid(){
      let pref='3d'; try{ pref=localStorage.getItem(KEY)||'3d'; }catch(e){}
      return pref==='grid';
    }
    function fit(wrap){
      const W=wrap.clientWidth; if(!W) return;
      const r=Number(wrap.dataset.r)||200;
      const minS = W<700 ? 0.6 : 0.5;
      wrap.style.setProperty('--s', Math.max(minS, Math.min(1, W/(2*r+CW+70))).toFixed(3));
    }
    function applyMode(wrap){
      const grid=wantGrid();
      wrap.classList.toggle('is-grid', grid);
      const b=wrap.querySelector('.c3d-toggle');
      if(b) b.textContent = grid ? 'عرض دوّار ثلاثي الأبعاد' : 'عرض شبكي';
      if(!grid) fit(wrap);
    }
    function upgrade(el){
      if(el.querySelector(':scope > .c3d-wrap')) return;
      const cards=Array.from(el.children).filter(c=>c.classList && c.classList.contains('card'));
      if(!cards.length) return;
      const n=cards.length;
      const r = n<3 ? 230 : Math.max(230, Math.round(0.85*(CW/2+10)/Math.tan(Math.PI/n)));
      const wrap=document.createElement('div'); wrap.className='c3d-wrap'; wrap.dataset.r=r;
      wrap.style.setProperty('--r', r+'px'); wrap.style.setProperty('--p', Math.max(900,r*4)+'px');
      const btn=document.createElement('button'); btn.type='button'; btn.className='c3d-toggle no-print';
      btn.addEventListener('click',()=>{
        const grid=wrap.classList.contains('is-grid');
        try{ localStorage.setItem(KEY, grid?'3d':'grid'); }catch(e){}
        document.querySelectorAll('.c3d-wrap').forEach(applyMode);
      });
      const scaler=document.createElement('div'); scaler.className='c3d-scaler';
      const ring=document.createElement('div'); ring.className='c3d-ring';
      const SECTION={dashCards:'اللوحة',reportCards:'التقرير',empReportCards:'الكشف',withdrawCards:'السحبيات',withdrawEmpCards:'السحبيات',finalPayCards:'الرواتب'}[el.id]||'القسم';
      const TYPE={late:'خصم',gold:'إجمالي',ok:'مؤشر'};
      const LOGO='<svg viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg>';
      cards.forEach((c,i)=>{
        const type=c.classList.contains('late')?'late':c.classList.contains('gold')?'gold':'ok';
        const lab=c.querySelector('.label'), val=c.querySelector('.value');
        const labT=lab?lab.textContent:'', valT=val?val.textContent:'';
        const it=document.createElement('div'); it.className='c3d-item t-'+type;
        it.style.setProperty('--a', (360/n*i).toFixed(3)+'deg');
        it.style.animationDelay=(-(i/n)*20).toFixed(3)+'s';
        it.innerHTML='<div class="c3d-top"><div class="c3d-border"></div><div class="c3d-icons"><div class="c3d-logo">'+LOGO+'</div><div class="c3d-social"><i></i><i></i><i></i></div></div><div class="c3d-value"></div></div>'+
          '<div class="c3d-bottom"><span class="c3d-title"></span><div class="c3d-row"><div class="it"><b class="k1"></b><span>الترتيب</span></div><div class="it"><b class="k2"></b><span>النوع</span></div><div class="it"><b class="k3"></b><span>القسم</span></div></div></div>';
        const v=it.querySelector('.c3d-value'); v.textContent=valT; if(val&&val.classList.contains('small')) v.classList.add('sm');
        it.querySelector('.c3d-title').textContent=labT;
        it.querySelector('.k1').textContent=(i+1)+' / '+n;
        it.querySelector('.k2').textContent=TYPE[type];
        it.querySelector('.k3').textContent=SECTION;
        it.title=(labT+': '+valT).trim();
        ring.appendChild(it);
      });
      scaler.appendChild(ring);
      wrap.appendChild(btn); wrap.appendChild(scaler);
      el.classList.add('c3d-host');
      el.innerHTML=''; el.appendChild(wrap);
      applyMode(wrap);
      if(window.ResizeObserver) new ResizeObserver(()=>{ if(!wrap.classList.contains('is-grid')) fit(wrap); }).observe(wrap);
    }
    IDS.forEach(id=>{
      const el=document.getElementById(id); if(!el) return;
      el.classList.add('c3d-host');
      upgrade(el);
      new MutationObserver(()=>upgrade(el)).observe(el,{childList:true});
    });
    window.addEventListener('resize',()=>document.querySelectorAll('.c3d-wrap').forEach(applyMode));
    window.addEventListener('beforeprint',()=>document.querySelectorAll('.c3d-wrap').forEach(w=>w.classList.add('is-grid')));
    window.addEventListener('afterprint',()=>document.querySelectorAll('.c3d-wrap').forEach(applyMode));
  })();



})();
