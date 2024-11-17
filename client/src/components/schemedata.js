const response = await fetch(
  "https://script.googleusercontent.com/macros/echo?user_content_key=jpZNSKbdezfPoYbOaVRiW1jUo8ZzE3fDGKp-LTMPWBbtNs2Tp9aOHoPFxSe9Ivh8_CxKu4y1nBOg1IGOAa_kgQgqrNN9BJSsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHdoXoK9qgwKmSUrF2nvfheKo-24m8jOnOo-6xvYXB95hEFbGEfaQtWmYEIG47zXDxLclpQ7zUQl_XkDR7zwGFA70NCCyWEYz9z9Jw9Md8uu&lib=MU_wLem4eH-7--9PhjI0AMOYWcLBkzmkL"
);
const responseData = await response.json();
const scheme = responseData.data.map((item) => ({
  index: item.index,
  State: item.State,
  Name: item.Name,
  Feature: item.Feature,
  link: item.link,
  details: item.details,
  applicationProcess: item.applicationProcess,
}));
console.log(scheme);
export default scheme;
