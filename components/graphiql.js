const graphql = `
{
  pageList {
    items {
      panels {
        _path
        _variation
        animations
        dark
        background {
          color
          path
          altText
        }
        activeMenuItem
        id
        layers {
          ... on TextLayerModel {
            id
            _model {
              title
            }
            leftBox {
              ... on TextItemModel {
                type
                id
                content {
                  plaintext
                }
                styles
              }
            }
            rightBox {
              ... on TextItemModel {
                type
                id
                content {
                  plaintext
                }
                styles
              }
              ... on PanelMenuModel {
                _model {
                  title
                }
                menuItems {
                  text
                  link
                  menuItemId
                }
              }
            }
            column {
              ... on TextItemModel {
                type
                id
                content {
                  plaintext
                }
                styles
              }
            }
          }
          ... on ImageLayerModel {
            _model {
              title
            }
            path
            altText {
              plaintext
            }
            id
            layerId
            basePosition
            fit
            overflow
          }
          ... on ShoppableMomentLayerModel {
            _model {
              title
            }
            fit
            imageSelector
            width
            height
            content {
              id
              text
              pricetag
              x
              y
            }
          }
        }
      }
    }
  }
}
`

export default graphql