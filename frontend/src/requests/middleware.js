const applyMiddleware = middleware => request => {
  switch (typeof request) {
    case "function":
      return (...args) => middleware(() => request(...args));
    case "object":
      const requests = Object.keys(request)
        .filter(method => typeof request[method] === "function")
        .map(name => ({
          name,
          method: applyMiddleware(middleware)(request[name])
        }))
        .reduce(
          (acc, curr) => ({
            ...acc,
            [curr.name]: (...args) => curr.method(...args)
          }),
          {}
        );
      return requests;
  }
};

export default applyMiddleware;
