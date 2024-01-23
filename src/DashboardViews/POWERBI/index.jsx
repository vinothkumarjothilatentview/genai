
const POWERBI = (props) => {
  const demos = {
    soundcloud:
      '<iframe width="100%" height="'+props.height+'" scrolling="no" frameborder="no" allow="autoplay" src="'+props.URL+'"></iframe>',
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  return (
    <div className="powerbi">
      <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
    </div>
  );
}

export default POWERBI;
