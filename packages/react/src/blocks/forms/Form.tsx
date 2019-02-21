import React from 'react'
import { BuilderBlock } from '../../decorators/builder-block.decorator'

export interface FormProps {
  attributes?: any
  name?: string
  action?: string
  method?: string
}

@BuilderBlock({
  name: 'Form:Form',
  image:
    'https://cdn.builder.codes/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5',
  inputs: [
    {
      name: 'name',
      type: 'string',
      advanced: true,
    },
    // Custom editor:
    // Send data to:
    //    URL endpoint
    //    Email
    //    Zapier
    //    JSS
    {
      name: 'action',
      type: 'string',
      advanced: true
    },
    {
      name: 'method',
      type: 'string',
      advanced: true
    }
    // TODO: json vs serialized (i.e. send on client or not)
    // TODO: success/fail stuff
  ],
  ...({
    noWrap: true
  } as any),
  // TODO: defaultChildren with two inputs and submit button
  canHaveChildren: true,
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      responsiveStyles: {
        large: {
          marginTop: '10px'
        }
      },
      component: {
        name: 'Text',
        options: {
          text: '<span>Enter your name</span>'
        }
      }
    },
    {
      '@type': '@builder.io/sdk:Element',
      responsiveStyles: {
        large: {
          marginTop: '10px'
        }
      },
      component: {
        name: 'Form:Input',
        options: {
          name: 'name',
          placeholder: 'Jane Doe',
        }
      }
    },
    {
      '@type': '@builder.io/sdk:Element',
      responsiveStyles: {
        large: {
          marginTop: '10px'
        }
      },
      component: {
        name: 'Text',
        options: {
          text: '<span>Enter your email</span>'
        }
      }
    },
    {
      '@type': '@builder.io/sdk:Element',
      responsiveStyles: {
        large: {
          marginTop: '10px'
        }
      },
      component: {
        name: 'Form:Input',
        options: {
          name: 'name',
          placeholder: 'jane@doe.com',
        }
      }
    },
    {
      '@type': '@builder.io/sdk:Element',
      responsiveStyles: {
        large: {
          marginTop: '10px'
        }
      },
      component: {
        name: 'Form:SubmitButton',
        options: {
          text: 'Submit',
        }
      }
    }
  ]
})
export class Form extends React.Component<FormProps> {
  render() {
    return (
      // TODO: JS data bindings
      <form
        action={this.props.action}
        method={this.props.method}
        name={this.props.name}
        {...this.props.attributes}
      />
    )
  }
}
