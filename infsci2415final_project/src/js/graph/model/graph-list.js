define(function () {
  var graphs = {
    graphList: [
      {
        id: 'g1',
        title: 'Relation between tags in stackoverflow',
        description:
          'This graph shows the relation between first 60 tags and each tags first 60 related tags.',
        thumbnail: 'templates/images/g1.png',
        htmlTitle: 'stackoverflow-tag-relations',
        tags: ['stackoverflow', 'programming'],
      },
      {
        id: 'g2',
        title: 'Which is the trending tag last year?',
        description:
          'You can sort the data in yearly wise by clicking on the bottom year tab. The tags will be rearranged in descending order',
        thumbnail: 'templates/images/g2.png',
        htmlTitle: 'stackoverflow-tag-trending-yearly',
        tags: ['stackoverflow', 'programming'],
      },
      {
        id: 'g3',
        title: 'How tags are growing ?',
        description:
          'This graph shows the growth of tags in each month.The vertical position of circle represent the count of questions in a month.',
        thumbnail: 'templates/images/g3.png',
        htmlTitle: 'stackoverflow-tag-growth-rate-montly',
        tags: ['stackoverflow', 'programming'],
      },
    ],
    tags: ['all', 'stackoverflow', 'random', 'filims'],
  };
  return graphs;
});
