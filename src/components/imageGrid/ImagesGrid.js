import React, { Component } from 'react';

import Button from '../button';

class ImagesGrid extends Component {
  render() {
    return(
      <div className="content">
        <section className="grid">
        // write images
        </section>
        // thong bao error
        <Button loading={ false }>Loadmore</Button>
      </div>
    )
  }
}

export default ImagesGrid;