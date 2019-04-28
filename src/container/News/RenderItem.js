import React, { PureComponent } from "react"


_renderItem = ({ item, index }) => (
    <NewsHOC
        key={index}
        id={index}
        author={item.author}
        title={item.title}
        publishedAt={item.publishedAt}
        content={item.description}
        url={item.url}
        sourceName={item.source.name}
        onPressFn={this.onPressFn}
    />
)

class RenderItem extends PureComponent {
    render() {
        return (

        )
    }
}