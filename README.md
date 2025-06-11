## Getting Started

**deploy in verce** 

you should add the following environment variables in Vercel:

```
ADMIN_USERNAME
ADMIN_PASSWORD
JWT_SECRET_KEY
SILICONFLOW_API_KEY
```
I use single user (hard code) in backend to verify your identity to protect your API key.

you should also get your own api key from siliconflow.

`JWT_SECRET_KEY` is used to decode and encode your identity, you can generate it from any web tools.



