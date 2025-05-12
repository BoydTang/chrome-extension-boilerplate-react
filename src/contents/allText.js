const allTexts = [
  // home page
  {
    key: 'PENDIN_720EDA',
    value: 'pending reviews to manage',
  },
  {
    key: 'PENDIN_F61085',
    value: 'pending questions to manage',
  },
  {
    key: 'WELCOM_985C0B',
    value: 'Welcome! Connect your store to get started',
  },
  {
    key: 'YOURE_CA777A',
    value: 'You’re doing great!',
  },
  {
    key: 'EXCELL_443A42',
    value: 'Excellent work!',
  },
  {
    key: 'KEEP_I_E1F18C',
    value: 'Keep it going!',
  },
  {
    key: 'CONNEC_09C228',
    value: 'Connect store',
  },
  {
    key: 'CONNEC_2746CD',
    value: 'Connect your Shopify store to display customers reviews.',
  },
  {
    key: 'TO_REQ_B02C17',
    value: 'to request new eCommerce platform integration.',
  },
  {
    key: 'FINISH_DE3C54',
    value: 'Finish the reviews widget setup',
  },
  {
    key: 'FINISH_945A42',
    value: 'Finish the star ratings widget setup',
  },
  {
    key: 'ENABLE_4BAA9A',
    value: 'Enable star widget',
  },
  {
    key: 'ENABLE_15A805',
    value: 'Enable reviews widget',
  },
  {
    key: 'FINISH_A7FC57',
    value: 'Finish widget setup',
  },
  {
    key: 'REVIEW_664DD1',
    value: 'Review request emails enabled',
  },
  {
    key: 'CUSTOM_614D28',
    value: 'Customize emails',
  },
  {
    key: 'CUSTOM_9AAE20',
    value:
      'Customize your post-purchase review request emails to collect more authentic reviews.',
  },
  {
    key: 'COLLEC_BCFA6A',
    value: 'Collect product reviews',
  },
  {
    key: 'COLLEC_2C69B3',
    value:
      'Collect reviews by emails or import reviews from third-party suppliers.',
  },
  {
    key: 'WELCOM_83218A',
    value: 'Welcome',
  },
  {
    key: 'WELCOM_1A4417',
    value: 'Welcome,',
  },
  {
    key: 'HERES_AEDF14',
    value: 'Here’s your review performance in the last 30 days.',
  },
  {
    key: 'ORDERS_36438B',
    value: 'ORDERS WITH EMAIL SENT',
  },
  {
    key: 'REVIEW_4F53FA',
    value: 'REVIEWS AND NPS COLLECTED',
  },
  {
    key: 'ENGAGE_B4BC46',
    value: 'ENGAGEMENTS',
  },
  {
    key: 'SALES_EA66FE',
    value: 'SALES',
  },
  {
    key: 'KEEP_I_ADDB5D',
    value: 'Keep it going!',
  },
  {
    key: 'HURRAY_0EB33B',
    value: 'Hurray! You’ve completed all the onboarding steps',
  },
  {
    key: 'CONNEC_ABF0B7',
    value: 'Connect your store',
  },
  {
    key: 'ENABLE_DF5769',
    value: 'Enable widgets',
  },
  {
    key: 'ENABLE_4864FE',
    value: 'Enable review request emails',
  },
  {
    key: 'COLLEC_9D1287',
    value: 'Collect reviews',
  },
  {
    key: 'STORE_4045EA',
    value: 'Store connected successfully',
  },
  {
    key: 'GREAT_624127',
    value:
      'Great! You have successfully connected your store to display customer reviews.',
  },
  {
    key: 'CONTAC_D699F3',
    value: 'Contact our support team',
  },
  {
    key: 'IF_YOU_97A760',
    value: 'if you face any issues.',
  },
  {
    key: 'CONTAC_026C83',
    value: 'Contact support',
  },
  {
    key: 'REVIEW_C1EBB0',
    value: 'REVIEWS',
  },
  {
    key: 'NEED_H_10B6D1',
    value: 'Need help?',
  },
  {
    key: 'START_9D4571',
    value: 'Start live chat',
  },
  {
    key: 'GET_IM_91763D',
    value: 'Get immediate assistance from our dedicated support team.',
  },
  {
    key: 'MAKE_A_DB5F05',
    value: 'Make a suggestion',
  },
  {
    key: 'LOVE_U_4CE374',
    value: 'Love us? Hate us?',
  },
  {
    key: 'THINK_E840C6',
    value: 'Think we should change or add a feature?',
  },
  {
    key: 'WE_RES_A78D5E',
    value: 'We respond to 100% of comments.',
  },
  {
    key: 'HELP_C_F27AC7',
    value: 'Help center',
  },
  {
    key: 'CHECK_438CFF',
    value: 'Check out our step-by-step guides and troubleshooting articles.',
  },
  {
    key: 'REVIEW_501480',
    value: 'Reviews widget activated',
  },
  {
    key: 'TO_SHO_F46DE9',
    value: 'To show reviews in your store, complete the following steps:',
  },
  {
    key: 'ENABLE_5DA568',
    value: 'Enable the reviews widget',
  },
  {
    key: 'ENABLE_D7A845',
    value: 'Enable the star ratings widget',
  },
  {
    key: 'CUSTOM_084D2A',
    value: 'Customize widget',
  },
  {
    key: 'ENABLE_D91FEA',
    value: 'Enable review request emails',
  },
  {
    key: 'AUTOSE_F94674',
    value: 'Auto-send post-purchase review request emails to collect reviews.',
  },
  {
    key: 'MANAGE_B4FA81',
    value: 'Manage reviews',
  },
  {
    key: 'MANAGE_963E4F',
    value: 'Manage, reply to, or share the reviews to build your social proof.',
  },
  // all reviews
  {
    key: 'EXPORT_B68328',
    value: 'Export reviews by CSV',
  },
  {
    key: 'YOU_NE_A7D99D',
    value: 'You need to connect your Shopify store.',
  },
  {
    key: 'CONNEC_90F14D',
    value: 'Connect your store and view imported reviews.',
  },
  {
    key: 'PLEASE_FE3C01',
    value:
      'Please wait for the current export task to finish before exporting more reviews',
  },
  {
    key: 'EXPORT_C48329',
    value: 'Export in progress',
  },
  {
    key: 'THIS_M_838F88',
    value: 'This may take a while depending on the number of reviews.',
  },
  {
    key: 'REVIEW_DFDDBF',
    value: 'Reviews exported successfully',
  },
  {
    key: 'AN_EMA_507E0E',
    value: 'An email with a download link was sent to {{email}}.',
  },
  {
    key: 'FAILED_3384FA',
    value: 'Failed to export',
  },
  {
    key: 'SOMETH_F32D20',
    value: 'Something went wrong. Please try again.',
  },
  {
    key: 'THIS_M_1CCBF0',
    value: 'This may take a while depending on the number of emails.',
  },
  {
    key: 'EMAILS_A36C25',
    value: 'Emails exported successfully',
  },
  {
    key: 'UNPUBL_0774E1',
    value: 'Unpublished',
  },
  {
    key: 'FROM_5DA618',
    value: 'From',
  },
  {
    key: 'CSV_UP_665E71',
    value: 'CSV uploaded',
  },
  {
    key: 'MANUAL_DDA388',
    value: 'Manual email',
  },
  {
    key: 'STOREF_F0DCA7',
    value: 'Storefront',
  },
  {
    key: 'NO_PRO_2E3DEB',
    value: 'No products found',
  },
  {
    key: 'TRY_CH_7ED394',
    value: 'Try changing the search terms.',
  },
  {
    key: 'TRY_CH_7ED394',
    value: 'Try changing the search terms.',
  },
  {
    key: 'YOU_HA_716F53',
    value: `You haven't added any products to your store.`,
  },
  {
    key: 'PRODUC_F5BF48',
    value: `product`,
  },
  {
    key: 'PRODUC_86024C',
    value: `products`,
  },
  {
    key: 'SELECT_EF7DE3',
    value: `selected`,
  },
  {
    key: 'STARS_A5DF37',
    value: `stars`,
  },
  {
    key: 'AUTO_P_DFABF0',
    value: `Auto-publish in`,
  },
  {
    key: 'PRODUC_1B8439',
    value: `Product review`,
  },
  {
    key: 'STORE_05C6EF',
    value: `Store review`,
  },
  {
    key: 'YOU_CA_BC3EAA',
    value: `You cannot edit, move or delete verified reviews.`,
  },
  {
    key: 'SHARE_12D52D',
    value: `Share review`,
  },
  {
    key: 'MOVE_R_C6B918',
    value: `Move review`,
  },
  {
    key: 'DELETE_AA4F46',
    value: `Delete review`,
  },
  {
    key: 'VERIFI_52D229',
    value: `Verified reviews and Trustpilot reviews cannot be edited`,
  },
  {
    key: 'VERIFI_39061B',
    value: `Verified reviews and Trustpilot reviews cannot be deleted`,
  },
  {
    key: 'MARK_A_98BD07',
    value: `Mark as featured`,
  },
  {
    key: 'REMOVE_1B17ED',
    value: `Remove from featured`,
  },
  {
    key: 'DELETE_9D5670',
    value: `Delete selected reviews`,
  },
  {
    key: 'DELETE_5DA466',
    value: `Delete selected review`,
  },
  {
    key: 'YOU_CA_829A7D',
    value: `You can only delete a maximum of 50,000 reviews at one time. The first 50,000 selected reviews in the list will be deleted.`,
  },
  {
    key: 'PLEASE_4B4507',
    value: `Please note that`,
  },
  {
    key: 'PLEASE_4B4507',
    value: `Please note that`,
  },
  {
    key: 'VERIFI_8CFD05',
    value: `verified reviews`,
  },
  {
    key: 'CANNOT_018961',
    value: `cannot be deleted and will be excluded from the total.`,
  },
  {
    key: 'THIS_A_5D4C06',
    value: `This action cannot be undone.`,
  },
  {
    key: 'UPDATE_B6995F',
    value: `Update reply`,
  },
  {
    key: 'UPDATE_6CD033',
    value: `Updated reply cannot be empty`,
  },
  {
    key: 'NOTIFY_C1864C',
    value: `Notify your customer by email`,
  },
  {
    key: 'YOUR_R_F8B23F',
    value: `Your reply will be automatically posted on {{Trustpilot}}. {{Trustpilot}} will send an automated email informing the reviewer of your reply.`,
  },
  {
    key: 'MOVE_R_FDAF8F',
    value: `Move reviews to another product`,
  },
  {
    key: 'MOVE_R_3EE81F',
    value: `Move review to another product`,
  },
  {
    key: 'YOU_CA_8F688E',
    value: `You can only move a maximum of 50,000 reviews at one time. The first 50,000 selected reviews in the list will be moved.`,
  },
  {
    key: 'CANNOT_BFBE72',
    value: `cannot be moved to a different product and will be skipped.`,
  },
  {
    key: 'STORE_EF31BC',
    value: `store reviews`,
  },
  {
    key: 'AND_BE5D5D',
    value: `and`,
  },
  {
    key: 'CANNOT_0C2BFB',
    value: `cannot be moved to a different product.`,
  },
  {
    key: 'YOU_CA_9795C9',
    value: `You can proceed with the rest of the reviews.`,
  },
  {
    key: 'SELECT_805A17',
    value: `Select a product`,
  },
  {
    key: 'REVIEW_F5027E',
    value: `Review detail sheet`,
  },
  {
    key: 'ORDER_54E31B',
    value: `Order number`,
  },
  {
    key: 'REWARD_DE0978',
    value: `Reward coupon`,
  },
  {
    key: 'EDIT_R_EFD35C',
    value: `Edit reply`,
  },
  {
    key: 'EMAILS_DCACE8',
    value: `Emails paused`,
  },
  {
    key: 'WERE_P_779F11',
    value: `We're pausing emails now. This might take a while depending on the number of emails.`,
  },
  {
    key: 'EMAILS_6C0D38',
    value: `Emails deleted`,
  },
  {
    key: 'WERE_D_A95D90',
    value: `We're deleting emails now. This might take a while depending on the number of emails.`,
  },
  {
    key: 'EMAILS_0ECF3A',
    value: `Emails sent`,
  },
  {
    key: 'WERE_S_737422',
    value: `We're sending emails now. This might take a while depending on the number of emails.`,
  },
  {
    key: 'EMAILS_C6D5C0',
    value: `Emails resumed`,
  },
  {
    key: 'WERE_R_3E340B',
    value: `We're resuming paused emails now. This might take a while depending on the number of emails.`,
  },
  {
    key: 'WERE_S_737422',
    value: `We're sending emails now. This might take a while depending on the number of emails.`,
  },
  {
    key: 'REVIEW_A6D00A',
    value: `Reviews published`,
  },
  {
    key: 'WERE_P_61211D',
    value: `We're publishing reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'REVIEW_BE852B',
    value: `Reviews unpublished`,
  },
  {
    key: 'WERE_U_401ADB',
    value: `We're unpublishing reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'REVIEW_2599C2',
    value: `Reviews moved`,
  },
  {
    key: 'WERE_M_1EEE21',
    value: `We're moving reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'REVIEW_D5C84C',
    value: `Reviews deleted`,
  },
  {
    key: 'WERE_D_CA9BCD',
    value: `We're deleting reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'REVIEW_931FC2',
    value: `Reviews marked as featured reviews`,
  },
  {
    key: 'WERE_M_3627FE',
    value: `We're marking these reviews as featured reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'REVIEW_62F292',
    value: `Reviews removed from featured reviews`,
  },
  {
    key: 'WERE_R_3AEF2B',
    value: `We're removing these reviews from featured reviews now. This might take a while depending on the number of reviews.`,
  },
  {
    key: 'EMAILS_C0D55C',
    value: `emails paused.`,
  },
  {
    key: 'EMAIL_E4BC7E',
    value: `email paused.`,
  },
  {
    key: 'EMAILS_F9CD97',
    value: `emails deleted.`,
  },
  {
    key: 'EMAIL_50680B',
    value: `email deleted.`,
  },
  {
    key: 'EMAILS_24E814',
    value: `emails sent.`,
  },
  {
    key: 'EMAIL_3FCE36',
    value: `email sent.`,
  },
  {
    key: 'EMAILS_43C06D',
    value: `emails have been resumed as scheduled.`,
  },
  {
    key: 'EMAIL_17BCA3',
    value: `email has been resumed as scheduled.`,
  },
  {
    key: 'REVIEW_8D5A6D',
    value: `reviews published.`,
  },
  {
    key: 'REVIEW_02E039',
    value: `review published.`,
  },
  {
    key: 'REVIEW_25795B',
    value: `reviews unpublished.`,
  },
  {
    key: 'REVIEW_8693FD',
    value: `review unpublished.`,
  },
  {
    key: 'REVIEW_2E384F',
    value: `reviews moved.`,
  },
  {
    key: 'REVIEW_30719A',
    value: `review moved.`,
  },
  {
    key: 'REVIEW_219D3D',
    value: `reviews deleted.`,
  },
  {
    key: 'REVIEW_EEB260',
    value: `review deleted.`,
  },
  {
    key: 'REVIEW_BAE4A0',
    value: `reviews marked as featured reviews.`,
  },
  {
    key: 'REVIEW_783E86',
    value: `review marked as featured review.`,
  },
  {
    key: 'REVIEW_30B74F',
    value: `reviews removed from featured reviews.`,
  },
  {
    key: 'REVIEW_FD9979',
    value: `review removed from featured review.`,
  },
  {
    key: 'EMAILS_737153',
    value: `emails failed to be paused.`,
  },
  {
    key: 'EMAIL_307E62',
    value: `email failed to be paused.`,
  },
  {
    key: 'PLEASE_0B6EA1',
    value: `Please try pausing those emails again.`,
  },
  {
    key: 'EMAILS_A85A0E',
    value: `emails failed to be deleted.`,
  },
  {
    key: 'EMAIL_A83566',
    value: `email failed to be deleted.`,
  },
  {
    key: 'PLEASE_F7B5EB',
    value: `Please try deleting those emails again.`,
  },
  {
    key: 'EMAILS_ED3588',
    value: `emails failed to send.`,
  },
  {
    key: 'EMAIL_D0B1A3',
    value: `email failed to send.`,
  },
  {
    key: 'PLEASE_9A6A0B',
    value: `Please try sending those emails again.`,
  },
  {
    key: 'EMAILS_A5BBC6',
    value: `emails failed to resume as scheduled.`,
  },
  {
    key: 'EMAIL_C70DF0',
    value: `email failed to resume as scheduled.`,
  },
  {
    key: 'PLEASE_3360DD',
    value: `Please try resuming those emails again.`,
  },
  {
    key: 'REVIEW_A848E1',
    value: `reviews failed to publish.`,
  },
  {
    key: 'REVIEW_55E584',
    value: `review failed to publish.`,
  },
  {
    key: 'PLEASE_F3DF70',
    value: `Please try publishing those reviews again.`,
  },
  {
    key: 'REVIEW_A8161A',
    value: `reviews failed to unpublish.`,
  },
  {
    key: 'REVIEW_F6890F',
    value: `review failed to unpublish.`,
  },
  {
    key: 'PLEASE_BE7128',
    value: `Please try unpublishing those reviews again.`,
  },
  {
    key: 'REVIEW_D30508',
    value: `reviews failed to move.`,
  },
  {
    key: 'REVIEW_FB708D',
    value: `review failed to move.`,
  },
  {
    key: 'PLEASE_395C7B',
    value: `Please try moving those reviews again.`,
  },
  {
    key: 'REVIEW_C1E602',
    value: `reviews failed to be deleted.`,
  },
  {
    key: 'REVIEW_1C5674',
    value: `review failed to be deleted.`,
  },
  {
    key: 'PLEASE_E559CD',
    value: `Please try deleting those reviews again.`,
  },
  {
    key: 'REVIEW_08B5F7',
    value: `reviews failed to be marked as featured reviews.`,
  },
  {
    key: 'REVIEW_C97D8C',
    value: `review failed to be marked as featured review.`,
  },
  {
    key: 'PLEASE_ED5A5A',
    value: `Please try marking those reviews as featured reviews again.`,
  },
  {
    key: 'REVIEW_FA258F',
    value: `reviews failed to be removed from featured reviews.`,
  },
  {
    key: 'REVIEW_BF407E',
    value: `review failed to be removed from featured review.`,
  },
  {
    key: 'PLEASE_112A49',
    value: `Please try removing those reviews from featured reviews again.`,
  },
  {
    key: 'SHOWIN_173748',
    value: `Showing {{limit}} of {{total}}`,
  },
  {
    key: 'DESELE_941860',
    value: `Deselect`,
  },
  {
    key: 'SELECT_D1E871',
    value: `Select all`,
  },
  {
    key: 'YOU_CA_F6B1C1',
    value: `You cannot move verified reviews and store reviews.`,
  },
  {
    key: 'DELETE_92D6ED',
    value: `Delete review(s)`,
  },
  {
    key: 'MOVE_R_E792D4',
    value: `Move review(s)`,
  },
  {
    key: 'THE_EX_0E28D2',
    value: `The exported file will be sent via email.`,
  },
  {
    key: 'OWNER_72122C',
    value: `(owner)`,
  },
  {
    key: 'RECIPI_5D6103',
    value: `Recipient`,
  },
  {
    key: 'PAGE_193CFC',
    value: `Page`,
  },
  {
    key: 'ALL_RE_BB61F1',
    value: 'All reviews',
  },
  {
    key: 'EXPORT_CC51B1',
    value: 'Export',
  },
  {
    key: 'REFRES_E59A74',
    value: 'Refresh',
  },
  {
    key: 'REVIEW_A1FA19',
    value: 'review',
  },
  {
    key: 'MARKED_CE52F7',
    value: 'marked as featured reviews.',
  },
  {
    key: 'SEARCH_E2E18F',
    value: 'Search reviews',
  },
  {
    key: 'PRODUC_99EB41',
    value: 'Product name',
  },
  {
    key: 'RATING_D356BD',
    value: 'Ratings',
  },
  {
    key: 'STATUS_3B6D0B',
    value: 'Status',
  },
  {
    key: 'REPLY_061D8F',
    value: 'Reply',
  },
  {
    key: 'SORT_B_1828D1',
    value: 'Sort by',
  },
  {
    key: 'CREATE_8EBD7D',
    value: 'Created (newest first)',
  },
  {
    key: 'CREATE_795D7C',
    value: 'Created (oldest first)',
  },
  {
    key: 'RATING_D99E61',
    value: 'Ratings (5 stars first)',
  },
  {
    key: 'RATING_352945',
    value: 'Ratings (1 stars first)',
  },
  {
    key: 'MOST_H_424549',
    value: 'Most helpful',
  },
  {
    key: 'LEAST_07FDAD',
    value: 'Least helpful',
  },
  {
    key: 'REVIEW_95C8B5',
    value: 'Reviewer',
  },
  {
    key: 'CONTEN_6650AE',
    value: 'Content',
  },
  {
    key: 'PRODUC_C89B42',
    value: 'Product',
  },
  {
    key: 'PUBLIS_8B633F',
    value: 'Publish',
  },
  {
    key: 'ACTION_1783CC',
    value: 'Actions',
  },
  {
    key: 'SELECT_DF1691',
    value: 'Select all {{count}} items',
  },
  {
    key: 'CHECKB_33D079',
    value: 'checkbox',
  },
  {
    key: 'SUCCES_FA9F6F',
    value: 'Success',
  },
  {
    key: 'PUBLIS_F534E6',
    value: 'Published',
  },
  {
    key: 'UNPUBL_B07541',
    value: 'Unpublish',
  },
  {
    key: 'DISMIS_76491C',
    value: 'Dismiss notification',
  },
  {
    key: 'VIEW_D_7C97EE',
    value: 'View details for item',
  },
  // all reviews - filters
  {
    key: 'MORE_F_5D612B',
    value: 'More filters',
  },
  {
    key: 'CLEAR_01DFA5',
    value: 'Clear',
  },
  {
    key: 'PENDIN_BD1F86',
    value: 'Pending',
  },
  {
    key: 'WITH_R_B44761',
    value: 'With reply',
  },
  {
    key: 'WITHOU_26430F',
    value: 'Without reply',
  },
  {
    key: 'PHOTOS_4BF890',
    value: 'Photos/Videos',
  },
  {
    key: 'WITHOU_3813B7',
    value: 'Without photos/videos',
  },
  {
    key: 'WITH_V_0FA620',
    value: 'With videos',
  },
  {
    key: 'WITH_P_4C565B',
    value: 'With photos',
  },
  {
    key: 'VERIFI_5B2917',
    value: 'Verification',
  },
  {
    key: 'VERIFI_F7B3DD',
    value: 'Verified',
  },
  {
    key: 'UNVERI_3E40F0',
    value: 'Unverified',
  },
  {
    key: 'SOURCE_4D5A66',
    value: 'Sources',
  },
  {
    key: 'AUTOMA_62ECA3',
    value: 'Automatic review requests',
  },
  {
    key: 'MANUAL_9BC72C',
    value: 'Manual review requests',
  },
  {
    key: 'SUBMIT_61F9B0',
    value: 'Submitted in store',
  },
  {
    key: 'CSV_UP_A1BADB',
    value: 'CSV upload',
  },
  {
    key: 'FEATUR_4C7BEB',
    value: 'Featured',
  },
  {
    key: 'FEATUR_5781C9',
    value: 'Featured reviews',
  },
  {
    key: 'NONFEA_FA3C2B',
    value: 'Non-feature reviews',
  },
  {
    key: 'REVIEW_BF5029',
    value: 'Review type',
  },
  {
    key: 'PRODUC_D48231',
    value: 'Product reviews',
  },
  {
    key: 'STORE_C61325',
    value: 'Store reviews',
  },
  {
    key: 'REWARD_78CE85',
    value: 'Rewarded reviews',
  },
  {
    key: 'REWARD_AB9E25',
    value: 'Rewarded',
  },
  {
    key: 'NOT_RE_963CC5',
    value: 'Not rewarded',
  },
  {
    key: 'CLEAR_C18B62',
    value: 'Clear all filters',
  },
  {
    key: 'DONE_793334',
    value: 'Done',
  },
  {
    key: 'CANCEL_08437E',
    value: 'Cancel',
  },
  {
    key: 'CLEAR_EE3BC6',
    value: 'Clear Ratings',
  },
  {
    key: 'CLEAR_43A769',
    value: 'Clear Status',
  },
  {
    key: 'CLEAR_F4F2D4',
    value: 'Clear Reply',
  },
  {
    key: 'CLEAR_70F5FE',
    value: 'Clear Photos/Videos',
  },
  {
    key: 'CLEAR_387307',
    value: 'Clear Verification',
  },
  {
    key: 'CLEAR_55131F',
    value: 'Clear Sources',
  },
  {
    key: 'CLEAR_1D3441',
    value: 'Clear Featured',
  },
  {
    key: 'CLEAR_36C4FA',
    value: 'Clear Review type',
  },
  {
    key: 'CLEAR_3DC2F7',
    value: 'Clear Rewarded reviews',
  },
  {
    key: 'ALL_140827',
    value: 'All',
  },
  {
    key: 'STAR_A_256F69',
    value: 'star and above',
  },
  {
    key: 'STAR_A_9D6058',
    value: '1 star and above',
  },
  {
    key: 'REVIEW_846623',
    value: 'reviews collected from',
  },
  {
    key: 'WILL_B_3AD322',
    value: 'will be auto-published upon submission.',
  },
  {
    key: 'ALL_OT_393497',
    value: 'All other reviews will be auto-published after',
  },
  {
    key: '14_DAY_3988CD',
    value: '14 days',
  },
  {
    key: 'UNLESS_9C4F62',
    value: 'unless you publish or unpublish them before then.',
  },
  {
    key: 'REVIEW_BD055D',
    value:
      'reviews collected from automated emails and manual emails will be auto-published upon submission. All other reviews will be auto-published after 14 days unless you publish or unpublish them before then.',
  },
  {
    key: 'CHANGE_ECF39C',
    value: 'Change auto-publish settings',
  },
  {
    key: 'STORE_5D5523',
    value: 'Store reviews currently cannot be shared',
  },
  {
    key: 'VERIFI_455953',
    value: 'Verified reviews and store reviews cannot be moved',
  },
  {
    key: 'FEATUR_5D3610',
    value: 'Featured reviews will appear on top of your review section.',
  },
  // modal
  {
    key: 'DELETE_C67D4F',
    value: 'Delete selected review',
  },
  {
    key: 'THE_SE_8B426F',
    value:
      'The selected reviews will be deleted and no longer be accessible. This action cannot be undone.',
  },
  {
    key: 'CANCEL_3D1AEE',
    value: 'Cancel',
  },
  {
    key: 'DELETE_520455',
    value: 'Delete',
  },
  {
    key: 'CLOSE_0FB81A',
    value: 'Close',
  },
  // edit review
  {
    key: 'EDIT_R_D1D0FB',
    value: 'Edit review',
  },
  {
    key: 'REVIEW_2D84E1',
    value: 'Reviewer name',
  },
  {
    key: 'REVIEW_242E11',
    value: 'Reviewer country',
  },
  {
    key: 'PLEASE_01CCDD',
    value: 'Please select a country',
  },
  {
    key: 'DO_NOT_385A20',
    value: 'Do not show country',
  },
  {
    key: 'REVIEW_B2F25A',
    value: 'Reviewer email',
  },
  {
    key: 'REVIEW_69B8D8',
    value: 'Review date',
  },
  {
    key: 'TITLE_FC0A5D',
    value: 'Title',
  },
  {
    key: 'REVIEW_E70953',
    value: 'Review content',
  },
  {
    key: 'PHOTOS_5E2AA4',
    value: 'Photos/videos',
  },
  {
    key: 'UPLOAD_553C0A',
    value:
      'Upload or delete any photos or videos. A review can have a maximum of 6 photos, 5 video links, and 1 video.',
  },
  {
    key: 'ADD_VI_6F06E8',
    value: 'Add video URL',
  },
  {
    key: 'UPLOAD_517D76',
    value: 'Upload file',
  },
  {
    key: 'ADD_VI_CA4763',
    value: 'Add video',
  },
  {
    key: 'UPLOAD_52F656',
    value: 'Upload files',
  },
  {
    key: 'ADD_PH_F0A0FC',
    value: 'Add Photo',
  },
  {
    key: 'CANCEL_1BA043',
    value: 'Cancel',
  },
  {
    key: 'SAVE_C_71C19E',
    value: 'Save changes',
  },
  {
    key: 'CLOSE_672C63',
    value: 'Close',
  },
  {
    key: '0_OF_5_D54CBF',
    value: '0 of 50 characters used',
  },
  {
    key: '27_OF_199E2D',
    value: '27 of 2000 characters used',
  },
  {
    key: 'MOVE_R_F9D6AC',
    value: 'Move review to another product',
  },
  {
    key: 'CANCEL_965C07',
    value: 'Cancel',
  },
  {
    key: 'CONFIR_30F6DD',
    value: 'Confirm',
  },
  {
    key: 'CLOSE_EB3BEE',
    value: 'Close',
  },
  // reply to review
  {
    key: 'REPLY_52F536',
    value: 'Reply to review',
  },
  {
    key: 'REVIEW_4011D3',
    value: 'Review',
  },
  {
    key: 'YOUR_R_978277',
    value: 'Your reply',
  },
  {
    key: 'CANCEL_05254C',
    value: 'Cancel',
  },
  {
    key: 'POST_R_0DD78B',
    value: 'Post reply',
  },
  {
    key: 'CLOSE_F66214',
    value: 'Close',
  },
  {
    key: 'WRITE_1505B3',
    value: 'Write a reply to the review',
  },
  {
    key: 'REVIEW_A62C0E',
    value: 'Review details',
  },
  // all products
  {
    key: 'ALL_PR_554C40',
    value: 'All products',
  },
  {
    key: 'SEARCH_5C3A37',
    value: 'Search products',
  },
  {
    key: 'TOTAL_11AEA4',
    value: 'Total reviews',
  },
  {
    key: 'AVERAG_00D859',
    value: 'Average rating',
  },
  {
    key: 'ACTION_36693E',
    value: 'Action',
  },
  {
    key: 'VIEW_0393AB',
    value: 'View',
  },
  {
    key: 'LEARN_614067',
    value: 'Learn more about',
  },
  {
    key: 'MANAGI_0F1307',
    value: 'managing reviews.',
  },
  {
    key: 'PAGINA_474345',
    value: 'Pagination',
  },
  {
    key: 'PREVIO_7BF560',
    value: 'Previous',
  },
  {
    key: 'NEXT_3FBEC4',
    value: 'Next',
  },
  // product details
  {
    key: 'ALL_PR_2BAAF8',
    value: 'All products',
  },
  {
    key: 'EXPORT_71C224',
    value: 'Export',
  },
  {
    key: 'REFRES_4633C3',
    value: 'Refresh',
  },
  {
    key: 'MORE_A_78A2D6',
    value: 'More actions',
  },
  {
    key: '1_REVI_AFAD4E',
    value: '1 review marked as featured reviews.',
  },
  {
    key: 'RATING_720DB3',
    value: 'Ratings and reviews',
  },
  {
    key: 'REVIEW_949FBB',
    value: 'reviews',
  },
  {
    key: 'SEARCH_E5AE5C',
    value: 'Search reviews',
  },
  {
    key: 'PHOTOS_9C577A',
    value: 'Photos/Videos',
  },
  {
    key: 'CREATE_F6C5E3',
    value: 'Created (newest first)',
  },
  {
    key: 'CREATE_9FD0FD',
    value: 'Created (oldest first)',
  },
  {
    key: 'RATING_6A2D4C',
    value: 'Ratings (5 stars first)',
  },
  {
    key: 'RATING_B704F9',
    value: 'Ratings (1 stars first)',
  },
  {
    key: 'MOST_H_862E3D',
    value: 'Most helpful',
  },
  {
    key: 'LEAST_530DDA',
    value: 'Least helpful',
  },
  {
    key: 'REVIEW_B24BB0',
    value: 'Reviewer',
  },
  {
    key: 'CONTEN_32EABD',
    value: 'Content',
  },
  {
    key: 'PUBLIS_CA8D71',
    value: 'Publish',
  },
  {
    key: 'ACTION_32CD0C',
    value: 'Actions',
  },
  {
    key: 'NO_REV_2B9036',
    value: 'No reviews yet',
  },
  {
    key: 'DISMIS_748D2D',
    value: 'Dismiss notification',
  },
  {
    key: 'VIEW_R_628EA0',
    value: 'View reviews on your store',
  },
  // store reviews
  {
    key: 'STORE_CDCB9E',
    value: 'Store reviews',
  },
  {
    key: 'EXPORT_55B068',
    value: 'Export',
  },
  {
    key: 'REFRES_F611C9',
    value: 'Refresh',
  },
  {
    key: '1_REVI_8A2005',
    value: '1 review marked as featured reviews.',
  },
  {
    key: 'RATING_E3B45B',
    value: 'Ratings and reviews',
  },
  {
    key: 'REVIEW_44850F',
    value: 'reviews',
  },
  {
    key: 'SEARCH_5AEABD',
    value: 'Search reviews',
  },
  {
    key: 'PHOTOS_3013E7',
    value: 'Photos/Videos',
  },
  {
    key: 'CREATE_7DDD15',
    value: 'Created (newest first)',
  },
  {
    key: 'CREATE_BA26DF',
    value: 'Created (oldest first)',
  },
  {
    key: 'RATING_DA34E6',
    value: 'Ratings (5 stars first)',
  },
  {
    key: 'RATING_BFCFE7',
    value: 'Ratings (1 stars first)',
  },
  {
    key: 'MOST_H_75B7E6',
    value: 'Most helpful',
  },
  {
    key: 'LEAST_DFBADE',
    value: 'Least helpful',
  },
  {
    key: 'REVIEW_63C355',
    value: 'Reviewer',
  },
  {
    key: 'CONTEN_EDDD4D',
    value: 'Content',
  },
  {
    key: 'PUBLIS_97A3C3',
    value: 'Publish',
  },
  {
    key: 'ACTION_C84C67',
    value: 'Actions',
  },
  {
    key: 'SELECT_33B962',
    value: 'Select item',
  },
  {
    key: 'CHECKB_7638BD',
    value: 'checkbox',
  },
  {
    key: 'DISMIS_7B8027',
    value: 'Dismiss notification',
  },
  // import reviews
  {
    key: 'IMPORT_041E5F',
    value: 'Import reviews',
  },
  {
    key: 'ONECLI_83894D',
    value: 'One-click import from AliExpress',
  },
  {
    key: 'DRAG_T_D065F6',
    value:
      'Drag the "Import Reviews" button to your browser’s bookmark toolbar and install the widget at AliExpress. Learn more about',
  },
  {
    key: 'ALIEXP_041B65',
    value: 'AliExpress product reviews import.',
  },
  {
    key: 'STEP_1_58AF6D',
    value: "Step 1: Drag button to your browser's bookmark bar",
  },
  {
    key: 'DRAG_A_2CA47B',
    value: 'Drag and drop this button to your browser bookmark toolbar.',
  },
  {
    key: 'IMPORT_4E717A',
    value: 'Import Reviews',
  },
  {
    key: 'TO_KEE_C80E53',
    value:
      'To keep your personal data safe, please do not share the “import reviews” button with others or install it on a public computer.',
  },
  {
    key: 'ALTERN_01D38C',
    value: 'Alternatively, you can also use the following hotkeys:',
  },
  {
    key: 'CTRL_O_FC664E',
    value: 'Ctrl (⌘ on Mac) + Shift + B',
  },
  {
    key: 'ON_CHR_708531',
    value: 'on Chrome, Safari, Opera, Internet Explorer',
  },
  {
    key: 'CTRL_O_952400',
    value: 'Ctrl (⌘ on Mac) + B',
  },
  {
    key: 'ON_FIR_193FC0',
    value: 'on Firefox',
  },
  {
    key: 'STEP_2_3896FE',
    value: 'Step 2: Import review at AliExpress',
  },
  {
    key: 'GO_TO_3B5178',
    value:
      'Go to AliExpress product page and click “Import reviews” at the bookmarkbar.',
  },
  {
    key: 'FOR_EX_C00709',
    value: 'For example:',
  },
  {
    key: 'IMPORT_DF0878',
    value: 'Import from CSV file',
  },
  {
    key: 'DOWNLO_D52BDD',
    value: 'Download the CSV template',
  },
  {
    key: 'AND_FI_E8E284',
    value:
      'and fill in reviews. Any reviews not following the template format will not be imported.',
  },
  {
    key: 'READ_T_6A12EE',
    value: 'Read the CSV import instructions.',
  },
  {
    key: 'UPLOAD_891F30',
    value: 'Upload the CSV file and import',
  },
  {
    key: 'NOW_SU_4DFE8F',
    value: 'Now support uploading video links (.mp4).',
  },
  {
    key: 'MAXIMU_9D4209',
    value: 'Maximum file size: 2MB.',
  },
  {
    key: 'UPLOAD_AAF73C',
    value: 'Upload files',
  },
  {
    key: 'UPLOAD_6E5CEA',
    value: 'Upload CSV file',
  },
  {
    key: 'OR_DRO_7273D6',
    value: 'or drop file to upload',
  },
  {
    key: 'PUBLIS_DDFCE0',
    value: 'Publish all imported reviews',
  },
  {
    key: 'IMPORT_3BD057',
    value: 'Import',
  },
  {
    key: 'OPENS_7EB24B',
    value: '(opens a new window)',
  },
  {
    key: 'UP_53B09C',
    value: 'up',
  },
  {
    key: 'STAR_4BEA08',
    value: 'star',
  },
  {
    key: 'DISMIS_39DB25',
    value: 'Dismiss notification',
  },
  // question and answer
  {
    key: 'QUESTI_66ED41',
    value: 'Questions and answers',
  },
  {
    key: 'REFRES_8309C2',
    value: 'Refresh',
  },
  {
    key: 'SEARCH_52664E',
    value: 'Search questions and answers',
  },
  {
    key: 'ANSWER_C307AE',
    value: 'Answer',
  },
  {
    key: 'QUESTI_565A6A',
    value: 'Questions (latest)',
  },
  {
    key: 'QUESTI_12490B',
    value: 'Questions (oldest)',
  },
  {
    key: 'ANSWER_DCC63A',
    value: 'Answers (latest)',
  },
  {
    key: 'ANSWER_2E095F',
    value: 'Answers (oldest)',
  },
  {
    key: 'ANSWER_E65051',
    value: 'Answers (most helpful)',
  },
  {
    key: 'ANSWER_200C4D',
    value: 'Answers (least helpful)',
  },
  {
    key: 'QUESTI_7BF8FD',
    value: 'Question',
  },
  {
    key: 'PRODUC_690827',
    value: 'Product',
  },
  {
    key: 'PUBLIS_D45ED7',
    value: 'Publish',
  },
  {
    key: 'ACTION_BBF55C',
    value: 'Actions',
  },
  {
    key: 'YOUR_A_A66ECF',
    value: 'Your answered',
  },
  {
    key: 'WITH_A_AEC479',
    value: 'With answers',
  },
  {
    key: 'WITH_A_7DA2D6',
    value: 'With an answer from the store owner',
  },
  {
    key: 'WITH_A_FE2D53',
    value: 'With answers from past customers',
  },
  {
    key: 'WITHOU_1C94C8',
    value: 'Without answers',
  },
  {
    key: 'CLEAR_2A7845',
    value: 'Clear Answer',
  },
  {
    key: 'ANSWER_C49E92',
    value: 'Answer this question',
  },
  {
    key: 'ASK_PA_AE5CC9',
    value: 'Ask past customers',
  },
  {
    key: 'DELETE_9A176A',
    value: 'Delete question',
  },
  {
    key: 'QUESTI_26C062',
    value: 'Question details',
  },
  {
    key: 'UNPUBL_A01C83',
    value: 'Unpublish',
  },
  {
    key: 'EDIT_Y_67D2E1',
    value: 'Edit your answer',
  },
  {
    key: 'CANCEL_64F0E5',
    value: 'Cancel',
  },
  // ask past customers
  {
    key: 'ASK_PA_B1500B',
    value: 'Ask past customers',
  },
  {
    key: 'EACH_M_E9B732',
    value:
      'Each manual invitation will be sent to up to 5 customers at a time. You can invite once per day per question. View both the invitation rules and invitation email template before proceeding.',
  },
  {
    key: 'VIEW_I_C8C044',
    value: 'View invitation rules',
  },
  {
    key: 'VIEW_A_805947',
    value: 'View and edit invitation email',
  },
  {
    key: 'IVE_VI_39BA86',
    value: "I've viewed the invitation rules and email template",
  },
  {
    key: 'CANCEL_F814EB',
    value: 'Cancel',
  },
  {
    key: 'SEND_I_96DF52',
    value: 'Send invitations',
  },
  {
    key: 'CLOSE_84B0A2',
    value: 'Close',
  },
  // edit your answer
  {
    key: 'EDIT_Y_0F92AD',
    value: 'Edit your answer',
  },
  {
    key: 'QUESTI_562CE4',
    value: 'Question',
  },
  {
    key: 'ANSWER_297AFC',
    value: 'Answer',
  },
  {
    key: 'THE_QU_8E1C7E',
    value:
      'The questioner will receive an email notification of your updated answer.',
  },
  {
    key: 'CANCEL_C051E4',
    value: 'Cancel',
  },
  {
    key: 'UPDATE_50D882',
    value: 'Update answer',
  },
  {
    key: 'CLOSE_1D7030',
    value: 'Close',
  },
  // reviews-widget
  {
    key: 'REVIEW_E01C54',
    value: 'Reviews widget',
  },
  {
    key: 'DISPLA_A130C3',
    value: "Display customer reviews on your store's product pages.",
  },
  {
    key: 'AFTERS_074F6E',
    value: '{{AfterShip}} branding',
  },
  {
    key: 'REMOVE_B15816',
    value: 'Remove "Powered by {{AfterShip}}"',
  },
  {
    key: 'PREVIE_113806',
    value: 'Preview',
  },
  {
    key: 'CUSTOM_CFED5A',
    value: 'Customize',
  },
  // qna-widget
  {
    key: 'QA_WID_8B02AD',
    value: 'Q&A widget',
  },
  {
    key: 'DISPLA_E77213',
    value:
      'Display a Q&A section so shoppers can view previously answered questions, or ask new questions right in your store.',
  },
  {
    key: 'STYLE_AAB62D',
    value: 'Style',
  },
  {
    key: 'STYLE_7BCA5B',
    value: 'Style settings will be applied to the',
  },
  {
    key: 'REVIEW_6CBA9D',
    value: 'Reviews widget',
  },
  {
    key: 'AND_8D107E',
    value: ', and',
  },
  {
    key: 'ALL_RE_CD71B2',
    value: 'All reviews widget.',
  },
  {
    key: 'EDIT_0C0B86',
    value: 'Edit',
  },
  {
    key: 'PREVIE_F3A709',
    value: 'Preview',
  },
  {
    key: 'QUESTI_79A96D',
    value: 'Question form',
  },
  {
    key: 'MORE_T_AD4903',
    value: 'More tabs',
  },
  {
    key: 'LARGE_374D38',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_B8AD4A',
    value: 'Mobile screen',
  },
  // star rating
  {
    key: 'STAR_R_4957A3',
    value: 'Star ratings',
  },
  {
    key: 'STAR_R_4DB70A',
    value: 'Star rating widget',
  },
  {
    key: 'DISPLA_3965EE',
    value:
      'Display star rating under the product title at the product pages and collection pages.',
  },
  {
    key: 'LEARN_F58FEE',
    value: 'Learn more',
  },
  {
    key: 'COLORS_1C286D',
    value: 'Colors',
  },
  {
    key: 'RESET_48CC0D',
    value: 'Reset to default',
  },
  {
    key: 'STAR_C_207E42',
    value: 'Star color',
  },
  {
    key: 'FONT_C_0F2BA7',
    value: 'Font color',
  },
  {
    key: 'EXAMPL_591DA4',
    value: 'Example',
  },
  {
    key: 'OPENS_68A21B',
    value: '(opens a new window)',
  },
  // featured reviews
  {
    key: 'FEATUR_E796CA',
    value: 'Featured reviews widget',
  },
  {
    key: 'DISPLA_EC5B07',
    value:
      'Display selected reviews on your home page, cart page, etc. to boost your credibility and sales.',
  },
  {
    key: 'LEARN_AB93F7',
    value: 'Learn more',
  },
  {
    key: 'YOU_CU_32BE1A',
    value: 'You currently have',
  },
  {
    key: 'FEATUR_2700FF',
    value: 'featured reviews. View or manage them',
  },
  {
    key: 'HERE_445A6F',
    value: 'here',
  },
  {
    key: 'SAMPLE_774F7A',
    value: 'Sample',
  },
  {
    key: 'CUSTOM_906F68',
    value: 'Customize',
  },
  {
    key: 'WHAT_C_EFED71',
    value: 'What customers say',
  },
  {
    key: 'VIEW_M_20BA19',
    value: 'View more reviews',
  },
  // review side tab
  {
    key: 'REVIEW_6E716D',
    value: 'Reviews side tab',
  },
  {
    key: 'SHOWCA_FFDDC3',
    value: 'Showcase all published reviews in one place.',
  },
  {
    key: 'GIVE_C_850279',
    value:
      "Give customers easy access to all your store's reviews with a sticky side tab.",
  },
  {
    key: 'HERES_929FCB',
    value: 'Here’s what it’ll look like',
  },
  // all reviews widget
  {
    key: 'ALL_RE_23CD8A',
    value: 'All reviews widget',
  },
  {
    key: 'DISPLA_4AAFDC',
    value:
      'Display both product and store reviews on a single page in your online store.',
  },
  {
    key: 'INSTAL_FA0AC7',
    value: 'Installation',
  },
  {
    key: '1_FROM_CFFE30',
    value: '1. From your Shopify admin, go to',
  },
  {
    key: 'SALES_989AC5',
    value: '"Sales channels"',
  },
  {
    key: 'ONLINE_2DC26F',
    value: '"Online Store"',
  },
  {
    key: 'PAGES_DCA05D',
    value: '"Pages"',
  },
  {
    key: '2_CLIC_F82C4A',
    value: '2. Click "Add page".',
  },
  {
    key: '3_GIVE_3CBFE2',
    value: '3. Give the page a title (e.g. "Customer reviews") and click Save.',
  },
  {
    key: '4_GO_T_ADA27E',
    value: '4. Go to the',
  },
  {
    key: 'THEME_3812C7',
    value: 'theme editor',
  },
  {
    key: 'AND_CL_B5E971',
    value:
      'and click Home page. Enter the title of your page in the search box and select it.',
  },
  {
    key: '5_CLIC_32336D',
    value:
      '5. Click "Add section", select the All reviews widget, and click "Save".',
  },
  {
    key: 'PREVIE_6D70C2',
    value: 'Preview',
  },
  {
    key: 'CUSTOM_40910B',
    value: 'Customize',
  },
  // reward program
  {
    key: 'REWARD_112814',
    value: 'Rewards program',
  },
  {
    key: 'INCENT_9ECD42',
    value:
      'Incentivize customers to leave reviews by rewarding them with coupons. Customers can get up to 3 coupons per order by submitting different kinds of reviews.',
  },
  {
    key: 'LEARN_63D44E',
    value: 'Learn more',
  },
  {
    key: 'CHOOSE_C9D6F3',
    value:
      'Choose which types of reviews are eligible for rewards. You can set up different rewards for including photos and videos.',
  },
  {
    key: 'REVIEW_63901A',
    value: 'Review type',
  },
  {
    key: 'PRODUC_0A9244',
    value: 'Product reviews',
  },
  {
    key: 'STORE_838676',
    value: 'Store reviews',
  },
  {
    key: 'REVIEW_E4A713',
    value: 'Review source',
  },
  {
    key: 'AUTOMA_2C4B1F',
    value: 'Automatic review requests',
  },
  {
    key: 'MANUAL_29C88F',
    value: 'Manual review requests',
  },
  {
    key: 'SUBMIT_A890DD',
    value: 'Submitted in store',
  },
  {
    key: 'REVIEW_13B2A3',
    value: 'Review reward (Tier 1)',
  },
  {
    key: 'SEND_T_585491',
    value: 'Send this coupon to a customer after they submit a review.',
  },
  {
    key: 'PREVIE_6EE6B0',
    value: 'Preview',
  },
  {
    key: 'REVIEW_E59E80',
    value: 'Review reward (Tier 2)',
  },
  {
    key: 'SEND_T_21AF91',
    value:
      'Send this coupon to a customer after they submit a review that includes photos or a video.',
  },
  {
    key: 'REVIEW_45522C',
    value: 'Review reward (Tier 3)',
  },
  {
    key: 'SEND_T_99DCE9',
    value:
      'Send this coupon to a customer after they submit a review that includes a video.',
  },
  {
    key: 'SAVE_FC09F7',
    value: 'Save',
  },
  {
    key: 'DISCOU_2355C1',
    value: 'discount type',
  },
  {
    key: 'VALUE_14832A',
    value: 'value',
  },
  {
    key: 'HK_2AC679',
    value: 'HK$',
  },
  {
    key: 'DISCOU_927886',
    value: 'Discount value HK$',
  },
  {
    key: 'DAYS_5113D7',
    value: 'day(s)',
  },
  {
    key: 'CONTEN_974495',
    value: 'content',
  },
  {
    key: 'MORE_T_9E850B',
    value: 'More tabs',
  },
  {
    key: 'LARGE_5142E4',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_26961E',
    value: 'Mobile screen',
  },
  // refferal program
  {
    key: 'REFERR_C35158',
    value: 'Referral program',
  },
  {
    key: 'ENCOUR_37C6EE',
    value:
      'Encourage satisfied customers to share their reviews by offering them and their friends a discount for sharing.',
  },
  {
    key: 'LEARN_A1C237',
    value: 'Learn more',
  },
  {
    key: 'REFERR_FE1805',
    value: 'Referral discounts',
  },
  {
    key: 'AUTOMA_17B6AA',
    value:
      'Automatically generate a discount code for your customers after they share a review. You can use the star rating and sharing method filters to determine which reviews qualify for a discount code.',
  },
  {
    key: 'ENABLE_4DBA4B',
    value: 'Enabled',
  },
  {
    key: 'DISABL_85DE7B',
    value: 'Disabled',
  },
  {
    key: 'STAR_R_3A42A3',
    value: 'Star rating',
  },
  {
    key: 'ALL_RE_5540E4',
    value: 'All reviews',
  },
  {
    key: 'SHARIN_610128',
    value: 'Sharing method',
  },
  {
    key: 'REVIEW_FE99BC',
    value: 'Reviews submitted via email and shared',
  },
  {
    key: 'REVIEW_2AF2BD',
    value: 'Reviews submitted on your store and shared',
  },
  {
    key: 'REVIEW_863ECB',
    value: 'Reviews shared via the sharing buttons on your review widget',
  },
  {
    key: 'ANYONE_0B3FC0',
    value:
      'Anyone can use the sharing buttons on your review widget to share existing reviews for a referral coupon.',
  },
  {
    key: 'STEP_1_C34BA0',
    value: 'Step 1: Set discount for advocates',
  },
  {
    key: 'THE_AD_97B701',
    value: 'The advocate will get',
  },
  {
    key: 'HK10_O_26DA97',
    value: 'HK$10 off',
  },
  {
    key: 'WHEN_T_8D9BAE',
    value: 'when they successfully share a review.',
  },
  {
    key: 'DISCOU_7D2463',
    value: 'discount type',
  },
  {
    key: 'FIXED_3FF4BD',
    value: 'Fixed amount',
  },
  {
    key: 'PERCEN_080BD1',
    value: 'Percentage off',
  },
  {
    key: 'FREE_S_67DEED',
    value: 'Free shipping',
  },
  {
    key: 'VALUE_ABF8F2',
    value: 'value',
  },
  {
    key: 'EXCLUD_9452D6',
    value: 'Exclude shipping fee over a certain amount',
  },
  {
    key: 'THE_CU_B365F2',
    value: 'The currency is the same as your store currency.',
  },
  {
    key: 'DISCOU_A97A92',
    value: 'Discount value',
  },
  {
    key: 'THIS_D_B8892E',
    value: 'This discount requires a minimum order subtotal',
  },
  {
    key: 'THE_CU_C9B734',
    value:
      'The currency is the same as your store currency. The order subtotal excludes taxes and shipping fees.',
  },
  {
    key: 'DISCOU_5F38CD',
    value: 'Discount will expire after',
  },
  {
    key: 'DAYS_B824D7',
    value: 'day(s)',
  },
  {
    key: 'STARTS_20C641',
    value: 'Starts from the day when the reward is granted.',
  },
  {
    key: 'CONTEN_6CFE55',
    value: 'content',
  },
  {
    key: 'PREVIE_3888D0',
    value: 'Preview for step 1',
  },
  {
    key: 'INCENT_87F490',
    value: 'Incentivize to share',
  },
  {
    key: 'GET_DI_AD910A',
    value: 'Get discount',
  },
  {
    key: 'POWERE_E339B3',
    value: 'Powered by AfterShip',
  },
  {
    key: 'STEP_2_5A4C99',
    value: 'Step 2: Set discount for referred friends',
  },
  {
    key: 'ANY_FR_8559AD',
    value: 'Any friends the advocate refers will get',
  },
  {
    key: 'THEIR_80471D',
    value: 'their first purchase.',
  },
  {
    key: 'PREVIE_B1458A',
    value: 'Preview for step 2',
  },
  {
    key: 'AUTOGE_BD3C30',
    value: 'AUTO-GENERATED CODE',
  },
  {
    key: 'SAVE_84970A',
    value: 'Save',
  },
  {
    key: 'DISCOU_EA15AB',
    value: 'Discount value HK$',
  },
  {
    key: 'MORE_T_DB3E06',
    value: 'More tabs',
  },
  // social post template
  {
    key: 'SOCIAL_191882',
    value: 'Social sharing display',
  },
  {
    key: 'CUSTOM_818746',
    value:
      'Customize reviewers’ social posts to attract more clicks and potential buyers.',
  },
  {
    key: 'LEARN_F1C963',
    value: 'Learn more',
  },
  {
    key: 'CUSTOM_A0BFB9',
    value: 'Customize social post',
  },
  {
    key: 'ADD_TA_68A085',
    value:
      "Add tags (“#”, ”@”), store URLs, or marketing texts to promote your brand on social media via reviewers' posts.",
  },
  {
    key: 'ENABLE_AE3CE2',
    value: 'Enabled',
  },
  {
    key: 'DISABL_46CD9D',
    value: 'Disabled',
  },
  {
    key: 'TEXT_546F14',
    value: 'TEXT',
  },
  {
    key: 'INSERT_0B812E',
    value: 'Insert merge tags',
  },
  {
    key: 'CHECK_35D02F',
    value: 'Check out this amazing product from *|STORE_NAME|*.',
  },
  {
    key: 'CHECK_91FDAE',
    value: '👉 Check out this amazing product from *|STORE_NAME|*:',
  },
  {
    key: 'STORE_940C81',
    value: '*|STORE_URL|*.',
  },
  {
    key: 'PREVIE_FA61CD',
    value: 'Preview',
  },
  {
    key: 'SAVE_B557D0',
    value: 'Save',
  },
  {
    key: 'MORE_T_8B185A',
    value: 'More tabs',
  },
  // your nps
  {
    key: 'YOUR_N_E017EC',
    value: 'Your NPS',
  },
  {
    key: 'EXPORT_E9E99F',
    value: 'Export',
  },
  {
    key: 'SCORE_65B1BD',
    value: 'Score and distribution',
  },
  {
    key: 'RESPON_150CE6',
    value: 'responses',
  },
  {
    key: 'DETRAC_478AC8',
    value: 'Detractors (Score:0-6)',
  },
  {
    key: 'PASSIV_AD94BA',
    value: 'Passives (Score:7-8)',
  },
  {
    key: 'PROMOT_20522B',
    value: 'Promoters (Score:9-10)',
  },
  {
    key: 'DETRAC_F1FBBE',
    value: 'detractors/passives/promoters',
  },
  {
    key: 'SEARCH_42594E',
    value: 'Search by reviewer, email, or content',
  },
  {
    key: 'SCORE_063FAF',
    value: 'Score',
  },
  {
    key: 'CREATE_C9BE38',
    value: 'Created (newest first)',
  },
  {
    key: 'CREATE_2F5CAB',
    value: 'Created (oldest first)',
  },
  {
    key: 'REVIEW_1E83C7',
    value: 'Reviewer',
  },
  {
    key: 'TYPE_5B8204',
    value: 'Type',
  },
  {
    key: 'EMAIL_0921D4',
    value: 'Email / Order no.',
  },
  {
    key: 'CONTEN_898F46',
    value: 'Content',
  },
  {
    key: 'ACTION_22B4FF',
    value: 'Actions',
  },
  {
    key: 'NO_REV_1424AD',
    value: 'No reviews yet',
  },
  {
    key: '0_DETR_2683B5',
    value: '0 (Detractors)',
  },
  {
    key: '1_DETR_6A1C63',
    value: '1 (Detractors)',
  },
  {
    key: '2_DETR_117929',
    value: '2 (Detractors)',
  },
  {
    key: '3_DETR_9B2B63',
    value: '3 (Detractors)',
  },
  {
    key: '4_DETR_13F8B3',
    value: '4 (Detractors)',
  },
  {
    key: '5_DETR_A4B8B8',
    value: '5 (Detractors)',
  },
  {
    key: '6_DETR_8301F4',
    value: '6 (Detractors)',
  },
  {
    key: '7_PASS_C962C3',
    value: '7 (Passives)',
  },
  {
    key: '8_PASS_B64278',
    value: '8 (Passives)',
  },
  {
    key: '9_PROM_71B03F',
    value: '9 (Promoters)',
  },
  {
    key: '10_PRO_82144A',
    value: '10 (Promoters)',
  },
  {
    key: 'CLEAR_059D1C',
    value: 'Clear Score',
  },
  {
    key: 'PROMOT_D2115C',
    value: 'Promoter',
  },
  {
    key: 'NPS_SC_987DD9',
    value: 'NPS score:',
  },
  {
    key: 'DELETE_D739C1',
    value: 'Delete review?',
  },
  {
    key: 'THIS_W_2DC0FE',
    value: 'This will permanently delete the review.',
  },
  {
    key: 'CANCEL_F71496',
    value: 'Cancel',
  },
  {
    key: 'DELETE_2D5203',
    value: 'Delete',
  },
  {
    key: 'CLOSE_7B6BFC',
    value: 'Close',
  },
  // NPS email settings
  {
    key: 'NPS_EM_491765',
    value: 'NPS email settings',
  },
  {
    key: 'HERE_Y_0E0D19',
    value:
      'Here you can customize your NPS emails and set when they get sent to customers.',
  },
  {
    key: 'AUTOMA_4C9AC7',
    value: 'Automated NPS emails',
  },
  {
    key: 'SEND_A_FA70B3',
    value:
      "Send an NPS email automatically when a customer's order is fulfilled or delivered.",
  },
  {
    key: 'SEND_A_CBE6A7',
    value: 'Send an NPS email',
  },
  {
    key: 'DAYS_F86DFE',
    value: 'days',
  },
  {
    key: 'AFTER_1933C7',
    value: 'after order',
  },
  {
    key: 'FULFIL_BD7CAF',
    value: 'fulfillment',
  },
  {
    key: 'CHANGE_FCCCC4',
    value: 'Change',
  },
  {
    key: 'PREVIE_333A52',
    value: 'Preview',
  },
  {
    key: 'CUSTOM_8BBCB2',
    value: 'Customize',
  },
  {
    key: 'A_QUIC_FF61B9',
    value: 'A quick question from *|STORE_NAME|*',
  },
  {
    key: 'MORE_T_6CB034',
    value: 'More tabs',
  },
  {
    key: 'LARGE_DDE0C6',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_26578F',
    value: 'Mobile screen',
  },
  // nps-email-history
  {
    key: 'WERE_U_45AD7F',
    value:
      "We're using the time zone based on your organization settings GMT (+08:00) Asia/Shanghai.",
  },
  {
    key: 'CHANGE_D59D8E',
    value: 'Change time zone',
  },
  {
    key: 'NPS_EM_05F6B0',
    value: 'NPS emails history',
  },
  {
    key: 'SEND_E_C96683',
    value: 'Send emails manually',
  },
  {
    key: 'HERE_Y_15101F',
    value: 'Here you can manage and check the performance of your NPS emails.',
  },
  {
    key: 'ORDERS_A40AED',
    value: 'Orders with email sent',
  },
  {
    key: 'TOTAL_A99CD3',
    value: 'Total emails sent',
  },
  {
    key: 'OPEN_R_DAB275',
    value: 'Open rate',
  },
  {
    key: 'RESPON_5B0AAD',
    value: 'Responses',
  },
  {
    key: 'SCHEDU_FA95BB',
    value: 'Scheduled (0)',
  },
  {
    key: 'PAUSED_91CD68',
    value: 'Paused (0)',
  },
  {
    key: 'SENT_0_064561',
    value: 'Sent (0)',
  },
  {
    key: 'SEARCH_DA6CD7',
    value: 'Search by order no. or customer email',
  },
  {
    key: 'SCHEDU_1303A6',
    value: 'Scheduled date',
  },
  {
    key: 'TYPE_56B28F',
    value: 'Type',
  },
  {
    key: 'ORDER_5E25C0',
    value: 'Order no.',
  },
  {
    key: 'CUSTOM_0D4181',
    value: 'Customer email',
  },
  {
    key: 'SCHEDU_F3621E',
    value: 'Scheduled for',
  },
  {
    key: 'SENT_A_96580D',
    value: 'Sent at',
  },
  {
    key: 'TRIGGE_A19FB2',
    value: 'Trigger',
  },
  {
    key: 'LEFT_R_01BBBC',
    value: 'Left reviews',
  },
  {
    key: 'NO_REV_A7924A',
    value: 'No reviews yet',
  },
  {
    key: 'MORE_T_AAA616',
    value: 'More tabs',
  },
  // send email maually
  {
    key: 'CREATE_0E4CA2',
    value: 'Create one-time NPS email',
  },
  {
    key: 'SINGLE_BD27CD',
    value: 'Single recipient',
  },
  {
    key: 'MULTIP_25DAC3',
    value: 'Multiple recipients',
  },
  {
    key: 'CUSTOM_098B86',
    value: 'Customer name',
  },
  {
    key: 'CUSTOM_AA2818',
    value: 'Customer email',
  },
  {
    key: 'ORDER_820859',
    value: 'Order number (Optional)',
  },
  {
    key: 'STEP_1_C247C6',
    value: 'Step 1: Download and fill in the CSV template',
  },
  {
    key: 'DOWNLO_F0EAD0',
    value: 'Download the CSV file',
  },
  {
    key: 'AND_FI_A45A2E',
    value: 'and fill in the customer info.',
  },
  {
    key: 'STEP_2_EA27D8',
    value: 'Step 2: Upload your CSV file',
  },
  {
    key: 'CANCEL_54ACB1',
    value: 'Cancel',
  },
  {
    key: 'SEND_N_767723',
    value: 'Send now',
  },
  {
    key: 'CLOSE_733E3C',
    value: 'Close',
  },
  {
    key: 'MORE_T_E927EF',
    value: 'More tabs',
  },
  {
    key: 'ENTER_F9C653',
    value: 'Enter a name',
  },
  {
    key: 'ENTER_33D3D1',
    value: 'Enter a email',
  },
  {
    key: 'ENTER_126CE2',
    value: 'Enter a order number',
  },
  {
    key: 'AUTO_I_7BB7A1',
    value: 'Auto - Initial',
  },
  {
    key: 'AUTO_R_78B073',
    value: 'Auto - Reminder',
  },
  {
    key: 'MANUAL_5372F6',
    value: 'Manual',
  },
  // Post-purchase NPS
  {
    key: 'POSTPU_51D4E6',
    value: 'Post-purchase NPS',
  },
  {
    key: 'COLLEC_FA40C1',
    value: "Collect NPS reviews on your store's order status page.",
  },
  {
    key: 'INSTAL_E27338',
    value: 'Installation',
  },
  {
    key: 'FOR_YO_4F6057',
    value: 'For your survey to display, you need to add the widget in the',
  },
  {
    key: 'SHOPIF_A2901A',
    value: 'Shopify checkout editor',
  },
  {
    key: 'IGNORE_20E648',
    value: 'Ignore this message if you’ve already done it.',
  },
  {
    key: 'WE_SUG_827A1E',
    value:
      'We suggest you put the widget near the top of the page to make it more visible.',
  },
  {
    key: 'CONTAC_42BFB4',
    value: 'Contact us',
  },
  {
    key: 'IF_YOU_5C30B3',
    value: 'if you need further assistance.',
  },
  {
    key: 'NPS_SU_FC5A31',
    value: 'NPS survey',
  },
  {
    key: 'THE_CO_4A8F48',
    value: 'The content will match the NPS survey section in your NPS email.',
  },
  {
    key: 'EDIT_N_C298A8',
    value: 'Edit NPS email',
  },
  {
    key: 'PREVIE_CF5923',
    value: 'Preview',
  },
  {
    key: 'VIEW_O_7D9768',
    value: 'View on Shopify checkout editor',
  },
  {
    key: 'HOW_LI_0DE44D',
    value: 'How likely are you to recommend *|STORE_NAME|* to a friend?',
  },
  {
    key: 'POWERE_1B0EC6',
    value: 'Powered by AfterShip',
  },
  {
    key: 'MORE_T_68F4C7',
    value: 'More tabs',
  },
  {
    key: 'LARGE_7F5FFB',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_FFB8D9',
    value: 'Mobile screen',
  },
  // Review request email settings
  {
    key: 'REVIEW_19093C',
    value: 'Review request email settings',
  },
  {
    key: 'HERE_Y_546092',
    value:
      'Here you can customize your review request emails and set when they get sent to customers.',
  },
  {
    key: 'AUTOMA_76E7B6',
    value: 'Automatic review request emails',
  },
  {
    key: 'SEND_A_17149D',
    value:
      "Send a review request email automatically when a customer's order is fulfilled or delivered.",
  },
  {
    key: 'LEARN_035C1F',
    value: 'Learn more',
  },
  {
    key: 'SEND_A_92CFEE',
    value: 'Send a review request email',
  },
  {
    key: 'DAYS_787B9B',
    value: 'days',
  },
  {
    key: 'AFTER_1D32BD',
    value: 'after order',
  },
  {
    key: 'FULFIL_3E42B2',
    value: 'fulfillment',
  },
  {
    key: 'CHANGE_E1F4D6',
    value: 'Change',
  },
  {
    key: 'AUTOPU_971D67',
    value: 'AUTO-PUBLISH REVIEWS',
  },
  {
    key: 'ALL_BBF9DB',
    value: 'All',
  },
  {
    key: '1_STAR_042454',
    value: '1 star and above',
  },
  {
    key: 'REVIEW_C33C79',
    value: 'reviews collected from',
  },
  {
    key: 'AUTOMA_45F440',
    value: 'automated emails and manual emails',
  },
  {
    key: 'WILL_B_B385D2',
    value:
      'will be auto-published upon submission. All other reviews will be auto-published after',
  },
  {
    key: '14_DAY_AAD7E1',
    value: '14 days',
  },
  {
    key: 'UNLESS_3D770B',
    value: 'unless you publish or unpublish them before then.',
  },
  {
    key: 'CHANGE_0EAC11',
    value: 'Change auto-publish settings',
  },
  {
    key: 'PREVIE_AAE614',
    value: 'Preview',
  },
  {
    key: 'CUSTOM_6F81B6',
    value: 'Customize',
  },
  {
    key: 'SUBJEC_8E07FE',
    value: "Subject: We'd love to hear your feedback",
  },
  {
    key: 'MORE_T_47FF88',
    value: 'More tabs',
  },
  {
    key: 'LARGE_C82E8D',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_E5B6FD',
    value: 'Mobile screen',
  },
  {
    key: 'SUBJEC_20E097',
    value: 'Subject:',
  },
  {
    key: 'WED_LO_314A62',
    value: "We'd love to hear your feedback",
  },
  // email history
  {
    key: 'REVIEW_CEDCAF',
    value: 'Review request emails',
  },
  {
    key: 'SEND_E_E2251F',
    value: 'Send emails manually',
  },
  {
    key: 'HERE_Y_701A3F',
    value:
      'Here you can manage and check the performance of your review request emails.',
  },
  {
    key: 'ORDERS_4AA426',
    value: 'Orders with email sent',
  },
  {
    key: 'TOTAL_6E8B13',
    value: 'Total emails sent',
  },
  {
    key: 'OPEN_R_C44820',
    value: 'Open rate',
  },
  {
    key: 'REVIEW_D0B211',
    value: 'Reviews',
  },
  {
    key: 'SCHEDU_82F675',
    value: 'Scheduled (0)',
  },
  {
    key: 'PAUSED_797FF8',
    value: 'Paused (0)',
  },
  {
    key: 'SENT_0_90ECCB',
    value: 'Sent (0)',
  },
  {
    key: 'SEARCH_F5EF12',
    value: 'Search by order no. or customer email',
  },
  {
    key: 'SCHEDU_30A026',
    value: 'Scheduled date',
  },
  {
    key: 'TYPE_AD3643',
    value: 'Type',
  },
  {
    key: 'ORDER_31C21D',
    value: 'Order no.',
  },
  {
    key: 'PRODUC_3BD6B9',
    value: 'Product',
  },
  {
    key: 'CUSTOM_660246',
    value: 'Customer email',
  },
  {
    key: 'SCHEDU_6134AA',
    value: 'Scheduled for',
  },
  {
    key: 'TRIGGE_AE7FBF',
    value: 'Trigger',
  },
  {
    key: 'NO_EMA_BD18B5',
    value: 'No emails found',
  },
  {
    key: 'MORE_T_080EA8',
    value: 'More tabs',
  },
  // analytics overview
  {
    key: 'OVERVI_FF0EBE',
    value: 'Overview',
  },
  {
    key: 'REVIEW_45E9F5',
    value: 'Reviews collected',
  },
  {
    key: 'NPS_SU_1C97AB',
    value: 'NPS surveys collected',
  },
  {
    key: 'ENGAGE_F46D3A',
    value: 'Engagements',
  },
  {
    key: 'SALES_B3D764',
    value: 'Sales',
  },
  {
    key: 'OVERAL_41D09A',
    value: 'Overall star rating',
  },
  {
    key: 'BASED_EEA75F',
    value: 'based on',
  },
  {
    key: 'REVIEW_CBFC44',
    value: 'reviews',
  },
  {
    key: 'RATING_729858',
    value: 'Ratings distribution',
  },
  {
    key: '5_STAR_5EE356',
    value: '5 stars',
  },
  {
    key: 'STAR_21DE58',
    value: 'star',
  },
  {
    key: '0_000_D7EED6',
    value: '0 (0.00%)',
  },
  {
    key: 'REVIEW_494DE0',
    value: 'Reviews by source',
  },
  {
    key: 'TOTAL_3E4061',
    value: 'TOTAL',
  },
  {
    key: 'STORE_2B4B6B',
    value: 'Store',
  },
  {
    key: '2_1000_B6B7E7',
    value: '2 (100.00%)',
  },
  {
    key: 'EMAIL_FC994F',
    value: 'Email request',
  },
  {
    key: 'CSV_UP_C6E80A',
    value: 'CSV upload',
  },
  {
    key: 'CONVER_90364A',
    value: 'Conversion rate',
  },
  {
    key: 'OVERAL_281238',
    value: 'Overall NPS',
  },
  {
    key: 'NPS_SU_17A768',
    value: 'NPS surveys',
  },
  {
    key: 'NPS_DI_E057E6',
    value: 'NPS distribution',
  },
  {
    key: 'PROMOT_EF0A52',
    value: 'Promoters',
  },
  {
    key: 'SCORE_12CC31',
    value: '(Score: 9-10)',
  },
  {
    key: 'PASSIV_773846',
    value: 'Passives',
  },
  {
    key: 'SCORE_DEA9DB',
    value: '(Score: 7-8)',
  },
  {
    key: 'DETRAC_E88621',
    value: 'Detractors',
  },
  {
    key: 'SCORE_CE3D2C',
    value: '(Score: 0-6)',
  },
  {
    key: 'REVIEW_6EFC74',
    value: 'Reviews over time',
  },
  {
    key: 'RATING_9E5CC4',
    value: 'Ratings and reviews by product',
  },
  {
    key: 'SEARCH_7D26D9',
    value: 'Search by product name',
  },
  {
    key: 'RATING_97614F',
    value: 'Ratings (5 stars first)',
  },
  {
    key: 'RATING_73407B',
    value: 'Ratings (1 star first)',
  },
  {
    key: 'REVIEW_04E045',
    value: 'Reviews (most first)',
  },
  {
    key: 'REVIEW_A052A6',
    value: 'Reviews (fewest first)',
  },
  {
    key: 'TOTAL_82ECCB',
    value: 'Total reviews',
  },
  {
    key: 'AVERAG_41FABF',
    value: 'Average rating',
  },
  {
    key: 'THE_NU_7ED57C',
    value:
      'The number of purchases divided by the number of engagements. Conversions are attributed to engagements that led to a purchase within 7 days',
  },
  // analytics email
  {
    key: 'EMAIL_1208A0',
    value: 'Email',
  },
  {
    key: 'HERE_Y_7E0F0C',
    value: 'Here you can check the performance of your email campaigns.',
  },
  {
    key: 'LAST_3_802035',
    value: 'Last 30 days',
  },
  {
    key: 'TYPE_07A54B',
    value: 'Type',
  },
  {
    key: 'ORDERS_157C0C',
    value: 'Orders with email sent',
  },
  {
    key: 'REVIEW_2FD2CB',
    value: 'Reviews collected',
  },
  {
    key: 'NPS_SU_CA766A',
    value: 'NPS survey responses',
  },
  {
    key: 'REVIEW_2662A0',
    value: 'Review request email funnel',
  },
  {
    key: 'SENT_068C04',
    value: 'Sent',
  },
  {
    key: 'DELIVE_48D018',
    value: 'Delivery rate',
  },
  {
    key: 'OPEN_R_7C761A',
    value: 'Open rate',
  },
  {
    key: 'CONVER_FA060D',
    value: 'Conversion rate',
  },
  {
    key: 'NPS_EM_16D670',
    value: 'NPS email funnel',
  },
  {
    key: 'REVIEW_B7E9EB',
    value: 'Review request email performance over time',
  },
  {
    key: 'NPS_EM_ED70DC',
    value: 'NPS email performance over time',
  },
  {
    key: 'THE_NU_2696BF',
    value: 'The number of orders for which at least 1 email was sent',
  },
  {
    key: 'THE_NU_F16B4C',
    value:
      'The number of reviews collected from emails sent within the selected time frame',
  },
  {
    key: 'THE_NU_6AC659',
    value:
      'The number of NPS survey responses from emails sent within the selected time frame',
  },
  {
    key: 'THE_PE_BA1740',
    value:
      'The percentage of review request emails that were delivered successfully',
  },
  {
    key: 'THE_NU_0AC564',
    value:
      'The number of review request emails opened by customers divided by the total number of review request emails sent',
  },
  {
    key: 'THE_NU_C32F83',
    value:
      'The number of review request emails that led to one or more reviews divided by the total number of review request emails sent',
  },
  {
    key: 'THE_PE_A0DD91',
    value:
      'The percentage of review request emails that were delivered successfully',
  },
  {
    key: 'THE_NU_267B6E',
    value:
      'The number of review request emails opened by customers divided by the total number of review request emails sent',
  },
  {
    key: 'THE_NU_E761D2',
    value:
      'The number of review request emails that led to one or more reviews divided by the total number of review request emails sent',
  },
  // google intergration
  {
    key: 'GOOGLE_60311E',
    value: 'Google integrations',
  },
  {
    key: 'USE_PO_C38050',
    value:
      'Use powerful Google integrations to drive more traffic to your store.',
  },
  {
    key: 'GOOGLE_8AA315',
    value: 'Google review snippet',
  },
  {
    key: 'BOOST_2E0E2C',
    value:
      'Boost your website visibility on Google with aggregated ratings from verified reviews. It may take Google several weeks to display the ratings after you enable the feature.',
  },
  {
    key: 'LEARN_C5F380',
    value: 'Learn more',
  },
  {
    key: 'HERES_5221E4',
    value: 'Here’s what it’ll look like',
  },
  {
    key: 'GOOGLE_4EF94D',
    value: 'Google Shopping',
  },
  {
    key: 'DRIVE_BDEE96',
    value:
      'Drive more traffic to your store by showcasing your reviews and star ratings on Google Shopping.',
  },
  {
    key: 'STEP_1_BA652D',
    value: 'STEP 1: SET UP PRODUCT IDENTIFIERS AND PREFIX',
  },
  {
    key: 'MATCH_D15DD1',
    value:
      'Match the information below with how you report your product identifiers on Google Merchant Center.',
  },
  {
    key: 'GTIN_5B4FE7',
    value: 'GTIN',
  },
  {
    key: 'DONT_I_082B24',
    value: "Don't include in the feed",
  },
  {
    key: 'EXTRAC_FD73AB',
    value: 'Extract from “Barcode”',
  },
  {
    key: 'EXTRAC_FEE79F',
    value: 'Extract from “SKU”',
  },
  {
    key: 'EXTRAC_D06547',
    value: 'Extract from “Product ID”',
  },
  {
    key: 'MPN_42C529',
    value: 'MPN',
  },
  {
    key: 'PRODUC_211B37',
    value: 'Product prefix',
  },
  {
    key: 'DO_NOT_10EFF6',
    value: 'Do not add prefix',
  },
  {
    key: 'STEP_2_389F55',
    value: 'STEP 2: COPY FEED FILE URL',
  },
  {
    key: 'COPY_611CEF',
    value: 'Copy',
  },
  {
    key: 'STEP_3_087544',
    value: 'STEP 3: SET UP IN GOOGLE MERCHANT CENTER',
  },
  {
    key: 'PLEASE_E12348',
    value: 'Please upload the link to your',
  },
  {
    key: 'GOOGLE_920B34',
    value: 'Google Merchant Center',
  },
  {
    key: 'IF_YOU_B293BD',
    value: '. If you have any questions, feel free to',
  },
  {
    key: 'CONTAC_BFDB4B',
    value: 'contact our 24/7 support team',
  },
  {
    key: 'GLOBAL_C8B937',
    value: 'Global Trade Item Numbers',
  },
  {
    key: 'MANUFA_633CF4',
    value: 'Manufacturer Part Number',
  },
  {
    key: 'IF_YOU_D29015',
    value: 'If you sync your products using',
  },
  {
    key: 'SHOPIF_0378E9',
    value: "Shopify's Google channel",
  },
  {
    key: 'PLEASE_CAB4FE',
    value:
      ', please select a product prefix based on your store’s country code.',
  },
  // settings
  {
    key: 'SETTIN_B9F107',
    value: 'Settings',
  },
  {
    key: 'FEATUR_075471',
    value: 'Feature settings',
  },
  {
    key: 'LANGUA_189485',
    value: 'Languages',
  },
  {
    key: 'REVIEW_4B06C3',
    value: 'Review form',
  },
  {
    key: 'EXCLUS_715138',
    value: 'Exclusion rules',
  },
  {
    key: 'AUTOPU_A80C79',
    value: 'Auto-publish reviews',
  },
  {
    key: 'NOTIFI_EA366B',
    value: 'Notifications',
  },
  {
    key: 'AUTOMA_001E1C',
    value: 'Automatic follow-up emails',
  },
  {
    key: 'SYNDIC_CB95DA',
    value: 'Syndication and integrations',
  },
  {
    key: 'ANSWER_C8FDF9',
    value: 'Answer invitations',
  },
  {
    key: 'ACCOUN_512DF9',
    value: 'Account settings',
  },
  {
    key: 'PROFIL_267F75',
    value: 'Profile',
  },
  {
    key: 'ORGANI_297764',
    value: 'Organization',
  },
  {
    key: 'BILLIN_E5FA6E',
    value: 'Billing',
  },
  {
    key: 'MEMBER_1C2801',
    value: 'Members',
  },
  {
    key: 'VIEW_D_03114B',
    value: 'View details for',
  },
  // languages
  {
    key: 'LANGUA_2C6A1A',
    value: 'Languages',
  },
  {
    key: 'STORE_C49C70',
    value: 'Store languages',
  },
  {
    key: 'ADD_LA_1907D9',
    value:
      'Add languages to improve cross-border conversions. Currently only applies to review widgets and review request emails.',
  },
  {
    key: 'CANT_F_09C09C',
    value: 'Can’t find a language? Contact our',
  },
  {
    key: 'SUPPOR_06B82A',
    value: 'support team (24x7)',
  },
  {
    key: 'TO_ADD_E93592',
    value: 'to add the language for free.',
  },
  {
    key: 'DEFAUL_CF5444',
    value: 'Default language',
  },
  {
    key: 'USED_I_7EC83A',
    value:
      "Used in your review widgets and review request emails when a customer's language doesn't match any of your published languages.",
  },
  {
    key: 'DEFAUL_E479DA',
    value: 'Default',
  },
  {
    key: 'CHANGE_3AA377',
    value: 'Change default language',
  },
  {
    key: 'ONLY_P_8246EC',
    value:
      'Only published languages are visible to customers. You must manually translate any customizable content in your review widgets and emails.',
  },
  {
    key: 'ENGLIS_FBEB9F',
    value: 'English',
  },
  {
    key: 'ADD_LA_C94984',
    value: 'Add language',
  },
  // change default language
  {
    key: 'CHANGE_5AC3DE',
    value: 'Change default language',
  },
  {
    key: 'IF_A_L_C87742',
    value:
      'If a language is not in the list, please go back and select "Add language" first.',
  },
  {
    key: 'DEFAUL_E32302',
    value: 'Default language',
  },
  {
    key: 'CANCEL_BCF063',
    value: 'Cancel',
  },
  {
    key: 'CONFIR_DB8249',
    value: 'Confirm',
  },
  {
    key: 'CLOSE_939ACA',
    value: 'Close',
  },
  // add language
  {
    key: 'ADD_LA_2DA1F5',
    value: 'Add language',
  },
  {
    key: 'LANGUA_98D4BA',
    value: 'Language',
  },
  {
    key: 'CANCEL_977952',
    value: 'Cancel',
  },
  {
    key: 'ADD_2FD65B',
    value: 'Add',
  },
  {
    key: 'CLOSE_96D61C',
    value: 'Close',
  },
  // Review form
  {
    key: 'REVIEW_8C58C6',
    value: 'Review form',
  },
  {
    key: 'REVIEW_FCD1C8',
    value: 'Review form settings',
  },
  {
    key: 'CHOOSE_50077C',
    value:
      'Choose what to display on your review form. The settings here will be applied to all review forms.',
  },
  {
    key: 'REVIEW_B4F185',
    value: 'Review title',
  },
  {
    key: 'ADD_A_452302',
    value: 'Add a review title field to your review form.',
  },
  {
    key: 'REVIEW_DC0BAA',
    value: 'Review video',
  },
  {
    key: 'REVIEW_8E5FC4',
    value: 'Reviewers can upload a video when leaving a review.',
  },
  {
    key: 'SHARIN_4E9653',
    value: 'Sharing buttons',
  },
  {
    key: 'SHOW_B_91B044',
    value: 'Show buttons that customers can use to share their review.',
  },
  {
    key: 'BUTTON_EABAA6',
    value: 'button',
  },
  {
    key: 'CUSTOM_16EEE7',
    value: 'Custom review forms',
  },
  {
    key: 'CREATE_65A061',
    value:
      'Create review forms with customized questions to gather and add additional context to reviews, which can help shoppers make purchasing decisions.',
  },
  {
    key: 'IF_A_P_A5F9F3',
    value:
      'If a product has multiple tags, customers will see the first published form in this list with a matching tag.',
  },
  {
    key: 'CREATE_AF1550',
    value: 'Create new form',
  },
  {
    key: 'SAVE_51FA83',
    value: 'Save',
  },
  // Create new form
  {
    key: 'CREATE_2449F0',
    value: 'Create new form',
  },
  {
    key: 'PUBLIS_368FE5',
    value: 'Publish form',
  },
  {
    key: 'FORM_N_86086B',
    value: 'Form name',
  },
  {
    key: 'NAME_6C98CE',
    value: 'Name',
  },
  {
    key: 'FOR_YO_AD847F',
    value: 'For your reference only. Not shown to customers.',
  },
  {
    key: 'SHOW_T_646C91',
    value: 'Show this form for',
  },
  {
    key: 'ALL_PR_A5C751',
    value: 'All products',
  },
  {
    key: 'PRODUC_60410B',
    value: 'Products with certain tags',
  },
  {
    key: 'QUESTI_219517',
    value: 'Questions',
  },
  {
    key: 'CREATE_8E4A56',
    value: 'Create new question',
  },
  {
    key: 'PREVIE_D77F68',
    value: 'Preview',
  },
  {
    key: 'SAVE_8DC834',
    value: 'Save',
  },
  {
    key: 'MORE_T_8FB84A',
    value: 'More tabs',
  },
  {
    key: 'LARGE_8707B8',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_31CCBD',
    value: 'Mobile screen',
  },
  // Exclusion rules
  {
    key: 'EXCLUS_BB41BB',
    value: 'Exclusion rules',
  },
  {
    key: 'CUSTOM_50097E',
    value: 'Customer opt-in / opt-out',
  },
  {
    key: 'CHOOSE_A28585',
    value: 'Choose which customers can receive review request and NPS emails.',
  },
  {
    key: 'NOTE_C_9D841B',
    value:
      "Note: Customers who opted out of review request or NPS emails won't receive them, regardless of your choice here.",
  },
  {
    key: 'SEND_E_49D204',
    value: 'Send email to all customers regardless of opt-in status',
  },
  {
    key: 'SEND_E_51D597',
    value:
      'Send email to all customers except those who opted out of marketing emails',
  },
  {
    key: 'SEND_E_693E51',
    value: 'Send email only to customers who are opted-in to marketing emails',
  },
  {
    key: 'ORDERS_17EDD8',
    value: 'Orders, products, and tags',
  },
  {
    key: 'SET_RU_BECAF6',
    value:
      'Set rules to exclude specific orders, products, or customers from review request and NPS emails.',
  },
  {
    key: 'MINIMU_E78347',
    value: 'Minimum order value to send emails',
  },
  {
    key: 'THE_CU_CEF44E',
    value: 'The currency is the same as your store.',
  },
  {
    key: 'EXCLUD_4CE033',
    value: 'Exclude orders that contain specific tags',
  },
  {
    key: 'EXCLUD_BB0D94',
    value: 'Exclude specific products',
  },
  {
    key: 'EXCLUD_2714EC',
    value: 'Exclude products in specific collections',
  },
  {
    key: 'EXCLUD_85E1AC',
    value: 'Exclude customers with specific tags',
  },
  {
    key: 'SAVE_74C1A6',
    value: 'Save',
  },
  {
    key: 'ADD_TA_DE403B',
    value: 'Add tag',
  },
  {
    key: 'SEARCH_974D85',
    value: 'Search products',
  },
  {
    key: 'SEARCH_AB2FAB',
    value: 'Search collections',
  },
  // Auto-publish reviews
  {
    key: 'AUTOPU_09487F',
    value: 'Auto-publish reviews',
  },
  {
    key: 'THESE_9F7C27',
    value:
      'These settings apply only to reviews collected from emails or submitted in your store.',
  },
  {
    key: 'THEY_D_7309A2',
    value: 'They do not apply to reviews imported from AliExpress or CSV.',
  },
  {
    key: 'AUTOMA_7B38BA',
    value:
      'Automatically publish verified reviews collected from emails or submitted in your store. You can select a minimum star rating for auto-publishing.',
  },
  {
    key: 'REVIEW_C9F727',
    value:
      'Reviews that are not auto-published upon submission will be auto-published after',
  },
  {
    key: '14_DAY_32441B',
    value: '14 days',
  },
  {
    key: 'UNLESS_79DA6B',
    value: ', unless you publish or unpublish them before then.',
  },
  {
    key: 'MINIMU_C5579A',
    value: 'Minimum star rating',
  },
  {
    key: '1_STAR_DB706A',
    value: '1 star and above',
  },
  {
    key: '2_STAR_A7F92A',
    value: '2 stars and above',
  },
  {
    key: '3_STAR_F21543',
    value: '3 stars and above',
  },
  {
    key: '4_STAR_395E40',
    value: '4 stars and above',
  },
  {
    key: '5_STAR_7E6F98',
    value: '5 stars only',
  },
  {
    key: 'REVIEW_8975F7',
    value: 'Review sources',
  },
  {
    key: 'AUTOMA_0C2C46',
    value: 'Automatic review requests',
  },
  {
    key: 'MANUAL_CDF619',
    value: 'Manual review requests',
  },
  {
    key: 'SUBMIT_96DADB',
    value: 'Submitted in store',
  },
  {
    key: 'TRUSTP_947BED',
    value: 'Trustpilot',
  },
  {
    key: 'TO_REC_B2BC41',
    value: 'To receive these notifications you need to',
  },
  {
    key: 'CONNEC_C1D15B',
    value: 'connect your Trustpilot account',
  },
  {
    key: 'SAVE_BA1303',
    value: 'Save',
  },
  // Notifications
  {
    key: 'NOTIFI_C9E402',
    value: 'Notifications',
  },
  {
    key: 'REVIEW_8FBA5E',
    value: 'Review notification settings',
  },
  {
    key: 'GET_AN_853EBE',
    value: 'Get an email notification when you receive a new review.',
  },
  {
    key: 'REVIEW_B2215D',
    value: 'Review notifications',
  },
  {
    key: 'YOU_CA_3A1B93',
    value:
      'You can filter by star rating and source, and choose who notifications will be sent to.',
  },
  {
    key: 'STAR_R_3D37A5',
    value: 'Star rating',
  },
  {
    key: '1_STAR_0E5045',
    value: '1 star reviews',
  },
  {
    key: '2_STAR_6CD069',
    value: '2 stars and below',
  },
  {
    key: '3_STAR_014F28',
    value: '3 stars and below',
  },
  {
    key: '4_STAR_15A3CE',
    value: '4 stars and below',
  },
  {
    key: 'ALL_RE_6DF4E8',
    value: 'All reviews',
  },
  {
    key: 'REVIEW_D92F87',
    value: 'Review sources',
  },
  {
    key: 'AUTOMA_2FB369',
    value: 'Automatic review requests',
  },
  {
    key: 'MANUAL_1B3424',
    value: 'Manual review requests',
  },
  {
    key: 'SUBMIT_A31985',
    value: 'Submitted in store',
  },
  {
    key: 'SHIPME_D0F1FC',
    value: 'Shipment reviews',
  },
  {
    key: 'TO_REC_BD05D1',
    value: 'To receive these notifications you need to',
  },
  {
    key: 'CONNEC_7AC472',
    value: 'connect your Trustpilot account',
  },
  {
    key: 'EMAIL_169E69',
    value: 'Email recipients',
  },
  {
    key: 'MANAGE_F0C679',
    value: 'Manage',
  },
  {
    key: 'OWNER_C77AE5',
    value: '(owner)',
  },
  {
    key: 'QUESTI_F1D547',
    value: 'Question notification settings',
  },
  {
    key: 'GET_AN_2D2273',
    value: 'Get an email notification when you receive a new question.',
  },
  {
    key: 'QUESTI_1E4067',
    value: 'Question notifications',
  },
  {
    key: 'YOU_CA_406A94',
    value: 'You can choose who notifications will be sent to.',
  },
  {
    key: 'EMAIL_B21E99',
    value: 'Email recipientsSave',
  },
  // Automatic follow-up emails
  {
    key: 'AUTOMA_2251B5',
    value: 'Automatic follow-up emails',
  },
  {
    key: 'EMAIL_50FFF3',
    value: 'Email settings',
  },
  {
    key: 'CHOOSE_34CD3A',
    value:
      'Choose the type of follow-up email you want to send customers based on the rating they give.',
  },
  {
    key: 'IF_YOU_EF544A',
    value:
      'If you enable both default and negative review emails, positive reviews will only receive the default email, while negative reviews will only receive the negative review email.',
  },
  {
    key: 'DEFAUL_337A3C',
    value: 'Default follow-up emails',
  },
  {
    key: 'SENT_T_0A262A',
    value: 'Sent to all customers regardless of their review.',
  },
  {
    key: 'EDIT_E_78D2BB',
    value: 'Edit email template',
  },
  {
    key: 'NEGATI_6F0BF3',
    value: 'Negative review follow-up emails',
  },
  {
    key: 'CUSTOM_4EE480',
    value:
      'Customers that leave a negative review will only receive this follow-up email, not the default version.',
  },
  {
    key: 'NEGATI_B1FB9D',
    value: 'Negative star ratings',
  },
  {
    key: '3_STAR_77DC33',
    value: '3 stars and below',
  },
  {
    key: 'TRIGGE_4DA2B5',
    value: 'Trigger settings',
  },
  {
    key: 'CHOOSE_4DADC5',
    value: 'Choose which reviews will trigger a follow-up email.',
  },
  {
    key: 'REVIEW_80BB3D',
    value: 'Review sources',
  },
  {
    key: 'AUTOMA_BA5E00',
    value: 'Automatic review requests',
  },
  {
    key: 'MANUAL_D65D39',
    value: 'Manual review requests',
  },
  {
    key: 'SUBMIT_123D5A',
    value: 'Submitted in store',
  },
  {
    key: 'SHIPME_13DC97',
    value: 'Shipment reviews',
  },
  {
    key: 'SAVE_4786AD',
    value: 'Save',
  },
  // follow-up email
  {
    key: 'DEFAUL_61FCC1',
    value: 'Default follow-up email',
  },
  {
    key: 'SEND_T_F5A01D',
    value: 'Send test email',
  },
  {
    key: 'CANCEL_A658E5',
    value: 'Cancel',
  },
  {
    key: 'SAVE_0EC401',
    value: 'Save',
  },
  {
    key: 'SETTIN_8C0394',
    value: 'Settings',
  },
  {
    key: 'CONTEN_280CE1',
    value: 'Content',
  },
  {
    key: 'STYLES_E6B849',
    value: 'Styles',
  },
  {
    key: 'SUBJEC_12A9AA',
    value: 'Subject',
  },
  {
    key: 'INSERT_C2831C',
    value: 'Insert merge tags',
  },
  {
    key: 'EMAIL_4FEEB5',
    value: 'Email subject line',
  },
  {
    key: 'SENDER_EBFCFE',
    value: 'Sender info',
  },
  {
    key: 'MANAGE_D0A32C',
    value: 'Manage sender email',
  },
  {
    key: 'SENDER_FD3D30',
    value: 'Sender name',
  },
  {
    key: 'SEND_F_EFE1D3',
    value: 'Send from',
  },
  {
    key: 'UNVERI_3000CF',
    value: '(Unverified)',
  },
  {
    key: 'SUBJEC_99266C',
    value: 'Subject: Thank you for your review from *|STORE_NAME|*',
  },
  {
    key: 'BACK_E5F7A3',
    value: 'back',
  },
  {
    key: 'MORE_T_124870',
    value: 'More tabs',
  },
  {
    key: 'SETTIN_0505F2',
    value: 'Settings config',
  },
  {
    key: 'CONTEN_E81751',
    value: 'Content config',
  },
  {
    key: 'STYLES_DEFDBC',
    value: 'Styles config',
  },
  {
    key: 'LARGE_77453E',
    value: 'Large screen',
  },
  {
    key: 'MOBILE_A970D9',
    value: 'Mobile screen',
  },
  {
    key: 'SUBJEC_82B6BB',
    value: 'Subject:',
  },
  {
    key: 'THANK_B96025',
    value: 'Thank you for your review from *|STORE_NAME|*',
  },
  // follow-up email section
  {
    key: 'HEADER_A33B62',
    value: 'Header',
  },
  {
    key: 'TEXT_236EA7',
    value: 'Text',
  },
  {
    key: 'SOCIAL_A15DD4',
    value: 'Social links',
  },
  {
    key: 'IMAGE_C375AD',
    value: 'Image',
  },
  {
    key: 'BUTTON_B95643',
    value: 'Button',
  },
  {
    key: 'ADD_SE_C85FDF',
    value: 'Add section',
  },
  {
    key: 'FOOTER_77DF21',
    value: 'Footer',
  },
  // follow-up email style
  {
    key: 'DISPLA_E668DD',
    value: 'Display',
  },
  {
    key: 'FONT_A58BAE',
    value: 'Font',
  },
  {
    key: 'COLORS_0E9BE3',
    value: 'Colors',
  },
  {
    key: 'EMAIL_EE235B',
    value: 'Email',
  },
  {
    key: 'BACKGR_B15FFE',
    value: 'Background',
  },
  {
    key: 'CONTEN_D20F30',
    value: 'Content background',
  },
  {
    key: 'TEXT_270F1F',
    value: 'Text',
  },
  {
    key: 'TITLE_22DDEE',
    value: 'Title',
  },
  {
    key: 'DESCRI_A8075F',
    value: 'Description',
  },
  {
    key: 'HEADER_1AEBB5',
    value: 'Header',
  },
  {
    key: 'BUTTON_DE4696',
    value: 'Button',
  },
  {
    key: 'FOOTER_AFB7C1',
    value: 'Footer',
  },
  // email section - header
  {
    key: 'LOGO_942DF6',
    value: 'Logo',
  },
  {
    key: 'UPLOAD_AA6681',
    value: 'Upload image',
  },
  {
    key: 'SELECT_F4A499',
    value: 'Select image',
  },
  {
    key: 'OR_DRO_3F7AFD',
    value: 'or drop an image to upload',
  },
  {
    key: 'SUGGES_E3EF58',
    value: 'Suggested dimensions:',
  },
  {
    key: '100W_1_FB4FE0',
    value: '100(w) × 100(h) pixels.',
  },
  {
    key: 'MAX_FI_FC457D',
    value: 'Max. file size: 2 MB. Accepted formats: JPG/JPEG, GIF, and PNG.',
  },
  {
    key: 'IMAGE_1925C4',
    value: 'Image width',
  },
  {
    key: 'INSERT_D746E5',
    value: 'Insert merge tags',
  },
  {
    key: 'STORE_2480D6',
    value: 'Store name',
  },
  {
    key: 'STORE_F80714',
    value:
      'Store name will only show when you don’t have a logo for your store.',
  },
  {
    key: 'HEADER_26027C',
    value: 'Header image',
  },
  {
    key: '600W_3_7CB37F',
    value: '600(w) × 300(h) pixels.',
  },
  {
    key: 'DESTIN_1A44F9',
    value: 'Destination URL',
  },
  {
    key: 'STORE_0CDE6D',
    value: 'STORE',
  },
  {
    key: 'STORE_161D06',
    value: 'Store name',
  },
  // rich text
  {
    key: 'TEXT_8FEB7C',
    value: 'Text',
  },
  {
    key: 'HEADER_617A08',
    value: 'Header',
  },
  {
    key: 'INSERT_56EF85',
    value: 'Insert merge tags',
  },
  {
    key: 'DESCRI_B10BC8',
    value: 'Description',
  },
  {
    key: 'BLOCK_E84E38',
    value: 'Block  Paragraph',
  },
  {
    key: 'FONT_S_2C1380',
    value: 'Font size 24px',
  },
  {
    key: 'TEXT_C_6032CF',
    value: 'Text color Black',
  },
  {
    key: 'BACKGR_FBDDD9',
    value: 'Background color Black',
  },
  {
    key: 'BOLD_9908D5',
    value: 'Bold',
  },
  {
    key: 'ITALIC_F9741B',
    value: 'Italic',
  },
  {
    key: 'UNDERL_D0BA8F',
    value: 'Underline',
  },
  {
    key: 'STRIKE_EDA983',
    value: 'Strikethrough',
  },
  {
    key: 'INSERT_56C5C7',
    value: 'Insert/edit link',
  },
  {
    key: 'ALIGN_535F18',
    value: 'Align left',
  },
  {
    key: 'ALIGN_AA915F',
    value: 'Align center',
  },
  {
    key: 'ALIGN_A855C8',
    value: 'Align right',
  },
  {
    key: 'EMOJI_64AB06',
    value: 'Emoji',
  },
  {
    key: 'CLEAR_EE4AA7',
    value: 'Clear formatting',
  },
  {
    key: 'FONT_S_5E3C68',
    value: 'Font size 16px',
  },
  // social links
  {
    key: 'DISPLA_581A57',
    value: 'display',
  },
  {
    key: 'ICON_S_D8C89C',
    value: 'Icon shape',
  },
  {
    key: 'ROUND_32A4EB',
    value: 'Round',
  },
  {
    key: 'COLOR_45D183',
    value: 'Color',
  },
  {
    key: 'LOGOS_DEFA7E',
    value: 'logos',
  },
  {
    key: 'USE_FA_F46E80',
    value: 'Use *|FACEBOOK_SHARE|* to direct customers to share their reviews.',
  },
  {
    key: 'USE_TW_7A68C1',
    value: 'Use *|TWITTER_SHARE|* to direct customers to share their reviews.',
  },
  {
    key: 'ADD_LO_05D1B8',
    value: 'Add logo',
  },
  // image section
  {
    key: 'IMAGE_C89C4D',
    value: 'Image',
  },
  {
    key: 'REMOVE_6A562A',
    value: 'Remove',
  },
  {
    key: 'SUGGES_74C71B',
    value: 'Suggested dimensions:',
  },
  {
    key: '600W_3_0FF654',
    value: '600(w) × 300(h) pixels.',
  },
  {
    key: 'MAX_FI_296CE8',
    value: 'Max. file size: 2 MB. Accepted formats: JPG/JPEG, GIF, and PNG.',
  },
  {
    key: 'IMAGE_B2CAFD',
    value: 'Image width',
  },
  {
    key: 'DESTIN_A01E1B',
    value: 'Destination URL',
  },
  // button section
  {
    key: 'BUTTON_5E1612',
    value: 'Button',
  },
  {
    key: 'TEXT_6F08F1',
    value: 'Text',
  },
  {
    key: 'DESTIN_02CCBC',
    value: 'Destination URL',
  },
  // footer
  {
    key: 'FOOTER_4E6B20',
    value: 'Footer',
  },
  {
    key: 'INSERT_693580',
    value: 'Insert merge tags',
  },
  {
    key: 'DESCRI_67AF6E',
    value: 'Description',
  },
  {
    key: 'NO_LON_848E60',
    value: 'No longer want to receive these emails?',
  },
  {
    key: 'FOOTER_E355ED',
    value: 'FOOTER ADDRESS',
  },
  {
    key: 'ADDING_56DD92',
    value:
      'Adding a physical address to your marketing emails can reduce chances of your emails being marked as spam.',
  },
  {
    key: 'CENTER_75EBA1',
    value: '2711 Centerville Road Wilmington, Delaware 19808 United States',
  },
  // iamge with text
  {
    key: 'BLOCK_5C8C6C',
    value: 'Block background',
  },
  // Syndication and integrations
  {
    key: 'SYNDIC_475656',
    value: 'Syndication and integrations',
  },
  {
    key: 'CROSSS_95F46C',
    value: 'Cross-store syndication',
  },
  {
    key: 'IF_YOU_DBBF61',
    value:
      'If you have multiple stores selling the same products, you can create or join a store group to share reviews between your stores.',
  },
  {
    key: 'LEARN_9A0A30',
    value: 'Learn more',
  },
  {
    key: 'PRODUC_6F9A25',
    value:
      'Products are matched across stores using product variant SKUs or product handles. Please make sure product variant SKUs or product handles are identical across stores.',
  },
  {
    key: 'STORE_ECFFDB',
    value: 'Store group',
  },
  {
    key: 'THIS_G_DEB617',
    value: 'THIS GROUP TOKEN',
  },
  {
    key: 'STORES_42EBCA',
    value: 'Stores in this group',
  },
  {
    key: 'LEAVE_E55CE0',
    value: 'Leave group',
  },
  {
    key: 'TRUSTP_43ECDA',
    value: 'Trustpilot integration',
  },
  {
    key: 'HERE_Y_EB25ED',
    value:
      'Here you can set when to trigger a Trustpilot review invitation email.',
  },
  {
    key: 'IF_YOU_446F88',
    value:
      'If you have multiple store languages, you can set rules for which email template to send for each language.',
  },
  {
    key: 'AUTOMA_29DB3D',
    value: 'Automatically trigger Trustpilot review',
  },
  {
    key: 'INVITA_E2EDA6',
    value: 'invitations',
  },
  {
    key: 'INFO_7514D0',
    value: 'Info',
  },
  {
    key: 'ENTERP_EBA8D6',
    value: 'Enterprise',
  },
  {
    key: 'GAIN_B_22B713',
    value:
      'Gain better control over your Trustpilot review invitations, and manage all your reviews here in one place.',
  },
  {
    key: 'CONTAC_0FF472',
    value: 'Contact sales to unlock',
  },
  {
    key: 'TIKTOK_80367E',
    value: 'TikTok review syndication',
  },
  {
    key: 'BOOST_A5F3D3',
    value:
      'Boost brand visibility and sales by using AfterShip Feed to sync your product reviews to TikTok Shop.',
  },
  {
    key: 'SYNC_R_5A2A90',
    value: 'Sync reviews to TikTok with',
  },
  {
    key: 'SEAMLE_BF1A26',
    value:
      'Seamlessly sync your products and reviews to TikTok Shop with AfterShip Feed and sell to a wider audience.',
  },
  {
    key: 'TRY_C22005',
    value: 'Try',
  },
  // Answer invitations
  {
    key: 'ANSWER_857D00',
    value: 'Answer invitations',
  },
  {
    key: 'ANSWER_0E36A5',
    value: 'Answer invitation emails',
  },
  {
    key: 'INVITE_5FD532',
    value: 'Invite past customers to answer questions about your products.',
  },
  {
    key: 'VIEW_I_4F6E32',
    value: 'View invitation rules',
  },
  {
    key: 'EDIT_E_E3CA7C',
    value: 'Edit email template',
  },
  {
    key: 'TRIGGE_BEC4CD',
    value: 'Trigger settings',
  },
  {
    key: 'AUTOMA_DC1BD1',
    value:
      'Automatically send up to 5 answer invitation emails a day to past customers when a new question is submitted. You can also send answer invitations every day until you receive the desired number of answers.',
  },
  {
    key: 'AUTOIN_0BF943',
    value: 'Auto-invite past customers',
  },
  {
    key: 'ONLY_O_003A0A',
    value: 'Only once when a question is submitted',
  },
  {
    key: 'EVERY_AD9059',
    value: 'Every day until a question receives',
  },
  {
    key: 'ANSWER_DB4349',
    value: 'answers',
  },
  {
    key: 'SAVE_358E31',
    value: 'Save',
  },
  {
    key: 'SUBMIT_F01303',
    value: 'Submit answer',
  },
  // navigation
  {
    key: 'HOME_E64808',
    value: 'Home',
  },
  {
    key: 'REVIEW_4A6098',
    value: 'Reviews',
  },
  {
    key: 'ALL_RE_8EA358',
    value: 'All reviews',
  },
  {
    key: 'ALL_PR_98914A',
    value: 'All products',
  },
  {
    key: 'STORE_4EE003',
    value: 'Store reviews',
  },
  {
    key: 'IMPORT_1522DA',
    value: 'Import reviews',
  },
  {
    key: 'QA_03F697',
    value: 'Q&A',
  },
  {
    key: 'DISPLA_FED92D',
    value: 'Display settings',
  },
  {
    key: 'REVIEW_4D379B',
    value: 'Reviews widget',
  },
  {
    key: 'QA_WID_240B7D',
    value: 'Q&A widget',
  },
  {
    key: 'NEW_B016BD',
    value: 'New',
  },
  {
    key: 'STAR_R_F25BBB',
    value: 'Star ratings',
  },
  {
    key: 'FEATUR_BC4D10',
    value: 'Featured reviews',
  },
  {
    key: 'REVIEW_D02E5F',
    value: 'Reviews side tab',
  },
  {
    key: 'ALL_RE_419C6B',
    value: 'All reviews widget',
  },
  {
    key: 'REWARD_F22DBC',
    value: 'Rewards and referrals',
  },
  {
    key: 'REWARD_48175C',
    value: 'Reward program',
  },
  {
    key: 'REFERR_890204',
    value: 'Referral program',
  },
  {
    key: 'SOCIAL_AC5745',
    value: 'Social post templates',
  },
  {
    key: 'NET_PR_04FEFC',
    value: 'Net Promoter Score',
  },
  {
    key: 'YOUR_N_54887B',
    value: 'Your NPS',
  },
  {
    key: 'NPS_EM_0605D6',
    value: 'NPS email settings',
  },
  {
    key: 'NPS_EM_553AEB',
    value: 'NPS email history',
  },
  {
    key: 'POSTPU_2F2E07',
    value: 'Post-purchase NPS',
  },
  {
    key: 'REVIEW_F0D1D1',
    value: 'Review request emails',
  },
  {
    key: 'EMAIL_4050B9',
    value: 'Email settings',
  },
  {
    key: 'EMAIL_77B6FF',
    value: 'Email history',
  },
  {
    key: 'ANALYT_C137D1',
    value: 'Analytics',
  },
  {
    key: 'OVERVI_C2FD03',
    value: 'Overview',
  },
  {
    key: 'EMAIL_573496',
    value: 'Email',
  },
  {
    key: 'APPS_091BF9',
    value: 'Apps',
  },
  {
    key: 'IDEA_P_422CC5',
    value: 'Idea Portal',
  },
  {
    key: 'HELP_C_03048A',
    value: 'Help center',
  },
  {
    key: 'SETTIN_4E2395',
    value: 'Settings',
  },
];

module.exports = {
  allTexts,
};
