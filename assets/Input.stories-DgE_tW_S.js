import{l as e,r as t}from"./iframe-Uw7WLrrZ.js";import{t as n}from"./jsx-runtime-BpS4Q5Vy.js";import{i as r,n as i}from"./src-CWE7cfpp.js";t();var a=e(n()),o={title:`Components/Input`,component:i,decorators:[e=>(0,a.jsx)(r,{children:(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`200px`,padding:`2rem`,width:`100%`},children:(0,a.jsx)(`div`,{style:{width:`100%`,maxWidth:`400px`},children:(0,a.jsx)(e,{})})})})],parameters:{layout:`centered`},argTypes:{variant:{control:{type:`select`},options:[`default`,`filled`,`outline`,`glass`]},type:{control:{type:`select`},options:[`text`,`email`,`password`,`number`,`tel`]},disabled:{control:{type:`boolean`}},required:{control:{type:`boolean`}}}};const s={args:{label:`Default Input`,placeholder:`Enter your text...`}},c={name:`Default Variant`,args:{variant:`default`,label:`Default Input`,placeholder:`This is the default variant`}},l={args:{variant:`filled`,label:`Filled Input`,placeholder:`This is the filled variant`}},u={args:{variant:`outline`,label:`Outline Input`,placeholder:`This is the outline variant`}},d={args:{variant:`glass`,label:`Glass Input`,placeholder:`This is the glass variant`},parameters:{backgrounds:{default:`dark`}}},f={args:{label:`Email Address`,placeholder:`Enter your email`,error:`Please enter a valid email address`,defaultValue:`invalid-email`}},p={args:{label:`Email Address`,placeholder:`Enter your email`,success:!0,helperText:`Email validated successfully`,defaultValue:`user@example.com`}},m={args:{label:`Password`,type:`password`,placeholder:`Enter your password`,helperText:`Must be at least 8 characters long`}},h={args:{label:`Disabled Input`,placeholder:`This input is disabled`,disabled:!0}},g={args:{label:`Required Field`,placeholder:`This field is required`,required:!0}},_={args:{type:`email`,label:`Email Address`,placeholder:`user@example.com`}},v={args:{type:`password`,label:`Password`,placeholder:`Enter your password`}},y={args:{type:`number`,label:`Age`,placeholder:`Enter your age`}},b={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,width:`100%`},children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`,color:`#374151`},children:`All Variants`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,a.jsx)(i,{variant:`default`,label:`Default Variant`,placeholder:`Default input`}),(0,a.jsx)(i,{variant:`filled`,label:`Filled Variant`,placeholder:`Filled input`}),(0,a.jsx)(i,{variant:`outline`,label:`Outline Variant`,placeholder:`Outline input`}),(0,a.jsx)(i,{variant:`glass`,label:`Glass Variant`,placeholder:`Glass input`})]})]})})},x={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,width:`100%`},children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`,color:`#374151`},children:`Input States`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,a.jsx)(i,{label:`Normal Input`,placeholder:`This is a normal input`,helperText:`This is helper text`}),(0,a.jsx)(i,{label:`Error State`,placeholder:`This input has an error`,error:`This field is required`}),(0,a.jsx)(i,{label:`Success State`,placeholder:`This input is successful`,success:!0,helperText:`Validation passed`}),(0,a.jsx)(i,{label:`Disabled Input`,placeholder:`This input is disabled`,disabled:!0}),(0,a.jsx)(i,{label:`Required Field`,placeholder:`This field is required`,required:!0})]})]})})},S={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,width:`100%`},children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`,color:`#374151`},children:`Input Types`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,a.jsx)(i,{type:`text`,label:`Text Input`,placeholder:`Enter text`}),(0,a.jsx)(i,{type:`email`,label:`Email Input`,placeholder:`user@example.com`}),(0,a.jsx)(i,{type:`password`,label:`Password Input`,placeholder:`Enter password`}),(0,a.jsx)(i,{type:`number`,label:`Number Input`,placeholder:`Enter number`}),(0,a.jsx)(i,{type:`tel`,label:`Telephone Input`,placeholder:`Enter phone number`})]})]})})},C={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,width:`100%`},children:[(0,a.jsx)(i,{placeholder:`Input without label`}),(0,a.jsx)(i,{placeholder:`With helper text`,helperText:`This is helper text without label`}),(0,a.jsx)(i,{placeholder:`With error`,error:`This field has an error`})]})},w={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`,width:`100%`},children:[(0,a.jsx)(`h3`,{style:{marginBottom:`0.5rem`,color:`#374151`},children:`Login Form`}),(0,a.jsx)(i,{type:`email`,label:`Email Address`,placeholder:`Enter your email`,required:!0}),(0,a.jsx)(i,{type:`password`,label:`Password`,placeholder:`Enter your password`,required:!0,helperText:`Must be at least 8 characters`})]})},T={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,width:`100%`},children:[(0,a.jsx)(`h3`,{style:{marginBottom:`0.5rem`,color:`#374151`},children:`Registration Form`}),(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`},children:[(0,a.jsx)(i,{label:`First Name`,placeholder:`John`,required:!0}),(0,a.jsx)(i,{label:`Last Name`,placeholder:`Doe`,required:!0})]}),(0,a.jsx)(i,{type:`email`,label:`Email`,placeholder:`john.doe@example.com`,required:!0}),(0,a.jsx)(i,{type:`tel`,label:`Phone Number`,placeholder:`+1 (555) 123-4567`}),(0,a.jsx)(i,{type:`password`,label:`Password`,placeholder:`Create password`,required:!0})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Input",
    placeholder: "Enter your text..."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Default Variant",
  args: {
    variant: "default",
    label: "Default Input",
    placeholder: "This is the default variant"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    label: "Filled Input",
    placeholder: "This is the filled variant"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    label: "Outline Input",
    placeholder: "This is the outline variant"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "glass",
    label: "Glass Input",
    placeholder: "This is the glass variant"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    success: true,
    helperText: "Email validated successfully",
    defaultValue: "user@example.com"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Must be at least 8 characters long"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "user@example.com"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    label: "Age",
    placeholder: "Enter your age"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%"
  }}>
      <div>
        <h3 style={{
        marginBottom: "1rem",
        color: "#374151"
      }}>All Variants</h3>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <Input variant="default" label="Default Variant" placeholder="Default input" />
          <Input variant="filled" label="Filled Variant" placeholder="Filled input" />
          <Input variant="outline" label="Outline Variant" placeholder="Outline input" />
          <Input variant="glass" label="Glass Variant" placeholder="Glass input" />
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%"
  }}>
      <div>
        <h3 style={{
        marginBottom: "1rem",
        color: "#374151"
      }}>Input States</h3>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <Input label="Normal Input" placeholder="This is a normal input" helperText="This is helper text" />
          <Input label="Error State" placeholder="This input has an error" error="This field is required" />
          <Input label="Success State" placeholder="This input is successful" success={true} helperText="Validation passed" />
          <Input label="Disabled Input" placeholder="This input is disabled" disabled={true} />
          <Input label="Required Field" placeholder="This field is required" required={true} />
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%"
  }}>
      <div>
        <h3 style={{
        marginBottom: "1rem",
        color: "#374151"
      }}>Input Types</h3>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <Input type="text" label="Text Input" placeholder="Enter text" />
          <Input type="email" label="Email Input" placeholder="user@example.com" />
          <Input type="password" label="Password Input" placeholder="Enter password" />
          <Input type="number" label="Number Input" placeholder="Enter number" />
          <Input type="tel" label="Telephone Input" placeholder="Enter phone number" />
        </div>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <Input placeholder="Input without label" />
      <Input placeholder="With helper text" helperText="This is helper text without label" />
      <Input placeholder="With error" error="This field has an error" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%"
  }}>
      <h3 style={{
      marginBottom: "0.5rem",
      color: "#374151"
    }}>Login Form</h3>
      <Input type="email" label="Email Address" placeholder="Enter your email" required={true} />
      <Input type="password" label="Password" placeholder="Enter your password" required={true} helperText="Must be at least 8 characters" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <h3 style={{
      marginBottom: "0.5rem",
      color: "#374151"
    }}>
        Registration Form
      </h3>
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem"
    }}>
        <Input label="First Name" placeholder="John" required />
        <Input label="Last Name" placeholder="Doe" required />
      </div>
      <Input type="email" label="Email" placeholder="john.doe@example.com" required />
      <Input type="tel" label="Phone Number" placeholder="+1 (555) 123-4567" />
      <Input type="password" label="Password" placeholder="Create password" required />
    </div>
}`,...T.parameters?.docs?.source}}};const E=[`Default`,`DefaultVariant`,`Filled`,`Outline`,`Glass`,`WithError`,`WithSuccess`,`WithHelperText`,`Disabled`,`Required`,`Email`,`Password`,`Number`,`AllVariantsShowcase`,`AllStatesShowcase`,`InputTypesShowcase`,`WithoutLabel`,`LoginFormExample`,`RegistrationFormExample`];export{x as AllStatesShowcase,b as AllVariantsShowcase,s as Default,c as DefaultVariant,h as Disabled,_ as Email,l as Filled,d as Glass,S as InputTypesShowcase,w as LoginFormExample,y as Number,u as Outline,v as Password,T as RegistrationFormExample,g as Required,f as WithError,m as WithHelperText,p as WithSuccess,C as WithoutLabel,E as __namedExportsOrder,o as default};