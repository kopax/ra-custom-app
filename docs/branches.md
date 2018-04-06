1. `master` is used to release the version. 
1. `master` only accept merge requests from `dev`
1. `dev` is the development branch. It should be used by developers for applying their merge requests.
1. If you need to implement a new feature or edit an existing one, you need to submit to `dev` a merge request from your own branch with your modification.

This is how you can create your own branch:

```bash
$ git checkout dev
$ git checkout -b $(whoami)-dev
$ git push -u origin $(whoami)-dev 
```

You can now start working on your branch. Don't forget to check `Delete branch when merged` when submitting your merge request.
