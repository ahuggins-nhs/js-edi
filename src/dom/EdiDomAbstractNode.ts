import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'

export abstract class EdiDomAbstractNode<T extends EdiDomNodeType = any> implements EdiDomNode<T> {
  nodeType: T
  parent?: EdiDomNode
  root: EdiDomNode<EdiDomNodeType.Root>
  protected _header?: EdiDomNode<EdiDomNodeType.Segment>
  protected _trailer?: EdiDomNode<EdiDomNodeType.Segment>
  protected _text?: string

  /** Add a child node to the dom. On value nodes, this is undefined. */
  addChildNode (child: EdiDomNode) {}

  /** Remove a child node from the dom. On value nodes, this is undefined. */
  removeChildNode (child: EdiDomNode) {}

  /** Sequentially walk the Document Object Model starting with this node. */
  * walk (): Generator<EdiDomNode> {}
  
  /** Returns the first element that is a descendant of node that matches selectors. */
  querySelector (selector: string): EdiDomNode<EdiDomNodeType.Element> {
    return
  }

  /** Returns all element descendants of node that match selectors. */
  querySelectorAll (selector: string): EdiDomNode<EdiDomNodeType.Element>[] {
    return
  }

  /** Return a cleaned EdiDomNode for serialization; removes circular references and verbose node types. */
  toJSON (): Partial<this> {
    const header = this._header
    const trailer = this._trailer
    const text = this._text
    const result = {
      header,
      ...this,
      text,
      trailer
    }

    delete result.nodeType
    delete result.parent
    delete result.root
    delete result._header
    delete result._trailer
    delete result._text

    return result
  }
}