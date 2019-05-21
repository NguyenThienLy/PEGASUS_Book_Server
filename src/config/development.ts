import * as dotenv from 'dotenv'
dotenv.config({ silent: true })
export default {
    database: {
        user: process.env.DEV_DB_USER,
        pass: process.env.DEV_DB_PASS,
        name: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        defaultPageSize: 50,
        ssl: process.env.DEV_DB_SSL
    },
    firebase: {
        "type": "service_account",
        "project_id": "zzzz-73e20",
        "private_key_id": "97caf72d54954e58998514597478c80ee6d8fcd4",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDJa7Z8VipaJl+l\nyfKxjqZsKUohkgBG6Wt8aeI0q5kGxd3ltcMgplNcBESuZTLJ/Nph3aQJqYbYu2uy\nX1Mc1jXm4d5Gd15WSmvsZHRDnkNnKCHi6DuxMXzZ+RTaPdcOpm1ar8/6a0SLBko2\nOgE0Is8xf8vvLt4deGWv2yFmFmHwmT6bY1t6FfMG4c3AK29uQkgeX6AAw5SHJ7v2\nsIjKCIUXzkasay/z6BAzn9ViVI49g2oITec5lQrOiwYSGiwIDxf2LniabsppclSg\nOVAs9tGi8pqnWwd9pPBLcBv94ZHleZa4kdmvF1QRuaMo2D9az1m/Gt+mDQKIzQeF\nepJls669AgMBAAECggEAR1YhxHmT+Ge82m/ix6X5JTeebLNT68mB6wdpOTRJN0/e\n3ht451hhD6bnWEi5KzaldaHVFiL3gk0mwH7oZb8sSgBXA+gE/lTPUmLllok34BIj\npkSP15rqWBzSmNTsFOE2u7am108kcISixf/XK0rkzOgxJx4XRqK8iQL4Gjr1JwvO\neoTw+Tpd1MGxTOfcpKrDzYrXJlLOpks9XmP2lYnoSPrPC9oV1hnlxxOrGBHi2qFJ\n1f8FrIUotwwN/H7AtyEWKGDeEVv52RAV0kiY1jMfXGbs5dMPItURNpyKHRAdlvt8\noHEOq3YvXh22JFB215ETsEC7ARiMs9li4Jw8rkx3lQKBgQDjJQ6/HfQuISmJ9GaP\nFKCW5mzmHxb29yPu36ByqJ/rANyDRKQqT7gTH4vZBKjsqQz4BfvkhhWL/5x+bIha\nm0Q8KHphE2NyV2V/VlTA0K94bN84wCIyyURMdTUBClV+CjXCU34YtJn7bl/a9gYQ\npeqPGrr+H9yPtFTV8PDGVtTd7wKBgQDjAhatFBAh+MtsCP2a07AXXjwQIOT5qq9P\nS2SamOqKHAcgbgpkZED5l+2JM4n1ru5qmvSsckitZ5cW7sjfr+WGMHhdE1Ms3lWu\nwmekL5mCnsuZyovhr+4zMAXTc/3ILwgC5Ru0Zj8+DeR2BO7B7LxYMBl6d//gwQ6a\nRRq1DmIqEwKBgQC9xLsSPtM/KuOKZw68IS6dg7udcoH8KLPzoQ9qW6jnbFvOq60/\n0ERobaWn1PXQatfz6wPsg31C7nXvRXuRv0B9xg+gRNODtrKMdTLvuCmxQbworJSl\nu3L9MbrruJd+asdJJ/okZ9ZxsmARDhQ5GnThxCJPp4zc3ns2FksCWY8ULwKBgQDe\nEZn7QKgzg34ENptYjYMyqPXa1UMJ1eZfjKJi9fpilt6F4//4i3ZgdDZjxG5OUA1d\nbi6yT643LCJKxdbts9W1us7URmZUez+YkQbwP7xNYmhMDy9d3UwI+Q6J92spHJEa\nu+OpS2jMnKyEo3ipbpwlLRCPlLpUtKdDVRy2R9bRzwKBgQDEZ5pCwD83n4w3XUHt\nDa6TSHO8WzfVu479wTUH2V3iocp9rITjmF2xDfqDobWhr6P+h1Q4aho/wtjc5kVa\naogDHRLP8zTEchH3KZFjNXxh/ktuC5lezCQC2KvLHIlafHUgssQQl+3Hk1b9qgUb\n/qQINd/7WVD84NcHsiTFszyTaA==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-pzi7i@zzzz-73e20.iam.gserviceaccount.com",
        "client_id": "104000977181290599953",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pzi7i%40zzzz-73e20.iam.gserviceaccount.com"
      },
    token: {
        secret: process.env.TOKEN_SECRET,
        refreshSecret: process.env.REFRESH_SECRET
    },
    googleMap: {
        apikey: "AIzaSyARP_QXHk082dbAfMXphHhLGn15S_wdxQ4"
    },
    postgres: {
        uri: process.env.POSTGRES_LOCAL_URI
    }


}