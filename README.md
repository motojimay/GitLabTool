# This Tools is usable tool for GitLab.

#  For Set up.
> npm install  
> npm run electron-start  

# src/config/Config.js
> Watch code below. For your gitLab project, input the access token and project ID before set-up.  
> For security reasons, never include the access token and project ID.  
```javascript  
// Config is now Dummy.

export const END_POINT = "https://gitlab.com/api/v4/projects/"
export const ACCESS_TOKEN = "";
export const PROJECT_ID = 00000000;
export const BRANCH_LIST_URL = "https://gitlab.com/api/v4/projects/00000000/repository/branches";
export const MEMBER_ALL_LIST_URL = "https://gitlab.com/api/v4/projects/00000000/members/all"
export const MERGE_REQUEST_LIST_URL = "https://gitlab.com/api/v4/projects/00000000/merge_requests";
export const MERGE_REQUEST_DISCUSSIONS_PATH = "/discussions"

```
