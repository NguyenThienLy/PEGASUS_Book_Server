import * as dotenv from 'dotenv'
dotenv.config({ silent: true })
export default {
    database: {
        user: process.env.TEST_DB_USER,
        pass: process.env.TEST_DB_PASS,
        name: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOST,
        port: process.env.TEST_DB_PORT,
        defaultPageSize: 50,
        ssl: process.env.TEST_DB_SSL
    },
    firebase: {
        type: "service_account",
        project_id: "divivu-a3eca",
        private_key_id: "3e1c02503f37791103a291b933331075e3d5c66d",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCVWd+ow1Y+NEoy\nrUVCWRpQ+vyRX0dwULsDsmXkIpUa+Tg13Fne/BXMo7kU4VAci0g1WlVtk9OZMNXk\n0d1G7RyHw8jAtQ21V/aqAPR8YozSHRyqpHogPcCwfwi+zw4xEUUKE/pwvAawqTEA\nsxP8OwamTaXQOVd+49PBQXUan2pmrTL6DwDLRGIoyUnHBEjuykJ21Yh8aMsE3QUo\npb1tE0rfbEGN6HTW5CmfgoZe1QZtDjDCehZEm8OZCwss8fZ2wrnoBuCbYVFOzEd9\nq1WZEqc61+uyfiX8+u+c/T2+v6eWM8GLXKsOBeKep6GI/zfVatYRCjhqgCcdt9ZG\nS/GQxujZAgMBAAECggEAEEP4/VbE0kJ8oDdJtzegC5jCIAz56UwJihYITcfMaGMj\nEY6dhRD8SMy97/237Vvn8dOUQTpbza/JY8HNcReKx2h1uTMeupTJaututQtAnfOI\ntzbxjAhdr3suVyWSvJpOZBIX8OYxblUG3rYiI5LEHyGOwPY1xr6GReJcoBkji+n/\nWgD7TFqGpKF9zIz5pAqNsTAF1GvL+bTBVMsFHoOva7Hc7pknToPyvFpWL63917Vr\nE/OA8xnraWkq1meK+rUjFxB4ME4tV1rTFTQCBzPtSls87Ly1IbvTUTK/QuypQifZ\nsDFC0/rkQe9gL+1yN693zJp+Upb2h+GrePfHVPtFjwKBgQDQLjiMxk26m/ShnHWq\nJmSEGEkUnb5YPlHs09vC4f9eTXZNnpYkkKQIdUXByYMo+fhdeR08GVi5EWekFe+W\nlYhwcnkHjX+9eI30AATGyLrErAmHyy5viy/4MFpdIyC74WEqRkoZO3NH3pncB6p/\nQPxy2CcxB1Cr8UlkPDYFCBXI3wKBgQC3qEODe+LyHJ3D3zV3WLgIKCYWfgktMZRv\n4W2tqU1+KIB79iIYDAeFx14famYOq3DTyxu4s4+QDOq3EgvGnI5rhojxZeKqihwq\nR1zhA2It1RGF42pCRhKXQ6yG6qNqW+MBby6d5qsOpHMOJInaRaSVQQSjh/BVSSdT\nnowzxjMtRwKBgGU4ZASGktqN46cEhO2DF1Jm4HmmrRsIyhqlc+/QpLK8ZS4eUpBa\nx3bZVl5/1UcCK3F/ZuiGxm3NeZ/9jm2gLSPHdPNoKFj+mb6ul6Pzi2P+5e9hqiVP\n/rXlBLrOTqcrUWwVmwejsUybfiHOlGalOVm5oWykSuQfQHj9EaLmqHjvAoGAGW5o\nYuWdyG7j/cKD0dHsMdz1YTn0pVhvOIrbuCdwfp63I/MyR2grBoBT7T+7gB6HUhyW\n6x2aLJVNTypljQwSwJrxjZPRLlJPkh8tok7oonYVpheWmDTB0EZjto75L/onVgSC\nTQUq/K0S7Ytrt1jbcHt/W/Gv+u9VTcPvoB+66HMCgYA7ullCg2CnZw2QcYQQLgzo\n0lADLrNYDw6OgkKPzxxFf5XYjxemnX2/O1OhI2OwXeOnROzLPUlmvSl0O6Ckufjb\nJzLeM7jpM8SAcrQ/XQY11HODNY8Ej7IUXDS/YORoFH0OVAagnpHYJUtZRCV428fj\nG5cH+sLZnUGLvvVQCioO9w==\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-lnxiz@divivu-a3eca.iam.gserviceaccount.com",
        client_id: "118322199997418331179",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lnxiz%40divivu-a3eca.iam.gserviceaccount.com"
    },
    token: {
        secret: process.env.TOKEN_SECRET
    },
    googleMap: {
        apikey: "AIzaSyARP_QXHk082dbAfMXphHhLGn15S_wdxQ4"
    },
    googleStorage: {
        apikey: "AIzaSyDVOfHO52INv2vAVjK1r2hll0hxq-cbVW8"
    },
    postgres: {
        uri: process.env.POSTGRES_PRODUCTION_URI
    }

}