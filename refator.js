const generateWeek = () => {
    let newEvents = []
    let startWeek = moment(actualDate).startOf('week');
    let endWeek = moment(actualDate).endOf('week');

    let id = 0;
    let title = personSelected && personSelected.profissao ? personSelected.profissao.nome : "Sem profissão";

    scales.map(scale => {
      if (endWeek.diff(moment(scale.initialDate), 'days') < 0)
        return false

      let e = moment(scale.initialDate);
      
      while (e.diff(moment(endWeek), 'days') <= 0) {
        let start = e;
        let end = moment(e).add(Number(scale.duration), 'hours');
        let first = true, isContinuation = false;
        // Gera um evento único que pode ser quebrado em vários dias
        if (Number(scale.interval) == 0) {
            while (moment(start).endOf('day').isSameOrBefore(moment(end).startOf('day'))) {
              newEvents.push({
                title,
                start: start.toDate(),
                end: moment(start).endOf('day').toDate(),
                allDay: false,
                first,
                isContinuation,
                hasContinuation: true,
                scaleId: scale.localId,
                id
              });
              first = false
              isContinuation = true
              start.startOf('day').add(1, 'day')
            }
            newEvents.push({
              title,
              start: start.toDate(),
              end: end.toDate(),
              allDay: false,
              first,
              isContinuation,
              hasContinuation: false,
              scaleId: scale.localId,
              id: id++
            });
        } else {
          if (scale.finishDate && moment(e).startOf('day').diff(moment(scale.finishDate).startOf('day'), 'days') > 0) {
            break
          }
          // Gera enventos de continuação em outro dia
          while (moment(start).endOf('day').isSameOrBefore(moment(end).startOf('day'))) {
            newEvents.push({
              title,
              start: start.toDate(),
              end: moment(start).endOf('day').toDate(),
              allDay: false,
              first,
              isContinuation,
              hasContinuation: true,
              scaleId: scale.localId,
              id
            });
            first = false
            isContinuation = true
            start.startOf('day').add(1, 'day')
          }
          newEvents.push({
            title,
            start: start.toDate(),
            end: end.toDate(),
            allDay: false,
            first,
            isContinuation,
            hasContinuation: false,
            scaleId: scale.localId,
            id: id++
          });

          let diffToEndOfDay = moment(start).endOf('day').add(1, 'second').diff(start, 'hours');
          // Eventos no mesmo dia
          while (diffToEndOfDay > ((Number(scale.duration) + Number(scale.interval)))) {
            start.add((Number(scale.duration) + Number(scale.interval)), 'hours');
            end = moment(start).add(Number(scale.duration));

            newEvents.push({
              title,
              start: start.toDate(),
              end: end.toDate(),
              allDay: false,
              first,
              isContinuation,
              hasContinuation: false,
              scaleId: scale.localId,
              id: id++
            });
            const newDiffEnd = moment(start).endOf('day').add(1, 'second').diff(start, 'hours');
            if (newDiffEnd < (Number(scale.duration) + Number(scale.interval))) {
              diffToEndOfDay = (Number(scale.duration) + Number(scale.interval)) - newDiffEnd;
            } else {
              diffToEndOfDay = newDiffEnd;
            }
          }
        }
        e = moment(end).add(Number(scale.interval), 'hours');
      }
      // /\ /\ /\ Jota Aguiar
    })
    setEvents(state => {
      return [...newEvents]
    });
  }