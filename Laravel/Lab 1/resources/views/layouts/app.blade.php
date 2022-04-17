<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>@yield('title')</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
</head>

<style>
  body {
    background-color: rgb(0, 0, 0);
  }
  body *{
    color: rgb(220, 220, 220);
  }
</style>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <label class="navbar-brand">Laravel ITI</label>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="{{ route('posts.index') }}">Home</a>
      </div>
    </div>
  </nav>
  <div class="container">
    @yield('content')
  </div>
</body>

</html>