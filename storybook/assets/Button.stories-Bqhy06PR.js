import{l as e,r as t}from"./iframe-BBGiqwhM.js";import{t as n}from"./jsx-runtime-Dcs239Pt.js";import{i as r,r as i}from"./src-BpK7_7NF.js";t();var a=e(n()),o={title:`Components/Button`,component:i,decorators:[e=>(0,a.jsx)(r,{children:(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`200px`,padding:`2rem`},children:(0,a.jsx)(e,{})})})],parameters:{layout:`centered`},argTypes:{variant:{control:{type:`select`},options:[`primary`,`secondary`,`outline`,`ghost`,`danger`,`glass`]},size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},loading:{control:{type:`boolean`}},disabled:{control:{type:`boolean`}}}};const s={args:{variant:`primary`,size:`md`,children:`Button`}},c={args:{variant:`primary`,children:`Primary Button`}},l={args:{variant:`secondary`,children:`Secondary Button`}},u={args:{variant:`outline`,children:`Outline Button`}},d={args:{variant:`ghost`,children:`Ghost Button`}},f={args:{variant:`danger`,children:`Danger Button`}},p={args:{variant:`glass`,children:`Glass Button`},parameters:{backgrounds:{default:`dark`}}},m={args:{size:`sm`,children:`Small Button`}},h={name:`Medium`,args:{size:`md`,children:`Medium Button`}},g={args:{size:`lg`,children:`Large Button`}},_={args:{loading:!0,children:`Loading Button`}},v={args:{disabled:!0,children:`Disabled Button`}},y={args:{icon:`⭐`,iconPosition:`left`,children:`Button with Icon`}},b={args:{icon:`➡️`,iconPosition:`right`,children:`Button with Icon`}},x={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,alignItems:`center`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`},children:`All Variants`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,a.jsx)(i,{variant:`primary`,children:`Primary`}),(0,a.jsx)(i,{variant:`secondary`,children:`Secondary`}),(0,a.jsx)(i,{variant:`outline`,children:`Outline`}),(0,a.jsx)(i,{variant:`ghost`,children:`Ghost`}),(0,a.jsx)(i,{variant:`danger`,children:`Danger`}),(0,a.jsx)(i,{variant:`glass`,children:`Glass`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`},children:`All Sizes`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,a.jsx)(i,{size:`sm`,variant:`primary`,children:`Small`}),(0,a.jsx)(i,{size:`md`,variant:`primary`,children:`Medium`}),(0,a.jsx)(i,{size:`lg`,variant:`primary`,children:`Large`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{style:{marginBottom:`1rem`},children:`States`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,a.jsx)(i,{loading:!0,children:`Loading`}),(0,a.jsx)(i,{disabled:!0,children:`Disabled`}),(0,a.jsx)(i,{icon:`⭐`,iconPosition:`left`,children:`With Icon`})]})]})]})},S={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,minWidth:`600px`},children:[`primary`,`secondary`,`outline`,`ghost`,`danger`,`glass`].map(e=>(0,a.jsxs)(`div`,{style:{border:`1px solid #e5e7eb`,padding:`1rem`,borderRadius:`0.5rem`},children:[(0,a.jsxs)(`h3`,{style:{marginBottom:`1rem`,textTransform:`capitalize`,color:`#374151`},children:[e,` Variant`]}),(0,a.jsx)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`,flexWrap:`wrap`},children:[`sm`,`md`,`lg`].map(t=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,a.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#6b7280`},children:t}),(0,a.jsx)(i,{variant:e,size:t,children:`Button`})]},t))})]},e))}),parameters:{backgrounds:{default:`light`,values:[{name:`light`,value:`#ffffff`},{name:`dark`,value:`#1f2937`}]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Button"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Danger Button"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "glass",
    children: "Glass Button"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small Button"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Medium",
  // Explicit name to avoid conflict
  args: {
    size: "md",
    children: "Medium Button"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large Button"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Loading Button"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "⭐",
    iconPosition: "left",
    children: "Button with Icon"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "➡️",
    iconPosition: "right",
    children: "Button with Icon"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center"
  }}>
      <div>
        <h3 style={{
        marginBottom: "1rem"
      }}>All Variants</h3>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="glass">Glass</Button>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: "1rem"
      }}>All Sizes</h3>
        <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
          <Button size="sm" variant="primary">
            Small
          </Button>
          <Button size="md" variant="primary">
            Medium
          </Button>
          <Button size="lg" variant="primary">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: "1rem"
      }}>States</h3>
        <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button icon="⭐" iconPosition="left">
            With Icon
          </Button>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    minWidth: "600px"
  }}>
      {(["primary", "secondary", "outline", "ghost", "danger", "glass"] as const).map(variant => <div key={variant} style={{
      border: "1px solid #e5e7eb",
      padding: "1rem",
      borderRadius: "0.5rem"
    }}>
          <h3 style={{
        marginBottom: "1rem",
        textTransform: "capitalize",
        color: "#374151"
      }}>
            {variant} Variant
          </h3>
          <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
            {(["sm", "md", "lg"] as const).map(size => <div key={size} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem"
        }}>
                <span style={{
            fontSize: "0.75rem",
            color: "#6b7280"
          }}>
                  {size}
                </span>
                <Button variant={variant} size={size}>
                  Button
                </Button>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    backgrounds: {
      default: "light",
      values: [{
        name: "light",
        value: "#ffffff"
      }, {
        name: "dark",
        value: "#1f2937"
      }]
    }
  }
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Primary`,`Secondary`,`Outline`,`Ghost`,`Danger`,`Glass`,`Small`,`Medium`,`Large`,`LoadingState`,`DisabledState`,`WithLeftIcon`,`WithRightIcon`,`AllVariantsShowcase`,`VariantsAndSizesGrid`];export{x as AllVariantsShowcase,f as Danger,s as Default,v as DisabledState,d as Ghost,p as Glass,g as Large,_ as LoadingState,h as Medium,u as Outline,c as Primary,l as Secondary,m as Small,S as VariantsAndSizesGrid,y as WithLeftIcon,b as WithRightIcon,C as __namedExportsOrder,o as default};