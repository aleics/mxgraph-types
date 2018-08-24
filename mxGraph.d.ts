declare class mxGraph {
  //#region variables

  // Holds the mouse event listeners.
  mouseListeners: any[];

  // Holds the state of the mouse button.
  isMouseDown: boolean;

  // Holds the mxGraphModel that contains the cells to be displayed.
  model: mxGraphModel;

  // Holds the mxGraphView that caches the mxCellStates for the cells.
  view: mxGraphView;

  // Holds the mxStylesheet that defines the appearance of the cells.
  stylesheet: mxStylesheet;

  // Holds the mxGraphSelectionModel that models the current selection.
  selectionModel: mxGraphSelectionModel;

  // Holds the mxCellEditor that is used as the in-place editing.
  cellEditor: mxCellEditor;
  cellRenderer: mxCellRenderer;
  multiplicities: mxMultiplicities;
  renderHint: any;
  dialect: mxDialegConstants;
  gridSize: number;
  gridEnabled: boolean;
  portsEnabled: boolean;
  nativeDoubleClickEnabled: boolean;
  doubleTapEnabled: boolean;
  doubleTapTimeout: number;
  doubleTapTolerance: number;
  lastTouchX: number;
  lastTouchY: number;
  lastTouchTime: number;
  tapAndHoldEnabled: boolean;
  tapAndHoldDelay: number;
  tapAndHoldInProgress: boolean;
  tapAndHoldValid: boolean;
  initialTouchX: number;
  initialTouchY: number;
  tolerance: number;
  defaultOverlap: number;
  defaultParent: mxCell;
  alternateEdgeStyle: mxCell;
  backgroundImage: mxImage;
  pageVisible: boolean;
  pageBreaksVisible: boolean;
  pageBreakColor: string;
  pageBreakDashed: boolean;
  minPageBreakDist: number;
  preferPageSize: boolean;
  pageFormat:  mxFormatConstants;
  pageScale: number;
  enabled: boolean;
  escapeEnabled: boolean;
  invokesStopCellEditing: boolean;
  enterStopsCellEditing: boolean;
  useScrollbarsForPanning: boolean;
  exportEnabled: boolean;
  importEnabled: boolean;
  cellsLocked: boolean;
  cellsCloneable: boolean;
  foldingEnabled: boolean;
  cellsEditable: boolean;
  cellsDeletable: boolean;
  cellsMovable: boolean
  edgeLabelsMovable: boolean;
  vertexLabelsMovable: boolean;
  dropEnabled: boolean;
  splitEnabled: boolean;
  cellsResizable: boolean;
  cellsBendable: boolean;
  cellsSelectable: boolean;
  cellsDisconnectable: boolean;
  autoSizeCells: boolean;
  autoSizeCellsOnAdd: boolean;
  autoScroll: boolean;
  ignoreScrollbars: boolean;
  translateToScrollPosition: boolean;
  timerAutoScroll: boolean;
  allowAutoPanning: boolean;
  autoExtend: boolean;
  maximumGraphBounds: mxRectangle;
  minimumGraphSize: mxRectangle;
  minimumContainerSize: mxRectangle;
  maximumContainerSize: mxRectangle;
  resizeContainer: boolean;
  border: number;
  keepEdgesInForeground: boolean;
  keepEdgesInBackground: boolean;
  allowNegativeCoordinates: boolean;
  constrainChildren: boolean;
  constrainRelativeChildren: boolean;
  extendParents: boolean;
  extendParentsOnAdd: boolean;
  recursiveResize: boolean;
  collapseToPreferredSize: boolean;
  zoomFactor: number;
  keepSelectionVisibleOnZoom: boolean;
  centerZoom: boolean;
  resetViewOnRootChange: boolean;
  resetEdgesOnResize: boolean;
  resetEdgesOnMove: boolean;
  resetEdgesOnConnect: boolean;
  allowLoops: boolean;
  defaultLoopStyle: mxEdgeStyle;
  multigraph: boolean;
  connectableEdges: boolean;
  allowDanglingEdges: boolean;
  cloneInvalidEdges: boolean;
  disconnectOnMove: boolean;
  labelsVisible: boolean;
  htmlLabels: boolean;
  swimlaneSelectionEnabled: boolean;
  swimlaneNesting: boolean;
  swimlaneIndicatorColorAttribute: mxColorConstants;
  imageBundles: any;
  minFitScale: number;
  maxFitScale: number;
  panDx: number;
  panDy: number;
  collapsedImage: mxImage;
  expandedImage: mxImage;
  warningImage: mxImage;
  alreadyConnectedResource: 'alreadyConnected' | '';
  containsValidationErrorsResource: 'containsValidationErrors' | '';
  collapseExpandResource: 'collapse-expand' | '';

  //#endregion


  init
  createHandlers
  createTooltipHandler
  createSelectionCellsHandler
  createConnectionHandler
  createGraphHandler
  createPanningHandler
  createPopupMenuHandler
  createSelectionModel
  createStylesheet
  createGraphView
  createCellRenderer
  createCellEditor
  getModel
  getView
  getStylesheet
  setStylesheet
  getSelectionModel
  setSelectionModel
  getSelectionCellsForChanges
  graphModelChanged
  getRemovedCellsForChanges
  processChange
  removeStateForCell
  Overlays
  addCellOverlay
  getCellOverlays
  removeCellOverlay
  removeCellOverlays
  clearCellOverlays
  setCellWarning
  In
  startEditing
  startEditingAtCell
  getEditingValue
  stopEditing
  labelChanged
  cellLabelChanged
  Event
  escape
  click
  dblClick
  tapAndHold
  scrollPointToVisible
  createPanningManager
  getBorderSizes
  getPreferredPageSize
  fit
  sizeDidChange
  doResizeContainer
  updatePageBreaks
  Cell
  getCellStyle
  postProcessCellStyle
  setCellStyle
  toggleCellStyle
  toggleCellStyles
  setCellStyles
  toggleCellStyleFlags
  setCellStyleFlags
  Cell
  alignCells
  flipEdge
  addImageBundle
  removeImageBundle
  getImageFromBundles
  Order
  orderCells
  cellsOrdered
  Grouping
  groupCells
  getCellsForGroup
  getBoundsForGroup
  createGroupCell
  ungroupCells
  removeCellsAfterUngroup
  removeCellsFromParent
  updateGroupBounds
  getBoundingBox
  Cell
  cloneCells
  insertVertex
  createVertex
  insertEdge
  createEdge
  addEdge
  addCell
  addCells
  cellsAdded
  autoSizeCell
  removeCells
  cellsRemoved
  splitEdge
  Cell
  toggleCells
  cellsToggled
  Folding
  foldCells
  cellsFolded
  swapBounds
  updateAlternateBounds
  addAllEdges
  getAllEdges
  Cell
  updateCellSize
  cellSizeUpdated
  getPreferredSizeForCell
  resizeCell
  resizeCells
  cellsResized
  cellResized
  resizeChildCells
  constrainChildCells
  scaleCell
  extendParent
  Cell
  importCells
  moveCells
  cellsMoved
  translateCell
  getCellContainmentArea
  getMaximumGraphBounds
  constrainChild
  resetEdges
  resetEdge
  Cell
  getOutlineConstraint
  getAllConnectionConstraints
  getConnectionConstraint
  setConnectionConstraint
  getConnectionPoint
  connectCell
  cellConnected
  disconnectGraph
  Drilldown
  getCurrentRoot
  getTranslateForRoot
  isPort
  getTerminalForPort
  getChildOffsetForCell
  enterGroup
  exitGroup
  home
  isValidRoot
  Graph
  getGraphBounds
  getCellBounds
  getBoundingBoxFromGeometry
  refresh
  snap
  panGraph
  zoomIn
  zoomOut
  zoomActual
  zoomTo
  center
  zoom
  zoomToRect
  scrollCellToVisible
  scrollRectToVisible
  getCellGeometry
  isCellVisible
  isCellCollapsed
  isCellConnectable
  isOrthogonal
  isLoop
  isCloneEvent
  isTransparentClickEvent
  isToggleEvent
  isGridEnabledEvent
  isConstrainedEvent
  isIgnoreTerminalEvent
  Validation
  validationAlert
  isEdgeValid
  getEdgeValidationError
  validateEdge
  validateGraph
  getCellValidationError
  validateCell
  Graph
  getBackgroundImage
  setBackgroundImage
  getFoldingImage
  convertValueToString
  getLabel
  isHtmlLabel
  isHtmlLabels
  setHtmlLabels
  isWrapping
  isLabelClipped
  getTooltip
  getTooltipForCell
  getLinkForCell
  getCursorForMouseEvent
  getCursorForCell
  getStartSize
  getImage
  getVerticalAlign
  getIndicatorColor
  getIndicatorGradientColor
  getIndicatorShape
  getIndicatorImage
  getBorder
  setBorder
  isSwimlane
  Graph
  isResizeContainer
  setResizeContainer
  isEnabled
  setEnabled
  isEscapeEnabled
  setEscapeEnabled
  isInvokesStopCellEditing
  setInvokesStopCellEditing
  isEnterStopsCellEditing
  setEnterStopsCellEditing
  isCellLocked
  isCellsLocked
  setCellsLocked
  getCloneableCells
  isCellCloneable
  isCellsCloneable
  setCellsCloneable
  getExportableCells
  canExportCell
  getImportableCells
  canImportCell
  isCellSelectable
  isCellsSelectable
  setCellsSelectable
  getDeletableCells
  isCellDeletable
  isCellsDeletable
  setCellsDeletable
  isLabelMovable
  isCellRotatable
  getMovableCells
  isCellMovable
  isCellsMovable
  setCellsMovable
  isGridEnabled
  setGridEnabled
  isPortsEnabled
  setPortsEnabled
  getGridSize
  setGridSize
  getTolerance
  setTolerance
  isVertexLabelsMovable
  setVertexLabelsMovable
  isEdgeLabelsMovable
  isEdgeLabelsMovable
  isSwimlaneNesting
  setSwimlaneNesting
  isSwimlaneSelectionEnabled
  setSwimlaneSelectionEnabled
  isMultigraph
  setMultigraph
  isAllowLoops
  setAllowDanglingEdges
  isAllowDanglingEdges
  setConnectableEdges
  isConnectableEdges
  setCloneInvalidEdges
  isCloneInvalidEdges
  setAllowLoops
  isDisconnectOnMove
  setDisconnectOnMove
  isDropEnabled
  setDropEnabled
  isSplitEnabled
  setSplitEnabled
  isCellResizable
  isCellsResizable
  setCellsResizable
  isTerminalPointMovable
  isCellBendable
  isCellsBendable
  setCellsBendable
  isCellEditable
  isCellsEditable
  setCellsEditable
  isCellDisconnectable
  isCellsDisconnectable
  setCellsDisconnectable
  isValidSource
  isValidTarget
  isValidConnection
  setConnectable
  isConnectable
  setTooltips
  setPanning
  isEditing
  isAutoSizeCell
  isAutoSizeCells
  setAutoSizeCells
  isExtendParent
  isExtendParents
  setExtendParents
  isExtendParentsOnAdd
  setExtendParentsOnAdd
  isExtendParentsOnMove
  setExtendParentsOnMove
  isRecursiveResize
  setRecursiveResize
  isConstrainChild
  isConstrainChildren
  setConstrainChildren
  isConstrainRelativeChildren
  setConstrainRelativeChildren
  isConstrainChildren
  setConstrainChildren
  getOverlap
  isAllowOverlapParent
  getFoldableCells
  isCellFoldable
  isValidDropTarget
  isSplitTarget
  getDropTarget
  Cell
  getDefaultParent
  setDefaultParent
  getSwimlane
  getSwimlaneAt
  getCellAt
  intersects
  hitsSwimlaneContent
  getChildVertices
  getChildEdges
  getChildCells
  getConnections
  getIncomingEdges
  getOutgoingEdges
  getEdges
  isValidAncestor
  getOpposites
  getEdgesBetween
  getPointForEvent
  getCells
  getCellsBeyond
  findTreeRoots
  traverse
  Selection
  isCellSelected
  isSelectionEmpty
  clearSelection
  getSelectionCount
  getSelectionCell
  getSelectionCells
  setSelectionCell
  setSelectionCells
  addSelectionCell
  addSelectionCells
  removeSelectionCell
  removeSelectionCells
  selectRegion
  selectNextCell
  selectPreviousCell
  selectParentCell
  selectChildCell
  selectCell
  selectAll
  selectVertices
  selectVertices
  selectCells
  selectCellForEvent
  selectCellsForEvent
  Selection
  createHandler
  createVertexHandler
  createEdgeHandler
  createEdgeSegmentHandler
  createElbowEdgeHandler
  Graph
  addMouseListener
  removeMouseListener
  updateMouseEvent
  getStateForEvent
  isEventIgnored
  isSyntheticEventIgnored
  isEventSourceIgnored
  getEventState
  fireMouseEvent
  consumeMouseEvent
  fireGestureEvent
  destroy
}
