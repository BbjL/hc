// route filter
export function fliterRoutes(routes) {
  let res = [];

  routes.forEach((route) => {
    if (!route.hidden) {
      res.push(route);
    }
  });

  return res;
}

// filter bread
export function filterBraed(route) {
  let matched = [{
    path: '/home',
    title: '主页'
  }];

  if (route.meta.parentRoutes) {
    route.meta.parentRoutes.forEach(parent => {
      matched.push(parent)
    })
  }

  matched.push({
    path: route.path,
    title: route.meta.title
  })

  return matched;
}
