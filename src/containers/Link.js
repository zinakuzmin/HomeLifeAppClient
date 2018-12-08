

class Link extends React.Component {
    constructor(props){
        super(props);
        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl(){
        window.location.replace(this.props.newUrl)
    }

    render() {
        return (
            <div>
                <Button onClick={this.changeUrl()}
                        text={`Go to ${this.props.newUrl}`}
                        className={'btn btn-blue'}
                        />
                {this.props.children}
            </div>
        )
    }
}