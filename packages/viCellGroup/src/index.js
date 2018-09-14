Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    marginTop: {
      type: Number,
      value: 0
    }
  },
  relations: {
    '../vi_cell/index': {
      type: 'child',
      linked: function (target) {
        this._updateIsLastCell()
      },
      linkChanged: function (target) {
        this._updateIsLastCell()
      },
      unlinked: function (target) {
        this._updateIsLastCell()
      }
    }
  },
  methods: {
    _updateIsLastCell() {
      let cells = this.getRelationNodes('../vi_cell/index');
      const len = cells.length;

      if (len > 0) {
        let lastIndex = len - 1;

        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index !== lastIndex);
        });
      }
    }
  }
})