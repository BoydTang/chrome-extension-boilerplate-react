const text = [
  {
    key: '30437_A37846',
    value: '30437',
  },
  {
    key: 'EDIT_T_343ECC',
    value: 'Edit time expired',
  },
  {
    key: 'YES_D0F4C2',
    value: 'Yes',
  },
  {
    key: '30440_C07C3F',
    value: '30440',
  },
  {
    key: 'UNKNOW_F0F77E',
    value: 'Unknown error',
  },
  {
    key: 'NO_61ED7F',
    value: 'No',
  },
  {
    key: '30441_CAB029',
    value: '30441',
  },
  {
    key: 'DISALL_1ACEE6',
    value: 'Disallowed - SHAFT - Sex',
  },
  {
    key: 'NO_7DA2DA',
    value: 'No',
  },
  {
    key: '30442_1A852C',
    value: '30442',
  },
  {
    key: 'BUSINE_23F7ED',
    value: 'Business associated with a known Spam campaign',
  },
  {
    key: 'NO_D98109',
    value: 'No',
  },
  {
    key: '30443_D503D7',
    value: '30443',
  },
  {
    key: 'DISALL_A6CDDB',
    value: 'Disallowed - Loan Marketing',
  },
  {
    key: 'NO_0A1C49',
    value: 'No',
  },
  {
    key: '30444_8B9E2E',
    value: '30444',
  },
  {
    key: 'HIGH_R_9891D5',
    value:
      'High risk - Third-party lead generation services and marketing: Fraud',
  },
  {
    key: 'NO_5BAB18',
    value: 'No',
  },
  {
    key: '30445_C98410',
    value: '30445',
  },
  {
    key: 'COULD_A8EF9F',
    value: 'Could not verify Business',
  },
  {
    key: 'YES_DAD5CD',
    value: 'Yes',
  },
  {
    key: '30446_F3D99F',
    value: '30446',
  },
  {
    key: 'OPTIN_102F4A',
    value: 'Opt-in not sufficient - express consent required',
  },
  {
    key: 'YES_5BC22C',
    value: 'Yes',
  },
  {
    key: '30447_23A132',
    value: '30447',
  },
  {
    key: 'PHONE_5E1793',
    value:
      'Phone Number Error - the toll-free phone number is not provisioned to Twilio',
  },
  {
    key: 'NO_E2D69B',
    value: 'No',
  },
  {
    key: '30448_D89E36',
    value: '30448',
  },
  {
    key: 'AGE_GA_4A44DA',
    value: 'Age Gate Not Present / Not Acceptable',
  },
  {
    key: 'YES_DDE3A7',
    value: 'Yes',
  },
  {
    key: '30449_99A320',
    value: '30449',
  },
  {
    key: 'HIGH_R_68A617',
    value: 'High risk - Public URL shortener in sample message',
  },
  {
    key: 'YES_C75398',
    value: 'Yes',
  },
  {
    key: '30451_CACD39',
    value: '30451',
  },
  {
    key: 'ADDRES_8D37A0',
    value: 'Address is invalid',
  },
  {
    key: 'YES_AF5704',
    value: 'Yes',
  },
  {
    key: '30452_EF52D9',
    value: '30452',
  },
  {
    key: 'EMAIL_10D749',
    value: 'Email is invalid',
  },
  {
    key: 'YES_E8D796',
    value: 'Yes',
  },
  {
    key: '30455_494569',
    value: '30455',
  },
  {
    key: 'DISALL_BFDF50',
    value: 'Disallowed - SHAFT - Hate',
  },
  {
    key: 'NO_14EA52',
    value: 'No',
  },
  {
    key: '30456_10A840',
    value: '30456',
  },
  {
    key: 'DISALL_65C113',
    value: 'Disallowed - SHAFT - Alcohol',
  },
  {
    key: 'NO_7A0071',
    value: 'No',
  },
  {
    key: '30457_2575C5',
    value: '30457',
  },
  {
    key: 'DISALL_3A0BE6',
    value: 'Disallowed - SHAFT - Firearms',
  },
  {
    key: 'NO_8DBBBC',
    value: 'No',
  },
  {
    key: '30458_C2C483',
    value: '30458',
  },
  {
    key: 'DISALL_339A81',
    value: 'Disallowed - SHAFT - Tobacco/Vape',
  },
  {
    key: 'NO_F11B7C',
    value: 'No',
  },
  {
    key: '30459_DA1399',
    value: '30459',
  },
  {
    key: 'DISALL_FBB2E0',
    value: 'Disallowed - SHAFT - Cannabis/CBD',
  },
  {
    key: 'NO_CF489B',
    value: 'No',
  },
  {
    key: '30460_E5737F',
    value: '30460',
  },
  {
    key: 'DISALL_6B4F2F',
    value: 'Disallowed - Third party debt collection',
  },
  {
    key: 'NO_B950C0',
    value: 'No',
  },
  {
    key: '30461_5F4B78',
    value: '30461',
  },
  {
    key: 'DISALL_343D7D',
    value: 'Disallowed - Gambling',
  },
  {
    key: 'NO_69DA66',
    value: 'No',
  },
  {
    key: '30462_1646D1',
    value: '30462',
  },
  {
    key: 'DISALL_41A743',
    value: 'Disallowed - Sweepstakes',
  },
  {
    key: 'NO_76BB3D',
    value: 'No',
  },
  {
    key: '30463_DA167E',
    value: '30463',
  },
  {
    key: 'DISALL_BA4C02',
    value: 'Disallowed - Stock Alerts',
  },
  {
    key: 'NO_3DE880',
    value: 'No',
  },
  {
    key: '30464_C1B962',
    value: '30464',
  },
  {
    key: 'DISALL_C3EE1E',
    value: 'Disallowed - Cryptocurrency',
  },
  {
    key: 'NO_929A79',
    value: 'No',
  },
  {
    key: '30465_EA640F',
    value: '30465',
  },
  {
    key: 'DISALL_CDAEF1',
    value: 'Disallowed - Risk Investment/Get Rich Quick Schemes',
  },
  {
    key: 'NO_085651',
    value: 'No',
  },
  {
    key: '30466_00F521',
    value: '30466',
  },
  {
    key: 'DISALL_5A1EDC',
    value: 'Disallowed - Debt reduction',
  },
  {
    key: 'NO_C63483',
    value: 'No',
  },
  {
    key: '30467_DF014C',
    value: '30467',
  },
  {
    key: 'DISALL_79BE57',
    value: 'Disallowed - Credit Repair',
  },
  {
    key: 'NO_73F42E',
    value: 'No',
  },
  {
    key: '30468_57B960',
    value: '30468',
  },
  {
    key: 'DISALL_B5E316',
    value: 'Disallowed - Third party lead generation',
  },
  {
    key: 'NO_3DDF6A',
    value: 'No',
  },
  {
    key: '30469_B1BF10',
    value: '30469',
  },
  {
    key: 'DISALL_701566',
    value: 'Disallowed - Illegal Substances/articles',
  },
  {
    key: 'NO_4B4D52',
    value: 'No',
  },
  {
    key: '30470_69C43C',
    value: '30470',
  },
  {
    key: 'DISALL_9A9BCA',
    value:
      'Disallowed - High risk - Third-party lead generation services and marketing: Deceptive marketing',
  },
  {
    key: 'NO_C867E0',
    value: 'No',
  },
  {
    key: '30471_E077A8',
    value: '30471',
  },
  {
    key: 'DISALL_6D8055',
    value: 'Disallowed - High risk - Non-secured URL in sample message',
  },
  {
    key: 'YES_7507CA',
    value: 'Yes',
  },
  {
    key: '30472_EC917B',
    value: '30472',
  },
  {
    key: 'BUSINE_3622FE',
    value: 'Business information not valid',
  },
  {
    key: 'YES_87F6E6',
    value: 'Yes',
  },
  {
    key: '30473_CF49B7',
    value: '30473',
  },
  {
    key: 'CANNOT_BBD9DC',
    value: 'Cannot validate business website URL',
  },
  {
    key: 'YES_31C67A',
    value: 'Yes',
  },
  {
    key: '30474_2F7046',
    value: '30474',
  },
  {
    key: 'NEED_E_091DB6',
    value: 'Need end business',
  },
  {
    key: 'YES_CFD7D0',
    value: 'Yes',
  },
  {
    key: '30475_DCACCA',
    value: '30475',
  },
  {
    key: 'OPTIN_9C7ED2',
    value:
      'Opt-in not sufficient - Cannot combine consent for messaging with requirement for service',
  },
  {
    key: 'YES_CFD131',
    value: 'Yes',
  },
  {
    key: '30476_847CBE',
    value: '30476',
  },
  {
    key: 'OPTIN_D57F52',
    value: 'Opt-in not provided',
  },
  {
    key: 'YES_83E1EF',
    value: 'Yes',
  },
  {
    key: '30477_DBF64B',
    value: '30477',
  },
  {
    key: 'OPTIN_69597F',
    value:
      'Opt-in not sufficient - Third party information sharing not allowed',
  },
  {
    key: 'YES_3CBB66',
    value: 'Yes',
  },
  {
    key: '30478_40FF43',
    value: '30478',
  },
  {
    key: 'PHONE_9D267A',
    value:
      'Phone number error - single phone number used for multiple businesses',
  },
  {
    key: 'YES_5B79A2',
    value: 'Yes',
  },
  {
    key: '30479_945D54',
    value: '30479',
  },
  {
    key: 'JUSTIF_2D63DD',
    value:
      'Justification needed for more than five toll-free phone numbers per businesses',
  },
  {
    key: 'YES_B98DE9',
    value: 'Yes',
  },
  {
    key: '30480_B55573',
    value: '30480',
  },
  {
    key: 'BUSINE_D0056C',
    value: 'Business associated with a known Phishing campaign',
  },
  {
    key: 'NO_6A7007',
    value: 'No',
  },
  {
    key: '30481_44E908',
    value: '30481',
  },
  {
    key: 'CUSTOM_24914F',
    value: 'Customer Requested Cancellation',
  },
  {
    key: 'NO_525574',
    value: 'No',
  },
  {
    key: '30482_7F8CF9',
    value: '30482',
  },
  {
    key: 'BUSINE_2C0B02',
    value: 'Business email must use an official domain',
  },
  {
    key: 'YES_392F11',
    value: 'Yes',
  },
  {
    key: '30483_82A619',
    value: '30483',
  },
  {
    key: 'CONTAC_698F4E',
    value: 'Contact must be a business representative',
  },
  {
    key: 'YES_A5297B',
    value: 'Yes',
  },
  {
    key: '30484_87E050',
    value: '30484',
  },
  {
    key: 'BUSINE_282178',
    value: 'Business name and official records do not match',
  },
  {
    key: 'YES_42BFB6',
    value: 'Yes',
  },
  {
    key: '30485_7413AC',
    value: '30485',
  },
  {
    key: 'OFFICI_3C97CF',
    value: 'Official business registration documents required',
  },
  {
    key: 'YES_255166',
    value: 'Yes',
  },
  {
    key: '30487_41CFCB',
    value: '30487',
  },
  {
    key: 'CHARIT_9E0AB2',
    value: 'Charitable organization must provide 501(c)(3) verification',
  },
  {
    key: 'YES_575FB1',
    value: 'Yes',
  },
  {
    key: '30488_CDD7AC',
    value: '30488',
  },
  {
    key: 'DOING_FD55EA',
    value: 'Doing Business As (DBA) name must be accurately provided',
  },
  {
    key: 'YES_964870',
    value: 'Yes',
  },
  {
    key: '30527_DDE1D7',
    value: '30527',
  },
  {
    key: 'BUSINE_A5B197',
    value: 'Business Registration Number is missing or invalid',
  },
  {
    key: 'YES_2E0151',
    value: 'Yes',
  },
  {
    key: '30489_AD6321',
    value: '30489',
  },
  {
    key: 'WEBSIT_E7328E',
    value: 'Website must be established and active',
  },
  {
    key: 'YES_6EE995',
    value: 'Yes',
  },
  {
    key: '30490_3C969B',
    value: '30490',
  },
  {
    key: 'SOCIAL_79A249',
    value: 'Social platform must be established and active',
  },
  {
    key: 'YES_214368',
    value: 'Yes',
  },
  {
    key: '30491_364180',
    value: '30491',
  },
  {
    key: 'WEBSIT_F1A49A',
    value: 'Website is password-protected or requires login',
  },
  {
    key: 'YES_8B18F8',
    value: 'Yes',
  },
  {
    key: '30492_F1F7AB',
    value: '30492',
  },
  {
    key: 'BUSINE_998319',
    value: 'Business website URL must display branding',
  },
  {
    key: 'YES_6A2919',
    value: 'Yes',
  },
  {
    key: '30493_354F91',
    value: '30493',
  },
  {
    key: 'PRIVAC_22CCFD',
    value: 'Privacy policy or terms URL missing or inaccessible',
  },
  {
    key: 'YES_FFA829',
    value: 'Yes',
  },
  {
    key: '30494_C78156',
    value: '30494',
  },
  {
    key: 'INDEPE_6BE1E6',
    value:
      'Independent Software Vendor (ISV) or reseller name must be provided',
  },
  {
    key: 'YES_722B4E',
    value: 'Yes',
  },
  {
    key: '30495_7B1F2B',
    value: '30495',
  },
  {
    key: 'PROJEC_5ED4C6',
    value: 'Projected message volume exceeds use case limits',
  },
  {
    key: 'YES_955746',
    value: 'Yes',
  },
  {
    key: '30496_0C2EA1',
    value: '30496',
  },
  {
    key: 'USE_CA_A91449',
    value: 'Use case and use case summary are inconsistent',
  },
  {
    key: 'YES_8FFE73',
    value: 'Yes',
  },
  {
    key: '30497_E97D9D',
    value: '30497',
  },
  {
    key: 'USE_CA_C5913B',
    value: 'Use case summary is incomplete',
  },
  {
    key: 'YES_705281',
    value: 'Yes',
  },
  {
    key: '30498_F0AE9E',
    value: '30498',
  },
  {
    key: 'OPTIN_C8BF4D',
    value: 'Opt-in workflow must match submission details',
  },
  {
    key: 'YES_96F483',
    value: 'Yes',
  },
  {
    key: '30499_E6BEE7',
    value: '30499',
  },
  {
    key: 'MESSAG_D7448D',
    value: "Message content doesn't align with use case",
  },
  {
    key: 'YES_021F82',
    value: 'Yes',
  },
  {
    key: '30486_F62370',
    value: '30486',
  },
  {
    key: 'HELP_K_BA4524',
    value: 'HELP keyword response must meet requirements',
  },
  {
    key: 'YES_A64EEC',
    value: 'Yes',
  },
  {
    key: '30501_E7ACE6',
    value: '30501',
  },
  {
    key: 'POLITI_7028D8',
    value: 'Political campaigns must have a Campaign Verify token',
  },
  {
    key: 'YES_55FA72',
    value: 'Yes',
  },
  {
    key: '30502_FC4996',
    value: '30502',
  },
  {
    key: 'POLITI_A57586',
    value:
      'Political campaigns must submit Federal Election Commission (FEC) ID',
  },
  {
    key: 'YES_250CDB',
    value: 'Yes',
  },
  {
    key: '30503_7DB6FC',
    value: '30503',
  },
  {
    key: 'CONFIR_B43458',
    value: 'Confirmation message missing required details',
  },
  {
    key: 'YES_1AC501',
    value: 'Yes',
  },
  {
    key: '30504_C67D7B',
    value: '30504',
  },
  {
    key: 'SINGLE_C2DCDA',
    value: 'Single opt-in cannot cover multiple use cases',
  },
  {
    key: 'YES_77C684',
    value: 'Yes',
  },
  {
    key: '30505_789196',
    value: '30505',
  },
  {
    key: 'OPTIN_55D3D3',
    value: 'Opt-in must be optional, not mandatory',
  },
  {
    key: 'YES_BCAFE0',
    value: 'Yes',
  },
  {
    key: '30506_91E238',
    value: '30506',
  },
  {
    key: 'OPTINS_CF683B',
    value: 'Opt-ins must clearly reflect end business',
  },
  {
    key: 'YES_234525',
    value: 'Yes',
  },
  {
    key: '30507_D56982',
    value: '30507',
  },
  {
    key: 'OPTIN_9BB870',
    value: 'Opt-in does not match use case',
  },
  {
    key: 'YES_9E0BFB',
    value: 'Yes',
  },
  {
    key: '30508_D203B8',
    value: '30508',
  },
  {
    key: 'PRESEL_1EC1C8',
    value: 'Pre-selected opt-in checkbox is not allowed',
  },
  {
    key: 'YES_D11C9C',
    value: 'Yes',
  },
  {
    key: '30509_32F26E',
    value: '30509',
  },
  {
    key: 'OPTIN_F6D740',
    value: 'Opt-in URL not accessible',
  },
  {
    key: 'YES_110B04',
    value: 'Yes',
  },
  {
    key: '30510_D4E66A',
    value: '30510',
  },
  {
    key: 'OPTIN_78B2F3',
    value: 'Opt-in example must be complete and branded',
  },
  {
    key: 'YES_C7A3D8',
    value: 'Yes',
  },
  {
    key: '30511_BFF129',
    value: '30511',
  },
  {
    key: 'VERBAL_ACE0A6',
    value: 'Verbal consent script must be provided',
  },
  {
    key: 'YES_13A30A',
    value: 'Yes',
  },
  {
    key: '30512_FBC831',
    value: '30512',
  },
  {
    key: 'AGE_GA_54B116',
    value: 'Age gate required for age-restricted content',
  },
  {
    key: 'YES_32728D',
    value: 'Yes',
  },
  {
    key: '30513_0D6951',
    value: '30513',
  },
  {
    key: 'OPTIN_57A1C8',
    value: 'Opt-in not sufficient: language unclear',
  },
  {
    key: 'YES_2DAB07',
    value: 'Yes',
  },
  {
    key: '30515_16AB62',
    value: '30515',
  },
  {
    key: 'VALID_D1958D',
    value: 'Valid opt-in required for all submissions',
  },
  {
    key: 'YES_86F9CD',
    value: 'Yes',
  },
  {
    key: '30516_4E80F5',
    value: '30516',
  },
  {
    key: 'DOUBLE_2D66F2',
    value: 'Double opt-in required for this use case',
  },
  {
    key: 'YES_272DFD',
    value: 'Yes',
  },
  {
    key: '30517_03808D',
    value: '30517',
  },
  {
    key: 'SHOPPI_5BEBCD',
    value: 'Shopping cart reminders must follow specific guidelines',
  },
  {
    key: 'YES_4A96CB',
    value: 'Yes',
  },
  {
    key: '30518_7E7537',
    value: '30518',
  },
  {
    key: 'CALLTO_19D350',
    value: 'Call-to-action missing required disclosures',
  },
  {
    key: 'YES_C0F025',
    value: 'Yes',
  },
  {
    key: '30519_46B2BA',
    value: '30519',
  },
  {
    key: 'PRIVAC_5C04BE',
    value: 'Privacy policy required for personal data collection',
  },
  {
    key: 'YES_28DDBF',
    value: 'Yes',
  },
  {
    key: '30520_831A6D',
    value: '30520',
  },
  {
    key: 'PRIVAC_73E2D1',
    value: 'Privacy policy mentions sharing opt-in data',
  },
  {
    key: 'YES_8AA445',
    value: 'Yes',
  },
  {
    key: '30521_6B35DD',
    value: '30521',
  },
  {
    key: 'OPTIN_73C614',
    value: 'Opt-in data cannot be shared with third parties',
  },
  {
    key: 'YES_88B38B',
    value: 'Yes',
  },
  {
    key: '30522_FF7717',
    value: '30522',
  },
  {
    key: 'SMS_TE_320C02',
    value: 'SMS terms must be accessible and compliant',
  },
  {
    key: 'YES_A57D95',
    value: 'Yes',
  },
  {
    key: '30523_948510',
    value: '30523',
  },
  {
    key: 'HIGHRI_5D596C',
    value: 'High-risk domain reputation detected',
  },
  {
    key: 'NO_3930BD',
    value: 'No',
  },
  {
    key: '30524_18C34E',
    value: '30524',
  },
  {
    key: 'POTENT_78E393',
    value: 'Potential fraud risk identified',
  },
  {
    key: 'NO_44F5F3',
    value: 'No',
  },
  {
    key: '30526_6334A9',
    value: '30526',
  },
  {
    key: 'HIGHRI_CE5C2F',
    value: 'High-risk domain issues',
  },
  {
    key: 'NO_D62471',
    value: 'No',
  },
  {
    key: '30528_4791D4',
    value: '30528',
  },
  {
    key: 'DISALL_F09D2D',
    value: 'Disallowed: Non-federally compliant use case',
  },
  {
    key: 'NO_C5A076',
    value: 'No',
  },
  {
    key: '30529_302C14',
    value: '30529',
  },
  {
    key: 'DISALL_D4CE4B',
    value: 'Disallowed: Alcohol promotions without age verification',
  },
  {
    key: 'NO_E8ABC8',
    value: 'No',
  },
  {
    key: '30525_980ED7',
    value: '30525',
  },
  {
    key: 'PUBLIC_4D5BE7',
    value: 'Public URL shorteners not allowed',
  },
  {
    key: 'NO_039B68',
    value: 'No',
  },
];

