import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'orui-ui',
  favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7tXQuYHFWV/k/1dBIIhKAGcFdwfSCJoAECykLS1Q1JpqtDpqsTJ4I8RUV8rAqosLzkqSIE9ENQ0IUEFDFDpqsnSVdPEjJdPQGDgEsgGFxwdZeHJLgSEh5JZrrOfjVJMMSE6a57q7qqu+r78jF8c85/z/lv/VOve88hREfEQMTAHhmgiJuIgYiBPTMQCSQ6OyIG3oGBSCDR6RExEAkkOgciBtwxEF1B3PEm7HXuo4/GX/zLqwe0Kco4blP2Zo6vH7nx9Ze75kx7VRg8ApDGQCQQaVT+I1C21DdVsWMpW8E4AsaB+QAwxkFxfsbY3Q/NWwBaD2A9COvBWM+g9Yzq77A1vqQnO3mThyFH0LswEAlE4inRUVh+YGzEiBQDMwDWAewjEX4IiolKZNs9NrWt6NEm/0E2foT3dgYigQieER1F66gYKSkb9ok0JAz/DgZWEbBcIV7RnU72+Tdy64wUCcTlXOslaw4zf5ZAaZcQct2YHyfCXZv5jXlmJrNRLnjrokUCqWPuOxdwbOuY/s8qjLMZfEIdrv6ZMv4bhLsUtud1Z1LP+zdwc44UCaSGeZ2xuH//EbHqZxl0NoCP1eDScBMCXrbB85Q2uis/TV3b8IBCGkAkkGEmTl/SdyWU2NkAvz+kc7yFgHm2gusK7epzIc2hYWFHAtkD9dklKz5JFLsGhGkNmx2pA/OzrNBlhXb111JhmxwsEshuJjhrls8n0DUARjff/PMt8U0Dl0cfJGub2UggO/E0u7dvvG3HrmHwp2qjb89WRNgMxpMM3h+gD4viSfZ/DMyXG5mkKRm36eAigWyf0lyvdQ4zXQPmf3I5y1sJuIuJH4yxsnqhlnhiB87MRYv2ptiYwwj4BhHOdInvhdu1hqZe7gVws2BGAgGgl6wbwbjQ5aT+DYy7GHRnIZP4/XAYWbP/ewT74uHsfPz9ovgo+zNdqdRrPo4ZmqFaXiC6Wb4XoFPrnzF6A3b1hviItju7pk3531r99eKDHwINPlurvU92jylEM7vTib/4NF5ohmlpgehmpQ/gZL2zxeD7mOkHPRn1P+v1dexzpvU8A//sxtczH6IXYwonF05Xn/FsjBACt6xAdNNyFvp9pK45Y6wloqvzWuK+uvx2MdaL1h9B+KAIhle+CtGk7nTid17hhw23JQWim5azVmnfOifrecTaZhrTT3i8Tr+3mWeLfZ8mUoQEJjJ+Lb6KArW7Xa3UYtvsNi0nEN20nK/J76tvYmkjUM0aWqpcn98/Wuum9TCAT4jieO0fp/i7u9LH/83rcYKO31IC0c3KAoA7654UtnNGJmXU7bfrrZVpXQbA+QAZgoOfNbTkoSEI1NMQW0YguaJ1KROudcFmt6Gps134vc1FX2J9HQp+KIrjrz/fYmjJr/k7ZrBGawmBZM3ylwl0qxvqGTyroCXzbnx3+ORM6ywG5olgNMqXGd8qZNQbGzV+o8dteoHkzMopDP6VO6Lpj4aWEFomohfL3wbR9e7GD4qX8hlDm+KSw6Dk4C6OphaInu8bi1HKgwA+6oYeBp4oaOpEN76zTKuDgW8zEMyNVfUl9Xtstk8wcqkN9bmF37q5BVIsXw0i92uNmNcZmeRB9Uzz0DL5WOxcMM6pxy/wtszXGJnkFYGPU3KATSuQXGnFRObYQwD2FuGMib5QSCd+PhyGblZOYjh71HHacLYh/f0bRNXj8+kTV4c0fldhN7FArPnMclbOMnBrjOjO2MaX1nTNmbPVYbqjsHJfZcTAJCLlcOahTVVZVzMQIici3J1Pq2eFKGThUJtSIHrRmg5CrzA7uwAQ0QCDnwUjVvcyFdnBNAqP0W5k1KWNGt7vcZtSINmi9U0i3OA3ma0wXqu99m1Kgehm5W6Az2iFE9b/HOkeQ0sEadOXpxQ0pUCyprWagI97ylyLgou8+g4jZU0pEN20OIyTEZaYDU1tyvNmd/w3XaJOkbd4zG75Vaheiq06uHH0opkz3/ByjKBgN51AZi3u/6Ads/8YFIKbMY7qoD1u0czUX5sxt11zajqB6L39k2Dbj7bC5DUqR1ZwSKtUaWw6geSWlKexQi3znr4RIrERG98qvUmaTyBCq3cbcbqFb0ybcbTbghVhy7bpBKIXK18F8S1hm4gwxWszTe7JJJxV0k1/NJ9AhqqxK99p+plrYIIK+BPdWvKRBobg29BNJ5BomYn35070kO49x56NkCtVzmPmn3g2QASM+KZ1bV1z5lRbgYqmu4LoZt/pgHJPK0xeY3KkjYaW2K8xY/s/atMJxNnqagMF/6lsmRGfNTS1ZcoBNZ9ASuWUzbSiZU5XvxMl9Mfxpt6VTrfEcp6mEohu9p0NKLcB2Mvv86aVxnMahAL0NdEaxWHgrCkEMr23d/Re1ZE3E9EXwkB6s8RIRHeBYhfn209Y3yw57ZpH6AWimytOYig/ItDhzTpJAc/rRYJ9YV5LBbogt1sOQy2QbKl8CTFd5zb5yE8eA8z8sxEjR1zVddLxL8hDbTxSKAWS633wCNiD1zHQ0XgKowh2YuDPIOUKIz2laV6zh04g2VLl82Tz90B4T7BPTdoK8BMEPGcz1hHb6ygWe8lmex0UWkfVwXXx15R1XXO29QbsXLBgxNb9DjyQB+0D22KxA23mg5j5QBB9VAEdyeAQ3ULyvLGj+EvzUqnNwZ6j4aMLlUCyResGInxz+LR8t3jO2autEK12Wj8rpDy5MD35KZlRdC54asTW0euOghI7UgGOYuBobPvnlCAK4EEPKIQzwt73MDQCyRat+QFqofw3BkyFYVYV++GedKohTTk7FyyIVcccNJFtPpJp6CpzNDGOBgXkNTfzGorTnPw0dW0AFVxTSKEQSNYsmwRK15SRd0ZviaJNiZtB7b7UueChvar72BOZ7SOh8HQGct5RUhPyeq4iVzhZdcrAhu4ItECSfX1tYzcrTssy51aiEUcoRPFOxHQUKyfEiM9g0BkAC9UpFpkABmYUNLUogtEI38AKRCtWxo0kdrqt1tlPUJxGBn7p3D4F+UpRb5azl1qHVgfpDNBQQb1/qddfhj0TTiuk1XtlYPmFEUiBDE1mldYAPMIvIpxxGFjCxHN70sk+P8f1c6zOZcv2G6iOPAPMTnXEY/0c2xmLCF/Np1VX3b78jnUo3kYM+k5jzjLLx9qg3/oaF2MNiOYaWiKUbdLccqWXrDlOBXwCZrjFcONHCi7Lt6uh+MAbKIFkl1gfIwVPuCHdpc8m2PZN9mB8bk928iaXGKF3G/q2xPbFAH3Ir2QIODuvqfP9Gs/tOIERSGdf3z4DmxUfT1KeRwrPzben1rglr5n8Ovv6Dhp4U7kYhK/7lRfbynGFGVOclzCBPQIjEN20/uTHwyMBfUQ0tzudWBLYWWlgYNlS31Ti2EUAT/UjDIorh+WnTvkvP8ZyM0YgBKKXrPvBEO5FPiwBRBcZ6cQPhrWLDKCXrK+zjYuJUFePRhfUbSKl7cNBXTLfcIHopfLlYLraBbE1uzDzCwo5G3zU7pqdIkPoxQc/RDRwMYM+7yUdDF514Lh9Enccc8yAl+O4wW6oQLKm9UUCfuom8Np9qKzYsbO7Z5zwP7X7RJY7M5At9n2KSLkTwL6eMcO418iogWuA2jCB5ExrFgMLPSN86B02/zyvJaNdhhJIdjamgWJ3gnGIBLjdQjjNUgua+lWv8N3gNkQgObN/MrP9AAiefQgkxufyGdX5qxcdkhjILen/CCu8AOCJkiD/AYYZ1xUy6mVe4deL67tAZvZYH4jFyQT4sHqDrcXeed7ggcFJPdmp62qxj2zqZ0A3K30AJ+v3rM2DmTsKmeSi2qy9tfJdILpZvgeg0z1JK6D3sZ7k2mDQnGl1e7hS+JH4fnG16/jj32xwmv4uNfHyoZwY1+cz6sWNJrSVxs+VrO8z4yJvcubvGVryEm+wa0f17Qoyu7Ty8CrbKwA+oPbwarMk4Pa8pp5Xm3VkJZMBL0u9koKT8u1qQ4sA+iaQrFnuJpAXm3cWGJr6aZmTHmHVx4BerOggztfnVYs1lQ0tkarF0isbXwSSM8sXMGiuB0ksNTS13QPcCLJOBnJF61ImXFunWy3mlxua6gVuLWN7/wyilyqfALNzmRxdU0S1Gz0S37RuctecOVtrd4ksvWRANyv3Anyq5DG2KGwnuzOpVZJxa4Lz/Aqim5USwHL/yjOeUWCf2J1JPV9TlpGRbwzoResJED4mecCioam+7lnZEb+nAvFinZVTOJmI0t3phLMdNzoCxsDMXusDsSqeBUGRGRqBLshriZtlYtaC5ZlAZpUqR9vMj9USRB02g0TKzHx6SqkOn8jUZwb0YlkDkewCDS9ute1JxRmpl/xMxzOB6KXybWD6ktRk2D7fyKR+KBUzAvOEgZxZOZ/BN0kG9/2B3ROBbN8661w94tIIIjKMdMKL18TSQoyA3s6Ablq3AzhXIi9/jlN8kp81ybwRiFl22hF8TRoxhA2o2iljRupxaZgRkOcMdJYeetcgb62wzNYUPm96ky6QDnPlYQqqztVD3mvd6NbK85PZqwGyJeszxPilNHzCM/aW2CS/imxIF0jOtG5gSCwwHd1aSTu3GgWkm5W7gaGCdVIOBl1Q8OmNllSBzFre/0F70H4MjLFSmIhuraTQ2GiQ2b1946u2UgEwTlIsv98wyp5U9qG9glSB6Gb5uwD9uyQSgOjWShqVjQbSS5VvgFnedwymfzMyiR97nZc0gWR7rYPJhvPsIeevRHRr5fXc+46vm5bz/UrSqgpeHd+0flLXnDlVLxORJ5Bi+SoiukJKsNGtlRQagwYyq9dK2DYsWXExcF5BU51XyZ4dcgTCTHqp4hT/+rCcSIOxWUZOLhHKzgzoZuW7AEu6Deflhpac5iXDUgSSW9J3MiuKrD3Eg8w0sZBJ/N7LxCPsxjCwvcSs88B+lIwIFKJJXq7LkyIQvVS5DcySlpXQPENLfFYGeRFGMBmQuT+Ima8uZJLf8SpTYYFoxeLIkbTPHwB+v4wguWpPK5ycWi4DK8IIJgOzSpX32mw/CdC7xSPk1YaWPFIcZ/cIwgLJmuUcgWSV9Ix2CHo10wHD1YvWLSBIKRLHoHRBS/R6kaKwQHKlys+YWU7tVuIzjXSyaZrQezFhzYKZ7bWOJxsPSsmH+CdGOvllKVi7gAgJZPsDl/P26r0SgnvSSCcmgoglYEUQIWAgZ1qLneaeEkJ90d4aG+/F+iwhgTgtvMD4tYQEwYyLCxn1ehlYEUY4GMj1WqexjV/IiZbOMLSEJKy/RyQkkGzRmk8Epxmk6PF/g4ODExfPPOkFUaDIPzwMdC5YEBvY96AnAP6oaNQEvj+vJTtFcXb1dy2QGYv794/HbOf26j3CQTF+ZGTUbwjjRAChY0Bi3YIBJa6M75465b9lkuBaIDLbFyhs/2ujyrrIJDPCqp+BjlLfh4mVJwkYVb/32z2YcVYho94tirOzv2uB6MXK1SC+XEIwzxqaeqgEnAgipAzkzEoXgz8lGj6Bbs5riQtEceQIxLR6AMwUDYaY7spnEueI4kT+4WVAL5W/DSYJL2i4bGhJqaVK3V9BTOs5AO8TnRYmPqeQTt4lihP5h5eBjlI5pTCJF6lmbDAy6v4ymXAlkG2dhuw/yAgkPiL+vq6Tjo/eXskgM6QYk25/NH7w+19/GYz9hFNQlGOM9inS6rG5Eohu9p8K2PeKJsPAqoKm/qsoTuQffgZ0s7JMUm/2LxqaeocsRtwJpGTdCMaFwkEw/8DIJD1qwCIcXQTgIwMS94ncYWjqF2WF7k4gpvUAgBPFg7BThpYqi+NECGFnQGK50t8amvpJWXy4E0jR+hsIgg9D/KqhJeVUP5HFRoTTMAam9/aO3tse9ZqEAAYMTZXWPblugUh8QO82NHW2BEIiiCZhQDetRwAcI5yOxAf1ugUi7QGd6AuFdOLnwmREAE3DgF6qzAWzjA990h7U6xZItmRdS4xLRWeFFeW4QvuUh0VxIv/mYSBXqmSZ2RDNSGbH47oFopvWrQCEN6fYqI7v0U6U8i1FlNDIPxgMyOopI7PrsQuBlO8FSLgPHSltB+bbT1gfjKmJoggCAzN7rA/E4pCxGlda5+O6BZI1yyaB0qKExjetGxk14BRlsbn8O5ct229gcMQG4awYy4yMOl0YB6i/y61etFaBIPqe+XVDU/eRkUCE0VwM6KY1CCAmmNUjhqZ+QhBjyL3uK4huWs5zw0cEB3/e0NSDBTEi9yZkQDct57ZbtL6ztC0UbgQingDzGiOTlN0quAlPl9ZLSTcrTwN8mFjm/H+GlhTf6eryCjIAoE0sAfQbmpoQxIjcm5CBrFn+DYGOE0ytamiq6Dla/y1WR2HlvsqI6kbB4J37up68pmZFcSL/5mNAN60lADKimW3h1/czMxkZ52rtoZzc039IW9z+n9o9dm/JjLsLGfUsUZzIv/kY0M3yPQCdLppZvE15f9e0Kf8rilPXM0iutGIic0y802xUxUR03prWP2daP2JAuEMykXJkPj1ltShRdQlEN/uSgNInOihs+ypjRupKYZwIoOkY0Jf0XQlFkVCtXc5WiroEkiv1T2S2ha8gDL65oCVlLEpruhOk1RPKmuWbCHS+KA8NuYJ0Lus/ZGBQ/BkEwH8Ymiqn4LUok5F/oBjQTctZ4f050aAa8gyiFYtjRtLoV0WDB6jL0BJzxHEihGZjQDcrCwAWLiHakLdYzmRIWgrQa2iq8HquZjs5onyGzi8ZnXAb8x1km0DKf5XQGeg3hqYeH50QEQO7MqCb1kMABCvdNPZL+jOi3WwJ9FReSxwRnR4RA7sykDMraxh8uCAzDV2L9VsAxwomEC1WFCSwWd11ORU7G7iat2gtBUG0N/VGQ1PFq+g161nSwnnppuW8BBojREFD94OYltNRSvgNlKGpdX2DESIscg4NA7ppyWjB17gdhTnT+ikD4pXrJJZmCc3sR4G+IwN6b/8k2PajojQ1dE96rmh9nwkyyoVKK80iSmjkHwwGdNM6F8DtotE0tKpJtlT5PDH/TDQJAFJrqEqIJ4JoMAO6aTnicEQidLDEmmt1Pwd0mMs/riAuvEoSwGOGpopX0ROiMnIOEgO6aTm3V5NEY7IxMLFHm/qEKI7jX7dAHCe9aL0Bwl6iAWzhkfuZmeOEN7WIxhH5N54BrbhqzEjaIr6MifGmkVH3lpWRO4GYlT6Ak6JBEFMyn0lYojiRf/gZyBUrKhNLqPRPZUNLSGvD5k4gxfL1IPq28LQwnW9kEj8UxokAQs+AXqx8A8Q3CyciueeMK4Fki9aniXCfaDLR1ltRBpvHP1u05hPhTNGMmHFKIaM63+qkHK4E0mGuPExB9WkJEfwpvil+eNec49+UgBVBhJSBzgUP7TWw78BTAD4gmoKN2PgebbK0ms+uBOIkkS2WnyeifxZNiBScnm9XfymKE/mHl4Fcr3Ua2/iFaAbM/EIhkxTuvLxzHK4FopuWU6ZeuHQPAfm8ps4SJSfyDy8DOdPqZiAnIYOCoam6BJy3IFwLJFssX0VEV8gIJkaxIxamJzuX2OhoMQZml1YeXuXqGhlpM/PVhUxSQsGHv0fjWiCzzP6cDbtbUmLfKWSSV8vAijDCxUC2WL6CiK6SEbUCZVa3NiUvA2sHhmuBdKxcuW9sU3UtA8LPISBabaQTR8pMLMIKBwN6qfI4mCeKRkvAC9V9YxN6Jk/eJIol5RnEAcma1o8J+IqMgGwg26OpPTKwIoxwMNBhWh0KUJARLQO3FjT1qzKwpAlENysnAbxcUlDzDU09WxJWBBMCBnTTmgdAUglammpoiQdkp+36FmtHILppOY04JTUrUabktSkrZScZ4QWPgZzZP5lh90uK7LeGpoo2ddptKBIEUv53gL4rI1Fivj+fSQrXRJIRS4ThLQO5YrmLiT4lZxS+xNCS35OD9XYUYYHM7u0bX7WVtbKCY/CsgpaU+iZCVmwRjhwGsmY5RyApb0CdiGKKPWFhe0rGyo5/SFBYIA6ixA89zgp8qasx5UxphCKTAV3SanAnJq8/NEsRSLZonUmE+RJJjLbjSiQzSFCyttXuyIkZZxUy6t1e5ShFIFK/iQBg8FMjRvFxXanUa14lHuH6z0BnX98+WzfTKgKJFoYbCt6rbx87MyNFIA6gzG8iDh4TXVpIJ6Q8/Pt/KkQj7o6BbKlyCTFfJ4sdr759eCKQDrPycQI/TMAoSQRsqrI9fVEmtUoSXgTTQAZmFvuOi5GyFMC+MsJgYDODPtmjJaTsPd9TTNKuINuuIpUfEPhbMgjYjmEdMG70tDuOOcbprBsdIWXg3Ecfja9/+fVlAFRZKTDohoKWEN/VOkxAUgXiNPmMtdkPE+EgWUQQ+OZ81I1KFp0NwcmZ5ZtYQteoHcEz46XqoPLJxR3iTTqHI0SqQIauIqXyJcQk7T5zWwL2GYaWEt5QMxwZ0e/lM6CbfacDyj0ykZn40kI66cvzqXSBDHWhUkavAmOCLFKctxVow7T8NFXaB0lZsUU4e2Ygt8yagEEsk7Lie8cwhLVb7NePk9EDvZa5ky6Qbc8i5S8T6NZaAqjDZpGhqR112EemDWZANy1ndfZMmWEw+CsFLXmbTMx3wvJEIM6AcjoF7RJ61D7ar/NCeBx57ZzfForvnck8E0h2ifUZUiC/GEMkEuGT12sAj8QBtnFaYYZ6r9fx74zvmUCGriJFqwiCJj2hSCTSKZUF6JU4wDCNjJqRFWetOJ4KJFsqTyFWlgM8otaAaraLRFIzVX4ZeiYO0FYme2ohnZS1f6RmSjwViBNFrtf6Jtu4oeaI6jGMRFIPW57aeicOgBR8K9+u3uhpAnsA91wg22+17gdhticJRiLxhNZ6QL0UBxgLjYwqaWNVPVlts/VFIB3misMUxJy961Kr3u1I169lB/XT2/weHiwv2pm0521Up/ZoJ0orJVrvjPgikKFbrZJ1JrPUPSO75lq0Ub2gkWTWS36Y7bf/0bsJgGcPzkQ4K5/2bq9HLfz7JpBtt1rl20D0pVoCc2nzZwXKBbKLh7mMpWndthcNdMTxL54lyfwTI5P8smf4NQL7KpAZi/v3j8ds51br6Brjc2t2uaGp17p1jvz2zIBuWpcBuMZjjn43UFWmLjl5yisejzMsvK8C2Xar1Z9mts1hIxM2oF8phAu704m/CENFAJhVqrzXZswF+FSv6SBStHx6SsnrcWrB910gQ7dapuUUGL6ylgBFbAh4wiZcX0j7+/VVJOYg+mZ7rU8rNi5h4OOexxewt5INEcjQlcS0bmDgm54T7gzAWKjAvrE72p1YF93ZZdbHlEFcxMBpdTm6NCbgxrymytxw5zKSv7s1TCBOCNmi9RMinCecRU0AZDPsuYoSvzHffsL6mlxa1KiTOba1t/8iYr4IwBg/aGDGTwsZ1csXOK7SaKhAtt1uVe4G+AxX0btzepZse25+Ruqn7tyb20vvrehs80UEHOdfpnSPoSWE+xN6EW/DBbL9dktWh6F6OFoKojuMdGJhPU7Naju0bg50Nhjn+Jmj14XfRHMJhEC2XUmsXgDTRRNy4f+fBPqVrfB9hXb1ORf+oXXRisWRo2j0KQw4b6baG5DIUkNTGzFuzakGRiDbb7f6AE7WHL1UQ36VSfmVYuO+fCZhSYUOGFhusTUBbXQK23wqCIc2JrxwlJgNlEAaL5K3TpWlTHzfQJXN4ozUS405geSO2rlgwYgtYw6apjBOAexTAYrJHaEetHCIw8kocAIZEknJugUM6d2C6plCx9YpTgaiMrhqUWxEyZh+wuP1YjTSPttrHcyD9gxSYqpzZSbIK8fkOi/Cj420+m+u/X12DKRAHA6yxfJMIgpUSzYGniZgBYN6ClrCeWYK3NGxpO+YWCw202ae7u+bqOGpYOaOQia5aHjL4FgEViAORbOXWodWq3Daah0cHMq2ReJcXRTgAWZ+CgrW2DatOeiA0Wv8rAKZW9L/ESj2ETbzEaTQ4WBMAfDeoHEF4LlYDCctnK4+E8DY3jGkQAvEiTzZ19c2drPifLP4XEjI/S8Aa4hoDVf5KVL4OYXaNg5SdSO9YW86crW18corr7SHy2V6b+/ofXivMYM8OKYNyphBUg5QAEcERwB8BOD8F/HhcALw+//YMMo+r5xKDQYglrpDCLxAdmSULVkXEeP7dWcYTAenrcNGImxkxiaAtxBoDA99taYxADtfr9uCGXrtUTHh4kJavb52j+BZhkYgDnV6yZoDhlOQ7j3BozKKaCcG/grCV4y0uiDsrIRKIA7Zs8zysTbI2evRiI+KYZ9vP+JfqoAv69aSj/gxmNdjhE4gb91ymdYXiXFh4z50eT01IcNnPMOEuQVNvT1kkYf7If2doteKlXGjwBcy4cJmuGcP6Yk1SIy5m0FzzUzi5ZDmsMewQ3sF2Tmj7bddzt6SOc02QQHPZ4ECvrFZbqd2x3VTCGRHYtsf4h2hHBvwEyvs4T0Cwo3N8BA+3EQ0lUCcZJ3vJvttUS4kxleC+IFxuAkJ+O+fZ8KPXx1pzw3rd416+W06gewgoLP00LsG7MEzmfhMAo6ql5jIficGCGvYtufbVcxbNDP111bipmkFsvMk5orWaUxwdqxFr4brOrtpJdvV+a/ujXmtcsXYlZ6WEMhbzyhFa7ojFPKpCEFd52KQjIkWO8IoZFL3BymsRsTSUgLZQfDsonVUVcGZ4KGryrsaQXwwx6RfMFXnF9Ipp7hfdAR1P4hfM+Psl1AYHWBMtwFnefgov8YOzji8EoSldpXNnhmpR4MTVzAiackryO6o7yxWxm1l+2RSlGkgng7Gu4MxRdKjYABLCbxUUbi4sD31tPQRmggwEsgeJjNrWhkQZhIoA+ZDQj7nrwFkgmgRRg4uMlKpDSHPx7fwI4HUQPWsUuVou1rtQEwZz4wJBBrvSVu5GmKp0eRZAGsZ/DQxLTcy6tIa/SKzXRiIBOLylNCLD3zlhUbIAAAAi0lEQVRIUeLjqzZPIMJ4ABO2/9vfJWS9bltAWMvMTyuMtaDYWtu2n351b3ttq76SrZfAWuwjgdTCUh02HctXHagMvDkBHBsLwliGvT9YGasQb/t/5v0BGgtgLPDWz87LgVfA2ACCU/J/6GcGXiGiV0D2BoLyCtjeYBO/YpPyx0Xt6p/qCCsydcnA/wM8E+Bfm9h31gAAAABJRU5ErkJggg==',
  logo: 'data:image/png;base64,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',
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      // skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  history: {
    type: 'hash',
  },
  navs: {
    'zh-CN': [
      {
        title: '指南',
        path: '/guide'
      },{
        title: '组件',
        path: '/components'
      },{
        title: 'Github',
        path: 'https://github.com/xiaoruil/xiaoruil.github.io'
      },{
        title: 'Gitee',
        path: 'https://gitee.com/xiaoruil/orui-ui'
      }
    ],
    'en-US': [
      {
        title: 'guide',
        path: '/guide'
      },{
        title: 'components',
        path: '/components'
      },{
        title: 'Github',
        path: 'https://github.com/xiaoruil/xiaoruil.github.io'
      },{
        title: 'Gitee',
        path: 'https://gitee.com/xiaoruil/orui-ui'
      }
    ]
  },
  // styles: [style],
  themeConfig: {
    carrier: 'orui-ui', // 设备状态栏左侧的文本内容
    hd: true,
  }
  // more config: https://d.umijs.org/config
});