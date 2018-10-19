module.exports = [
  `
  \`\`\`html
    <template>
      <vi-cell title="默认 default"></vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell title="显示边框" line></vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell
        title="带Icon" 
        iconName="setting">
      </vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell 
        title="只显示箭头" 
        iconName="setting" 
        link="{{true}}">
      </vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell 
        title="显示右侧描述信息" 
        iconName="setting" 
        link="{{true}}" 
        desc="我是描述...">
      </vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell 
        title="跳转到首页" 
        iconName="carame" 
        desc="linkType为:switchTab" 
        linkType="switchTab" 
        link="/pages/index/index">
      </vi-cell>
    </template>
  \`\`\`
  `,
  `
  \`\`\`html
    <template>
      <vi-cell-group title="带标题的cell-group">
        <vi-cell 
          title="带Icon" 
          iconName="setting">
        </vi-cell>
        <vi-cell 
          title="只显示箭头" 
          iconName="setting" 
          link="{{true}}">
        </vi-cell>
        <vi-cell 
          title="显示右侧描述信息" 
          iconName="setting" 
          link="{{true}}" 
          desc="我是描述...">
        </vi-cell>
        <vi-cell title="姓名" iconName="setting">
          <input slot="right" placeholder='请输入内容'></input>
        </vi-cell>
        <vi-cell 
          title="跳转到首页" 
          desc="linkType为:navigateBack" 
          linkType="navigateBack" 
          iconName="carame" 
          link="/pages/index/index">
        </vi-cell>
      </vi-cell-group>
    </template>
  \`\`\`
  `,
  `
  # vi-cell

  ## 使用

  > npm i vi-cell

  > npm i vi-cell-group

  > 使用微信开发者工具构建NPM并使用NPM模块

  > 打开小程序页面的json配置.

  \`\`\`json
  {
    "usingComponents": {
      "vi-cell": "vi-cell",
      "vi-cell-group: "vi-cell-group"
    }
  }
  \`\`\`

  ## 属性

  | 接口 | 数据类型 | 说明 | 选项 | 默认值 |
  | :--: | :--: | :--: | :--: | :--: |
  | link | String, Boolean | 当为string的时候，那么则是页面跳转，如果是Boolean，则只会显示箭头不会跳转地址 | 选填 | '' |
  | iconName | String | 内置的图标名称 | 选填 | '' |
  | iconColor | String | 内置的图标 颜色值 | 选填 | '#333' |
  | title | String | 列表的标题，也就是左侧的文字内容 | 选填 | 16 |
  | desc | String | 列表的描述，右侧的文字内容 | 选填 | '' |
  | line | Boolean | 是否出现上、下边框，如果在vi-cell-group中，该接口无效 | 选填 | false |
  | linkType | String | 路由跳转的类型，同微信小程序路由跳转API | 选填 | 'navigateTo' |

  ## slot 插槽

  | slot name | 说明 |
  | :--: | :--: |
  | icon | 用于替换、显示图标，如果和内置的图标接口一起使用，都会出现 |
  | title | 用于替换、显示左侧内容，如果和title接口一起使用，都会出现 |
  | right | 用于替换、显示右侧内容，如果和desc接口一起使用，都会出现 |

  ## event 事件

  | Event name | 说明 |
  | :--: | :--: |
  | click | vi-cell点击事件，受力面积为整个组件的真实宽度和真实高度 |

  ## 版本记录

  + v0.0.5 新增自定义事件click
  + v0.0.3 新增右侧内容插槽功能
  `,
  `
  # vi-cell-group

  ## 使用

  > **tips: 请和vi-cell组件配合使用**

  > npm i vi-cell-group

  > 使用微信开发者工具构建NPM并使用NPM模块


  \`\`\`json
  {
    "usingComponents": {
      "vi-cell-group": "vi-cell-group"
    }
  }
  \`\`\`

  ## 属性

  | 接口 | 数据类型 | 说明 | 选项 | 默认值 |
  | :--: | :--: | :--: | :--: | :--: |
  | title | String | vi-cell-group的title | 选填 | '' |
  | marginTop | Number | 上边距 | 选填 | 0 |
  `,
]