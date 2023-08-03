export const getCookie = (name: string) => {
  if (process.browser) {
    const matches = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};

export const deleteCookies = () => {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
};
