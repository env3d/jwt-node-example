A simple example of how we can validate a JWT using NodeJS.

The following packages are required:

 1. jsonwebtoken - for decoding and verifying JWTs
 2. jwk-to-pem - needed because google provides keys in jwk format, but jsonwebtoken expects keys in pem format
 3. node-fetch@2 - just wanted the convenience of using fetch API.  Need the version 2 branch cause the new v3.x only works with ESM modules.

