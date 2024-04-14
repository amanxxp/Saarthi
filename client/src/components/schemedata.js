const schemes = [
  {
    index: 1,
    title: "Nari Niketans",
    description:
      'The "Nari Niketans" were established in 1976 by the Social Welfare Department, Govt. of Jammu and Kashmir wherein deserted /destitute ladies/ widows having no means of livelihood are given admissions. There are seven Nari Niketan in Jammu & Kashmir, i.e. in Jammu, Udhampur, Kathua, Doda, Rajouri, and two Nari Niketans in Poonch, with a total intake capacity of 280. The inmate shall remain in the institution till they are rehabilitated/get married/covered under any schemes for employment and self-employment. The beneficiary shall approach the concerned District Social Welfare Officer (DSWO) for submission of the application. This is a 100% State Sponsored Scheme, and only the permanent residents of the state of Jammu & Kashmir can apply for this scheme.',
  },
  {
    index: 2,
    title: "Laadli Laxmi Scheme",
    description:
      "Under the scheme, the government provides interest-free loans of up to Rs. 1 lakh to women entrepreneurs who wish to start a new business or expand their existing one. The loans are provided without any collateral security, and the repayment period is up to five years. The scheme also provides training and skill development programs to women entrepreneurs to help them build their business acumen and enhance their knowledge of entrepreneurship. The Mukhyamantri Mahila Utkarsh Yojana is a great initiative to promote women's entrepreneurship and to empower them to become financially independent.",
  },
  {
    index: 3,
    title: "Mukhyamantri Mahila Utkarsh Yojana",
    description:
      "Under the scheme, the government provides interest-free loans of up to Rs. 1 lakh to women entrepreneurs who wish to start a new business or expand their existing one. The loans are provided without any collateral security, and the repayment period is up to five years.",
  },
  {
    index: 4,
    title:
      "Grant of Financial Assistance for Performance of Marriage of Poor Brides Living Below Poverty Line",
    description:
      'The scheme "Grant of Financial Assistance for Performance of Marriage of Poor Brides Living Below Poverty Line" is a financial assistance scheme by the Department of Women and Child Development, Government of Puducherry. This scheme aims to provide financial assistance to poor brides living below the poverty line to meet their marriage expenses. The assistance amount is ₹15,000, and it is granted for the first marriage of the bride. The scheme is implemented through the Department of Women and Child Development.',
  },
  {
    index: 5,
    title: "Indira Gandhi National Widow Pension Scheme",
    description:
      "Indira Gandhi National Widow Pension Scheme (IGNWPS) is implemented by Ministry of Rural Development, Government of India. It is a non-contributory pension scheme to provide social security to widows of poor family (BPL)  of the society.",
  },
  {
    index: 6,
    title: "KULAVILAKKU",
    description:
      '"KULAVILAKKU" is a scheme for pregnant women by the Department of Women and Child Development, Government of Puducherry. This scheme aims to enhance the nutritional status of Pregnant Women. ₹500/- assistance is provided to eligible beneficiaries during their pregnancies. The scheme is a crucial step towards ensuring the well-being of both mother and child. The benefit will be provided for upto two pregnancies only.',
  },
  {
    index: 7,
    title: "RMEWF-Financial Assistance For Ex-Servicemen In Penury",
    description:
      "A scheme to provide financial assistance to non-pensioner Ex-Servicemen up to rank of Havildar /equivalent and their widows who are living in extreme poverty. The aim of this aid-gratis Penury grant was to provide a measure of relief to destitute non-pensioner Ex-Servicemen up to rank of Havildar/equivalent and their widows.",
  },
  {
    index: 8,
    title: "Swabhimaan Scheme",
    description:
      "The Union Territory of Daman & Diu and Dadra & Nagar Haveli has successfully launched the “Swabhimaan Scheme” scheme to tackle the problems of Malnutrition, Anemia, and other relevant issues.  The Hon'ble Prime Minister launched the scheme in Daman on 25th February 2018 and Hon'ble Home Minister in Dadra and Nagar Haveli on 20th April 2018. Under this scheme, a take-home ration (7.5kgs nutritious) is provided every month to Pregnant Women, Lactating Mothers, and Sabla (Adolescent Category girls in the age group of 11-14 years). \nThe nutritional status of women and children in the Union Territory of Dadra and Nagar Haveli is alarming. The UT Administration decided to wage war against undernutrition and came up with the \"Swabhimaan Scheme” as one of the potent tools. The scheme builds on the Integrated Child Development Services (ICDS) being implemented by the government of India. One of the components of ICDS is the provision of supplementary nutrition to children, pregnant women, lactating mothers, and adolescent girls. However, this nutrition was being provided as a cooked meal and the beneficiary had to visit the Anganwadi daily to avail of this benefit. Loss of wages or working time",
  },
  {
    index: 9,
    title: "Financial Assistance for Marriage of Poor Scheduled Caste Brides",
    description: "",
  },
  {
    index: 10,
    title: "Mukhyamantri Samajik Sahayata Prakalpa - Vulnerable Women",
    description: "",
  },
  {
    index: 11,
    title:
      "Goa (Technical/ Vocational Training To Sex Workers And Sexually Abused Women) Scheme, 2013 (PRABHAT)",
    description:
      'The "Goa (Technical/ Vocational Training to Sex Workers and Sexually Abused Women) Scheme, 2013 (PRABHAT)" by the Department of Women and Child Development, Government of Goa, provides technical/vocational training for sex workers and sexually abused women to enable them to earn for their livelihood through such technical/vocational training and skill. The department will take the assistance of members of reputed NGOs/Trust/Society/professionals/expert bodies, who are involved in the rehabilitation of sex workers.',
  },
  {
    index: 12,
    title: "Mukhyamantri Noni Sashaktikaran Sahayata Yojana",
    description:
      'In 2022, Chhattisgarh State Government started the "Mukhyamantri Noni Sashaktikaran Sahayata Yojana" for the girl child of the family. With this scheme, daughters of workers will be able to get education, employment and self-employment.',
  },
  {
    index: 13,
    title: "Nari Niketans",
    description:
      'The "Nari Niketans" were established in 1976 by the Social Welfare Department, Govt. of Jammu and Kashmir wherein deserted /destitute ladies/ widows having no means of livelihood are given admissions. There are seven Nari Niketan in Jammu & Kashmir, i.e. in Jammu, Udhampur, Kathua, Doda, Rajouri, and two Nari Niketans in Poonch, with a total intake capacity of 280. The inmate shall remain in the institution till they are rehabilitated/get married/covered under any schemes for employment and self-employment. The beneficiary shall approach the concerned District Social Welfare Officer (DSWO) for submission of the application. This is a 100% State Sponsored Scheme, and only the permanent residents of the state of Jammu & Kashmir can apply for this scheme.',
  },
  {
    index: 14,
    title: "Laadli Laxmi Scheme",
    description:
      "Under the scheme, the government provides interest-free loans of up to Rs. 1 lakh to women entrepreneurs who wish to start a new business or expand their existing one. The loans are provided without any collateral security, and the repayment period is up to five years. The scheme also provides training and skill development programs to women entrepreneurs to help them build their business acumen and enhance their knowledge of entrepreneurship. The Mukhyamantri Mahila Utkarsh Yojana is a great initiative to promote women's entrepreneurship and to empower them to become financially independent.",
  },
  {
    index: 15,
    title: "Mukhyamantri Mahila Utkarsh Yojana",
    description:
      "Under the scheme, the government provides interest-free loans of up to Rs. 1 lakh to women entrepreneurs who wish to start a new business or expand their existing one. The loans are provided without any collateral security, and the repayment period is up to five years.",
  },
  {
    index: 16,
    title:
      "Grant of Financial Assistance for Performance of Marriage of Poor Brides Living Below Poverty Line",
    description:
      'The scheme "Grant of Financial Assistance for Performance of Marriage of Poor Brides Living Below Poverty Line" is a financial assistance scheme by the Department of Women and Child Development, Government of Puducherry. This scheme aims to provide financial assistance to poor brides living below the poverty line to meet their marriage expenses. The assistance amount is ₹15,000, and it is granted for the first marriage of the bride. The scheme is implemented through the Department of Women and Child Development.',
  },
  {
    index: 17,
    title: "Indira Gandhi National Widow Pension Scheme",
    description:
      "Indira Gandhi National Widow Pension Scheme (IGNWPS) is implemented by Ministry of Rural Development, Government of India. It is a non-contributory pension scheme to provide social security to widows of poor family (BPL)  of the society.",
  },
  {
    index: 18,
    title: "KULAVILAKKU",
    description:
      '"KULAVILAKKU" is a scheme for pregnant women by the Department of Women and Child Development, Government of Puducherry. This scheme aims to enhance the nutritional status of Pregnant Women. ₹500/- assistance is provided to eligible beneficiaries during their pregnancies. The scheme is a crucial step towards ensuring the well-being of both mother and child. The benefit will be provided for upto two pregnancies only.',
  },
  {
    index: 19,
    title: "RMEWF-Financial Assistance For Ex-Servicemen In Penury",
    description:
      "A scheme to provide financial assistance to non-pensioner Ex-Servicemen up to rank of Havildar /equivalent and their widows who are living in extreme poverty. The aim of this aid-gratis Penury grant was to provide a measure of relief to destitute non-pensioner Ex-Servicemen up to rank of Havildar/equivalent and their widows.",
  },
  {
    index: 20,
    title: "Swabhimaan Scheme",
    description:
      "The Union Territory of Daman & Diu and Dadra & Nagar Haveli has successfully launched the “Swabhimaan Scheme” scheme to tackle the problems of Malnutrition, Anemia, and other relevant issues.  The Hon'ble Prime Minister launched the scheme in Daman on 25th February 2018 and Hon'ble Home Minister in Dadra and Nagar Haveli on 20th April 2018. Under this scheme, a take-home ration (7.5kgs nutritious) is provided every month to Pregnant Women, Lactating Mothers, and Sabla (Adolescent Category girls in the age group of 11-14 years). \nThe nutritional status of women and children in the Union Territory of Dadra and Nagar Haveli is alarming. The UT Administration decided to wage war against undernutrition and came up with the \"Swabhimaan Scheme” as one of the potent tools. The scheme builds on the Integrated Child Development Services (ICDS) being implemented by the government of India. One of the components of ICDS is the provision of supplementary nutrition to children, pregnant women, lactating mothers, and adolescent girls. However, this nutrition was being provided as a cooked meal and the beneficiary had to visit the Anganwadi daily to avail of this benefit. Loss of wages or working time",
  },
  {
    index: 21,
    title: "Financial Assistance for Marriage of Poor Scheduled Caste Brides",
    description: "",
  },
  {
    index: 22,
    title: "Mukhyamantri Samajik Sahayata Prakalpa - Vulnerable Women",
    description: "",
  },
  {
    index: 23,
    title:
      "Goa (Technical/ Vocational Training To Sex Workers And Sexually Abused Women) Scheme, 2013 (PRABHAT)",
    description:
      'The "Goa (Technical/ Vocational Training to Sex Workers and Sexually Abused Women) Scheme, 2013 (PRABHAT)" by the Department of Women and Child Development, Government of Goa, provides technical/vocational training for sex workers and sexually abused women to enable them to earn for their livelihood through such technical/vocational training and skill. The department will take the assistance of members of reputed NGOs/Trust/Society/professionals/expert bodies, who are involved in the rehabilitation of sex workers.',
  },
  {
    index: 24,
    title: "Mukhyamantri Noni Sashaktikaran Sahayata Yojana",
    description:
      'In 2022, Chhattisgarh State Government started the "Mukhyamantri Noni Sashaktikaran Sahayata Yojana" for the girl child of the family. With this scheme, daughters of workers will be able to get education, employment and self-employment.',
  },

  // Add more schemes here based on your requirements
];

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