const existErrorCodes = [
  '30437',
  '30440',
  '30441',
  '30442',
  '30443',
  '30444',
  '30445',
  '30446',
  '30447',
  '30448',
  '30449',
  '30451',
  '30452',
  '30455',
  '30456',
  '30457',
  '30458',
  '30459',
  '30460',
  '30461',
  '30462',
  '30463',
  '30464',
  '30465',
  '30466',
  '30467',
  '30468',
  '30469',
  '30470',
  '30471',
  '30472',
  '30473',
  '30474',
  '30475',
  '30476',
  '30477',
  '30478',
  '30479',
  '30480',
];

// 每三个数据分成一组
const groupedText = () => {
  const result = [];
  for (let i = 0; i < text.length; i += 3) {
    result.push(text.slice(i, i + 3));
  }
  return result;
};

const format = () => {
  const groupText = groupedText();
  console.log('groupText', groupText);
  const res = groupText.reduce((acc, cur) => {
    const key = Number(cur[0].value);
    const msg = cur[1].value;
    const resubmit = cur[2].value === 'Yes' ? true : false;
    const isExist = existErrorCodes.includes(key.toString());
    if (isExist) return acc; // 如果存在则跳过
    acc[Number(key)] = {
      errorMsg: msg,
      resubmitAvailable: resubmit,
    };
    return acc;
  }, {});
  console.log('res===>', res);
};

format();
