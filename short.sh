echo "Hello! Welcome to the AOC build up companion"

home="$(pwd)"
ts="$home/ts/"

alias ts="cd $ts"
alias tests="cd $ts/tests/"
alias questions="cd $ts/questions/"
alias test_crystal_ball="npm run test_crystal_ball"
alias test_binary_search="npm run test_binary_search"
alias test_dfs="npm run test_dfs"
alias test_dfs_graph="npm run test_dfs_graph"
alias test_bubble_sort="npm run test_bubble_sort"

crystal_ball() {
  new_home="$(pwd)"
  cd $ts
  test_crystal_ball
  cd $new_home
}

binary_search() {
  new_home="$(pwd)"
  cd $ts
  test_binary_search
  cd $new_home
}

bubble_sort() {
  new_home="$(pwd)"
  cd $ts
  test_bubble_sort
  cd $new_home
}

dfs() {
  new_home="$(pwd)"
  cd $ts
  test_dfs
  cd $new_home
}

dfs() {
  new_home="$(pwd)"
  cd $ts
  test_dfs
  cd $new_home
}

gdfs() {
  new_home="$(pwd)"
  cd $ts
  test_dfs_graph
  cd $new_home
}

echo "1. crystal_ball\n2. binary_search \n3. Depth first search added (dfs)\n4. Graph depth first search added (gdfs)!"
