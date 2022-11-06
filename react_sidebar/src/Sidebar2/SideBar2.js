import React from 'react'
import SubSideBar from './SubSideBar'

function SideBar2() {
  const data = [
    { name: 'home', label: 'Home'
    },
    {
      name: 'billing',
      label: 'Billing',
      items: [
        { name: 'statements', label: 'Statements'
        },
        {
          name: 'settings 2',
          label: 'Settings',
          items: [
            { name: 'profile s3', label: 'Profile'
            },
            {
              name: 'settings 2',
              label: 'Settings',
              items: [
                { name: 'profile s3', label: 'Profile'
                },
                { name: 'profile2 s44', label: 'Profile'
                },
                {
                  name: 'settings 2',
                  label: 'Settings',
                  items: [
                    { name: 'profile s3', label: 'Profile'
                    },
                    { name: 'profile2 s44', label: 'Profile'
                    },
                    { name: 'profile3 s55', label: 'Profile'
                    }
                  ],
                },
                {
                  name: 'settings 2',
                  label: 'Settings',
                  items: [
                    { name: 'profile s3', label: 'Profile'
                    },
                    { name: 'profile2 s44', label: 'Profile'
                    },
                    { name: 'profile3 s55', label: 'Profile'
                    }
                  ],
                },
                { name: 'profile3 s55', label: 'Profile'
                }
              ],
            },
            { name: 'profile2 s44', label: 'Profile'
            },
            { name: 'profile3 s55', label: 'Profile'
            }
          ],
        },
        { name: 'reports', label: 'Reports'
        },
        {
          name: 'settings 2',
          label: 'Settings',
          items: [
            { name: 'profile s3', label: 'Profile'
            },
            { name: 'profile2 s44', label: 'Profile'
            },
            {
              name: 'settings 2',
              label: 'Settings',
              items: [
                { name: 'profile s3', label: 'Profile'
                },
                { name: 'profile2 s44', label: 'Profile'
                },
                { name: 'profile3 s55', label: 'Profile'
                }
              ],
            },
            { name: 'profile3 s55', label: 'Profile'
            }
          ],
        },
      ],
    },
    {
      name: 'settings',
      label: 'Settings',
      items: [
        { name: 'profile', label: 'Profile'
        },
        { name: 'profile2', label: 'Profile'
        },
        { name: 'profile3', label: 'Profile'
        },
        {
          name: 'settings 2',
          label: 'Settings',
          items: [
            { name: 'profile s3', label: 'Profile'
            },
            { name: 'profile2 s44', label: 'Profile'
            },
            { name: 'profile3 s55', label: 'Profile'
            }
          ],
        },
      ],
    },
  ]
  
  return (
    <div>
        { data.map((item, index) => <SubSideBar data = {item} />)}
    </div>
  )
}

export default SideBar2