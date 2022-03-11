/*! dev.app.js || Version: 5.1.128044 || Generated: Fri Mar 11 2022 09:41:27 GMT+0000 (Western European Standard Time) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "e5a9d919c40640b77a07";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.js")(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/index.scss */ "./src/components/index.scss");

//Import all JS files
const requireAll = r => r.keys().forEach(r);
requireAll(__webpack_require__("./src/components sync recursive \\.js$"));


/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./00-settings/config.js": "./src/components/00-settings/config.js",
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
	"./05-components/layout/subLayoutLeft.js": "./src/components/05-components/layout/subLayoutLeft.js",
	"./05-components/v3-pat/actions-menu/scripts.js": "./src/components/05-components/v3-pat/actions-menu/scripts.js",
	"./05-components/v3-pat/button-link/scripts.js": "./src/components/05-components/v3-pat/button-link/scripts.js",
	"./05-components/v3-pat/card-charts/scripts.js": "./src/components/05-components/v3-pat/card-charts/scripts.js",
	"./05-components/v3-pat/collapsible-side-panel/scripts.js": "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js",
	"./05-components/v3-pat/comp-line/scripts.js": "./src/components/05-components/v3-pat/comp-line/scripts.js",
	"./05-components/v3-pat/country-phone/scripts.js": "./src/components/05-components/v3-pat/country-phone/scripts.js",
	"./05-components/v3-pat/data-tables/scripts.js": "./src/components/05-components/v3-pat/data-tables/scripts.js",
	"./05-components/v3-pat/datetime-range-picker/scripts.js": "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js",
	"./05-components/v3-pat/drag-drop/scripts.js": "./src/components/05-components/v3-pat/drag-drop/scripts.js",
	"./05-components/v3-pat/dropdown-categories/scripts.js": "./src/components/05-components/v3-pat/dropdown-categories/scripts.js",
	"./05-components/v3-pat/dropzone/dropzone.js": "./src/components/05-components/v3-pat/dropzone/dropzone.js",
	"./05-components/v3-pat/expandable-link/scripts.js": "./src/components/05-components/v3-pat/expandable-link/scripts.js",
	"./05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js": "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js",
	"./05-components/v3-pat/generic-card/scripts.js": "./src/components/05-components/v3-pat/generic-card/scripts.js",
	"./05-components/v3-pat/generic-gallery/scripts.js": "./src/components/05-components/v3-pat/generic-gallery/scripts.js",
	"./05-components/v3-pat/generic-grid/scripts.js": "./src/components/05-components/v3-pat/generic-grid/scripts.js",
	"./05-components/v3-pat/horizontal-toolbar/scripts.js": "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js",
	"./05-components/v3-pat/hour-picker/scripts.js": "./src/components/05-components/v3-pat/hour-picker/scripts.js",
	"./05-components/v3-pat/input-lasa/scripts.js": "./src/components/05-components/v3-pat/input-lasa/scripts.js",
	"./05-components/v3-pat/input-with-clear/scripts.js": "./src/components/05-components/v3-pat/input-with-clear/scripts.js",
	"./05-components/v3-pat/input-with-list/scripts.js": "./src/components/05-components/v3-pat/input-with-list/scripts.js",
	"./05-components/v3-pat/line-add/scripts.js": "./src/components/05-components/v3-pat/line-add/scripts.js",
	"./05-components/v3-pat/line-details-expand-box/script.js": "./src/components/05-components/v3-pat/line-details-expand-box/script.js",
	"./05-components/v3-pat/location-box/scripts.js": "./src/components/05-components/v3-pat/location-box/scripts.js",
	"./05-components/v3-pat/main-interactive-card/scripts.js": "./src/components/05-components/v3-pat/main-interactive-card/scripts.js",
	"./05-components/v3-pat/menu-bar/scripts.js": "./src/components/05-components/v3-pat/menu-bar/scripts.js",
	"./05-components/v3-pat/multiple-selection-button/scripts.js": "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js",
	"./05-components/v3-pat/panel/confirmation-panel.js": "./src/components/05-components/v3-pat/panel/confirmation-panel.js",
	"./05-components/v3-pat/panel/confirmation-popup.js": "./src/components/05-components/v3-pat/panel/confirmation-popup.js",
	"./05-components/v3-pat/panel/modal-popup.js": "./src/components/05-components/v3-pat/panel/modal-popup.js",
	"./05-components/v3-pat/panel/panel-by-id-notify.js": "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js",
	"./05-components/v3-pat/panel/panel-by-id.js": "./src/components/05-components/v3-pat/panel/panel-by-id.js",
	"./05-components/v3-pat/panel/popup-menu.js": "./src/components/05-components/v3-pat/panel/popup-menu.js",
	"./05-components/v3-pat/panel/sapphire-panel.js": "./src/components/05-components/v3-pat/panel/sapphire-panel.js",
	"./05-components/v3-pat/panel/scripts.js": "./src/components/05-components/v3-pat/panel/scripts.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js",
	"./05-components/v3-pat/prescription-card/scripts.js": "./src/components/05-components/v3-pat/prescription-card/scripts.js",
	"./05-components/v3-pat/prescription-expandable/scripts.js": "./src/components/05-components/v3-pat/prescription-expandable/scripts.js",
	"./05-components/v3-pat/sapphire-header/scripts.js": "./src/components/05-components/v3-pat/sapphire-header/scripts.js",
	"./05-components/v3-pat/sapphire-popup/scripts.js": "./src/components/05-components/v3-pat/sapphire-popup/scripts.js",
	"./05-components/v3-pat/sapphire-radio-button/scripts.js": "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js",
	"./05-components/v3-pat/scales/scale-main-structure.js": "./src/components/05-components/v3-pat/scales/scale-main-structure.js",
	"./05-components/v3-pat/scales/toggle-item-control.js": "./src/components/05-components/v3-pat/scales/toggle-item-control.js",
	"./05-components/v3-pat/search-and-select/select-ssd.js": "./src/components/05-components/v3-pat/search-and-select/select-ssd.js",
	"./05-components/v3-pat/search-and-select/ssd-search.js": "./src/components/05-components/v3-pat/search-and-select/ssd-search.js",
	"./05-components/v3-pat/searchable-client-side/scripts.js": "./src/components/05-components/v3-pat/searchable-client-side/scripts.js",
	"./05-components/v3-pat/section-expandable-custom/scripts.js": "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js",
	"./05-components/v3-pat/section-expandable-inside/scripts.js": "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js",
	"./05-components/v3-pat/select-system/scripts.js": "./src/components/05-components/v3-pat/select-system/scripts.js",
	"./05-components/v3-pat/shift-container/scripts.js": "./src/components/05-components/v3-pat/shift-container/scripts.js",
	"./05-components/v3-pat/shift-table/shiftTable.js": "./src/components/05-components/v3-pat/shift-table/shiftTable.js",
	"./05-components/v3-pat/shift-table/shiftTableCard.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js",
	"./05-components/v3-pat/shift-table/shiftTableCardProgress.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js",
	"./05-components/v3-pat/shift-table/shiftTableHover.js": "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js",
	"./05-components/v3-pat/side-menu/scripts.js": "./src/components/05-components/v3-pat/side-menu/scripts.js",
	"./05-components/v3-pat/sidebar/sidebar-structure.js": "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js",
	"./05-components/v3-pat/small-box-selectable/scripts.js": "./src/components/05-components/v3-pat/small-box-selectable/scripts.js",
	"./05-components/v3-pat/spinner-horizontal/scripts.js": "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js",
	"./05-components/v3-pat/spinner-vertical/scripts.js": "./src/components/05-components/v3-pat/spinner-vertical/scripts.js",
	"./05-components/v3-pat/split-button/scripts.js": "./src/components/05-components/v3-pat/split-button/scripts.js",
	"./05-components/v3-pat/ssd-component-block/scripts.js": "./src/components/05-components/v3-pat/ssd-component-block/scripts.js",
	"./05-components/v3-pat/ssd-list-line/scripts.js": "./src/components/05-components/v3-pat/ssd-list-line/scripts.js",
	"./05-components/v3-pat/table-form/scripts.js": "./src/components/05-components/v3-pat/table-form/scripts.js",
	"./05-components/v3-pat/tabs-extended/scripts.js": "./src/components/05-components/v3-pat/tabs-extended/scripts.js",
	"./05-components/v3-pat/tabular-list/scripts.js": "./src/components/05-components/v3-pat/tabular-list/scripts.js",
	"./05-components/v3-pat/tabular-scroll/scripts.js": "./src/components/05-components/v3-pat/tabular-scroll/scripts.js",
	"./05-components/v3-pat/timeline/scripts.js": "./src/components/05-components/v3-pat/timeline/scripts.js",
	"./05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js": "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js",
	"./05-components/v3-pat/truncated-content/scripts.js": "./src/components/05-components/v3-pat/truncated-content/scripts.js",
	"./08-pages/clinicianWorkArea.js": "./src/components/08-pages/clinicianWorkArea.js",
	"./08-pages/eSignature.js": "./src/components/08-pages/eSignature.js",
	"./08-pages/remoteAppointment.js": "./src/components/08-pages/remoteAppointment.js",
	"./globals.js": "./src/components/globals.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.js$";

/***/ }),

/***/ "./src/components/00-settings/config.js":
/*!**********************************************!*\
  !*** ./src/components/00-settings/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/05-components/layout/layout-base.js":
/*!************************************************************!*\
  !*** ./src/components/05-components/layout/layout-base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBase */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new LayoutBase(config);
		SapphireWidgets.LayoutBase.widgetId = config.widgetId;
	};

	var openSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].openSidebarIframe(duration);
	};

	var closeSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].closeSidebarIframe(duration);
	};

	var scrollToElement = function($element, offset = 0) {
		var $targetElement = $element;

		if (!!$targetElement.length) {
			var scrollToOffsetInterval;

			scrollToOffsetInterval = setInterval(function() {
				if (window[SapphireWidgets.LayoutBase.widgetId].getThresholds().secondaryThreshold > 0) {
					clearInterval(scrollToOffsetInterval);

					let targetElementOffsetTop = $targetElement.offset().top;

					const isFixed = $('.LayoutBase-secondary').hasClass('isFixed');
					const isEmergency = !!$('.LayoutBase-emergency').text();

					const headerHeight = $('.SapphireHeader').height();
					const secondaryHeight = $('.LayoutBase-secondary').outerHeight();
					const emergencyHeight = isEmergency ? $('.LayoutBase-emergency').height() : 0;

					//const secondaryFixed = isFixed ? secondaryHeight : secondaryHeight - 26;
					targetElementOffsetTop = targetElementOffsetTop - (headerHeight + secondaryHeight + emergencyHeight);

					$('body, html').scrollTop(targetElementOffsetTop - 16);
				}
			}, 250);
		}
	};

	var LayoutBase = function(config) {
		var _this = this;
		this.layoutBaseRedrawTimer = 0;
		this.hasHeader = config.hasHeader;
		this.isExpandable = config.isExpandable;
		this.isTopWindow = window.top === window.self ? true : false;
		this.$widget = $('#' + config.widgetId);
		this.$wrapper = this.$widget.find('.LayoutBase-Wrapper');
		this.$spacer = this.$widget.find('.LayoutBase-spacer');
		this.$mainMenu = this.$widget.find('.LayoutBase-MainMenu');
		this.$header = this.$widget.find('.LayoutBase-header');
		this.$headerBody = this.$widget.find('.SapphireHeader-body');
		this.$primaryMenu = this.$widget.find('.LayoutBase-primary-menu');
		this.$emergency = this.$widget.find('.LayoutBase-emergency');
		this.$secondary = this.$widget.find('.LayoutBase-secondary');
		this.$secondaryMenu = this.$widget.find('.LayoutBase-secondary-menu');
		this.$iframeSidebar = this.$widget.find('.LayoutBase-iframesidebar');
		this.$headerAdditionalContent = this.$widget.find('.SapphireHeader-additional-content');
		this.$topfixedContent = this.$widget.find('.LayoutBase-topfixedcontent');
		this.$bottomfixedContent = this.$widget.find('.LayoutBase-bottomfixedcontent');
		this.$mainContent = this.$widget.find('.LayoutBase-MainContent');
		this.extraPaddingEmergency = 0;
		this.extraPaddingSecondary = 0;
		this.setupWindowEvents();
		this.$iframeSidebar.append('<div class="lds-ring 1"><div></div><div></div><div></div><div></div></div>');

		$(function() {
			$('body').addClass('LayoutBase');
			if (_this.isTopWindow) {
				$('body').css('overflow-y', 'scroll');
			}
		});

		$(window).load(function() {
			$('body').click();
			$(window).scroll();

			_this.$iframeSidebar.find('.lds-ring').fadeOut();
		});
	};

	LayoutBase.prototype.setupWindowEvents = function() {
		var _this = this;
		var cursorPositon = 0;

		$(window).resize(function() {
			_this.updateThresholds();
			_this.handleOptionalContainers();
			_this.handleLayoutTopPadding();
			_this.handleLayoutBottomPadding();
		});

		$(window).scroll(function() {
			var newPosition = $(window).scrollTop();

			window.clearTimeout(_this.layoutBaseRedrawTimer);
			_this.layoutBaseRedrawTimer = window.setTimeout(function() {
				_this.updateThresholds();
				_this.handleOptionalContainers();
				_this.handleLayoutTopPadding();
				_this.handleLayoutBottomPadding();
				_this.handleManageQueueCard(cursorPositon, newPosition);
				cursorPositon = newPosition;
			}, 100);
		});
	};

	LayoutBase.prototype.handleOptionalContainers = function() {
		/*const scrollTop = $(window).scrollTop();
		const isEmergency = !!$('.LayoutBase-emergency').text();*/
	};

	LayoutBase.prototype.handleLayoutTopPadding = function() {
		var paddingTop = this.contentThreshold + this.extraPaddingEmergency + this.extraPaddingSecondary;
		this.$spacer.stop().animate(
			{
				height: paddingTop,
			},
			0,
			'linear'
		);
		if (this.$topfixedContent.length === 1) {
			this.$topfixedContent.css({
				width: $('.LayoutBase-MainContent').width(),
				top: this.topfixedContentThreshold + 'px',
			});
		}
	};

	LayoutBase.prototype.handleLayoutBottomPadding = function() {
		if (this.$bottomfixedContent.length === 1) {
			if ($('body')[0].scrollHeight > $('body').height()) {
				var bottomFixedHeight = this.$bottomfixedContent.outerHeight(true);
				this.$wrapper.addClass('hasFixedBottom').css('padding-bottom', bottomFixedHeight + 'px');
				this.$bottomfixedContent.css({
					width: $('.LayoutBase-MainContent').outerWidth(true),
				});
			} else {
				this.$wrapper.removeClass('hasFixedBottom').css('padding-bottom', '');
				this.$bottomfixedContent.css({
					width: '',
				});
			}
		}
	};

	LayoutBase.prototype.updateThresholds = function() {
		var mainMenuHeight = this.$mainMenu.outerHeight(true) || 0;
		var headerBodyHeight = this.$headerBody.outerHeight(true) || this.$header.outerHeight(true) || 0;
		var topfixedContentHeight = this.$topfixedContent.outerHeight(true) || 0;
		var primaryMenuHeight = this.$primaryMenu.outerHeight(true) || 0;
		var emergencyHeight = this.$emergency.outerHeight(true) || 0;
		this.topfixedContentThreshold = mainMenuHeight + headerBodyHeight;
		this.contentThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight;
		this.emergencyThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight;
		this.secondaryThreshold =
			mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight + emergencyHeight;
	};

	LayoutBase.prototype.getThresholds = function() {
		return {
			topfixedContentThreshold: this.topfixedContentThreshold,
			contentThreshold: this.contentThreshold,
			emergencyThreshold: this.emergencyThreshold,
			secondaryThreshold: this.secondaryThreshold,
		};
	};

	LayoutBase.prototype.openSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		this.$iframeSidebar.animate(
			{
				width: '100%',
			},
			duration
		);
		$('body')
			.css('overflow-y', 'scroll')
			.click();
	};

	LayoutBase.prototype.closeSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		var targetWidth = this.isExpandable ? 40 : 262;
		this.$iframeSidebar.animate(
			{
				width: targetWidth,
			},
			duration
		);
		$('body').css('overflow-y', 'scroll');
	};

	LayoutBase.prototype.handleManageQueueCard = function(cursorPositon, newPosition) {
		const $manageQueue = $('.ManageQueueContainer');

		if ($manageQueue.length) {
			if (newPosition > cursorPositon) {
				$manageQueue.addClass('ManageQueueContainer--closed');
			} else if (newPosition < cursorPositon) {
				$manageQueue.removeClass('ManageQueueContainer--closed');
			}
		}
	};

	SapphireWidgets.LayoutBase = {
		create,
		closeSidebarIframe,
		openSidebarIframe,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-blank.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-blank.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBlank */
$(function () {
	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});

/***/ }),

/***/ "./src/components/05-components/layout/layout-emergency.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/layout/layout-emergency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, document, SapphireWidgets) {
	const ForwardPatientComponent = () => {
		const $allOptions = $('.ForwardLocationsContent');
		const $multiple = $('.ForwardLocationsDiv');
		const $single = $('.SingleLocation');

		$('body').mouseup(function(e) {
			const notClickInAllOptions = !$allOptions.is(e.target) && $allOptions.has(e.target).length === 0;
			const notClickInMultiple = !$multiple.is(e.target) && $multiple.has(e.target).length === 0;
			const notClickInSingle = !$single.is(e.target) && $single.has(e.target).length === 0;
			const isOpen = $multiple.is(':visible');

			if (notClickInAllOptions && notClickInMultiple && notClickInSingle && isOpen) {
				$multiple.click();
			}
		});
	};

	SapphireWidgets.LayoutEmergency = {
		ForwardPatientComponent,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-popup.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-popup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutPopup */
(function($, window, document, SapphireWidgets) {
	var popupWidth;
	var popupMinWidth;
	var popupHeight;
	var popupMinHeight;
	var popupMaxHeight;
	var popupWidthPercentage;
	var layoutPopupResizeTimer;

	var $popup = $('.LayoutPopup');
	var $osPopup = window.parent.$('.os-internal-Popup.os-internal-ui-dialog');
	var $osPopupContent = window.parent.$('.os-internal-ui-dialog-content.os-internal-ui-widget-content');
	var $overlay = window.parent.$('.os-internal-ui-widget-overlay');
	var popupSize;
	var paddingBody;

	const BODY_PADDING_TOP_BOTTOM = 32;

	const create = function(config) {
		SapphireWidgets.LayoutPopup.config = config;
		popupSize = SapphireWidgets.LayoutPopup.config.PopupSize;
		paddingBody = config.noContentPadding ? 0 : BODY_PADDING_TOP_BOTTOM;

		$(function() {
			$('body').addClass('LayoutPopup'); // because datetimerangepicker is attached to body

			if (SapphireWidgets.LayoutPopup.config.isTouch) {
				$popup.addClass('isTouch');
				$('body').addClass('isTouch'); // because select2 is attached to body
			}

			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation, index) {
					// Avoid to redraw the dialog if it is one the following popups
					if (
						SapphireWidgets.PopupsToAvoidMutations &&
						SapphireWidgets.PopupsToAvoidMutations.some(e => $(`.${e}`).length)
					) {
						return false;
					}

					redrawDialogWindow();
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
			});

			$('body').css('visibility', 'hidden');
		});

		$(window).load(function() {
			$(this.frameElement).css({
				width: '100%',
				height: '100%',
			});

			setTimeout(function() {
				resizeDialog();
				resizeContent();
				$('body').css('visibility', 'visible');
			}, 150);

			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.LayoutPopup.redrawDialogWindow);
		});

		$(window.parent)
			.off('resize.LayoutPopup')
			.on('resize.LayoutPopup', function() {
				redrawDialogWindow();
			});
	};

	const redrawDialogWindow = function() {
		clearTimeout(layoutPopupResizeTimer);
		layoutPopupResizeTimer = setTimeout(function() {
			resizeDialog();
			resizeContent();
			$('body').css('visibility', 'visible');
		}, 300);
	};

	const resizeDialog = function() {
		if (SapphireWidgets.LayoutPopup.config.hasClose) {
			window.parent.$('.os-internal-ui-dialog-titlebar').show();

			if (window.top._iframePopup != undefined || false) {
				const $closeButton = window.parent.$('.os-internal-ui-dialog-titlebar-close');

				$closeButton.removeAttr('href');
				$closeButton.off('click').on('click', () => window.top._iframePopup.SapphireWidgets.SapphirePopup.close());
			}
		}

		if (window.top.$('body').hasClass('LayoutBase')) {
			window.top.$('body').css({
				overflowY: 'hidden',
			});
		}

		$overlay.width('100%');

		calcWidthPercentage(popupSize, $osPopupContent);

		$osPopup.css({
			left: 'unset',
			top: 'unset',
			height: 'auto',
			minWidth: popupMinWidth + 'px',
			width: popupWidth + 'px',
		});
	};

	const resizeContent = function() {
		var $body = $('.LayoutPopup__body__content');
		var contentScrollTop = $body.scrollTop();

		if (popupSize === 'Small' && $('.daterangepicker:visible').length > 0) {
			// skip the reset of .LayoutPopup__body__content
		} else {
			$body.css({
				height: 'auto',
			});
		}

		let bodyContent = paddingBody
			? $('.LayoutPopup__body__content')[0].scrollHeight
			: $('.LayoutPopup__body__content').height();

		var headerHeight = $('.LayoutPopup__header').innerHeight() || 0;
		var introHeight = $('.LayoutPopup__intro').innerHeight() || 0;
		var bodyHeight = bodyContent || 0;
		var footerHeight = $('.LayoutPopup__footer').innerHeight() || 0;
		var contentHeight = headerHeight + introHeight + bodyHeight + footerHeight + paddingBody;
		var dialogHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();
		const windowHeight = $(window.parent).height();

		if (popupSize === 'Small') {
			var parentHeight = $(window.parent).height();

			if (contentHeight > parentHeight) {
				$osPopupContent.height(parentHeight - 70);
				$body.height($osPopupContent.height() - paddingBody);
			} else {
				$osPopupContent.height(contentHeight);
			}
		} else {
			if (contentHeight < dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight < dialogHeight) {
				$osPopupContent.height(contentHeight);
				if (contentHeight < popupMinHeight) {
					var diference = popupMinHeight - contentHeight;
					$body.height(bodyHeight + diference);
				}
			} else if (contentHeight >= dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight >= dialogHeight) {
				if (contentHeight > popupMaxHeight) {
					$osPopupContent.height(popupMaxHeight);
					var forcedBodyHeight = popupMaxHeight - headerHeight - introHeight - footerHeight - paddingBody;
					$body.height(forcedBodyHeight);
				} else {
					$osPopupContent.height(contentHeight);
				}
			} else {
				console.warn('Unexpected combination...');
			}
		}

		// Handle when DateTimeRangePicker is opened
		var dateRangePicker = $('.daterangepicker:visible');
		if (dateRangePicker.length === 1) {
			if (dateRangePicker[0].getBoundingClientRect().bottom > dialogHeight) {
				var difference = dateRangePicker[0].getBoundingClientRect().bottom - dialogHeight;
				var bodyHeight = $('.LayoutPopup__body__content').outerHeight(true);

				$('.LayoutPopup__body__content').height(bodyHeight + difference + paddingBody);
				$osPopupContent.height($('body')[0].scrollHeight);

				const popupTotalHeight = $osPopupContent.height();
				const newContentHeight = $('.LayoutPopup__body').outerHeight(true) + headerHeight + introHeight + footerHeight;

				if (windowHeight < 720) {
					const coords = dateRangePicker[0].getBoundingClientRect();
					var point = window.parent.scrollY + coords.top - coords.height;
					dateRangePicker.addClass('drop-up').css('top', point);
				} else if (windowHeight < 980 && newContentHeight > popupTotalHeight) {
					$osPopupContent.css({
						maxHeight: newContentHeight + 'px',
					});
				}
			}
		}

		$body.scrollTop(contentScrollTop);
	};

	const increaseHeight = function(diference) {
		$osPopupContent.height($osPopupContent.height() + diference);
	};

	const scrollToElement = function($element) {
		var $targetElement = $element;
		if (!!$targetElement.length) {
			var scrollToOffsetInterval;
			scrollToOffsetInterval = setInterval(function() {
				clearInterval(scrollToOffsetInterval);
				var headerHeight = $('.LayoutPopup__header').outerHeight(true) || 0;
				var introHeight = $('.LayoutPopup__intro').outerHeight(true) || 0;
				var currentBodyScroll = $('.LayoutPopup__body__content')[0].scrollTop || 0;
				var targetElementOffsetTop = $targetElement.offset().top - headerHeight - introHeight + currentBodyScroll - 20;
				$('.LayoutPopup__body__content').scrollTop(targetElementOffsetTop);
			}, 250);
		}
	};

	const calcWidthPercentage = () => {
		const windowHeight = $(window.parent).height();
		const windowWidth = $(window.parent).width();

		if (popupSize === 'Small') {
			let percentage = 0.33;

			if (windowWidth <= 1024) percentage = 0.5;
			else if (windowWidth > 1024 && windowWidth <= 1440) percentage = 0.4;

			popupWidth = parseInt(windowWidth * percentage);
			popupMinWidth = 400;
		} else if (popupSize === 'Medium') {
			if (windowWidth <= 1024) popupWidthPercentage = 0.8;
			else {
				switch (SapphireWidgets.LayoutPopup.config.PopupWidth) {
					case 'XSmall':
						popupMinWidth = 200;
						popupWidthPercentage = 0.2;
						break;
					case 'Small':
						popupMinWidth = 300;
						popupWidthPercentage = 0.3;
						break;
					case 'Medium':
						popupMinWidth = 700;
						popupWidthPercentage = 0.6;
						break;
					default:
						popupMinWidth = 700;
						popupWidthPercentage = 0.7;
				}

				popupWidthPercentage = SapphireWidgets.LayoutPopup.config.isTouch ? 0.8 : popupWidthPercentage;
			}

			popupWidth = parseInt(windowWidth * popupWidthPercentage);
			popupMinHeight = 100;
			popupMaxHeight = SapphireWidgets.LayoutPopup.config.isTouch
				? parseInt(windowHeight * 0.9)
				: parseInt(windowHeight * 0.7);

			if (SapphireWidgets.LayoutPopup.config.isFixedHeight) popupHeight = popupMaxHeight;
			else popupHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();

			$osPopupContent.css({
				maxHeight: popupMaxHeight + 'px',
				minHeight: popupMinHeight + 'px',
				height: popupHeight + 'px',
			});
		} else if (popupSize === 'Large') {
			popupMinWidth = parseInt(windowWidth * 0.8);
			popupMaxHeight = parseInt(windowHeight * 0.9);
		} else if (popupSize === 'Fixed') {
			popupWidth = SapphireWidgets.SapphirePopup.popupWidth;
			popupMinWidth = SapphireWidgets.SapphirePopup.popupWidth;
		}
	};

	SapphireWidgets.LayoutPopup = {
		create,
		resizeDialog,
		resizeContent,
		increaseHeight,
		redrawDialogWindow,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).unload(function() {
	if (!!$('.LayoutPopup').length) {
		window.top.$('body').css({
			overflowY: 'scroll',
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/layout/subLayoutLeft.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/layout/subLayoutLeft.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SubLayoutLeft */
(function($, window, document, SapphireWidgets) {
	const create = function() {};

	SapphireWidgets.SubLayoutLeft = {
		create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/actions-menu/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/actions-menu/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ActionsMenu */
(function($, window, SapphireWidgets) {
	var create = function(config) {
		var $triggerElement = $('#' + config.triggerElement);
		var $contentElement = $('#' + config.contentElement);

		if ($contentElement.text().length < 1) {
			$triggerElement.hide();
		}

		$(function() {
			// inside a document ready due to sapphire popup binded events
			window.setTimeout(function() {
				var position = config.position;
				if (config.locale === 'AR') {
					switch (config.position) {
						case 'right':
							position = 'left';
							break;
						case 'left':
							position = 'right';
							break;
						case 'bottom-left':
							position = 'bottom-right';
							break;
						case 'bottom-right':
							position = 'bottom-left';
							break;
						case 'top-left':
							position = 'top-right';
							break;
						case 'top-right':
							position = 'top-left';
							break;
					}
				}
				$triggerElement.tooltipster({
					content: $('<section/>').append($contentElement.clone(true, true)),
					trigger: config.triggerEvent,
					position: position,
					maxWidth: config.maxWidth,
					theme:
						'tooltipster-location--' +
						config.location +
						' ActionsMenu-tooltip Padding--' +
						config.padding +
						' Border--' +
						config.border,
				});
				$contentElement.remove();
			}, 500);
		});
	};

	SapphireWidgets.ActionsMenu = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/button-link/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/button-link/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ButtonLink */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			const $widget = $(`#${config.widgetId} .ButtonClick`);

			$widget.off('click').on('click', function(e) {
				const _target = $(e.target);

				if (_target.closest('.ButtonClick.click').length == 0) {
					$('.ButtonClick.click').removeClass('click');
					$(this).addClass('click');
				}
			});
		});
	};

	SapphireWidgets.ButtonLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/card-charts/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/card-charts/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function() {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function() {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function() {
			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			let headerTitleHeight = 63;
			const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function() {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				const timeoutHeight = setTimeout(() => {
					const $headerTitle = $component.find('.CardCharts__HeaderTitle');

					headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;

					const newHeight = $(window.frameElement).height() - headerTitleHeight;

					$fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					$content.css('height', `${newHeight - headerPropertiesHeight}px`);

					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CollapsibleSidePanel */
(function($, window, SapphireWidgets) {
	class CollapsibleSidePanel {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		openCloseSidePanel(toOpen) {
			if (toOpen) {
				this.$content.css('display', 'grid');

				setTimeout(() => {
					this.$component.addClass('CollapsibleSidePanel--open');
				}, 50);
			} else {
				this.$component.removeClass('CollapsibleSidePanel--open');

				setTimeout(() => {
					$('.CollapsibleSidePanel__Content').css('display', 'none');
				}, 350);
			}
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$header = this.$component.find('.CollapsibleSidePanel__Header');
			this.$content = this.$component.find('.CollapsibleSidePanel__Content');
			this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
			this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
			this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
			this.$close = this.$component.find('.CollapsibleSidePanel__PanelHeader .icon');
			this.$closeEventLink = this.$component.find('.CollapsibleSidePanel__PanelHeader .PanelCloseButton');

			this.$header.on('click', () => this.openCloseSidePanel(true));
			this.$close.on('click', () => {
				this.openCloseSidePanel(false);

				this.$closeEventLink.click();

				if ($('.PanelContentEmpty').length) {
					SapphireWidgets.CollapsibleSidePanel.close(this.options.widgetId, true);
				}
			});

			if (this.options.isAutoCounter) {
				calculateCounter(this.$panelContent, this.$counter1, this.$counter2);

				this.$counter1.removeClass('Hidden');
				this.$counter2.removeClass('Hidden');
			}

			const hasEmptyMessage = this.$panelContent.find('.CollapsibleEmptyMessage');
			const contentToVerify = hasEmptyMessage.length ? this.$panelContent.find('>:first-child') : this.$panelContent;

			if (this.options.hideWhenEmpty && !contentToVerify.text()) {
				this.$component.hide();
			}

			//Diogo Ribeiro - it seems we only need margins when we show the header
			if(!this.options.hideHeader) {
				$(document).ready(function() {
					$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
					$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
				});
			}
			
		}
	}

	const calculateCounter = (panelContent, counter1, counter2) => {
		let total = 0;
		const counters = panelContent.find('.ExapandablePlaceholder.Counter');

		counters.each(function() {
			total += +$(this).text();
		});

		counter1.text(total);
		counter2.text(total);

		if (total === 0) counter2.addClass('ColorLightGreyBG');
	};

	const updateCounter = (widgetId, counter) => {
		this.$component = $(`#${widgetId}`);
		this.counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');

		this.counter1.text(counter);
		this.counter2.text(counter);

		if (+counter === 0) this.counter2.addClass('ColorLightGreyBG');
	};

	const close = (widgetId, hideHeader, updateCounter) => {
		this.$component = $(`#${widgetId}`);

		if (!this.$component.hasClass('CollapsibleSidePanel')) {
			this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		}

		if (hideHeader) {
			this.$component.addClass('CollapsibleSidePanel--headerHidden');
		}

		this.$component.removeClass('CollapsibleSidePanel--open');

		$('.CollapsibleSidePanel:visible').removeClass('MultiMarginTopSmall');
		$('.CollapsibleSidePanel:visible:first').removeClass('MultiMarginTopLarge');
	};

	const checkEmpty = widgetId => {
		this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
		this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
		this.$emptyMessage = this.$component.find('.CollapsibleEmptyMessage');

		this.$emptyMessage.show();

		calculateCounter(this.$panelContent, this.$counter1, this.$counter2);
	};

	const create = config => (window[config.widgetId] = new CollapsibleSidePanel(config));

	SapphireWidgets.CollapsibleSidePanel = { create, close, updateCounter, checkEmpty };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/comp-line/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/comp-line/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CompLine */
(function($, window, SapphireWidgets) {
	function SectionCompline() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var holder = $(ob).closest('.CompLine');
			var Section = $(ob).closest('.CompLineExpandable');
			var SectionContent = Section.children('.CompLine_Expand');

			// get id
			var id = holder.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.CompLine_headLine').off();

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// each all sections
			$('.CompLineExpandable').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] == null
				) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (
					curState !=
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server']
				) {
					// curstate
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['client'] = curState;
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server'] = curState;
				} else {
					// has class expanded
					if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == false &&
						$(this).hasClass('expanded')
					) {
						$(this).removeClass('expanded');
						$(this)
							.children('.CompLine_Expand')
							.height(0);
					} else if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == true &&
						!$(this).hasClass('expanded')
					) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.CompLineExpandable').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[
					$(this)
						.closest('.CompLine')
						.attr('id')
				] = {
					client: stat,
					server: stat,
				};
			});

			// add click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// remove unecessary behaviors

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionCompline();

		expandable.init();
	};

	SapphireWidgets.CompLine = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/country-phone/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/data-tables/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/data-tables/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class DataTables {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$table = this.$widget.find('table');
			this.$table.addClass('cell-border compact');
			this.onInit();
		}

		onInit() {
			this.options = {
				...this.config,
				fixedColumns: true,
				info: false,
				ordering: false,
				paging: false,
				scrollCollapse: true,
				scrollX: true,
				searching: false,
			};

			$(() => {
				this.$table.DataTable(this.options);
			});
		}
	}

	const create = config => (window[config.widgetId] = new DataTables(config));

	SapphireWidgets.DataTables = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/datetime-range-picker/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DateTimeRangePicker */
(function($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function(config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function(config) {
		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.currentLocale === 'AR' && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, at]';

		if (config.timePicker) {
			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.currentLocale === 'AR' ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: 'Cancel',
			applyLabel: 'Apply',
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function(date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function(startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function() {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function() {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function(event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
							_this.config.goTodayLabel +
							'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function() {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function(event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function(event, picker) {
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function(event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function(event, picker) {});

		this.$input.on('timechanged.daterangepicker', function(event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function(event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function(event, picker) {
			_this.$clear.removeClass('disabled');
			_this.updateLabeling();
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function() {
		var _this = this;
		this.$label.off('click').on('click', function(event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function(event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function() {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function() {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function() {
				window.setTimeout(function() {
					_this.updateParentIframe();
				}, 50);
			});
		}

		this.$input.on('blur', function(evt) {
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.updateLabeling = function() {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if(this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
						
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function() {
		if (
			window.frameElement &&
			($(window.frameElement.parentElement).hasClass('tooltipster-content') ||
				$(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))
		) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			} else if (
				!this.$calendar.hasClass('drop-up') &&
				this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
				this.$calendar.addClass('drop-up').css('top', point);
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function() {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function(sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function() {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function() {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function() {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function(sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function() {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function() {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/drag-drop/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/drag-drop/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DragDropArea */
(function($, window, document, SapphireWidgets) {
	var dragDropAreaWidget;

	var create = function(config) {
		window[config.dragDropAreaId] = new DragDropArea(config);
		dragDropAreaWidget = window[config.dragDropAreaId];

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.DragDropArea.refreshDragDrop);
		});
	};

	var refreshDragDrop = function() {
		try {
			dragDropAreaWidget.setupDraggable();
			dragDropAreaWidget.setupDroppable();
		} catch (error) {
			console.error(error);
		}
	};

	var DragDropArea = function(config) {
		var _this = this;
		this.config = config;
		this.$area = $('#' + config.dragDropAreaId);
		this.$area.css('display', 'block');
		this.skin = config.skin;
		this.fakeNotifyWidgetId = config.fakeNotifyWidgetId;
		this.setupDroppable();
		if (config.sortable) {
			this.setupSortable();
		}
		this.setupDraggable();
		this.attachEvents();
		this.$area.find('.DragDrop-droppable').each(function() {
			_this.handleDroppable($(this));
		});
	};

	DragDropArea.prototype.setupDraggable = function() {
		var _this = this;

		this.$area.find('.DragDrop-draggable').draggable({
			disabled: this.config.disabled,
			containment: this.$area,
			scope: this.config.dragDropAreaId,
			delay: 0,
			scroll: true,
			revert: 'invalid',
			revertDuration: 0,
			connectToSortable: '.DragDrop-droppable',
			stop: function(event, ui) {
				if (ui.helper.hasClass('ui-draggable-dragging')) {
					const $target = _this.$area.find('.ui-droppable.ui-sortable');

					if (_this.skin === 'Teams') {
						//$(ui.helper).hide();
						OsNotifyWidget($target.data('fakenotify'), ui.helper.data('itemtype') + '|' + ui.helper.data('itemid'));
					} else {
						OsNotifyWidget(
							$target.data('fakenotify'),
							_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.helper.data('itemid')
						);
					}
				}
			},
		});
	};

	DragDropArea.prototype.setupDroppable = function() {
		var _this = this;
		this.$area.find('.DragDrop-droppable').droppable({
			hoverClass: 'hovered',
			addClasses: true,
			disabled: this.config.disabled,
			scope: this.config.dragDropAreaId,
			tolerance: 'pointer',
			drop: function(event, ui) {
				if (_this.skin === 'Teams') {
					$(ui.draggable).hide();
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						ui.draggable.data('itemtype') + '|' + ui.draggable.data('itemid')
					);
				} else {
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.draggable.data('itemid')
					);
				}
			},
		});
	};

	DragDropArea.prototype.setupSortable = function() {
		this.$area.find('.DragDrop-droppable').sortable({
			disabled: this.config.disabled,
			forcePlaceholderSize: true,
			containment: this.$area,
			tolerance: 'pointer',
			revert: 200,
			items: '.DragDrop-droppable-items .DragDrop-draggable',
			placeholder: 'DragDrop-draggable-placeholder',
		});
	};

	DragDropArea.prototype.attachEvents = function() {
		var _this = this;
		this.$area.on('click', '.DragDrop-draggable input', function(evt) {
			evt.stopPropagation();

			const $checkbox = $(evt.currentTarget);
			const $droppable = $checkbox.closest('.DragDrop-droppable');
			const $draggable = $checkbox.closest('.DragDrop-draggable');
			const $action = $draggable.find('.DragDrop-draggable-select-action a');

			$action.trigger('click');

			if ($droppable.hasClass('allowMultiple')) {
				if ($checkbox.prop('checked')) {
					//$checkbox.prop('checked', false);
					$draggable.addClass('selected');
				} else {
					//$checkbox.prop('checked', true);
					$draggable.removeClass('selected');
				}

				//_this.handleDroppable($droppable);
			}
		});

		this.$area.on('click', '.DragDrop-draggable-select-action a', function(evt) {
			evt.stopPropagation();
		});
	};

	DragDropArea.prototype.handleDroppable = function($droppable) {
		if ($droppable.hasClass('allowMultiple')) {
			var $actions = $droppable.find('.DragDrop-droppable-intro');
			var chkSelected = $droppable.find('input[type="checkbox"]:checked').length;
			if (chkSelected > 0) {
				$actions.find('a, button').attr('disabled', false);
			} else {
				$actions.find('a, button').attr('disabled', true);
			}
		} else {
			$droppable.find('input[type="checkbox"]').prop('disabled', true);
		}
	};

	SapphireWidgets.DragDropArea = {
		create: create,
		refreshDragDrop: refreshDragDrop,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropdown-categories/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropdown-categories/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DropdownCategories */
(function ($, window, SapphireWidgets) {
	function optGroupSetValue(selectId, inputBoxId, buttonId) {
		var v = document.getElementById(selectId).value;
		$('#' + inputBoxId).val(v);
		$('#' + selectId + ' option[selected]').removeAttr('selected');

		if (v > -1) {
			$('#' + selectId + ' option[value="' + v + '"]').attr('selected', 'selected');
		}

		$('#' + buttonId).click();
		$('#s2id_' + selectId).removeClass('select2-container-active');
	}

	function OsCustomValidatorOptGroup(a, b) {
		var _e = $('#' + a.controltovalidate);
		var isValid = _e.find('option[selected]').length;
		var hasSibling_MandatorySelect2 = _e.prev('div.select2-container.Mandatory').length;

		if (hasSibling_MandatorySelect2) {
			if (isValid) {
				_e.prev('div.select2-container.Mandatory').removeClass('Not_Valid');
			} else {
				_e.prev('div.select2-container.Mandatory').addClass('Not_Valid');
			}
		}

		return isValid;
	}

	function addOptGroupValidator(optGroupElementId) {
		OsPage_Validators.push({
			controltovalidate: optGroupElementId,
			enabled: true,
			errormessage: 'Required field!',
			evaluationfunction: 'SapphireWidgets.DropdownCategories.OsCustomValidatorOptGroup',
			initialvalue: '',
			isvalid: true,
		});
	}

	SapphireWidgets.DropdownCategories = {
		optGroupSetValue,
		OsCustomValidatorOptGroup,
		addOptGroupValidator,
	};
})(jQuery, window, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropzone/dropzone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Dropzone */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function() {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function() {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function() {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function(file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val(responseText);
						$notifyInput.change();
					});

					this.on('error', function(file, responseText) {
						prevFile = file;

						$notifyInput.val(responseText);
						$notifyInput.change();
					});
				},
			});
		});
	};

	const bindEvents = function(config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/expandable-link/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/expandable-link/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component FullScreenTabsWrapper */
SapphireWidgets.FullScreenTabsWrapper = () => {
	$(document).ready(function() {
		$('.TabWrapper').click(function() {
			const $wrapper = $(this).closest('.FullScreenTabsWrapper__Tabs');
			$wrapper.find('*').removeClass('Active');

			$(this).addClass('Active');
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-card/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-card/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PersonCard */
$(document).ready(function() {
	var PersonCardEvent = function() {
		$('.IsExpandable .PersonCard__headerLeftInfo, .IsExpandable .PersonCard__content')
			.off('click')
			.on('click', function() {
				const $header = $(this).closest('.PersonCard_header');
				const $onCardOpenLink = $header.find('.PersonCard__OnCardOpenLink');
				const $onCardCloseLink = $header.find('.PersonCard__OnCardCloseClick');
				const $content = $header.next();

				const $card = $(this).closest('.PersonCard');

				$content.removeClass('IsExpanded');

				if ($card.hasClass('IsOpen')) {
					$onCardCloseLink.triggerHandler('click');
					$card.removeClass('IsOpen');
				} else {
					$onCardOpenLink.triggerHandler('click');

					$content.addClass('IsExpanded');

					$card.addClass('IsOpen');
				}
			});
	};

	$('.StopPropagation').click(function(event) {
		event.stopPropagation();
	});

	PersonCardEvent();

	osAjaxBackend.BindAfterAjaxRequest(PersonCardEvent);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-gallery/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-gallery/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGallery */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new GenericGallery(config);
	};

	var GenericGallery = function(config) {
		this.config = config;
		this.$widget = $('#' + this.config.widgetId).css('display', 'block');
		this.equalHeight = this.config.equalHeight;
		if (
			this.$widget.find('> .GenericGallery-content > span').length === 1 &&
			this.$widget.find('.GenericGallery-content > span').hasClass('ListRecords')
		) {
			this.$gallery = this.$widget.find('> .GenericGallery-content > span.ListRecords');
		} else {
			this.$gallery = this.$widget.find('> .GenericGallery-content');
		}

		let templateColumn = 'repeat(' + this.config.columnSizing + ', minmax(' + this.config.columnMinWidth + ', 1fr))';

		if (this.config.maxItemsRow > 0) {
			templateColumn = `repeat(${this.config.columnSizing}, minmax(max(${this.config.columnMinWidth}, (100% - (${this.config.maxItemsRow} - 1) * ${this.config.gapColumn}px) / ${this.config.maxItemsRow}), 1fr))`;
		}

		this.$gallery.css({
			display: 'grid',
			gridTemplateColumns: templateColumn,
		});

		this.$galleryItems = this.$gallery.children();
		this.$galleryItems.each(function() {
			if (!$(this).hasClass('GenericGallery-item')) {
				$(this).wrap('<div class="GenericGallery-item"></div>');
			}
		});
	};

	SapphireWidgets.GenericGallery = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-grid/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-grid/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGrid */
(function ($, window, document, SapphireWidgets) {
	var allGenericGrids = [];

	var create = function (config) {
		window[config.widgetId] = new GenericGrid(config);
		allGenericGrids.push(window[config.widgetId]);
	};

	var GenericGrid = function (config) {
		var _this = this;
		this.config = config;
		console.log(this.config);
	};

	SapphireWidgets.GenericGrid = {
		create: create,
	};

})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HorizontalToolbar */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, config) => {
		if (config.isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));
		} else {
			handleResize($widget);
			bindEventsClick($widget);

			$(window).on('resize.toolbar', () => handleResize($widget));

			window.addEventListener('ToolbarFixed', () => handleResize($widget), false);
		}
	};

	handleArrows = $widget => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleResize = $widget => {
		let itemsTotal = 0;
		let hasItemsHidden = false;

		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a[ui]').css('display', 'none');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);

		$listItems.find('a[ui]').each(function() {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).css('display', 'block');
			} else {
				hasItemsHidden = true;

				return false;
			}
		});

		if (hasItemsHidden && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget
				.find('.Toolbar__MoreOptions')
				.clone()
				.css('display', 'block')
				.appendTo($listItems);

			hasItemsHidden = false;
		}

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');

		$listItems.find('.Toolbar__MoreOptions').css('display', $optionsList.length ? 'block' : 'none');

		const $hiddenItems = $listItems.find('> a[ui]').filter(function() {
			return $(this).css('display') == 'none';
		});

		$optionsList.empty();

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) $trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		else $trigger.removeClass('Toolbar__MoreOptionsIcon--notification');

		$hiddenItems
			.clone()
			.css('display', 'block')
			.appendTo($optionsList);
	};

	bindEventsClick = $widget => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', event => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', event => {
			event.stopPropagation();
		});

		$('body').on('mouseup', event => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/hour-picker/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-lasa/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-lasa/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component InputLASA */
(function() {
	var setupInput = function(config) {
		$('body').off('click', '#' + config.labelId);
		$('body').off('blur change input', '#' + config.inputId);

		$('#' + config.inputId).css('width', '100%');
		$('#' + config.labelId).css('width', '100%');

		$('#' + config.inputId).hide();
		$('#' + config.labelId).show();

		SapphireWidgets.MarkWordsFromList.handlePrompt(config);

		$('body').on('click', '#' + config.labelId, function() {
			$('#' + config.labelId).hide();
			$('#' + config.inputId).show();
			$('#' + config.inputId).focus();
		});

		$('body').on('blur', '#' + config.inputId, function() {
			SapphireWidgets.MarkWordsFromList.handlePrompt(config);
			$('#' + config.inputId).hide();
			$('#' + config.labelId).show();
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.handlePrompt(config);
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		});

		$('body').on('change input', '#' + config.inputId, function() {
			$('#' + config.labelId).text($('#' + config.inputId).val());
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: 'page' });
			}, 250);
		});
	};

	var handlePrompt = function(config) {
		if (!$('#' + config.inputId).val().length) {
			$('#' + config.labelId)
				.text($('#' + config.inputId).prop('placeholder'))
				.css('color', '#999');
		} else {
			$('#' + config.labelId)
				.text($('#' + config.inputId).val())
				.css('color', '');
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.handlePrompt = handlePrompt;
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-clear/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-clear/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithClear {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$clear = this.$widget.find('.InputWithClear-clear');
			this.$notifyLink = this.$widget.find('.InputWithClear-notify-link');
			this.$widgetShield = this.$widget.find('.InputWithClear--shield');
			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				if (this.$input.val() !== '') this.$clear.show();
				else this.$clear.show();
			});

			this.$input.on('blur', () => {
				if (this.$input.val() === '') {
					window.setTimeout(() => {
						if ($('.daterangepicker:visible').length === 1) {
							return false;
						}
						this.$clear.hide();
						this.$notifyLink.trigger('click');
					}, 100);
				}
			});
			this.$clear.on('click', () => {
				this.$input.val('');
				this.$clear.hide();
				this.$notifyLink.trigger('click');
			});
			if (this.config.hasShield) {
				window.setTimeout(() => {
					this.$widgetShield.hide();
				}, this.config.shieldTimeout);
				if (this.config.shieldTimeout > 0) {
					this.$widgetShield.on('click', () => {
						this.$clear.hide();
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new InputWithClear(config));

	SapphireWidgets.InputWithClear = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-list/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-list/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithList {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$list = this.$widget.find('.InputWithList__List');

			this.$input.val('');

			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				// Getting elements again in order to work when this component is cloned (e.g. when using inside ActionsMenu)
				this.$widget = $(`#${this.config.widgetId}`);
				const $input = this.$widget.find('input[type]');
				const $list = this.$widget.find('.InputWithList__List');
				this.$hiddenInput = this.$widget.find('.InputWithList__HiddenInput input');

				if ($input.val().trim() !== '') {
					$list.empty();

					$list.append(`<div><b>Create:</b> ${$input.val()}</div>`);

					if (!$list.is(':visible')) $list.show();
				} else {
					$list.hide();
				}
			});

			this.$list.on('click', e => {
				const $linkNotify = this.$widget.find('.InputWithList-notify-link');
				const $list = this.$widget.find('.InputWithList__List');
				const $input = this.$widget.find('input[type]');

				this.$hiddenInput.val($input.val());
				this.$hiddenInput.change();

				$linkNotify.click();
				$list.hide();
			});
		}
	}

	const create = config => (window[config.widgetId] = new InputWithList(config));

	SapphireWidgets.InputWithList = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-add/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-add/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineAdd */
(function($, window, SapphireWidgets) {
	const create = function(config) {
		$(window).load(function() {
			setWidth(config.widgetId);
			SapphireWidgets.LineAdd.widgetId = config.widgetId;

			osAjaxBackend.BindAfterAjaxRequest(() => setWidth(config.widgetId));
		});

		$(window).on('resize.LineAdd', () => setWidth(config.widgetId));
	};

	const setWidth = function(widgetId) {
		window.setTimeout(function() {
			const $widget = $(`#${widgetId || SapphireWidgets.LineAdd.widgetId}`);
			const widths = [];

			for (i = 1; i < 8; i++) {
				let maxWidthContent = Math.max.apply(
					null,
					$widget
						.find('.lacol' + i)
						.map(function() {
							return $(this).width();
						})
						.get()
				);

				widths.push(maxWidthContent);
				$widget.find('.lacol' + i).width(maxWidthContent);
			}
		}, 100);
	};

	SapphireWidgets.LineAdd = { create, setWidth };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-details-expand-box/script.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-details-expand-box/script.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineDetailsExpandBox */
(function($, window, SapphireWidgets) {
	const init = config => {
		$(`#${config.widgetId} + .LineDetailsExpandBox_action`).click(event => {
			event.stopPropagation();
		});
	};

	const create = config => $(document).ready(() => init(config));

	SapphireWidgets.LineDetailsExpandBox = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/location-box/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/location-box/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LocationBox */
SapphireWidgets.LocationBox = function(widgetId) {
	const $component = $(`#${widgetId}`);

	if ($component.hasClass('On')) {
		$('.DisableRoom').each(function() {
			$(this)
				.removeClass('Off')
				.removeClass('On');
			$(this)
				.parent('.RoomBox')
				.css({
					opacity: '1',
				})
				.removeClass('Selected');
		});
	} else {
		$component
			.addClass('On')
			.removeClass('Off')
			.parent('.RoomBox')
			.css({
				opacity: '1',
			})
			.addClass('Selected');

		$('.DisableRoom:not(#' + widgetId + ')').each(function() {
			$(this).addClass('Off');
			$(this).removeClass('On');
		});

		$('.DisableRoom.Off')
			.parent('.RoomBox')
			.css({
				opacity: '0.50',
			})
			.removeClass('Selected');
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/main-interactive-card/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/main-interactive-card/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MainInteractiveCard */
(function($, window, document, SapphireWidgets) {
	var allMainInteractiveCards = [];
	var defaultDuration = 300;

	var create = function(config) {
		for (var i = 0; i < allMainInteractiveCards.length; i++) {
			if (allMainInteractiveCards[i].config.widgetId === config.widgetId) {
				allMainInteractiveCards.splice(i, 1);
			}
		}
		window[config.widgetId] = new MainInteractiveCard(config);
		allMainInteractiveCards.push(window[config.widgetId]);

		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded && !!osAjaxBackend) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	};

	var MainInteractiveCard = function(config) {
		var _this = this;
		this.config = config;
		this.isLockedOnClose = false;
		this.isOpen = config.isOpen;
		this.isEnabled = config.isEnabled;
		this.isSelectable = config.isSelectable;
		this.allowOpening = config.allowOpening;
		this.allowMultipleOpen = config.allowMultipleOpen;
		this.emitNotifyOnOpen = config.emitNotifyOnOpen;
		this.hideActionsOnOpen = config.hideActionsOnOpen;
		this.hideCaptionOnOpen = config.hideCaptionOnOpen;
		this.hideTitleOnOpen = config.hideTitleOnOpen;
		this.hideSubTitleOnOpen = config.hideSubTitleOnOpen;
		this.headerHeightWhenOpen = config.headerHeightWhenOpen;
		this.MainInteractiveCardFakeNotifyId = config.mainInteractiveCardFakeNotifyId;

		this.$widget = $('#' + config.widgetId);
		this.$widget.css('display', 'block');
		this.$card = this.$widget.find('> .MainInteractiveCard');
		this.$header = this.$widget.find('> .MainInteractiveCard > .MainInteractiveCard-header');
		this.$headerText = this.$header.find('.MainInteractiveCard-header-text');
		this.$expandIcon = this.$header.find('.MainInteractiveCard-expand-icon');
		this.$body = this.$widget.find('> .MainInteractiveCard > div > .MainInteractiveCard-body');
		this.$actions = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-actions'
		);
		this.$caption = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-caption'
		);
		this.$title = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-title'
		);
		this.$subTitle = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-subtitle'
		);
		this.$selectTrigger = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header > .MainInteractiveCard-header-selectable > .MainInteractiveCard-header-selectable-trigger'
		);
		this.$selectPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-selectable-placeholder'
		);
		this.$triggerPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header-triggerAction-placeholder'
		);

		if (this.$triggerPlaceholder.find('a').length === 1) {
			this.$trigger = this.$triggerPlaceholder.find('a');
		}

		if (this.isOpen) {
			this.open(false, -1);
			this.$card.addClass('forceOpen');
		}

		this.$card.addClass(this.headerHeightWhenOpen + 'Header');

		if (this.allowOpening) {
			this.$card.addClass('allowOpening');
		}

		this.attachEvents();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation, index) {
				_this.handleHeaderWithAbsoluteButtons();
			});
		});

		observer.observe(document.getElementById(config.widgetId), {
			childList: true,
			subtree: true,
			attributes: false,
		});
	};

	MainInteractiveCard.prototype.handleHeaderWithAbsoluteButtons = function() {
		var _this = this;
		if (!!this.$body.find('> div .MainInteractiveCard-absolute-actions').length && this.isOpen) {
			var absoluteActionsWidth = Math.max.apply(
				Math,
				this.$body
					.find('> div .MainInteractiveCard-absolute-actions')
					.map(function() {
						return $(this).outerWidth(true);
					})
					.get()
			);
			var headerMaxWidth = this.$header.width() - absoluteActionsWidth;
			if (headerMaxWidth > 10) {
				this.$headerText.css({
					maxWidth: headerMaxWidth + 'px',
				});
			}
			this.$body
				.find('> div .MainInteractiveCard-absolute-actions .MainInteractiveCard--close')
				.off('click')
				.on('click', function(e) {
					e.preventDefault();
					_this.close();
				});
		}
	};

	MainInteractiveCard.prototype.attachEvents = function() {
		var _this = this;
		this.$header
			.find('.MainInteractiveCard--open:not([disabled])')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.open(true);
			});
		this.$header
			.find('.MainInteractiveCard--close')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.close();
			});
		if (this.allowOpening) {
			const clickAction = function(evt) {
				if ($(evt.target).hasClass('Button')) {
					// the user clicked on a Button inside the header, nothing to do here
				} else {
					if (_this.isOpen) {
						if (
							_this.$widget.find('iframe').length === 1 &&
							!_this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')
						) {
							// do not close when and iframe exists
						} else if (
							_this.$actions.find('a').length > 0 &&
							_this.$actions.find('.MainInteractiveCard--close').length > 0
						) {
							// do not close when the card has actions
						} else {
							_this.close();
						}
					} else {
						_this.open(true);
					}
				}
			};

			this.$headerText.off('click').on('click', function(e) {
				clickAction(e);
			});
			this.$expandIcon.off('click').on('click', function(e) {
				clickAction(e);
			});
		}
		if (this.isSelectable) {
			this.$selectTrigger.off('click').on('click', function(e) {
				if (_this.$selectPlaceholder.find('a').length === 1) {
					_this.$selectPlaceholder.find('a').click();
				} else {
					console.warn('You need 1 link in this placeholder.');
				}
			});
		}
	};

	MainInteractiveCard.prototype.open = function(sendNotify, duration) {
		var duration = duration || defaultDuration;
		this.isOpen = true;
		this.$card.addClass('isOpen');
		if (this.hideActionsOnOpen) {
			this.$actions.css('display', 'none');
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'none');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'none');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'none');
		}
		if (this.emitNotifyOnOpen) {
			if (sendNotify) {
				OsNotifyWidget(this.MainInteractiveCardFakeNotifyId, 'open');
			}
			this.$body.css('display', 'block');
		} else if (this.$trigger) {
			this.$trigger.click();
			this.$body.css('display', 'block');
		} else {
			if (duration > 0) {
				this.$body.slideDown(duration);
			} else {
				this.$body.css('display', 'block');
			}
		}
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			var iframeContents = this.$widget.find('iframe').contents();
			iframeContents.find('.MainInteractiveCard-iframe-actions').css('visibility', 'visible');
		} else {
			this.handleHeaderWithAbsoluteButtons();
		}
		if (!this.allowMultipleOpen) {
			allMainInteractiveCards.forEach(item => (item !== this && item.allowOpening ? item.close(duration) : null));
		}
	};

	MainInteractiveCard.prototype.close = function(duration) {
		var self = this;
		var duration = duration || defaultDuration;
		this.isOpen = false;
		this.$card.removeClass('isOpen');
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			this.$widget
				.find('iframe')
				.find('.MainInteractiveCard-iframe-actions')
				.css('visibility', 'hidden');
		}
		this.$body.slideUp(duration, function() {
			if (self.$card.hasClass('forceOpen')) {
				self.$card.removeClass('forceOpen');
			}
		});
		if (this.hideActionsOnOpen) {
			this.$actions.show();
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'block');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'block');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'block');
		}

		if (this.$header.width() - this.$actions.width() > 10) {
			this.$headerText.css({
				maxWidth: this.$header.width() - this.$actions.width() + 'px',
			});
		}
	};

	MainInteractiveCard.prototype.isOpen = function() {
		return this.isOpen;
	};

	SapphireWidgets.MainInteractiveCard = {
		create: create,
		all: function() {
			return allMainInteractiveCards;
		},
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!$('.MainInteractiveCard').length) {
		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	}

	setTimeout(function() {
		var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
		allMainInteractiveCards.forEach(function(element) {
			element.handleHeaderWithAbsoluteButtons();
		});
	}, 1000);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/menu-bar/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/menu-bar/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MenuBar */
SapphireWidgets.MenuBar = function(config) {
	$(function() {
		var $menuWidget = $('#' + config.menuWidget);

		var menuResider = function() {
			var navWidth = 0;
			var availabeEspace = $menuWidget.find('.Menubar_item').width();

			$menuWidget.find('.Menubar_item .MenuItem').each(function() {
				navWidth += $(this).outerWidth(true);
			});

			if (navWidth > availabeEspace) {
				var lastItem = $menuWidget.find('.Menubar_item .MenuItem').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($menuWidget.find('.Menubar__extraContainer'));
				menuResider();
			} else {
				var firstMoreElement = $menuWidget.find('.Menubar__extraContainer .MenuItem').first();
				if (navWidth + firstMoreElement.data('width') < availabeEspace) {
					firstMoreElement.insertAfter($menuWidget.find('.Menubar_item .MenuItem').last());
					menuResider();
				}
			}

			if (!$menuWidget.find('.Menubar__extraContainer').is(':empty')) {
				$menuWidget.find('.Menubar_extraItem').addClass('show');
			} else {
				$menuWidget.find('.Menubar_extraItem').removeClass('show');
			}
		};

		$menuWidget.find('.MenuItem').click(function() {
			if (
				!$(this)
					.parent()
					.hasClass('Menubar__extraContainer')
			) {
				if (!$(this).hasClass('active') && !$(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$menuWidget.find('.activeIndicator').addClass('shadow');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				} else if (!$(this).hasClass('active') && $(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				}
			} else {
				$(this)
					.find('.MenuItem_subItems')
					.toggleClass('show');
			}
		});

		$menuWidget.find('.Menubar_extraItem .icon').click(function() {
			$menuWidget.find('.Menubar__extraContainer ').toggleClass('show');
		});

		$(document).mouseup(e => {
			var $menu = $menuWidget.find('.MenuItem.active');
			var $moreOptions = $menuWidget.find('.Menubar_extraItem');

			// if the target of the click isn't the menu or a descendant of the menu
			if ($menu.length > 0) {
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
					$menu.find('.MenuItem_subItems').removeClass('show');
					$('.activeIndicator').removeClass('shadow');
					$menuWidget.find('.MenuItem.active').removeClass('active');
				}
			}

			if (!$moreOptions.is(e.target) && $moreOptions.has(e.target).length === 0) {
				$moreOptions.find('.Menubar__extraContainer').removeClass('show');
				$('.activeIndicator').removeClass('shadow');
			}
		});

		$(window).on('resize load', function() {
			menuResider();
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/multiple-selection-button/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MultipleSelectionButton */
SapphireWidgets.MultipleSelectionButton = function(WrapperId) {
	const $widget = $(WrapperId);
	const $control = $widget.find('input[type="checkbox"]');

	if ($(WrapperId + ' input[type="checkbox"]').is(':disabled')) {
		$widget.addClass('disabled');
	} else {
		$widget.removeClass('disabled');
	}

	if ($(WrapperId + ' input[type="checkbox"]').is(':checked')) {
		$widget.addClass('active');
	} else {
		$widget.removeClass('active');
	}

	$widget.find('input[type="checkbox"]').change(function() {
		const $parent = $(this).parent();

		if ($(this).is(':checked')) $parent.parent().addClass('active');
		else $parent.parent().removeClass('active');
	});

	$widget.find('.MultipleSelectionButton-label').click(function() {
		$control[0].click();

		setTimeout(function() {
			if ($control.is(':checked')) $widget.addClass('active');
			else $widget.removeClass('active');
		}, 10);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-panel.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-panel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPanel3Options ConfirmationPanel same javascript code*/

SapphireWidgets.ConfirmationPanel = {
	isAnyPanelOpened: function() {
		return $('body').hasClass('PanelOpened') && $('.PanelContainer:visible').length;
	},

	togglePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) return;

		if (!SapphireWidgets.ConfirmationPanel.isAnyPanelOpened()) {
			$('body').addClass('PanelOpened');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.PanelContainer')
					.slideToggle(150);
			}, 100);

			if (window.frameElement) {
				SapphireWidgets.RemoteAppointment.setModalMinimized();
			}
		}
	},

	closePanel: function(PanelId) {
		$('body').removeClass('PanelOpened');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.PanelContainer')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[confirmation-panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('confirmation-panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPanel.togglePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.ConfirmationPanel.setPanelBehavior();
	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ConfirmationPanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-popup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/modal-popup.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/modal-popup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Component ModalPopup */

var _isInIframe = window.frameElement != undefined || false;

SapphireWidgets.ModalPopup = {
	create: function(widgetId) {
		$(document).ready(function() {
			// Use this code to append the component to the root body
			// window.frameElement && $(window.frameElement).closest('.MainInteractiveCard-body').length > 0
			if (false) {} else {
				const $widget = $(`#${widgetId}`);
				const $btnClose = $widget.find('.modalPopup_close');

				if (window.frameElement) {
					const $modalRemoteAppt = window.top.$('.RemoteAppointment');

					if ($modalRemoteAppt.length) {
						const $minimizeModal = $modalRemoteAppt.find('.Minimize');
						$minimizeModal.click();
					}
				}

				$btnClose.click(function() {
					$widget.removeClass('Open');
					$widget.removeClass('showclose');
				});
			}
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id-notify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByIDNotify */
var panelNotifyWidget;
SapphireWidgets.PanelByIdNotify = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},
	togglePanelByNotify: function(Id) {
		if (!isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeIn(140);

			try {
				if (justDragged == false) {
					$('.PanelContainer')
						.css('margin-left', panelMarginLeft)
						.css('left', panelLeft)
						.addClass(panelArrowClass);
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideDown(150);
			}, 100);
		} else {
			$('body').removeClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeOut(140);
			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideUp(150);
			}, 100);
		}
	},
	togglePanelNotifyById: function(Id) {
		$('body').toggleClass('PanelOpened');
		$('#' + Id)
			.parents('.ToggleButton')
			.parent()
			.children('.Panel')
			.fadeToggle(140);

		panelNotifyWidget = $('#' + Id)
			.parents('.ToggleButton')
			.attr('NotifyId');

		setTimeout(function() {
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.children('.PanelContainer')
				.slideToggle(150);
		}, 100);
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/popup-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/popup-menu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PopUpMenu */
SapphireWidgets.PopUpMenu = {
	menuPosition: function(id, Context, Locale) {
		/* Hide any other menus on page and set button as collapsed. */
		$('.popup-menu:visible').hide();

		//var _this = $(this);
		var _this = $('#' + id);
		var Xx = 0;
		var Yy = 0;
		var Ww = 0;
		var Hh = 0;

		//_this.children('.button-expand:visible').hide();

		/* Get the menu element. */
		var _el = _this.next('.popup-menu');

		/* Display the menu. */
		_el.show();

		/* Set button collapse. */
		_this.children('.button-collapse').show();

		/* Get the dimensions of the button. */
		buttonHh = _this.outerHeight();
		buttonWw = _this.outerWidth();

		var buttonY = _this.position().top + buttonHh + 10;
		var buttonX = _this.offset().left;
		//var buttonX = _this.position().left;

		/* Get the distance of menu button and the parent element */
		var popupParentXx = _this.offset().left - _this.position().left;

		var popupXx = _el.offset().left;
		var popupWw = _el.outerWidth();

		Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
		Yy = Math.abs(buttonHh - buttonY - $('body').scrollTop());

		if (Locale != 'AR') {
			/* Check if clicked position plus the popup width exceed the window width. */
			if (buttonX + popupWw - $('body').scrollLeft() > $(Context).width()) {
				Xx = buttonX - popupWw - $('body').scrollLeft() - popupParentXx + buttonWw;
				//Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
			}
		}

		/* Set menu position. */
		_el.css({
			left: Xx + 'px',
			top: buttonY + 'px',
		});

		/* Refresh value */
		popupXx = _el.offset().left;

		var _balloonEl = _el.children('.popup-menu-balloon');

		var _balloonXx = _balloonEl.offset().left;
		var _balloonWw = _balloonEl.outerWidth();
		var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

		/* Is the balloon icon positioned out of the popup menu? */
		if (_balloonPosXx + Xx + _balloonWw > Xx + popupWw) {
			_balloonPosXx = _balloonPosXx - _balloonWw;
		}

		/* Set position of the balloon effect. */
		_balloonEl.css('left', _balloonPosXx + 'px');
	},
	menuEvents: function(Context, Locale) {
		$('.popup-button')
			.off('click')
			.on('click', function(e) {
				var id = $(this).attr('id');
				SapphireWidgets.PopUpMenu.menuPosition(id, Context, Locale);

				/*e.stopPropagation();*/

				/* Prevent link submission */
				return false;
			});

		/* v *** Hide popup when click outside *** v */
		function PMClickOutside(event) {
			if (event.hasOwnProperty('target')) {
				var target = $(event.target);
				/*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
				if (
					!$(event.target).closest(
						'.popup-button, .popup-menu, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-item'
					).length
				) {
					$('.popup-menu:visible').hide();
					$('.button-collapse:visible').hide();
					//$('.button-expand').show();
				}
			}
		}

		var _PMIsDrag = false;
		var _PMIsClick = false;
		$(document).on('touchstart', function(event) {
			_PMIsDrag = false;
			_PMIsClick = true;
		});
		$(document).on('touchmove', function(event) {
			_PMIsDrag = true;
		});
		$(document).on('click', function(event) {
			PMClickOutside(event);
			_PMIsDrag = false;
			_PMIsClick = false;
		});
		$(document).on('touchend', function(event) {
			if (!_PMIsDrag && _PMIsClick) {
				PMClickOutside(event);
			}
			_PMIsDrag = false;
			_PMIsClick = false;
		});

		$('.button-collapse').on('click', function(event) {
			$('body').trigger('click');
			return false;
		});
		/* ^ *** Hide popup when click outside *** ^ */
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/sapphire-panel.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/sapphire-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePanel */
SapphireWidgets.SapphirePanel = {
	checkOpenPanel: function() {
		return $('body').hasClass('SapphirePanelOpen') && $('.SapphirePanel_Container:visible').length;
	},

	toggleSapphirePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) {
			return;
		}

		if (!SapphireWidgets.SapphirePanel.checkOpenPanel()) {
			$('body').addClass('SapphirePanelOpen');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.SapphirePanel_Container')
					.slideToggle(150);
			}, 100);
		}
	},

	closeSapphirePanel: function(PanelId) {
		$('body').removeClass('SapphirePanelOpen');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.SapphirePanel_Container')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.SapphirePanel.toggleSapphirePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.SapphirePanel.setPanelBehavior();

	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.SapphirePanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/scripts.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/scripts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./confirmation-panel */ "./src/components/05-components/v3-pat/panel/confirmation-panel.js");
__webpack_require__(/*! ./modal-popup */ "./src/components/05-components/v3-pat/panel/modal-popup.js");
__webpack_require__(/*! ./panel-by-id */ "./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__(/*! ./popup-menu */ "./src/components/05-components/v3-pat/panel/popup-menu.js");
__webpack_require__(/*! ./sapphire-panel */ "./src/components/05-components/v3-pat/panel/sapphire-panel.js");


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancelStructure */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId).find('.PatientCallCancelStructure');
		const $listQueueWrapper = $widget.find('.PatientCallCancelStructure__ListQueues');
		const $dropdown = $listQueueWrapper.find('.InlineDropdown_label');

		$listQueueWrapper.on('click', event => {
			if (!$dropdown.length) return;
			event.stopPropagation();

			$widget.toggleClass('PatientCallCancelStructure--active');

			$(document).on('click.PatientCallCancelStructure', () => {
				$widget.removeClass('PatientCallCancelStructure--active');
				$(document).off('click.PatientCallCancelStructure');
			});

			$dropdown.trigger('click');
			event.preventDefault();
		});
	};

	SapphireWidgets.PatientCallCancelStructure = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js":
/*!****************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancel */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId);
		const $countdown = $widget.find('[ui=data-counter]');
		let $callButton = $widget.find('[ui=data-button-call]');
		let $cancelButton = $widget.find('[ui=data-button-cancel]');
		const $otherContent = $widget.find('.PatientCallCancel__Other');

		let interval;
		let timeCounter;

		const callPatient = function($widget) {
			toggleCallingState();

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + config.timeToCancel);
			else $countdown.text(config.txtCallingIn);

			startCounter();
		};

		const toggleCallingState = () => {
			$widget.toggleClass('CallingPatient');
			$countdown.text(config.txtCallPatient);
		};

		const setInitialState = () => {
			$widget.removeClass('CallingPatient');
			$callButton.show();
			$otherContent.show();
		};

		const startCounter = () => {
			timeCounter = config.timeToCancel;
			interval = window.setInterval(updateCounter, 1000);
		};

		const updateCounter = () => {
			timeCounter--;

			if (timeCounter === 0) {
				clearInterval(interval);
				OsNotifyWidget(config.patientCallFakeNotifyId, '');

				setInitialState();
			}

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + timeCounter);
			else $countdown.text(config.txtCallingIn);
		};

		if (config.startCounting) callPatient($widget);

		$callButton.on('click', () => {
			if ($widget.hasClass('CallingPatient')) return;

			callPatient($widget);

			$callButton.hide();
			$otherContent.hide();
		});

		$cancelButton.on('click', event => {
			timeCounter = config.timeToCancel;
			$countdown.text(timeCounter);
			clearInterval(interval);

			toggleCallingState();

			$callButton.show();
			$otherContent.show();
		});
	};

	SapphireWidgets.PatientCallCancel = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-card/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-card/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionCard */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $component = $(`#${config.widgetId} .PrescriptionCard`);

		if (config.isExpandable) {
			const $expandLink = $component.find('.PrescriptionCard__ExpandIcon');

			$expandLink.click(() => {
				$component.toggleClass('PrescriptionCard--expanded');
			});
		}
	};

	SapphireWidgets.PrescriptionCard = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-expandable/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-expandable/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionExpandable */
(function($, window, SapphireWidgets) {
	const PrescriptionExpandable = function(config) {
		const widgetId = config.widgetId;
		const previewstat = [];

		const $elementWrapper = $(`#${config.widgetId}`);

		const clickEvents = ob => {
			if ($(ob).hasClass('PrescriptionExpandable_header__LinksDiv')) {
				var Section = $(ob)
					.parent()
					.parent()
					.parent();
			} else {
				var Section = $(ob).parent();
			}

			var SectionContent = Section.children('.PrescriptionExpandable_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		};

		this.init = () => {
			const $header = $elementWrapper.find('.PrescriptionExpandable_header');
			const $links = $header.find('.PrescriptionExpandable_header__LinksDiv');

			// Create array stat
			$('.SectionPrescriptionExpandableArea').each(() => {
				const stat = $header.hasClass('expanded') ? true : false;
				previewstat[widgetId] = { client: stat, server: stat };
			});

			if ($header.hasClass('NotExpandable')) {
				$header.on('click', e => e.preventDefault());
			} else if ($header.hasClass('isLinkEpandableClick')) {
				$links.on('click', e => clickEvents($links));
			} else {
				$header.on('click', e => clickEvents($header));
			}

			const elements =
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a';
			$(elements).click(function(event) {
				event.stopPropagation();
			});

			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(ajaxRefresh);
		};

		const ajaxRefresh = function(event) {
			// remove click events
			//$('.PrescriptionExpandable_header').off();

			// add stop prepagation
			$(
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// each all sections
			$('.SectionPrescriptionExpandableArea').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.PrescriptionExpandable_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};
	};

	const create = config => {
		const expandable = new PrescriptionExpandable(config);

		expandable.init();
	};

	SapphireWidgets.PrescriptionExpandable = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-header/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-header/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireHeader */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SapphireHeader(config);
		SapphireWidgets.SapphireHeader.widgetId = config.widgetId;
	};

	var handleDemographics = function() {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	};

	var SapphireHeader = function(config) {
		var _this = this;
		this.config = config;
		this.isConfidential = config.isConfidential;
		this.$widget = $('#' + config.widgetId);
		this.$widget.css({
			display: 'block',
		});
		this.$header = this.$widget.find('.SapphireHeader');
		this.$navigation = this.$widget.find('.SapphireHeader-navigation');
		this.$identification = this.$widget.find('.SapphireHeader-identification');
		this.$demographic = this.$widget.find('.SapphireHeader-demographics');
		this.$information = this.$widget.find('.SapphireHeader-information');
		this.$actions = this.$widget.find('.SapphireHeader-actions');
		this.$additionalTrigger = this.$widget.find('.SapphireHeader-additional-trigger');
		this.$additionalContent = this.$widget.find('.SapphireHeader-additional-content');

		this.handleResize();
		this.attachEvents();

		if (this.$information.text() === '') {
			this.$information.hide();
		}
	};

	SapphireHeader.prototype.getConfig = function() {
		return this.config;
	};

	SapphireHeader.prototype.handleResize = function() {
		var _this = this;
		$(window).resize(function() {
			_this.handleDemographics();
		});
	};

	SapphireHeader.prototype.attachEvents = function() {
		var _this = this;
		this.$additionalTrigger.on('click', function() {
			if (_this.$header.hasClass('isOpen')) {
				_this.$header.removeClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 2);
			} else {
				_this.$header.addClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 3);
			}
		});
	};

	SapphireHeader.prototype.handleDemographics = function() {
		const _this = this;
		this.$demographic.find('.Demographic-item').css('display', 'none');

		this.$additionalTrigger.hide();
		this.$additionalContent.empty();

		const demographicWidth = this.$demographic.outerWidth(true);
		let itemsTotal = 0;

		const componentWidth = this.$widget.outerWidth(true);
		const navigationWidth = this.$navigation.width();
		const identificationWidth = this.$identification.width();
		const demographicsWidth = this.$demographic.width();
		const informationWidth = this.$information.width();
		const actionsWidth = this.$actions.width();

		this.$demographic.find('.Demographic-item').each(function(index) {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			// 64 -> margins and 99 -> More Info button
			if (itemsTotal + 64 + 110 < demographicWidth) {
				$(this).css('display', 'inline-block');
			} else {
				$(this)
					.clone()
					.css('display', 'inline-block')
					.appendTo(_this.$additionalContent);
				_this.$additionalTrigger.show();
			}
		});

		if (this.$additionalContent.find('.Demographic-item').length === 0) {
			this.$header.removeClass('isOpen');
		}
	};

	SapphireHeader.prototype.showAdditional = function() {
		return this.$header.addClass('isOpen');
	};

	SapphireHeader.prototype.hideAdditional = function() {
		return this.$header.removeClass('isOpen');
	};

	SapphireWidgets.SapphireHeader = {
		create: create,
		handleDemographics: handleDemographics,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!SapphireWidgets.SapphireHeader.widgetId) {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	}
	if (!!$('.SapphireHeader-demographics').length) {
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
			});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-popup/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) {}

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) {}

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function(event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function() {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function(popupDiv) {
						popupDiv.find('iframe').load(function() {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			} else {
				//when explicitly setting the height
				if (sameOrigin) innerDoc.body.style.height = 'auto';
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function() {
				setTimeout(function() {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {
		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) {}

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function() {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function() {
				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function() {
					_dialog.find('iframe').empty();
					_dialog.empty();
				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireRadioButton */
SapphireWidgets.SapphireRadioButton = widgetId => {
	const $widget = $(`#${widgetId}`);
	const $input = $widget.find('input[type="radio"]');
	const $label = $widget.find('.ButtonRadioInp_radioText');
	const name = $input.prop('name');

	const addRemoveClass = ($el, toAdd) => {
		if (toAdd) $el.addClass('active');
		else $el.removeClass('active');
	};

	const isChecked = $el => {
		if ($el.is(':checked')) addRemoveClass($widget, true);
		else addRemoveClass($widget, false);
	};

	$input.click(function() {
		$widget.removeClass('active');

		$(`input[type="radio"][name="${name}"]`).each(function() {
			addRemoveClass($(this).closest('.ButtonRadioInp'), $(this).is(':checked'));
		});
	});

	$input.on('change', function() {
		isChecked($(this));
	});

	$label.click(function() {
		const $closestElement = $(this).closest('.ButtonRadioInp');

		if ($closestElement.hasClass('disabled')) return false;

		$input[0].click();
		//isChecked($input);
	});

	isChecked($input);
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/scale-main-structure.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/scale-main-structure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ScaleMainStructure */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			setupScale();
			bindClicks();

			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					setTimeout(function() {
						bindClicks();
					}, 1000);
				});
		});
	};

	ScaleCount = conf => {
		$(function() {
			var CardScale = conf.IsCardScale;
			var RulerScale = conf.IsRulerScale;
			var MultipleScale = conf.IsMultipleScale;
			var $totalPlace = $('.ScaleMainStructure_footerResult');
			var totalCardScale = 0;
			var totalMultipleScale = 0;
			var totalRulerScale = 0;

			var ScaleTypeCard = function() {
				var totalSelected = $('.ScaleList.CardScale').find('.ScaleCard.active').length;
				var totalNumber = 0;
				$(".ScaleList.CardScale:not('.isTitle')").each(function() {
					if ($(this).find('.ScaleCard').length > 0) {
						totalNumber += 1;
					}
				});

				if (totalNumber === totalSelected) {
					var total = [];
					var inputValue = '';
					var $scaleRow = $('.ScaleList.CardScale:not(.isTitle)');
					$scaleRow.each(function() {
						inputValue = $(this)
							.find('.ScaleCard.active')
							.data('value');
						$(this)
							.find('.ScaleList_inputValue input')
							.val(inputValue);
					});

					$('.ScaleList.CardScale .ScaleCard.active').each(function() {
						total.push($(this).data('value'));
					});
					var finalTotal = eval(total.join('+'));
					return finalTotal;
				}
			};

			var ScaleTypeRuler = function() {
				var activeRulerValue = '';
				var $activeRuler = $('.RulerScale_number.active');
				if ($activeRuler.length > 0) {
					var activeRulerValue = $('.RulerScale_number.active')
						.closest('.RulerScale')
						.data().value;
					$('.ScaleList.Ruler')
						.find('.ScaleList_inputValue input')
						.val(activeRulerValue);

					return activeRulerValue;
				}
				return activeRulerValue;
			};

			var ScaleTypeMultiple = function() {
				var numberofCols = $('.ScaleList.MultipleScale')
					.first()
					.find('.ButtonGroupScale').length;
				var numberofRows = $('.ButtonGroupScale').closest('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)')
					.length;
				var total = [];
				var i = 0;
				var j = 0;
				var countActive = 0;
				var countallActiveCols = 0;
				var totalOfItems = numberofCols * numberofRows;
				var totalScore = [];

				for (i = 0; i < numberofCols; i++) {
					for (j = 0; j < numberofRows; j++) {
						var ScaleListSelected = document.querySelectorAll(
							'.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)'
						)[j];
						var ButtonScaleSelected = ScaleListSelected.querySelectorAll('.ButtonGroupScale')[i];

						if (ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active').length > 0) {
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active')[0].innerText;
							total.push(parseInt(ScaleValue));
							totalScore.push(parseInt(ScaleValue));
							countActive = countActive + 1;
						}
					}
					if ($('.ScaleList.MultipleScale.isSubtotal').length > 0) {
						if (countActive === numberofRows) {
							var subTotal = eval(total.join('+'));
							var subtotalScale = document.querySelectorAll('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale')[i];
							subtotalScale.innerText = subTotal;
							countallActiveCols = countallActiveCols + 1;
						}
					}
					countActive = 0;
					total = [];
				}

				if (document.querySelectorAll('.ButtonGroup_button.active').length === totalOfItems) {
					var i = 0;
					var j = 0;
					for (i = 0; i < numberofRows; i++) {
						var ScaleListRow = $('.ScaleList.MultipleScale:not(.isTitle):not(.isSubttotal)')[i];
						var $ScaleListInput = $(ScaleListRow).find('.ScaleList_inputValue input');
						var valuesSelected = '';
						for (j = 0; j < numberofCols; j++) {
							var ActiveButton = $(ScaleListRow).find('.ButtonGroup_button.active')[j];
							var ActiveValue = ActiveButton.innerText;
							//valuesSelected=valuesSelected+','+ActiveValue;
							if (j === numberofCols - 1) {
								valuesSelected += ActiveValue;
							} else {
								valuesSelected += ActiveValue + ',';
							}
						}
						$ScaleListInput.val(valuesSelected);
					}
					var getTotal = eval(totalScore.join('+'));
					return getTotal;
				}
			};

			const TotalCalc = function() {
				let isEmpty = false;

				if (CardScale === true) {
					totalCardScale = ScaleTypeCard();
					isEmpty = totalCardScale === '';
				}

				if (RulerScale === true) {
					totalRulerScale = ScaleTypeRuler();
					isEmpty = totalRulerScale === '';
				}

				if (MultipleScale === true) {
					totalMultipleScale = ScaleTypeMultiple();
					isEmpty = totalMultipleScale === '';
				}

				const $footerResult = $('.ScaleMainStructure_footerResult');
				const $totalScore = $('.ScaleMainStructure_totalScore');
				const $scoreLabel = $('.ScaleMainStructure_footerResult .TotalLabel');

				if (isEmpty) {
					$totalScore.text('---');
					$scoreLabel.text('-');

					$footerResult.removeClass('ColorZetaBG');
				} else if (!isNaN(totalMultipleScale) && !isNaN(totalCardScale) && !isNaN(totalRulerScale)) {
					const totalAbsoluteScore = totalCardScale + totalMultipleScale + totalRulerScale;
					const totalAbsoluteLabel = totalAbsoluteScore > 11 ? 'High' : 'Low';

					$totalScore.text(totalAbsoluteLabel);
					$scoreLabel.text(totalAbsoluteScore);

					$footerResult.addClass('ColorZetaBG');

					const $hiddenLink = $('.ScaleMainStructure_hiddingLink a');

					if ($hiddenLink.length > 0) $hiddenLink.click();
				}
			};

			if (CardScale === true) {
				$('.ScaleCard').click(function() {
					if (!$(this).hasClass('disabled')) {
						$parentScaleCard = $(this).closest('.ScaleList.CardScale');
						$parentScaleCard.find('.ScaleCard').removeClass('active');
						$(this).addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (RulerScale === true) {
				$('.RulerScale').click(function() {
					if ($(this).find('.viewmode').length === 0) {
						var $rulerScaleList = $(this).closest('.ScaleList.Ruler');
						$rulerScaleList.find('.RulerScale_number').removeClass('active');
						$(this)
							.find('.RulerScale_number')
							.addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (MultipleScale === true) {
				var counter;
				var ScaleListTitle = document.querySelector('.ScaleList.MultipleScale.isTitle');
				var ScaleListSubTotal = document.querySelector('.ScaleList.MultipleScale.isSubtotal');
				var ScaleList = document.querySelector('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)');

				$('.ButtonGroupScale')
					.closest('.ScaleList.MultipleScale:nth-child(2n)')
					.addClass('EvenLine');
				var numberOfGroupScale = ScaleList.querySelectorAll('.ButtonGroupScale').length;

				$('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale').text(0);
				// Check if Multiple Scale Title exists then adjust title width
				if ($('.ScaleList.MultipleScale.isTitle').length > 0) {
					for (counter = 0; counter < numberOfGroupScale; counter++) {
						var ScaleListWidth = ScaleList.querySelectorAll('.ButtonGroupScale')[counter].offsetWidth;
						ScaleListTitle.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
						ScaleListSubTotal.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
					}
				}

				$('.ButtonGroup_button').click(function() {
					TotalCalc();
				});
				TotalCalc();
			}
		});
	};

	setupScale = () => {
		var IsCardScale;
		var IsRulerScale;
		var IsMultipleScale;

		$('.ScaleCard').length > 0 ? (IsCardScale = true) : (IsCardScale = false);
		$('.ButtonGroupScale').length > 0 ? (IsMultipleScale = true) : (IsMultipleScale = false);
		$('.RulerScale').length > 0 ? (IsRulerScale = true) : (IsRulerScale = false);

		setTimeout(function() {
			ScaleCount({
				IsCardScale: IsCardScale,
				IsRulerScale: IsRulerScale,
				IsMultipleScale: IsMultipleScale,
			});
		}, 500);

		if ($('.ScaleMainStructure_options .ToggleItemControl').length > 0) {
			$('.ScaleMainStructure_options .ToggleItemControl').click(function() {
				$('.ScaleMainStructure_totalScore').text('---');
			});
		}
	};

	resetScales = () => {
		$('.ScaleMainStructure_content').css('visibility', 'hidden');
		$('.ScaleMainStructure_options .ToggleItemControl').addClass('disabled');
		setTimeout(function() {
			$('.ScaleMainStructure_totalScore').text('---');
			setupScale();
		}, 600);
		setTimeout(function() {
			$('.ScaleMainStructure_content').css('visibility', 'visible');
			$('.ScaleMainStructure_options .ToggleItemControl').removeClass('disabled');
		}, 1000);
	};

	bindClicks = () => {
		if ($('.ScaleMainStructure_options .ToggleItemControl ').length > 0) {
			$('.ScaleMainStructure')
				.off('click')
				.on('click', '.ToggleItemControl', function() {
					resetScales();
				});
		}

		if ($('.Navigation_control').length > 0) {
			$('.Navigation_right').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});

			$('.Navigation_left').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});
		}
	};

	SapphireWidgets.ScaleMainStructure = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/toggle-item-control.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/toggle-item-control.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ToggleItemControl */
SapphireWidgets.ToggleItemControl = () => {
	$(document).ready(function() {
		$('.ToggleItemControl input[type="radio"]').each(function() {
			if ($(this).is(':checked')) {
				$(this)
					.parent()
					.parent()
					.addClass('active');
			}
		});

		$('.ToggleItemControl')
			.off('click')
			.on('click', function() {
				$('.ToggleItemControl').removeClass('active');
				$(this)
					.find('input[type="radio"]')
					.not(':checked')
					.prop('checked', true)
					.click();
				if (
					$(this)
						.find('input[type="radio"]')
						.is(':checked')
				) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				$('.ToggleItemControl input[type="radio"]').each(function() {
					if ($(this).is(':checked')) {
						$(this)
							.parent()
							.parent()
							.addClass('active');
					}
				});

				$('.ToggleItemControl')
					.off('click')
					.on('click', function() {
						$('.ToggleItemControl').removeClass('active');

						if (
							$(this)
								.find('input[type="radio"]')
								.is(':checked')
						) {
							$(this).addClass('active');
						} else {
							$(this).removeClass('active');
						}
					});
			});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/select-ssd.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/select-ssd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SelectSSD = function SSDSelectSetup(config) {
	$(function() {
		var $SSDselectId = $('#' + config.SSDSelectId);
		var isMultiple = config.isMultiple;

		var $ComponentSSD = $SSDselectId.closest('.SearchSD');
		var $ComponentSSDinput = $ComponentSSD.find('.SearchSD___input input');
		var Componentinputlength = $ComponentSSDinput.val().length;

		if (Componentinputlength > 0) {
			$SSDselectId.find('.SelectSD__contentTitle').highlight($ComponentSSDinput.val(), {
				className: 'SelectSD-searched-term',
				caseSensitive: false,
				wordsOnly: false,
			});
		}

		var $favoritesSearchInput = $ComponentSSD.find('.SearchSD_filterfavorites input');

		if ($favoritesSearchInput.length) {
			var favoritesSearchLength = $favoritesSearchInput.val().length;

			if (config.HasFavorite === 'True' && favoritesSearchLength > 0) {
				$SSDselectId.find('.SelectSD__contentTitle').highlight($favoritesSearchInput.val(), {
					className: 'SelectSD-searched-term',
					caseSensitive: false,
					wordsOnly: false,
				});
			}
		}

		var OpenConfirmPopup = function($SSDselectId) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$PopupID = $ComponentSSD.siblings('.SSDPopupWrapper');

			$PopupID.fadeIn('fast', function() {
				$ComponentSSD.addClass('Dont_Close');
				$PopupID
					.find('.SSDpopupOk')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							$SSDselectId.find('.SelectSD__starTrigger > a').click();
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});

				$PopupID
					.find('.SSDpopupCancel')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});
			});
		};

		var SSDCheckBoxSelect = function($widgetId) {
			var checkBoxCount = 0;
			if (isMultiple === 'True') {
				checkBoxCount = $widgetId
					.closest('.SearchSD.showFavorite')
					.find('.SelectSD__multiple > input[type="checkbox"]:checked').length;

				$allListcard = $widgetId.closest('.SearchSD_content');

				if (checkBoxCount > 0) {
					$widgetId.closest('.SearchSD.showFavorite').addClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.off('click');
						$(this)
							.find('.SelectSD_actionLink')
							.off('click');
					});
				} else {
					$widgetId.closest('.SearchSD.showFavorite').removeClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD ').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
						$(this)
							.find('.SelectSD_actionLink')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
					});
				}
			}
		};

		if (isMultiple === 'True') {
			$SSDselectId.find('.SelectSD__multiple > input').click(function() {
				SSDCheckBoxSelect($SSDselectId);
			});
		}

		$SSDselectId.find('.SelectSD__starLink').on('click', function(e) {
			if (!$SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starDisabled')) {
				if ($SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starSelected')) {
					OpenConfirmPopup($SSDselectId);
				} else {
					$SSDselectId.find('.SelectSD__starTrigger > a').click();
				}
			}
		});

		$SSDselectId.find('.SelectSD_contentWrapper').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}

			$ComponentSSDinput.val('');
		});

		$SSDselectId.find('.SelectSD_actionLink').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/ssd-search.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/ssd-search.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SSDSearch = function SSDsearchSetup(config) {
	$(function() {
		var $SSDwidget = $('#' + config.SSDWidgetId); // SSDComponent map not used again
		var $SSDComponent = $SSDwidget.find('.SearchSD'); // SSDSearch Component id for use in the function and manipulate classes
		var $SSDComponentContent = $SSDComponent.find('.SearchSD_content'); // SSDcomponent content
		var hasClone = config.HasClone; // HasClone variable input parameter value
		var hasFavorite = config.HasFavorite; // HasFavorite variable input parameter value
		var showClones = config.ShowClones; // ShowClones variable input parameter value
		var letterLimit = config.LimitLetter; // Number of letter to enter before trigger the search action
		var hasShield = config.HasShield;
		var shieldTimeout = config.ShieldTimeout;
		var inputLength = config.SearchInputLength;
		var $widgetShield = $SSDComponent.find('.SearchSD--shield');
		var searchTriggerTimer;
		const $SSDClearButton = $SSDComponent.find('.SearchSD___remove');
		const $SSDInputElement = $SSDComponent.find('.SearchSD___input input');

		$SSDInputElement.attr('maxLength', inputLength);

		var executeSearch = function() {
			clearTimeout(searchTriggerTimer);
			searchTriggerTimer = setTimeout(function() {
				TriggerSearch($SSDComponent);
			}, 700);
		};

		if (hasShield) {
			window.setTimeout(function() {
				$widgetShield.hide();
			}, shieldTimeout);
		}

		/*  Returns a function, that, as long as it continues to be invoked, will not
		 *   be triggered. The function will be called after it stops being called for
		 *   N milliseconds. If `immediate` is passed, trigger the function on the
		 *   leading edge, instead of the trailing.
		 */
		var debounce = function(func, wait, immediate) {
			var timeout;
			return function executedFunction() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		/****
		 *   Reset Search UI to the initial state
		 */
		var resetUI = function($SSDComponent) {
			$SSDComponent.find('.SearchSD__inputWrapper').show();
			$SSDComponent.find('.SearchSD_search_favoriteLink').hide();
			$SSDComponent.find('.SearchSD___goToFavorite').hide();
			$SSDComponent.find('.SearchSD__FavoriteActions').hide();
			$SSDComponent.find('.SearchSD__FavoriteRemove').hide();
			$SSDComponent.find('.SearchSD__cloneWrapper').hide();
			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDInputElement.val().trim() === '') {
				$SSDComponent.find('.SearchSD___remove').hide();
			}

			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('showClone');
		};

		/*
		 *
		 *  Go to Favorites UI
		 *  --  rest SSDcomponent
		 *  --  show Favorite features
		 *  --  remove class showClone if component have that class
		 *  --  add class showFavorite to have component control
		 *  --  addClass Open with slide
		 */
		var goToFavorites = function($SSDComponent) {
			resetUI($SSDComponent);

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');
			$SSDComponent.find('.SearchSD__return').hide();
			$SSDComponent.find('.SearchSD__inputWrapper').hide();

			if ($SSDComponent.hasClass('showClone')) {
				$SSDComponent.removeClass('showClone');
			}

			$SSDComponent.find('.SearchSD_search_favoriteLink ').show();
			$SSDComponent.find('.SearchSD__FavoriteRemove ').show();
			$SSDComponent.find('.SearchSD__FavoriteActions').show();
			$SSDComponent.addClass('showFavorite');
			$SSDComponent.find('.SelectSD.hasFavorite > a').focus();
			$SSDComponent.addClass('Open');

			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}
		};

		/**************
		 *
		 *  Go to Clone UI
		 *  --  remove class Open
		 *  -- Add ShowClone class
		 *  -- SlideDown effect and add Open Class
		 */
		var goToClone = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');

			if (!$SSDComponent.hasClass('showClone')) {
				$SSDComponent.addClass('showClone');
			}
			$SSDComponent.addClass('Open');
		};

		/*
		 * Return to search from favorite or clone
		 */
		var returnToSearch = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			resetUI($SSDComponent);
			$SSDComponent.removeClass('showClone');
			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDComponent.hasClass('hasClone')) {
				$SSDComponent.addClass('hasClone');
				$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
			}
			if ($SSDComponent.hasClass('hasFavorite')) {
				$SSDComponent.addClass('hasFavorite');
				$SSDComponent.find('.SearchSD_search_favoriteLink').show();
			}
		};

		/*
		 *   SSDClear closes SSDSearch container
		 *   and clear ssd filter input
		 */
		var ssdClear = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponent.find('.SearchSD___input input').val('');
		};

		/*
		 *   CloseSSD closes SSDSearch container
		 *   must remove hightlightSelection done by keyboard navigation
		 */
		var closeSSD = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponentContent.slideUp('250');
			$SSDComponent.find('.selected').removeClass('.selected');
		};

		/*
		 *   Add Open class to SSDComponent
		 *   if SSDComponent has class Open then focus
		 *   makes open effect, check the characters inside the input to filter
		 */
		var ssdFocus = function($SSDComponent) {
			if (!$SSDComponent.hasClass('Open')) {
				// loading show hide list
				$SSDComponent.find('.SearchSD_contentList').hide();
				$SSDComponent.find('.SearchSD__loading').show();
				if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
					$SSDComponent.find('.SearchSD_showMore').hide();
				}

				$SSDComponent.removeClass('Open');
				$SSDComponent.removeClass('.showClone');
				$SSDComponent.removeClass('.showFavorite');

				if (!$SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchLinkInput a').click();
					$SSDComponent.addClass('Open');
				}
			}
		};

		/*
		 *   When clicking clicking outside the component
		 *   the SSD must close and return to initial state
		 */
		var ClickOut = function(e, $SSDComponent) {
			if (!$SSDComponent.is(e.target) && $SSDComponent.has(e.target).length === 0) {
				returnToSearch($SSDComponent);
				$SSDComponent.removeClass('MultiSelectActive');
			}
		};

		/*
		 *   Triggers the link to initialize
		 *   the database search based on current length of the string inserted on the input
		 */
		var TriggerSearch = function($SSDComponent) {
			var currentWord = $SSDComponent.find('.SearchSD___input input').val();
			var currentCount = currentWord.length;
			if (currentCount >= letterLimit || currentCount === 0) {
				$SSDComponent.find('.SearchLinkInput > a').click();
			}
		};

		/*
		 *   Removes all favorite checked boxes
		 *   and ends MultipleSelect
		 */
		var MultiUncheck = function($SSDComponent) {
			$checkBoxes = $SSDComponent.parent().find('.SelectSD__multiple > input[type="checkbox"]');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent
				.parent()
				.find('.SelectSD__multiple > input[type="checkbox"]')
				.each(function() {
					$(this).prop('checked', false);
				});
		};

		/*
		 *   KeyBoard events up down and enter if not filter
		 */
		var keyboardEvents = function(e, $SSDComponent) {
			if ($SSDComponent.hasClass('Open')) {
				var currentSelected = $SSDComponentContent.find('.ListRecords > span.selected'); // Current selectable item
				var $firstSelect = $SSDComponentContent.find('.ListRecords > span:first-child'); // First selectable item
				var $lastSelect = $SSDComponentContent.find('.ListRecords > span:last-child'); // Last selectable item
				var countSelected = currentSelected.length; // Number of selected item

				if (e.which == 38) {
					// if key pressed is up arrow
					if (countSelected === 0) {
						currentSelected = $lastSelect;
						$lastSelect.addClass('selected');
					} else {
						currentSelected.removeClass('selected');
						next = currentSelected.prev();

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.last().addClass('selected');
						}
					}
				} else if (e.which == 40) {
					// if key pressed is down arrow
					if (countSelected === 0) {
						$firstSelect.addClass('selected');
					} else {
						next = currentSelected.next();
						currentSelected.removeClass('selected');

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.eq(0).addClass('selected');
						}
					}
				} else if (e.which == 13) {
					// if key pressed is enter
					if (countSelected > 0) {
						e.preventDefault();
						currentSelected.find('.SelectSD .SelectSD_actionLink').click();
						ssdClear($SSDComponent);

						return true;
					} else if ($SSDComponent.find('SearchSD___input input').is(':active') && countSelected === 0) {
						e.preventDefault();
						return true;
					}
				} else {
					executeSearch();
				}
			}
		};

		/*
		 *   The first step is to reset the seetings to default
		 */
		resetUI($SSDComponent);

		/*
		 *  Remove autoComplete from search input
		 */
		$SSDComponent.find('.SearchSD___input input').attr('autocomplete', 'off');

		/*
		 *   If SSD has Clone and the clone list is visible
		 *   onclick "Clone previous medication" then
		 *   remove Open and show items to clone list
		 */
		if (hasClone === 'True') {
			$SSDComponent.addClass('hasClone');
			$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
		}

		if (hasFavorite === 'True') {
			$SSDComponent.addClass('hasFavorite');
			$SSDComponent.find('.SearchSD_search_favoriteLink').show();
		}

		if ((hasClone === 'True') & (showClones === 'True')) {
			$SSDComponent.find('.SearchSD_cloneWrapper').click(function() {
				$SSDComponent.addClass('Open');
			});
		}

		$SSDComponent.find('.SearchSD__FavoriteRemove').click(function() {
			ssdClear($SSDComponent);
			returnToSearch($SSDComponent);
			debounce(TriggerSearch($SSDComponent), 550);
			debounce($SSDComponent.find('.SearchSD___input input').focus(), 560);
		});

		$SSDComponent.find('.SearchSD__cloneWrapper').click(function() {
			goToClone($SSDComponent);
			$SSDComponent.find('.SearchSD___goToClone > a').click();
		});

		$SSDComponent.find('.SearchSD__inputWrapper').click(function() {
			if ($SSDComponent.hasClass('showClone')) {
				returnToSearch($SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsCancel').click(function() {
			MultiUncheck($SSDComponent);
		});

		$SSDComponent.find('.SearchSD___input input').focus(function() {
			debounce(ssdFocus($SSDComponent), 600);
		});

		$('body').mouseup(function(e) {
			ClickOut(e, $SSDComponent);
		});
		/*
		 *   KeyBoard events on key press
		 */
		$SSDComponent
			.find('.SearchSD___input input')
			.add($SSDComponent.find('.SelectSD_actionLink'))
			.on('keyup', function(e) {
				if (!e.which != 13) {
					keyboardEvents(e, $SSDComponent);
				}

				if ($SSDInputElement.val().trim() === '') {
					$SSDClearButton.animate({ opacity: 'hide' }, 300);
				} else {
					$SSDClearButton.animate({ opacity: 'show' }, 300);
				}
			});

		/*
		 *   Prevent form submission on enter,
		 *   instead go to keyboard events to trigger
		 *   the selection
		 */
		$($SSDComponent).on('keydown', function(e) {
			if (e.which == 13) {
				keyboardEvents(e, $SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD___remove').click(function() {
			ssdClear($SSDComponent);
			debounce(returnToSearch($SSDComponent), 600);
		});

		$SSDComponent.find('.SearchSD_search_favoriteLink').click(function() {
			ssdClear($SSDComponent);
			goToFavorites($SSDComponent);
			$SSDComponent.find('.SearchSD___goToFavorite > a').click();
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsAdd > a').click(function() {
			debounce(TriggerSearch($SSDComponent), 200);
			debounce(returnToSearch($SSDComponent), 350);
		});

		/*
		 *   On Ajax Request hide loading div if the SSD is open then show the
		 *   ListRecords
		 */
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				if ($SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchSD__loading').hide();
					$SSDComponentContent.slideDown('1000', function() {
						$SSDComponent.find('.SearchSD_contentList').show();
						if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
							$SSDComponent.find('.SearchSD_showMore').show();
						}
					});
				}
			});

		$('form').append('<input type="submit" name="ssdInput" onclick="return false;"  style="display:none;" />');

		window.SearchSelectDefine.SSDSearch = {
			returnToSearch: returnToSearch,
			resetUI: resetUI,
			closeSSD: closeSSD,
			ssdFocus: ssdFocus,
			TriggerSearch: TriggerSearch,
			ssdClear: ssdClear,
		};
	});
};
// Added to close the select list if we click the prescription Iframe;
window.addEventListener('DOMContentLoaded', event => {
	var rootElement = document.querySelector('body');
	rootElement.addEventListener(
		'click',
		function(event) {
			document.querySelector("iframe[src*='Prescriptions_CW']") &&
				document
					.querySelector("iframe[src*='Prescriptions_CW']")
					.contentWindow.document.addEventListener('click', e => {
						e.stopPropagation();
						document.querySelector('.SearchSD').classList.remove('Open');
						var allInput = document.querySelector('.SearchSD___input').children;
						for (const element in allInput) {
							return allInput[element].value != undefined ? (allInput[element].value = '') : null;
						}
					});
		},
		true
	);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/searchable-client-side/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/searchable-client-side/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SearchClientSide */
(function($, window, SapphireWidgets) {
	class SearchClientSide {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();

			$(window).load(() => {
				osAjaxBackend &&
					osAjaxBackend.BindAfterAjaxRequest(() => {
						setTimeout(() => {
							$('#' + this.options.inputId).trigger('change');
						}, 200);
					});
			});
		}

		onComponentInit() {
			$('#' + this.options.inputId).on('change keydown paste input', e => {
				if (e.keyCode === 13) {
					e.preventDefault();
				} else {
					this.searchClientSide(
						this.options.inputId,
						this.options.searchableElementSelector,
						this.options.searchableChildSelector
					);
				}
			});
		}

		searchClientSide(inputId, selector, childSelector) {
			if ($('#' + inputId).is(':visible')) {
				var searchText = osjs('#' + inputId)
					.val()
					.toLowerCase();
				var searchCounter = 0;
				var selecion = osjs(selector);

				selecion.removeClass('searchNotFound');
				selecion.removeClass('searchFound');
				selecion.unhighlight();

				if (childSelector) {
					const elementToSearch = osjs(childSelector);
					elementToSearch.unhighlight();
				}

				if (searchText.length > 1) {
					selecion.each(function() {
						const textToCompare = childSelector
							? $(this)
									.find(childSelector)
									.text()
							: this.innerText;

						if (
							textToCompare
								.trim()
								.toLowerCase()
								.indexOf(searchText) > -1
						) {
							osjs(this).addClass('searchFound');
							searchCounter++;
							osjs(this).highlight(searchText);
						} else {
							osjs(this).addClass('searchNotFound');
						}
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new SearchClientSide(config));

	SapphireWidgets.SearchClientSide = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-custom/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandable */
(function($, window, SapphireWidgets) {
	function SectionExpandableCustom() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableCustom_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandable_headerCustom').off();

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandable_headerCustom').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableCustom').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableCustom_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableCustom').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = {
					client: stat,
					server: stat,
				};

				if (
					$(this).hasClass('HideWhenEmpty') &&
					$(this)
						.find('.SectionExpandableCustom_content')
						.text().length === 0
				) {
					$(this).hide();
				}

				// hack to display a message when SectionExpandableCustom has no child items
				var isEmpty = true;
				$(this)
					.find('.SectionExpandableCustom_content div, .SectionExpandableCustom_content span')
					.not('.SectionExpandableCustom_content--empty')
					.each(function() {
						if ($(this).text().length > 0) {
							isEmpty = false;
							return false;
						}
					});
				if (!isEmpty) {
					$(this)
						.find('.SectionExpandableCustom_content--empty')
						.css({
							display: 'none',
						});
				}

				var $expandableInstance = $(this);
				var $toggler = $(this).find('> .SectionExpandable-toggler');
				if ($toggler.length === 1) {
					var $togglerState = false;
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
					$toggler.off('click').on('click', function(evt) {
						evt.stopPropagation();
						$togglerState = !$togglerState;
						if ($togglerState) {
							$expandableInstance.find('.SectionExpandable-toggled').show();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
						} else {
							$expandableInstance.find('.SectionExpandable-toggled').hide();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
						}
					});
				}
			});

			// add click events
			$('.SectionExpandable_headerCustom')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionExpandableCustom();

		expandable.init();
	};

	SapphireWidgets.SectionExpandable = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-inside/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandableInside */
(function($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableInside_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				// tempHeight = SectionContent.height();
				// SectionContent.height(0);
				// SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableInside').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableInside_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableInside').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			// add click events
			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const setOpenCloseClass = id => {
		id.click(function() {
			if (id.parent().hasClass('expanded')) {
				$(this)
					.find('.HeaderIcon')
					.removeClass('open');
				$(this)
					.find('.HeaderIcon')
					.addClass('closed');
			} else {
				$(this)
					.find('.HeaderIcon')
					.removeClass('closed');
				$(this)
					.find('.HeaderIcon')
					.addClass('open');
			}
		});
	};

	const create = () => {
		const expandable = new SectionExpandableInside();

		expandable.init();
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/select-system/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function() {
		var WidgetId = config.WidgetId; //Combo Box Id to be used.
		var Class = config.Class; //All Combo boxes with this class will be be transformed.
		var NoResultsText = config.NoResultsText; //Text to display when there are no results.
		var inputType = config.InpuType; //Options: FIlters, Dropdown, Select2
		var Prompt = config.Prompt; //Prompt in search
		var Select2Type = config.SelectType; // Type of select2 configuration
		var HasSearch = config.HasSearch; // has search
		var OnSelectingJS = config.OnSelectingJS;
		var OnUnSelectingJS = config.OnUnSelectingJS;
		var MaximumLength = config.MaximumLength;
		var SelectedValue = config.SelectedValue;
		var allowClear = config.allowClear;
		//  Select2 Ajax Configuration
		var AjaxURL = config.AjaxURL;
		var AjaxDelay = config.AjaxDelay;
		var PaginationSize = config.PaginationSize;
		var MinimumInputLenght = config.MinimumInputLenght;
		var SearchTerm = config.SearchTerm;
		var SearchExtraParam1 = config.SearchExtraParam1;
		var PageTerm = config.PageTerm;
		var AmountPage = config.PageAmount;
		var isMultiple = config.isMultiple;
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}

		Select2Options.theme = 'default SelectSystem';

		/*  
          Change select2 search display 
              -Multiple Select2 search UI like Single Select2
      */
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function(Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function() {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
							'<input class="select2-search__field" placeholder="' +
							placeholder +
							'" type="search"' +
							' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
							' spellcheck="false" role="textbox" />' +
							'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		/**
		 * Default Configuration needed to associate the widget to the select2 plugin
		 */
		if (WidgetId === '' && Class != '') {
			$WidgetIdentifier = $('.' + Class);
		} else {
			$WidgetIdentifier = $('#' + WidgetId);
		}
		Select2Options.containerCssClass = 'select-hide ' + inputType;

		//  Select2Options.dropdownParent= $('#'+ParentDiv);

		var formatResult = function(result) {
			var $selectedOptionsValue = $WidgetIdentifier.find(':selected');
			var selectedOptions = $selectedOptionsValue.length;
			var totalOptions = $WidgetIdentifier.find('option').length;
			var selectAllOpt = $WidgetIdentifier.find('option:first-child:selected').length;
			var activeValues = '';
			var allOptExceptAll = $WidgetIdentifier.find(':selected:not(".SelectedAll")').length;
			var $allOptExceptAllObj = $WidgetIdentifier.find(':selected:not(".SelectedAll")');

			if (selectedOptions === totalOptions) {
				if (totalOptions - 1 > 3) {
					return 'All Selected';
				} else {
					$allOptExceptAllObj.each(function() {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				}
			} else {
				var totalopt = totalOptions - 1;
				if (selectedOptions > 3) {
					return selectedOptions + ' of ' + totalopt + ' selected';
				} else {
					if (selectedOptions > 0) {
						$selectedOptionsValue.each(function() {
							activeValues = activeValues + ' ' + $(this)[0].innerText + ', ';
						});
						activeValues = activeValues.replace(/,\s*$/, '');
						return activeValues;
					} else {
						return 'Select an option';
					}
				}
			}
		};

		if (NoResultsText != '') {
			Select2Options.formatNoMatches = function() {
				return NoResultsText;
			};
		}

		if (inputType != '') {
			Select2Options.dropdownCssClass = inputType;
		}

		if (allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (MaximumLength != '') {
			Select2Options.maximumInputLength = MaximumLength;
		}

		if (Prompt != '') {
			Select2Options.placeholder = Prompt;
		} else {
			Select2Options.placeholder = {
				id: '-1', // the value of the option
				text: 'Select an option',
			};
		}

		if (Select2Type === '3') {
			// Select2 Ajax
			Select2Options = {};

			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function(repo) {
				if (!repo.element) {
					return Prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function(repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			(Select2Options.ajax = {
				url: AjaxURL,
				dataType: 'json',
				delay: AjaxDelay,
				data: function(params) {
					var Select2AjaxOpt = {};
					var SplitParameter = SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = AmountPage;

					SplitParameter.forEach(function(el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function(data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			}),
				(Select2Options.minimumInputLength = MinimumInputLenght);

			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (SelectedValue !== '') {
				try {
					const data = JSON.parse(SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (Select2Type === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (WidgetId != '') {
				option = new Option('Select All', 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (HasSearch === 'True') {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = formatResult;
		}

		if (Select2Type === '6') {
			// Select2 HtmlOptions
			Select2Options = {};
			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function(key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (SelectedValue != '') {
				$WidgetIdentifier.val(SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (Select2Type === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
			Select2Options.createSearchChoice = function(term, data) {
				if (
					$(data).filter(function() {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};
		}

		if (Select2Type === '5') {
			// Select2 TagMultiple
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function(params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true, // add additional parameters
				};
			};
		}

		if (HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		if (OnUnSelectingJS != '' || OnSelectingJS != '') {
			$WidgetIdentifier
				.select2(Select2Options)
				.on('select2:unselecting', function(e) {
					$(this).data('unselecting', true);
					OnUnSelectingJS;
				})
				.on('select:selecting', function(e) {
					OnSelectingJS;
				})
				.on('select:opening', function(e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function(evt) {
					evt.preventDefault();
				})
				.on('select2:close', function(evt) {
					evt.preventDefault();
				});
		} else {
			if (Select2Type === '2') {
				$WidgetIdentifier.select2(Select2Options);
				var idwidget = '#' + WidgetId;

				$WidgetIdentifier.on('select2:select', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						var selectedItems = [];
						var allOptions = $(idwidget + ' option');
						allOptions.each(function() {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					} else {
						var selectedOptions = $WidgetIdentifier.find('option:selected').length;
						var totalOptions = $WidgetIdentifier.find('option').length;
						if (selectedOptions === totalOptions - 1 && $(idwidget + ' >  option:selected:first-child').length === 0) {
							var selectedItems = [];
							var allOptions = $(idwidget + ' option');
							allOptions.each(function() {
								selectedItems.push($(this).val());
							});
							$WidgetIdentifier.select2('destroy');
							$WidgetIdentifier.val(selectedItems).trigger('change');
							$WidgetIdentifier.select2(Select2Options);
							$WidgetIdentifier.select2('open');
						}
					}
				});

				$WidgetIdentifier.on('select2:unselect', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						$(idwidget + ' > option').removeAttr('selected');
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
						$(idwidget)
							.val('')
							.trigger('change');
						//$(idwidget +' > option').attr('selected', "selected");
					} else {
						$(idwidget + ' > option:first-child').removeAttr('selected');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				});
			} else {
				$WidgetIdentifier.select2(Select2Options);
			}
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-container/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-container/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftContainer */
(function($, window, document, SapphireWidgets) {
	let shiftTimelineResizeTimer;
	let $shiftContainerId = $();

	const create = shiftContainerId => {
		// $('.ShiftCard_timeLine').css('visibility', 'hidden');

		$('.ShiftExpandable_container .ActionsMenu ').css('display', 'none');

		$shiftContainerId = $(shiftContainerId);

		hasScrollBar();
		handleShiftTable();

		// setTimeout(function () {
		// 	$('.ShiftCard_timeLine').css('visibility', 'visible');
		// 	$('.ShiftExpandable_container .ActionsMenu ').css('display', 'block');
		// }, 1500);

		$('.ShiftExpandable__arrow')
			.off('mousedown')
			.on('mousedown', function() {
				setTimeout(function() {
					redrawShiftTimeline();
				}, 1500);
			});
	};

	const handleShiftTable = () => {
		$('.ShiftExpandable').each(function(index, el) {
			var $elFlag = $(this)
				.parent()
				.find('.FlagLine');
			var $elFlagTime = $(this)
				.parent()
				.find('.FlagLine_time');
			var $columnFlag = $elFlag.data('column');
			var $minutesFlag = $elFlag.data('minutes');
			var $slots = $(this)
				.closest('.ShiftContainer')
				.find('.ShiftContainer_header')
				.find('.ShiftCellContent');
			var $slotWidth = Math.round($slots.eq(0).width());
			var minutesPosition = ($minutesFlag * $slotWidth) / 60;

			// handle current time flog horizontal positioning
			var slotsPosition = [];
			$slots.each(function(index, el) {
				slotsPosition.push($(this).position().left);
			});
			$elFlag.css('left', slotsPosition[$columnFlag - 1] + minutesPosition);
			$elFlag.css('display', 'block');
			if ($columnFlag === $slots.length) {
				$elFlagTime.css({
					right: '1px',
					left: 'auto',
				});
			}

			// handle cells that might span over several slots
			$(this)
				.find('.ShiftCard')
				.each(function(index, elRow) {
					var rowHasSpannedCell = false;
					$(elRow)
						.find('.ShiftCellContent')
						.each(function(index, elCell) {
							var colspan = $(elCell).data('colspan');
							if (colspan === slotsPosition.length || rowHasSpannedCell) {
								$(elCell).css({
									display: 'inline-block',
									flex: '1 1 auto',
								});
							} else if (colspan > 1) {
								rowHasSpannedCell = true;
								$(elCell).css({
									display: 'inline-block',
									flex: 'none',
									width: +(slotsPosition[colspan] - slotsPosition[0]) + 'px',
								});
							}
						});
				});

			// handle horizontal scroll behavior
			if (el.scrollWidth > el.clientWidth) {
				$(el).width(el.scrollWidth);
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width(el.scrollWidth);
			} else {
				$(el).width('auto');
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width('auto');
			}
		});
	};

	const hasScrollBar = () => {
		var $ScrollableDiv = $shiftContainerId.find('.ShiftExpandable_container');
		if ($shiftContainerId.find('.ShiftExpandable_container').length > 0) {
			if ($ScrollableDiv.get(0).scrollHeight > $ScrollableDiv.height()) {
				var $lastCell = $shiftContainerId.find('.IsTimer:last-child');
				$lastCell.css('padding-right', '7px');
			}
		}
	};

	const redrawShiftTimeline = () => {
		clearTimeout(shiftTimelineResizeTimer);
		shiftTimelineResizeTimer = setTimeout(function() {
			hasScrollBar();
			handleShiftTable();
		}, 400);
	};

	const checkScroll = () => {
		var hContent = $('.Content').height();
		var hWindow = $(window).height();

		if (hContent > hWindow) redrawShiftTimeline();
	};

	SapphireWidgets.ShiftContainer = {
		create,
		checkScroll,
		redrawShiftTimeline,
	};
})(jQuery, window, document, SapphireWidgets);

$(window)
	.off('resize.GenericGallery')
	.on('resize.GenericGallery', function() {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		SapphireWidgets.ShiftContainer.redrawShiftTimeline();

		osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ShiftContainer.redrawShiftTimeline);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 1000);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 1500);
	});

$(window).load(function() {
	if (!!$('.ShiftContainer').length) {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		setTimeout(function() {
			SapphireWidgets.ShiftContainer.redrawShiftTimeline();
		}, 400);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 600);

		$('.navigation-control-item')
			.off('click')
			.on('click', function() {
				$('.ShiftCard_timeLine').css('visibility', 'hidden');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');
			});

		//Verify the scroll if tooltip opened
		$('.ShiftExpandable_container').on('scroll', function() {
			if ($('.tooltipster-base').is(':visible')) {
				$('.tooltipster-base').css('visibility', 'hidden');
			}
		});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			setTimeout(function() {
				SapphireWidgets.ShiftContainer.redrawShiftTimeline();
			}, 400);

			setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

			setTimeout(function() {
				$('.ShiftCard_timeLine').css('visibility', 'visible');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
			}, 600);

			// SapphireWidgets.ShiftContainer.redrawShiftTimeline;
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTable.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTable */
SapphireWidgets.ShiftTable = widgetId => {
	$(document).ready(() => {
		setTimeout(() => {
			const $shiftTable = $(`#${widgetId}`);
			const $headerCellList = $shiftTable.find('.ShiftTable__HeaderLabels .ShiftTableCell');
			const $hourLine = $shiftTable.find('.HourLine');

			const columnLine = $hourLine.data('column');
			const minutesLine = $hourLine.data('minutes');

			const cellWidth = $headerCellList.eq(0).width();
			const minutesPosition = (cellWidth / 60) * minutesLine;

			// Handle current hour line horizontal positioning
			const cellPosition = [];

			$headerCellList.each(function(index, el) {
				cellPosition.push($(this).position().left);
			});

			$hourLine.css('left', cellPosition[columnLine - 1] + minutesPosition);
			$hourLine.css('display', 'flex');
		}, 500);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCard */
SapphireWidgets.ShiftTableCard = widgetId => {
	const $component = $(`#${widgetId}`);
	const $actions = $component.find('.MoreActions');
	const hasActions = $actions.length > 0;

	if (hasActions) {
		$actions.on('click', e => {
			e.stopPropagation();

			$('.ShiftTableCard').removeClass('ShiftTableCard--selected');
			$component.addClass('ShiftTableCard--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($component) && !$target.parents($component).is($component)) {
				$component.removeClass('ShiftTableCard--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js":
/*!***********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 8;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;

		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $progressBarList = $cardProgress.find('.ProgressBarWrap');
		const $actions = $cardProgress.find('.MoreActions');

		const cardsTotal = $tableCard.length;
		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;
		const colFill = parseInt(endColumn) - parseInt(startColumn) + 1;
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = 0;

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = colFill * roundWidth - paddingOffset;
		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('width', `${newWidth}px`);
		$cardProgress.css('max-width', 'unset');
		$cardProgress.css(direction, `${(totalLeft += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function() {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {
			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

					$cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();

				$cardProgress.addClass('ShiftTableCardProgress--selected');

				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}

		/*$progressBarList.each(function(index) {
			const beginslot = $(this).data('beginslot');
			const beginminute = $(this).data('beginminute');
			const endslot = $(this).data('endslot');
			const endminute = $(this).data('endminute');
			const actionsWidth = 56;

			const progressBarMinutes = (endslot - beginslot) * 60 + endminute - beginminute;
			const progressendWithPer = progressBarMinutes * minuteValueWidth;

			const $progressTotal = $(this).find('.ProgressBar__animation');

			//$(this).css('left', ((beginslot - 1) * 60 + beginminute) * minuteValueWidth + 'px');
			$progressTotal.css('width', progressendWithPer - actionsWidth + 'px');
		});*/
	};

	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function() {
		setTableCardProgress(config);
	});

	$(window).resize(function() {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);
			window[config.widgetId].resizedFinished = setTimeout(function() {
				setTableCardProgress(config);
			}, 250);
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableHover.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCardHover */
SapphireWidgets.ShiftTableCardHover = widgetId => {
	$(document).ready(function() {
		const $card = $(`#${widgetId}`);
		const $cardContent = $card.find('.ShiftTableCardHover__Content');

		$cardContent.on('click', e => {
			e.stopPropagation();

			$card.addClass('ShiftTableCardHover--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($card) && !$target.parents($card).is($card)) {
				$card.removeClass('ShiftTableCardHover--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/side-menu/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/side-menu/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SideMenuStructure */
(function($, window, SapphireWidgets) {
	class SideMenu {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		setMainMenuWidth() {
			$(document).ready(() => {
				const $sideBarIframe = $('.LayoutBase-iframesidebar.notExpandable');

				if ($sideBarIframe.length) {
					const $mainMenu = $('.LayoutBase-MainMenu');
					$mainMenu.css({
						width: 'calc(100% - 262px)',
					});
				}
			});
		}

		openCloseMenu(toOpen) {
			if (toOpen) {
				this.$component.addClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 0,
				});
			} else {
				this.$component.removeClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 70,
				});
			}
		}

		windowClick($component) {
			$(window)
				.off('click.SideMenuStructure')
				.on('click.SideMenuStructure', event => {
					const isMenuItem = event.target.offsetParent && $(event.target.offsetParent).hasClass('MenuItem');

					if (!isMenuItem) {
						$component.find('.SideMenu__MenuItems .active').removeClass('active');
						$component.find('.SideMenu__MenuItems .show').removeClass('show');

						$(window).off('click.SideMenuStructure');
					}
				});
		}

		onComponentInit() {
			this.setMainMenuWidth();

			this.$component = $(`#${this.options.widgetId}`);
			this.$trigger = this.$component.find('.SideMenu__Trigger');
			this.$shield = this.$component.find('.SideMenu__Shield');
			this.$closeButton = this.$component.find('.SideMenu__MenuClose');
			this.$tabItem = this.$component.find('.SideMenu__TabItems .MenuItem');
			this.$menuItem = this.$component.find('.SideMenu__MenuItems .MenuItem__ItemTitle');
			this.$subItem = this.$component.find('.SideMenu__MenuItems .MenuItem_subItems');
			this.$department = this.$component.find('.SideMenu__Tabs .DepartmentName');

			//this.$trigger.hide();
			this.$department.hide();

			this.$iframeContainer = this.$component.find('.iframeContainer');
			this.$iframeContainer.append('<div class="lds-ring OI"><div></div><div></div><div></div><div></div></div>');
			this.$iframeContainer.find('iframe').load(() => {
				this.$iframeContainer.find('.lds-ring').fadeOut();

				if (!this.$component.hasClass('SideMenu--tabsTheme')) {
					//this.$trigger.show();
					this.$department.show();
				}
			});

			this.$trigger.on('click', () => this.openCloseMenu(true));
			this.$shield.on('click', () => this.openCloseMenu(false));
			this.$closeButton.on('click', () => this.openCloseMenu(false));

			this.$tabItem.on('click', event => {
				const $target = $(event.currentTarget);
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();
			});

			this.$menuItem.on('click', event => {
				const isIcon = event.target.className === 'icon icon-changedown';
				if (event.target !== event.currentTarget && !isIcon) return;

				const $target = $(event.currentTarget).parent();
				const $subItems = $target.find('.MenuItem_subItems');
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();

				if ($target.hasClass('active')) {
					$target.removeClass('active');
					$subItems.removeClass('show');
				} else {
					this.$component
						.find('.SideMenu__MenuItems .active')
						.not($target)
						.removeClass('active');

					this.$component
						.find('.SideMenu__MenuItems .show')
						.not($target)
						.removeClass('show');

					$target.toggleClass('active');
					$subItems.toggleClass('show');

					if (this.$component.hasClass('SideMenu--tabsTheme')) {
						this.windowClick(this.$component);
					}
				}
			});

			this.$subItem.on('click', event => event.stopPropagation());

			this.$component
				.find('.SideMenu__TabItems > div:empty')
				.parent()
				.hide();
		}
	}

	const resizeTabs = ($component, $menuTabs, isRecursive) => {
		const $menuTrigger = $component.find('.SideMenu__Trigger');
		const headerWidth = $component.find('.SideMenu__Header').outerWidth();
		const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
		const tabsWidth = $menuItems.length ? $menuItems.outerWidth() : $menuTabs.outerWidth();

		const fixedValue = $(window.parent).width() < 1024 ? 180 : 196;
		let hasItemToRemove = true;

		if (tabsWidth > 0 && tabsWidth + fixedValue > headerWidth && hasItemToRemove) {
			const $moreOptions = $component.find('.SideMenu__Content');
			const $lastItem = $menuTabs
				.find('.SideMenu__MenuItems .MenuItem')
				.last()
				.detach();

			if (!$moreOptions.find('.SideMenu__MenuItems').length) {
				$('<div class="SideMenu__MenuItems"></div>').appendTo($moreOptions);
			}

			const $menuItems = $moreOptions.find('.SideMenu__MenuItems');
			$lastItem.prependTo($menuItems);

			$menuTrigger.css('visibility', 'visible');

			hasItemToRemove = !!$lastItem.length;

			resizeTabs($component, $menuTabs, !!$lastItem.length);
		} else if (!isRecursive) {
			const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
			let $firstItem = $component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').first();

			const newLinkWidth = 140 * 1.16 + 16; // Font-size + padding between items (gap)
			const newItemsWidth = newLinkWidth + $menuItems.outerWidth();

			if (newItemsWidth + fixedValue < headerWidth) {
				$firstItem = $firstItem.detach();
				$firstItem.appendTo($menuTabs.find('.SideMenu__MenuItems'));

				if ($component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').length) {
					resizeTabs($component, $menuTabs);
				} else {
					$menuTrigger.css('visibility', 'hidden');
				}
			}
		}
	};

	const setTabsTheme = () => {
		$(top.document).ready(function() {
			$('.SideMenu', window.parent.document).addClass('SideMenu--tabsTheme');

			const $component = $('.SideMenu', window.parent.document);
			const $menuTabs = $component.find('.SideMenu__Tabs');

			$menuTabs.find('> div:empty').hide();

			const $items = $component.find('.SideMenu__MenuItems').detach();
			$items.appendTo($menuTabs);

			$(document).ready(function() {
				resizeTabs($component, $menuTabs, true);
			});

			$(window.parent).resize(function() {
				clearTimeout(window.resizedFinished);
				window.resizedFinished = setTimeout(function() {
					resizeTabs($component, $menuTabs);
				}, 250);
			});
		});
	};

	const create = config => (window[config.widgetId] = new SideMenu(config));

	SapphireWidgets.SideMenu = { create, setTabsTheme };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sidebar/sidebar-structure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ISidebar */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new Sidebar(config);
		SapphireWidgets.Sidebar.widgetId = config.widgetId;
	};

	var close = function() {
		window[SapphireWidgets.Sidebar.widgetId].close();
	};

	var Sidebar = function(config) {
		var _this = this;
		this.isExpandable = config.isExpandable;
		this.$widget = $('#' + config.widgetId);
		this.$sidebar = this.$widget.find('.ISidebar');
		this.$sidebarMenu = this.$widget.find('.ISidebar-menu');
		this.$sidebarMenuItem = this.$widget.find('.SidebarMenuItem');
		this.$sidebarShield = this.$widget.find('.ISidebar-shield');
		this.$sidebarContent = this.$widget.find('.ISidebar-content');
		this.$sidebarContent.find('> div').each(function() {
			if ($(this).hasClass('PH') && $(this).text() === '') {
				$(this).remove();
			}
		});
		this.attachEvents();
		if (!this.isExpandable) {
			this.openMenuItem(0);
		}
		$(function() {
			if (!config.isExpandable) {
				$(`.${config.selectedTab}`).click();
			}

			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();

			if (!this.isExpandable) {
				$('input[type="text"]:visible')
					.eq(0)
					.focus();
			}
		});

		$(window).unload(function() {
			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();
		});
	};

	Sidebar.prototype.attachEvents = function() {
		var _this = this;
		this.$sidebarMenu.on('click', function(evt) {
			evt.stopPropagation();
			if (!_this.$sidebar.hasClass('open')) {
				_this.openMenuItem(0);
			}
		});
		this.$sidebarMenuItem.on('click', function() {
			var selectedPosition = $(this).index();
			_this.openMenuItem(selectedPosition);
		});
		this.$sidebarShield.on('click', function() {
			_this.close();
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:first-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab1')
				.removeClass('Tab2');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:last-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab2')
				.removeClass('Tab1');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
	};

	Sidebar.prototype.openMenuItem = function(selectedPosition) {
		var _this = this;
		this.$sidebar
			.find('.SidebarMenuItem')
			.removeClass('active')
			.eq(selectedPosition)
			.addClass('active');
		this.$sidebar
			.find('.ISidebar-content > .ISidebar-content-panel')
			.hide()
			.eq(selectedPosition)
			.show();
		this.$sidebar.addClass('open');
		if (window.parent.length && this.isExpandable) {
			window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);
		}
		if (this.$sidebarContent.find('.TextInput:visible').length > 0) {
			this.setFieldFocus(this.$sidebarContent.find('.TextInput:visible').eq(0));
		}
		if (window.parent.$('.select2-container--open').length) {
			window.parent.$('.select2-hidden-accessible').select2('close');
		}
	};

	Sidebar.prototype.setFieldFocus = function($input) {
		window.setTimeout(function() {
			$input.click().select();
		}, 250);
	};

	Sidebar.prototype.close = function() {
		var _this = this;
		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
		}
		if (this.isExpandable) {
			this.$sidebar.removeClass('open');
			this.$sidebar.find('.SidebarMenuItem').removeClass('active');
			this.$sidebar.find('.ISidebar-content > .ISidebar-content-panel').hide();
		}
	};

	SapphireWidgets.Sidebar = {
		create: create,
		close: close,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/small-box-selectable/scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/small-box-selectable/scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.SmallBoxSelectable = function(config) {
	const $component = $(`#${config.widgetId}`);

	if (config.selectOnClick) {
		$component.click(() => {
			const $list = $('.SmallBoxList .SmallBoxSelectable').not($component);

			$list.removeClass('SmallBoxSelectable--selected');
			$component.toggleClass('SmallBoxSelectable--selected');
		});
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-horizontal/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-vertical/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					$errorMessage.css('display', arrayToSpin.indexOf(inputValueInt) === -1 ? 'block' : 'none');
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/split-button/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/split-button/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SplitButton */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SplitButton(config);
	};

	var SplitButton = function(config) {
		var _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function() {
		var _this = this;
		var classList = this.$buttonLink[0].classList.value;
		this.$trigger.addClass(classList);
		$(function() {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-component-block/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-component-block/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var milisecondpassed = 0;
var stoptimer = true;
var myTimout  = null;

function onKeydownFunction() {
    milisecondpassed = 0;
  
    stoptimer=true;
    clearInterval(myTimout);
    myTimout = null;
  };
  
  function onKeyUpFunction(elementToClick) {
  stoptimer = false;
  
  if(milisecondpassed == 0 && myTimout==null){
      myTimout = setInterval(
        function() {
          milisecondpassed+=100;
         
          if (milisecondpassed >= 400 && stoptimer==false) {
            milisecondpassed = 0;
            stoptimer=true;
            clearInterval(myTimout);
            myTimout = null;
            elementToClick.click();
          
          }
          else{
            if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
            }
          }
        }, 100);
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }
    }
    else{
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }   
    }
};

if(typeof(ssdComponent) === 'undefined') {

    ssdComponent = {
        length: 0,
        numberOfActive: 0,
        isRTL: false,
        id: '',
        toDestroy: false,
        onBlurDestroy: function() {
            if (ssdComponent.id != '') {
                var _ssdComponent = $('#' + ssdComponent.id);
                var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                if (ssdComponent.toDestroy) {
                    _wrapper.find('.SSDListRefreshHandler').find('a.to-destroy').click();
                    _wrapper.remove();
                }
                else {
                     var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                    _wrapper.find('input').val('');
                    ssdComponent.blur();
                }
            }
        },
        focus: function(ssdComponentWidget) {
            var _ssdComponentWidget = $(ssdComponentWidget).children('div.SSD-Wrapper:not(.Selected)');
            
            if(!_ssdComponentWidget.length)
                return; //If this SSD-Wrapper is already Selected, return.
            
            if(ssdComponent.numberOfActive)
                ssdComponent.blur(); //Blurs the other focused SSD's.
            
            ssdComponent.numberOfActive++;
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    },
                    'top': function() {
                        return this.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return this.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(this).outerWidth() - this.getBoundingClientRect().left;
                        return 'auto';
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            else{
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.closest('form').append(_ssdComponentWidget);
            }
            _ssdComponentWidget.addClass('Positioned');
            
            setTimeout(
                function() {
                    _ssdComponentWidget.addClass('Selected');
                }
                , 1
            );
            
        },
        
        
        
        blur: function() {
            if(!ssdComponent.numberOfActive)
                return;
            
            var _wrapper = $('div.SSD-Wrapper.Positioned.Selected');
            
            _wrapper.each(function() {
                var parent = $('#' + $(this).attr('data-ssd-placeholder'));
                parent.append($(this));
            });
            
            _wrapper.removeClass('Positioned')
            .children('.SSD-Component')
                .css({
                    'width': '',
                    'top': '',
                    'left': '',
                    'right': ''
                })
                .removeClass('Searching Fixed KeyboardNav')
            .children('.SSD-Bar').css({
                'width': ''
            });
                
            setTimeout(
                function() {
                    _wrapper.removeClass('Selected')
                    .find('.SSD-Bar').each(function() {
                        ssdComponent.tabsClear(this);
                    });
                }
                , 1
            );
                
            ssdComponent.numberOfActive--;
            $(".SSD_ListRecords span, .SSD_ListLine.ShowMore, .SSD_DeleteOnBlur").remove();
        },
        resize: function() {
            if(!ssdComponent.numberOfActive)
                return; //If there's no SSD active, there's no need to resize it.
            
            var _ssdWrapper = $('div.SSD-Wrapper.Selected').first();
            var _ssdComponentWidget = $('#' + _ssdWrapper.attr('data-ssd-placeholder'))[0];
            var _ssdComponent = _ssdWrapper.children('.SSD-Component');
            
            if (typeof _ssdComponentWidget.getBoundingClientRect !== "undefined") {
                _ssdComponent.css({
                    'width': function() {
                        return $(_ssdComponentWidget).width();
                    }/*,
                    'top': function() {
                        return _ssdComponentWidget.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return _ssdComponentWidget.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(_ssdComponentWidget).outerWidth() - _ssdComponentWidget.getBoundingClientRect().left;
                        return 'auto';
                    }*/
                }).children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).closest('.SSD-Component').innerWidth();
                    }
                });
            }
        },
        tabSelect: function(ssdComponentWidget, ssdBar, selectedTab, isInputEvent) {
            var _selectedTab = $(selectedTab);

            if(ssdComponent.numberOfActive == 0) {
                ssdComponent.focus(ssdComponentWidget);
            }
            
            if(!_selectedTab.is('.Selected')) {
                ssdComponent.tabsClear(ssdBar);
                _selectedTab.addClass('Selected');
            }
            
            ssdComponent.focusSelectedTab(ssdBar,isInputEvent);
        },
        focusSelectedTab: function(ssdBar,isInputEvent) {
            // Selected tab is the Search input?
            if(ssdBar.children('.SearchInput-Container.Selected').length) {
                var elementToClick = ssdBar.siblings('.SSDListRefreshHandler').find('a:not(.to-destroy)');
                
                if(isInputEvent){
                    onKeyUpFunction(elementToClick);
                }
                else{
                    elementToClick.click();
                }
                ssdBar.find('.InputPlaceholder input[type="text"]:not(:focus)').first().select().focus();
                return;
            }
            
            // Selected tab is the Short list?
            if(ssdBar.children('.ShortListSelector-Container.Selected').length) {
                ssdBar.find('.ShortListSelector-Container > a').focus();
                return;
            }
        },
        /*
         * Method being called by user action js_ssdComponent_focusCurrentRow
         */
        focusCurrentRow: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');
            var _currentFocus = _ssdList.attr('current-focus');

            _ssdComponent.addClass('KeyboardNav');
            _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')').addClass('focus');
        },
        tabsClear: function(ssdBar) {
            $(ssdBar).children().removeClass('Selected');
        },
        searchIcon: function(event) {
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, $(event.data.ssdBar).children('.SearchInput-Container'),false);
        },
        /*
         * @name inputEvent
         * @description 
         */
        inputEvent: function(event) {
            var _inputContainer = $(event.data.input).closest('.SearchInput-Container');
            
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, _inputContainer,true);
            
            if($(event.data.input).val() == '') {
                _inputContainer.closest('.SSD-Component').removeClass('Searching');
            }
            else {
                _inputContainer.closest('.SSD-Component').addClass('Searching');
            }
        },
        keydownEvent: function(event) {
           onKeydownFunction();          
          
        },
        keyboardHandler: function(event) {
            if(event.key == "Shift" || event.key == "Control")
                return;

            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(event.key == "Enter" && _ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            if(event.key == "Tab") {
                _ssdComponent.addClass('KeyboardNav');
                return;
            }
            
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                var _currentFocus = _ssdList.attr('current-focus');
                var _selectedElement = $(null);
                
                if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length) {
                    _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore.focus');
                }
                else if(_currentFocus > 0) {
                    _selectedElement = _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')');
                }
                
                _ssdComponent.addClass('KeyboardNav')
                
                if(event.key == "ArrowUp") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').prev();
                        }

                        _currentFocus--;
                    }
                    else {
                        _currentFocus = _ssdList.find('span.SSD_ListRecords > span').length;

                        if(_ssdList.find('.SSD_ListLine.ShowMore').length) {
                            _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            _currentFocus++;
                        }
                        else {
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                    }
                }
                
                if(event.key == "ArrowDown") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = $(null);
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').next();
                            
                            if(!_selectedElement.length && _ssdList.find('.SSD_ListLine.ShowMore').length) {
                                _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            }
                        }
                        
                        _currentFocus++;
                    }
                    else {
                        _selectedElement = _ssdList.find('span.SSD_ListRecords > span:first-child');
                        _currentFocus = 1;
                    }
                }
                
                _selectedElement.addClass('focus');
                
                if(!_selectedElement.length) {
                    ssdComponent.focusSelectedTab(_ssdComponent.find('.SSD-Bar'),false);
                    _currentFocus = 0;
                }
                else if (!_selectedElement.find('.SSD_ListLine.Disabled').length){
                    _selectedElement.find('.ExpandControl > a').focus();
                }
                else {
                    _ssdList.find('a.OtherControlLink').focus();
                }
                
                _ssdList.attr('current-focus', _currentFocus);

                return;
            }
            
            ssdComponent.clearKeyboardNavStatus(_ssdComponent);
        },
        clearKeyboardNavStatus: function(ssdComponent) {
            var _ssdComponent = $(ssdComponent);
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            _ssdComponent.removeClass('KeyboardNav');
            _ssdList.attr('current-focus', 0)
                .find('span.SSD_ListRecords > span.focus').removeClass('focus')
                .find('.ExpandControl > a').blur();
        },
        scrollHandler: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024){
                if(_ssdComponent[0].getBoundingClientRect().top > $(".toolbar-wrapper.Fixed").outerHeight()) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top', $(".toolbar-wrapper.Fixed").outerHeight() + 'px'); 
                    
                    
                }
            }else{
                /*Not Mobile apply fixed behaviour*/
                if(_ssdComponent[0].getBoundingClientRect().top > ($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight()+ $('.CTTASLevelAssessmentMainContainer').outerHeight(true) )) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top',($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight() + $('.CTTASLevelAssessmentMainContainer').outerHeight(true)) + 'px'); 
                }
            }


            _ssdComponent.addClass('Fixed');
        },
        destroy: function(_inputId) { /* Used to destroy a specific ssd component by receive the input identifier as parameter and determine the wrapper to remove. */
            $('[data-ssd-placeholder=' + ssdComponent.id + ']').remove();
        },
        init: function(ssdComponentWidget,_toDestroy) {
            ssdComponent.length++;
            ssdComponent.numberOfActive = 0;
            ssdComponent.isRTL = $('html').is('.rtl');
            ssdComponent.toDestroy = _toDestroy;
            if (typeof ssdComponentWidget != 'undefined') {
                ssdComponent.id = $(ssdComponentWidget).attr('id');
            }
            var _ssdComponentWidget = $(ssdComponentWidget);
            var _ssdComponent = _ssdComponentWidget.find('.SSD-Component');
            var _ssdBar = _ssdComponent.children('.SSD-Bar').first();
            var _searchIcon = _ssdBar.find('.SearchIcon').first();
            var _input = _ssdBar.find('input[type="text"]').first();
            var _clearControl = _ssdBar.find('.ClearControl').first();
            
            _searchIcon.off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, ssdComponent.searchIcon);
            
            _ssdBar.children('div').off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, function(event) {
                ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, this,false);
            });
            
            _clearControl.off('click').on('click', ssdComponent.onBlurDestroy);
            
            _input.off('keyup').on('keyup', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.inputEvent);
            
            _input.off('keydown').on('keydown', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.keydownEvent);
            
            $(_ssdComponent).off('click').on('click', {
                ssdComponent: _ssdComponent
            }, function(event) {
                ssdComponent.clearKeyboardNavStatus(event.data.ssdComponent);
            });
        }
    }
}

$(document).ready(function() {
    $(window).on('resize', function(event) {
        ssdComponent.resize();
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).is(':visible')) { /* Clicks on hidden elements are dismissed. */
            return;
        }
        
        var e = $(event.target).closest('.SSD-Component');
        
        if(!e.length) { // User clicked outside the SSD-Component?
            ssdComponent.onBlurDestroy();
        }
    });
    
    $(document).on('keydown', function(event) {
        if(ssdComponent.numberOfActive > 0) {
            if(event.keyCode == "27") { // User hit Escape
                ssdComponent.onBlurDestroy();
            }
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                event.preventDefault();
            }
        }
    });
    
    $(document).on('keyup', function(event) {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for Keyboard handler
            ssdComponent.keyboardHandler(event);
        }
    });
    
    $(document).on('scroll', function() {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for scroll handler
            ssdComponent.scrollHandler();
        }
    });
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-list-line/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-list-line/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SSDListLine */
SapphireWidgets.SSDListLine = {
	toggle: (lineId, lineHandler = '') => {
		var _line = $(lineId).is('.SSD_ListLine')
			? $(lineId)
			: $(lineId)
					.children('.SSD_ListLine')
					.first();

		if (!_line.length) return;

		var _expandControl = $('.expand-control-custom-width');

		if (_expandControl.length != 0) {
			_expandControl.removeClass('expand-control-custom-width');
			_expandControl.css('width', '');
		}

		if (!_line.is('.Active')) {
			var _lineHeader = _line
				.closest('div.SelectableList, .SelectableList-ListRecords')
				.find('div.SelectableList-Line.Active')
				.not(_line);

			_lineHeader.find('a[hide-action]').click();
			_lineHeader
				.removeClass('Active')
				.children('span')
				.hide(200);
			_line.addClass('Active');

			if ($(lineHandler).length) {
				$(lineHandler).click();
			}
		} else {
			_line.removeClass('Active');
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/table-form/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/table-form/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TableForm */
(function($, window, SapphireWidgets) {
	const addEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.append('<div class="TableFormColumn__EmptyItem"></div>');
	};

	const removeEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.each(function(index) {
			$(this)
				.find('> .TableFormColumn__EmptyItem:first')
				.remove();
		});
	};

	const onComponentReload = widgetId => {
		const $table = $(`#${widgetId}`);
		const $editing = $table.find('.TableFormColumn--editMode');

		if ($editing.length) {
			$table.addClass('TableForm--scrollDisabled');
		} else {
			$table.removeClass('TableForm--scrollDisabled');
		}
	};

	SapphireWidgets.TableForm = { addEmptyLine, onComponentReload, removeEmptyLine };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabs-extended/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabs-extended/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabsExtended */
SapphireWidgets.TabsExtended = function(config) {
	$(document).ready(function() {
		const $component = $(`#${config.widgetId} .Tabs_Extended`);
		const $tabHeader = $component.find('.Tabs_header');
		const $tabContainer = $component.find('.TabsContainer');
		const $tabs = $tabHeader.find('> .Tabs__tab');
		const $tabsEnabled = $tabHeader.find('> .Tabs__tab:not(.disabled)');
		const $tabsInput = $component.find('.Tabs_Input input');

		$tabs.each(function() {
			if ($(this).text() === '') {
				$(this).remove();
			}
		});

		$tabsEnabled.on('click', function() {
			$tabContainer.attr('activetab', $(this).attr('value'));

			$tabsInput.val($(this).attr('value'));
			$tabsInput.change();
		});

		$tabsEnabled.off('mousedown').on('mousedown', function(evt) {
			var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
			$tabsExtended.removeClass('isClosed');
		});

		$('.Tabs_Extended.HideActiveOnClick .Tabs_header')
			.off('mousedown')
			.on('mousedown', '.Tabs__tab.active', function(evt) {
				var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
				var $tabsBody = $tabsExtended.find('.Tabs_body');

				if ($tabsBody.hasClass('Tabs_body--closed')) {
					$tabsBody.removeClass('Tabs_body--closed');
					$tabsExtended.removeClass('isClosed');
				} else {
					$tabsBody.addClass('Tabs_body--closed');
					$tabsExtended.addClass('isClosed');
				}
			});

		$tabHeader.find('.Tabs_Extended--disabled').each(function(index, el) {
			$(el)
				.parent()
				.css('cursor', 'default')
				.off('click');
		});

		$component.each(function(index, el) {
			if ($(el).hasClass('Tabs_Extended--closedonstart')) {
				$(el)
					.find('.Tabs_body')
					.addClass('Tabs_body--closed');
				$(el).addClass('isClosed');
				$(el).removeClass('Tabs_Extended--closedonstart');
			}

			$(el)
				.off('click')
				.on('click', '.Tabs_Extended--close', function(evt) {
					$(evt.target)
						.closest('.Tabs_body')
						.addClass('Tabs_body--closed');
				});
		});

		if (!config.tab1Enabled) $tabHeader.find('> .Tabs__tab[value=1]').addClass('disabled');
		if (!config.tab2Enabled) $tabHeader.find('> .Tabs__tab[value=2]').addClass('disabled');
		if (!config.tab3Enabled) $tabHeader.find('> .Tabs__tab[value=3]').addClass('disabled');
		if (!config.tab4Enabled) $tabHeader.find('> .Tabs__tab[value=4]').addClass('disabled');
		if (!config.tab5Enabled) $tabHeader.find('> .Tabs__tab[value=5]').addClass('disabled');
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-list/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-list/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularList */
(function($, window, document, SapphireWidgets) {
	var allTabularLists = [];

	var create = function(config) {
		window[config.tabularListId] = new TabularList(config);
		allTabularLists.push(window[config.tabularListId]);

		$(window).load(function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleTabularListColumns();
				element.handleResponsiveClasses(200);
			});
		});

		$(window).on('resize.tabularlist', function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleResponsiveClasses(200);
			});
		});
	};

	var TabularList = function(config) {
		var _this = this;
		this.config = config;
		this.tabularListResizeTimer = 0;
		this.$widget = $('#' + config.tabularListId);
		this.$widgetList = this.$widget.find('> .TabularList');
		this.$widget.find('.TabularListRow').each(function(i, row) {
			_this.columnsCount = 0;
			$(row)
				.find('.TabularListRow-values .TabularListRow-item')
				.each(function(i, el) {
					$(el).addClass('TabularListColumn' + (i + 1));
					_this.columnsCount++;
				});
		});
		if (!!config.breakOn) {
			this.breakOnOrder = parseInt(config.breakOn);
		} else {
			this.breakOnOrder = 0;
		}
		this.handleTabularListColumns();
	};

	TabularList.prototype.handleTabularListColumns = function() {
		if (this.config.columnsWidth === 'Auto') {
			if (this.$widgetList.width() > 1) {
				for (i = 1; i <= this.columnsCount; i++) {
					var maxWidthContent = Math.max.apply(
						null,
						this.$widget
							.find('.TabularListColumn' + i)
							.map(function() {
								return $(this).outerWidth(true);
							})
							.get()
					);
					this.$widget.find('.TabularListColumn' + i).width(maxWidthContent);
					this.$widget.find('.TabularListColumn' + i).css('opacity', 1);
				}
			}
		}
		if (!!this.config.propertyMinWidth) {
			this.$widget.find('.TabularListRow-property').css('min-width', convertInCSSValue(this.config.propertyMinWidth));
		}
		if (!!this.config.propertyMaxWidth) {
			this.$widget.find('.TabularListRow-property').css('max-width', convertInCSSValue(this.config.propertyMaxWidth));
		}
		if (!!this.config.actionsMinWidth) {
			this.$widget.find('.TabularListRow-actions').css('min-width', convertInCSSValue(this.config.actionsMinWidth));
		}
		if (!!this.config.actionsMaxWidth) {
			this.$widget.find('.TabularListRow-actions').css('max-width', convertInCSSValue(this.config.actionsMaxWidth));
		}
	};

	TabularList.prototype.handleResponsiveClasses = function(timeout) {
		var _this = this;
		window.clearTimeout(this.tabularListResizeTimer);
		this.tabularListResizeTimer = window.setTimeout(function() {
			_this.$widgetList.removeClass(function(index, className) {
				return (className.match(/(^|\s)screen-\S+/g) || []).join(' ');
			});

			_this.$widgetList.removeClass('isBreaking');

			var widgetWidth = _this.$widgetList.outerWidth(true);
			if (widgetWidth === 0) {
				widgetWidth = _this.$widgetList
					.parents(':visible')
					.eq(0)
					.outerWidth(true);
			}

			if (widgetWidth >= 1900) {
				_this.$widgetList.addClass('screen-DesktopHD');
				if (_this.breakOnOrder >= 6) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1600) {
				_this.$widgetList.addClass('screen-DesktopBig');
				if (_this.breakOnOrder >= 5) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1366) {
				_this.$widgetList.addClass('screen-Desktop');
				if (_this.breakOnOrder >= 4) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1024) {
				_this.$widgetList.addClass('screen-DesktopSmall');
				if (_this.breakOnOrder >= 3) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 420) {
				_this.$widgetList.addClass('screen-Tablet');
				if (_this.breakOnOrder >= 2) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else {
				_this.$widgetList.addClass('screen-Phone');
				if (_this.breakOnOrder >= 1) {
					_this.$widgetList.addClass('isBreaking');
				}
			}
		}, timeout);
	};

	SapphireWidgets.TabularList = {
		create: create,
		all: function() {
			return allTabularLists;
		},
	};
})(jQuery, window, document, SapphireWidgets);

function convertInCSSValue(value_in) {
	var returned;
	if (value_in.includes('px') || value_in.includes('%')) {
		returned = value_in;
	} else {
		returned = value_in + 'px';
	}
	return returned;
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-scroll/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-scroll/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularScroll */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			$('.TabularScroll').each(function(i, el) {
				setupTabularScroll($(el));
			});
		});

		$(window).load(function() {
			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					$('.TabularScroll').each(function(i, el) {
						setupTabularScroll($(el));
						resizeRows($(el));
					});
				});
		});

		$(window).on('resize.tabularscroll', function() {
			$('.TabularScroll').each(function(i, el) {
				var $centerTable = $(el).find('.TabularScroll-center-table');
				var tableWidth = $centerTable.find('table').width();
				$(el)
					.find('.TabularScroll-center .TopScrollDragger')
					.width(tableWidth);
				if ($centerTable[0].scrollWidth > $centerTable.width()) {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'visible');
				} else {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'hidden');
				}
			});
		});
	};

	const setupTabularScroll = function($tabularScroll) {
		var $topScrollWrapper = $tabularScroll.find('.TopScrollWrapper');
		var $centerTable = $tabularScroll.find('.TabularScroll-center-table');
		$tabularScroll.find('.TopScrollWrapper').scroll(function() {
			$centerTable.scrollLeft($topScrollWrapper.scrollLeft());
		});
		$centerTable.scroll(function() {
			$topScrollWrapper.scrollLeft($centerTable.scrollLeft());
		});
		// similar to Resize
		var tableWidth = $centerTable.find('table').width();
		$tabularScroll.find('.TabularScroll-center .TopScrollDragger').width(tableWidth);
		if ($centerTable[0].scrollWidth > $centerTable.width()) {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'visible');
		} else {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'hidden');
		}
	};

	const resizeRows = function($tabularScroll) {
		let arrrayHeight = [];
		const $tableCenter = $tabularScroll.find('.TabularScroll-center-table table tbody');
		const $tableRight = $tabularScroll.find('.TabularScroll-right .ListRecords');
		const $tableLeft = $tabularScroll.find('.TabularScroll-left .ListRecords');

		arrrayHeight = $tableCenter
			.children('tr')
			.map(function() {
				return $(this).height();
			})
			.get();

		$tableRight.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});

		$tableLeft.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});
	};

	SapphireWidgets.TabularScroll = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/timeline/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/timeline/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Timeline Helpers */
SapphireWidgets.TimelineCounterItems = function(titleItemID, label) {
	$(document).ready(function() {
		const $section = $(`#${titleItemID}`).parents('.TimelineItemSection');
		const $title = $section.find('.TimelineItemHeader a');
		const $items = $section.find('.TimelineItem');

		$title.append($(`<div class='ColorGreyText TextLarge TextRegular'> (${$items.length})</div>`));
	});
};

SapphireWidgets.ScrollToEvent = function(elementId) {
	SapphireWidgets.LayoutBase.scrollToElement($(`#${elementId}:first`, window.top.document), 52);
};

SapphireWidgets.LineTimelineComponent = function(widgetId, hasContent, isExpandable) {
	$(document).ready(function() {
		const $component = $(`#${widgetId}`);

		if (hasContent && isExpandable) {
			const $expandableLink = $component.find('.LineTimeLine__Header');
			const $actions = $component.find('.LineTimeLine__Actions');

			$expandableLink.click(() => {
				$component.toggleClass('LineTimeLine--expanded');

				return false;
			});

			$actions.click(function(e) {
				e.stopPropagation();
			});
		}
	});
};

SapphireWidgets.TimelinePageEvents = function(showMoreTimelineLink) {
	$(document).ready(function() {
		$(window)
			.off('scroll.Timeline')
			.on('scroll.Timeline', function() {
				if (window.scrollY === 0) {
					const $item = $('.TimelineAnchor').first();
					const $list = $('.TimelinePage__Navigation .ListRecords');

					selectItem($item.attr('id'));
					clearTimeout(window.scrollFinished);

					$list.scrollTop(0);
				} else {
					clearTimeout(window.scrollFinished);
					window.scrollFinished = setTimeout(function() {
						let id = 0;

						$('.TimelineAnchor').each(function(index) {
							if ($(window).scrollTop() + 190 >= $(this).offset().top) {
								id = $(this).attr('id');

								if (index == $('.TimelineAnchor').length - 1) selectItem(id);
							} else {
								selectItem(id, true);

								window.lastItemID = id;

								return false;
							}
						});

						if ($(document).height() - $(this).height() - 150 < $(this).scrollTop()) {
							const $list = $('.TimelinePage__Navigation .ListRecords');

							$(`#${showMoreTimelineLink}`).click();
							$('.TimelinePage__Right .TimelinePage__LoadingMore').css('display', 'flex');

							window.scrollListPosition = $list.scrollTop();
						}
					}, 100);
				}

				checkEndOfPage();
			});

		infiniteScrollList(showMoreTimelineLink);
	});
};

SapphireWidgets.TimelineRestoreEvents = function(showMoreTimelineLink) {
	$('.TimelinePage__Navigation .ListRecords').scrollTop(window.scrollListPosition);
	$('.TimelinePage__LoadingMore').css('display', 'none');

	window.alreadyClicked = false;

	infiniteScrollList(showMoreTimelineLink);

	if (window.lastItemID) selectItem(window.lastItemID);
};

function selectItem(id, scrollTo) {
	const $navItem = $(`[data-item=event-${id}] .TimelineItem`);

	$('.TimelineItem.TimelineItem--active').removeClass('TimelineItem--active');
	$navItem.addClass('TimelineItem--active');

	if (scrollTo && $navItem.length) scrollToView($navItem);
}

function scrollToView(element) {
	const $parentDiv = $('.TimelinePage__Navigation .ListRecords');

	$parentDiv.scrollTop(
		$parentDiv.scrollTop() + element.position().top - $parentDiv.height() / 2 + element.height() / 2
	);

	return true;
}

function infiniteScrollList(showMoreNavLink, name) {
	const $list = $('.TimelinePage__Navigation .ListRecords');

	$list.off('mousewheel.TimelineNav').on('mousewheel.TimelineNav', function() {
		const listHeight = $list.height();
		const scrollTop = $list.scrollTop();
		const scrollHeight = $list.prop('scrollHeight');

		if (listHeight + scrollTop + 100 > scrollHeight && scrollTop > 0 && !window.alreadyClicked) {
			clearTimeout(window.scrollListFinished);
			window.scrollListFinished = setTimeout(function() {
				$(`#${showMoreNavLink}`).click();

				$('.TimelinePage__LoadingMore').css('display', 'flex');

				window.scrollListPosition = $list.scrollTop();
				window.alreadyClicked = true;
			}, 100);
		}
	});
}

function checkEndOfPage() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		const $item = $('.TimelineAnchor').last();
		window.lastItemID = $item.attr('id');
	}
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TriggerIframeTooltip */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		var $elementId = $('#' + config.elementId);

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none; min-height:${config.minHeight}px;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function(instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-content').addClass('tooltipster--noPadding');
				if (config.customClass) $('.tooltipster-content').addClass(config.customClass);

				setTimeout(function() {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function() {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function() {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/truncated-content/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/truncated-content/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TruncatedContent */
(function($, window, document, SapphireWidgets) {
	const create = function(config = {}) {
		$(document).ready(function() {
			var $allTruncated = $([]);
			var rootSelector = `#${config.widgetId}`;
			var openerSelector = '.TruncatedContent--all';
			var bodySelector = '.TruncatedContent--body';

			$(rootSelector).each(function() {
				var $el = $(this);
				$allTruncated = $allTruncated.add($el);
				var $elBody = $el.find(bodySelector);
				var maxLines = $el.data('maxlines');
				var lineHeight = window
					.getComputedStyle($el.find('> div')[0])
					.getPropertyValue('line-height')
					.replace('px', '');
				var lineCount = Math.ceil($el.height() / lineHeight);
				if (lineCount > maxLines) {
					$elBody.css({
						maxHeight: lineHeight * maxLines + 'px',
					});
					var sentence = $el.data('additional').replace('{n}', lineCount - maxLines);
					$el.append('<p class="' + openerSelector.replace('.', '') + '">' + sentence + '</p>');
				}
			});

			$(rootSelector).on('click', openerSelector, function() {
				var el = $(this).closest(rootSelector);
				openTruncatedContent(el);
			});

			openTruncatedContent = function(el) {
				$(el)
					.find(bodySelector)
					.css('max-height', 'none');
				$(el)
					.find(openerSelector)
					.css('display', 'none');
			};

			if (window.frameElement && window.frameElement.id === 'tooltipster-frame') {
				$(rootSelector).off('click', openerSelector);
				$(openerSelector).addClass('in-tooltip');
			}
		});
	};

	SapphireWidgets.TruncatedContent = {
		create,
		open: function(el) {
			openTruncatedContent(el);
		},
		openAll: function() {
			$allTruncated.each(function() {
				openTruncatedContent($(this));
			});
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/08-pages/clinicianWorkArea.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/clinicianWorkArea.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};


/***/ }),

/***/ "./src/components/08-pages/eSignature.js":
/*!***********************************************!*\
  !*** ./src/components/08-pages/eSignature.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.QRCodeScanner = function(options) {
	Html5Qrcode.getCameras()
		.then(devices => {
			if (devices && devices.length) startCamera(devices[0].id);
		})
		.catch(err => {
			// App doesn't have access to the camera...

			setTimeout(() => {
				const $checkbox = $('.AccessCodeOption');

				$checkbox.attr('checked', true).trigger('click');
				$('.LayoutScanCode').addClass('LayoutScanCode--modeOnlyCode');

				$('.LayoutScanCode__Splash').fadeOut(500);
			}, 500);
		});

	function startCamera(cameraID) {
		const html5QrCode = new Html5Qrcode('qrreader');
		const config = { fps: 5, qrbox: 250 };

		const successCallback = response => {
			if ($('.ModeAccessCode').length) return;

			$('.ScanOverlay').addClass('ScanOverlay--correctCode');

			OsNotifyWidget(options.widgetFakeNotifyId, response);

			//setTimeout(() => html5QrCode.stop(), 1000);
		};

		const errorCallback = response => {
			// console.error(response);
		};

		html5QrCode
			.start({ facingMode: 'environment' }, config, successCallback, errorCallback)
			.then(() => {
				setTimeout(() => $('.LayoutScanCode__Splash').fadeOut(500), 500);
			})
			.catch(err => {
				console.error(err);
			});
	}

	let isPortrait = window.matchMedia('(orientation: portrait)').matches;
	let isOrientarionChanged = false;

	$(window).on('orientationchange', function(event) {
		if ($('.ModeAccessCode').length) {
			isOrientarionChanged = window.matchMedia('(orientation: portrait)').matches;
			SapphireWidgets.IsOrientarionChanged = !(isPortrait ^ isOrientarionChanged);

			return;
		}

		window.location.reload();
	});
};

SapphireWidgets.OnModeChange = function() {
	$('.ScanOverlay').removeClass('ScanOverlay--correctCode');
	$('.ScanOverlay').removeClass('ScanOverlay--incorrectCode');

	if (SapphireWidgets.IsOrientarionChanged && !$('.ModeAccessCode').length) {
		window.location.reload();
	}
};

SapphireWidgets.GoNextInput = function(currentInput, nextInputClass) {
	const key = event.keyCode || event.charCode;
	const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

	const $curr = $(currentInput);
	const $next = $(`.${nextInputClass}`);
	const $prev = $curr.prevAll('input').first();

	if (key === 8 || key === 46) {
		$prev.focus();
		$curr.removeClass('ColorAlphaBorder');

		return;
	}

	if (isNumber) {
		$next.focus();
		$curr.addClass('ColorAlphaBorder');
		$('.ValidateInputButton').click();
	} else event.preventDefault();
};


/***/ }),

/***/ "./src/components/08-pages/remoteAppointment.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/remoteAppointment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '280px',
				height: '380px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '45vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function() {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '45vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function() {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function() {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => {};

	const fakeAjaxRefresh = () => {
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/globals.js":
/*!***********************************!*\
  !*** ./src/components/globals.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYWN0aW9ucy1tZW51L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbGxhcHNpYmxlLXNpZGUtcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcmFnLWRyb3Avc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWNhcmQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2VTaWduYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9p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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ1BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzFTRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzloQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7O0FDekNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDZDOzs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNLRDtBQUNBO0FB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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3pTRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDLENBQUM7Ozs7Ozs7Ozs7OztBQzdJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6SEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtREFBbUQsSUFBSSxzQkFBc0I7QUFDN0U7QUFDQSwrREFBK0QsUUFBUSxHQUFHLFNBQVM7QUFDbkYsZ0RBQWdELElBQUksb0ZBQW9GOztBQUV4STtBQUNBO0FBQ0Esb0RBQW9ELGVBQWU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLGtEQUFrRCxlQUFlO0FBQ2pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL01EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNLRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQyxrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUM3YUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQSxrQ0FBa0MsK0JBQStCOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7OztBQ2xORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUJBQW1CO0FBQzdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0hEO0FBQ0EsMEJBQTBCLGdCQUFnQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QyxzQkFBc0IsZ0JBQWdCO0FBQ3RDLHVCQUF1QixnQkFBZ0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsK0JBQStCLGdCQUFnQjs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7OztBQUlUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhJ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtDQUFrQztBQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNqRkQ7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEMsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5TkQ7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImRldi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJlNWE5ZDkxOWM0MDY0MGI3N2EwN1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiYXBwXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9hcHAuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXguc2NzcycpO1xuXG4vL0ltcG9ydCBhbGwgSlMgZmlsZXNcbmNvbnN0IHJlcXVpcmVBbGwgPSByID0+IHIua2V5cygpLmZvckVhY2gocik7XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi9jb21wb25lbnRzJywgdHJ1ZSwgL1xcLmpzJC8pKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi8wMC1zZXR0aW5ncy9jb25maWcuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzAwLXNldHRpbmdzL2NvbmZpZy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmxhbmsuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9hY3Rpb25zLW1lbnUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY29sbGFwc2libGUtc2lkZS1wYW5lbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbXAtbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGV0aW1lLXJhbmdlLXBpY2tlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RyYWctZHJvcC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3Bkb3duLWNhdGVnb3JpZXMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9leHBhbmRhYmxlLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ2FsbGVyeS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvcml6b250YWwtdG9vbGJhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtbGFzYS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtY2xlYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWxpc3Qvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtZGV0YWlscy1leHBhbmQtYm94L3NjcmlwdC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9sb2NhdGlvbi1ib3gvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tYWluLWludGVyYWN0aXZlLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL21vZGFsLXBvcHVwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLW5vdGlmeS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wb3B1cC1tZW51LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wb3B1cC1tZW51LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tZXhwYW5kYWJsZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tZXhwYW5kYWJsZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXBvcHVwL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXBvcHVwL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3NjYWxlLW1haW4tc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy90b2dnbGUtaXRlbS1jb250cm9sLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc3NkLXNlYXJjaC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc3NkLXNlYXJjaC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2hhYmxlLWNsaWVudC1zaWRlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWN1c3RvbS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1pbnNpZGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWxlY3Qtc3lzdGVtL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZFByb2dyZXNzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZFByb2dyZXNzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVIb3Zlci5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlYmFyL3NpZGViYXItc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlYmFyL3NpZGViYXItc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci1ob3Jpem9udGFsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci12ZXJ0aWNhbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1jb21wb25lbnQtYmxvY2svc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtbGlzdC1saW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFibGUtZm9ybS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnMtZXh0ZW5kZWQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLWxpc3Qvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RpbWVsaW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RpbWVsaW5lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC90cmlnZ2VyLWlmcmFtZS10b29sdGlwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvY2xpbmljaWFuV29ya0FyZWEuanNcIixcblx0XCIuLzA4LXBhZ2VzL2VTaWduYXR1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2VTaWduYXR1cmUuanNcIixcblx0XCIuLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9yZW1vdGVBcHBvaW50bWVudC5qc1wiLFxuXHRcIi4vZ2xvYmFscy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2xvYmFscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuanMkXCI7IiwiU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgfHwge307XG4iLCIvKiBDb21wb25lbnQgTGF5b3V0QmFzZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgTGF5b3V0QmFzZShjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBvcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5vcGVuU2lkZWJhcklmcmFtZShkdXJhdGlvbik7XG5cdH07XG5cblx0dmFyIGNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5jbG9zZVNpZGViYXJJZnJhbWUoZHVyYXRpb24pO1xuXHR9O1xuXG5cdHZhciBzY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbigkZWxlbWVudCwgb2Zmc2V0ID0gMCkge1xuXHRcdHZhciAkdGFyZ2V0RWxlbWVudCA9ICRlbGVtZW50O1xuXG5cdFx0aWYgKCEhJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcblxuXHRcdFx0c2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAod2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5nZXRUaHJlc2hvbGRzKCkuc2Vjb25kYXJ5VGhyZXNob2xkID4gMCkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCk7XG5cblx0XHRcdFx0XHRsZXQgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcDtcblxuXHRcdFx0XHRcdGNvbnN0IGlzRml4ZWQgPSAkKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKS5oYXNDbGFzcygnaXNGaXhlZCcpO1xuXHRcdFx0XHRcdGNvbnN0IGlzRW1lcmdlbmN5ID0gISEkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS50ZXh0KCk7XG5cblx0XHRcdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcuU2FwcGhpcmVIZWFkZXInKS5oZWlnaHQoKTtcblx0XHRcdFx0XHRjb25zdCBzZWNvbmRhcnlIZWlnaHQgPSAkKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKS5vdXRlckhlaWdodCgpO1xuXHRcdFx0XHRcdGNvbnN0IGVtZXJnZW5jeUhlaWdodCA9IGlzRW1lcmdlbmN5ID8gJCgnLkxheW91dEJhc2UtZW1lcmdlbmN5JykuaGVpZ2h0KCkgOiAwO1xuXG5cdFx0XHRcdFx0Ly9jb25zdCBzZWNvbmRhcnlGaXhlZCA9IGlzRml4ZWQgPyBzZWNvbmRhcnlIZWlnaHQgOiBzZWNvbmRhcnlIZWlnaHQgLSAyNjtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50T2Zmc2V0VG9wID0gdGFyZ2V0RWxlbWVudE9mZnNldFRvcCAtIChoZWFkZXJIZWlnaHQgKyBzZWNvbmRhcnlIZWlnaHQgKyBlbWVyZ2VuY3lIZWlnaHQpO1xuXG5cdFx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcCh0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gMTYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgTGF5b3V0QmFzZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5sYXlvdXRCYXNlUmVkcmF3VGltZXIgPSAwO1xuXHRcdHRoaXMuaGFzSGVhZGVyID0gY29uZmlnLmhhc0hlYWRlcjtcblx0XHR0aGlzLmlzRXhwYW5kYWJsZSA9IGNvbmZpZy5pc0V4cGFuZGFibGU7XG5cdFx0dGhpcy5pc1RvcFdpbmRvdyA9IHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiR3cmFwcGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLVdyYXBwZXInKTtcblx0XHR0aGlzLiRzcGFjZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2Utc3BhY2VyJyk7XG5cdFx0dGhpcy4kbWFpbk1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbk1lbnUnKTtcblx0XHR0aGlzLiRoZWFkZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtaGVhZGVyJyk7XG5cdFx0dGhpcy4kaGVhZGVyQm9keSA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYm9keScpO1xuXHRcdHRoaXMuJHByaW1hcnlNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXByaW1hcnktbWVudScpO1xuXHRcdHRoaXMuJGVtZXJnZW5jeSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKTtcblx0XHR0aGlzLiRzZWNvbmRhcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5Jyk7XG5cdFx0dGhpcy4kc2Vjb25kYXJ5TWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnktbWVudScpO1xuXHRcdHRoaXMuJGlmcmFtZVNpZGViYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpO1xuXHRcdHRoaXMuJGhlYWRlckFkZGl0aW9uYWxDb250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hZGRpdGlvbmFsLWNvbnRlbnQnKTtcblx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtdG9wZml4ZWRjb250ZW50Jyk7XG5cdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWJvdHRvbWZpeGVkY29udGVudCcpO1xuXHRcdHRoaXMuJG1haW5Db250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jyk7XG5cdFx0dGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgPSAwO1xuXHRcdHRoaXMuZXh0cmFQYWRkaW5nU2Vjb25kYXJ5ID0gMDtcblx0XHR0aGlzLnNldHVwV2luZG93RXZlbnRzKCk7XG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyAxXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcblxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dEJhc2UnKTtcblx0XHRcdGlmIChfdGhpcy5pc1RvcFdpbmRvdykge1xuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCdib2R5JykuY2xpY2soKTtcblx0XHRcdCQod2luZG93KS5zY3JvbGwoKTtcblxuXHRcdFx0X3RoaXMuJGlmcmFtZVNpZGViYXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLnNldHVwV2luZG93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgY3Vyc29yUG9zaXRvbiA9IDA7XG5cblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xuXHRcdFx0X3RoaXMuaGFuZGxlT3B0aW9uYWxDb250YWluZXJzKCk7XG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld1Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KF90aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lcik7XG5cdFx0XHRfdGhpcy5sYXlvdXRCYXNlUmVkcmF3VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xuXHRcdFx0XHRfdGhpcy5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMoKTtcblx0XHRcdFx0X3RoaXMuaGFuZGxlTGF5b3V0VG9wUGFkZGluZygpO1xuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XG5cdFx0XHRcdF90aGlzLmhhbmRsZU1hbmFnZVF1ZXVlQ2FyZChjdXJzb3JQb3NpdG9uLCBuZXdQb3NpdGlvbik7XG5cdFx0XHRcdGN1cnNvclBvc2l0b24gPSBuZXdQb3NpdGlvbjtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fSk7XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlT3B0aW9uYWxDb250YWluZXJzID0gZnVuY3Rpb24oKSB7XG5cdFx0Lypjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc3QgaXNFbWVyZ2VuY3kgPSAhISQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpLnRleHQoKTsqL1xuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZUxheW91dFRvcFBhZGRpbmcgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFkZGluZ1RvcCA9IHRoaXMuY29udGVudFRocmVzaG9sZCArIHRoaXMuZXh0cmFQYWRkaW5nRW1lcmdlbmN5ICsgdGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnk7XG5cdFx0dGhpcy4kc3BhY2VyLnN0b3AoKS5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRoZWlnaHQ6IHBhZGRpbmdUb3AsXG5cdFx0XHR9LFxuXHRcdFx0MCxcblx0XHRcdCdsaW5lYXInXG5cdFx0KTtcblx0XHRpZiAodGhpcy4kdG9wZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0dGhpcy4kdG9wZml4ZWRDb250ZW50LmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAkKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpLndpZHRoKCksXG5cdFx0XHRcdHRvcDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQgKyAncHgnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy4kYm90dG9tZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0aWYgKCQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQgPiAkKCdib2R5JykuaGVpZ2h0KCkpIHtcblx0XHRcdFx0dmFyIGJvdHRvbUZpeGVkSGVpZ2h0ID0gdGhpcy4kYm90dG9tZml4ZWRDb250ZW50Lm91dGVySGVpZ2h0KHRydWUpO1xuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCBib3R0b21GaXhlZEhlaWdodCArICdweCcpO1xuXHRcdFx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQuY3NzKHtcblx0XHRcdFx0XHR3aWR0aDogJCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKS5vdXRlcldpZHRoKHRydWUpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2hhc0ZpeGVkQm90dG9tJykuY3NzKCdwYWRkaW5nLWJvdHRvbScsICcnKTtcblx0XHRcdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUudXBkYXRlVGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtYWluTWVudUhlaWdodCA9IHRoaXMuJG1haW5NZW51Lm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XG5cdFx0dmFyIGhlYWRlckJvZHlIZWlnaHQgPSB0aGlzLiRoZWFkZXJCb2R5Lm91dGVySGVpZ2h0KHRydWUpIHx8IHRoaXMuJGhlYWRlci5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xuXHRcdHZhciB0b3BmaXhlZENvbnRlbnRIZWlnaHQgPSB0aGlzLiR0b3BmaXhlZENvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcblx0XHR2YXIgcHJpbWFyeU1lbnVIZWlnaHQgPSB0aGlzLiRwcmltYXJ5TWVudS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xuXHRcdHZhciBlbWVyZ2VuY3lIZWlnaHQgPSB0aGlzLiRlbWVyZ2VuY3kub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcblx0XHR0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCA9IG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodDtcblx0XHR0aGlzLmNvbnRlbnRUaHJlc2hvbGQgPSBtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQ7XG5cdFx0dGhpcy5lbWVyZ2VuY3lUaHJlc2hvbGQgPSBtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQgKyBwcmltYXJ5TWVudUhlaWdodDtcblx0XHR0aGlzLnNlY29uZGFyeVRocmVzaG9sZCA9XG5cdFx0XHRtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQgKyBwcmltYXJ5TWVudUhlaWdodCArIGVtZXJnZW5jeUhlaWdodDtcblx0fTtcblxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5nZXRUaHJlc2hvbGRzID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcGZpeGVkQ29udGVudFRocmVzaG9sZDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQsXG5cdFx0XHRjb250ZW50VGhyZXNob2xkOiB0aGlzLmNvbnRlbnRUaHJlc2hvbGQsXG5cdFx0XHRlbWVyZ2VuY3lUaHJlc2hvbGQ6IHRoaXMuZW1lcmdlbmN5VGhyZXNob2xkLFxuXHRcdFx0c2Vjb25kYXJ5VGhyZXNob2xkOiB0aGlzLnNlY29uZGFyeVRocmVzaG9sZCxcblx0XHR9O1xuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLm9wZW5TaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb25faW4pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0fSxcblx0XHRcdGR1cmF0aW9uXG5cdFx0KTtcblx0XHQkKCdib2R5Jylcblx0XHRcdC5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJylcblx0XHRcdC5jbGljaygpO1xuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLmNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb25faW4gPj0gMCA/IGR1cmF0aW9uX2luIDogMTAwO1xuXHRcdHZhciB0YXJnZXRXaWR0aCA9IHRoaXMuaXNFeHBhbmRhYmxlID8gNDAgOiAyNjI7XG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHR3aWR0aDogdGFyZ2V0V2lkdGgsXG5cdFx0XHR9LFxuXHRcdFx0ZHVyYXRpb25cblx0XHQpO1xuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTWFuYWdlUXVldWVDYXJkID0gZnVuY3Rpb24oY3Vyc29yUG9zaXRvbiwgbmV3UG9zaXRpb24pIHtcblx0XHRjb25zdCAkbWFuYWdlUXVldWUgPSAkKCcuTWFuYWdlUXVldWVDb250YWluZXInKTtcblxuXHRcdGlmICgkbWFuYWdlUXVldWUubGVuZ3RoKSB7XG5cdFx0XHRpZiAobmV3UG9zaXRpb24gPiBjdXJzb3JQb3NpdG9uKSB7XG5cdFx0XHRcdCRtYW5hZ2VRdWV1ZS5hZGRDbGFzcygnTWFuYWdlUXVldWVDb250YWluZXItLWNsb3NlZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChuZXdQb3NpdGlvbiA8IGN1cnNvclBvc2l0b24pIHtcblx0XHRcdFx0JG1hbmFnZVF1ZXVlLnJlbW92ZUNsYXNzKCdNYW5hZ2VRdWV1ZUNvbnRhaW5lci0tY2xvc2VkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRjbG9zZVNpZGViYXJJZnJhbWUsXG5cdFx0b3BlblNpZGViYXJJZnJhbWUsXG5cdFx0c2Nyb2xsVG9FbGVtZW50LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IExheW91dEJsYW5rICovXG4kKGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcblx0XHRpZiAoISEkKHRoaXMuZnJhbWVFbGVtZW50KS5jbG9zZXN0KCcuTWFpbkludGVyYWN0aXZlQ2FyZCcpLmxlbmd0aCkge1xuXHRcdFx0JCgnLkxheW91dEJsYW5rLlBhZ2UnKS5hZGRDbGFzcygnTWFpbkludGVyYWN0aXZlQ2FyZCcpO1xuXHRcdH1cblx0fVxufSk7IiwiKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBGb3J3YXJkUGF0aWVudENvbXBvbmVudCA9ICgpID0+IHtcblx0XHRjb25zdCAkYWxsT3B0aW9ucyA9ICQoJy5Gb3J3YXJkTG9jYXRpb25zQ29udGVudCcpO1xuXHRcdGNvbnN0ICRtdWx0aXBsZSA9ICQoJy5Gb3J3YXJkTG9jYXRpb25zRGl2Jyk7XG5cdFx0Y29uc3QgJHNpbmdsZSA9ICQoJy5TaW5nbGVMb2NhdGlvbicpO1xuXG5cdFx0JCgnYm9keScpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xuXHRcdFx0Y29uc3Qgbm90Q2xpY2tJbkFsbE9wdGlvbnMgPSAhJGFsbE9wdGlvbnMuaXMoZS50YXJnZXQpICYmICRhbGxPcHRpb25zLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwO1xuXHRcdFx0Y29uc3Qgbm90Q2xpY2tJbk11bHRpcGxlID0gISRtdWx0aXBsZS5pcyhlLnRhcmdldCkgJiYgJG11bHRpcGxlLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwO1xuXHRcdFx0Y29uc3Qgbm90Q2xpY2tJblNpbmdsZSA9ICEkc2luZ2xlLmlzKGUudGFyZ2V0KSAmJiAkc2luZ2xlLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwO1xuXHRcdFx0Y29uc3QgaXNPcGVuID0gJG11bHRpcGxlLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0XHRpZiAobm90Q2xpY2tJbkFsbE9wdGlvbnMgJiYgbm90Q2xpY2tJbk11bHRpcGxlICYmIG5vdENsaWNrSW5TaW5nbGUgJiYgaXNPcGVuKSB7XG5cdFx0XHRcdCRtdWx0aXBsZS5jbGljaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRFbWVyZ2VuY3kgPSB7XG5cdFx0Rm9yd2FyZFBhdGllbnRDb21wb25lbnQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTGF5b3V0UG9wdXAgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIHBvcHVwV2lkdGg7XG5cdHZhciBwb3B1cE1pbldpZHRoO1xuXHR2YXIgcG9wdXBIZWlnaHQ7XG5cdHZhciBwb3B1cE1pbkhlaWdodDtcblx0dmFyIHBvcHVwTWF4SGVpZ2h0O1xuXHR2YXIgcG9wdXBXaWR0aFBlcmNlbnRhZ2U7XG5cdHZhciBsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyO1xuXG5cdHZhciAkcG9wdXAgPSAkKCcuTGF5b3V0UG9wdXAnKTtcblx0dmFyICRvc1BvcHVwID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJyk7XG5cdHZhciAkb3NQb3B1cENvbnRlbnQgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudC5vcy1pbnRlcm5hbC11aS13aWRnZXQtY29udGVudCcpO1xuXHR2YXIgJG92ZXJsYXkgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS13aWRnZXQtb3ZlcmxheScpO1xuXHR2YXIgcG9wdXBTaXplO1xuXHR2YXIgcGFkZGluZ0JvZHk7XG5cblx0Y29uc3QgQk9EWV9QQURESU5HX1RPUF9CT1RUT00gPSAzMjtcblxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnID0gY29uZmlnO1xuXHRcdHBvcHVwU2l6ZSA9IFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuUG9wdXBTaXplO1xuXHRcdHBhZGRpbmdCb2R5ID0gY29uZmlnLm5vQ29udGVudFBhZGRpbmcgPyAwIDogQk9EWV9QQURESU5HX1RPUF9CT1RUT007XG5cblx0XHQkKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdMYXlvdXRQb3B1cCcpOyAvLyBiZWNhdXNlIGRhdGV0aW1lcmFuZ2VwaWNrZXIgaXMgYXR0YWNoZWQgdG8gYm9keVxuXG5cdFx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoKSB7XG5cdFx0XHRcdCRwb3B1cC5hZGRDbGFzcygnaXNUb3VjaCcpO1xuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2lzVG91Y2gnKTsgLy8gYmVjYXVzZSBzZWxlY3QyIGlzIGF0dGFjaGVkIHRvIGJvZHlcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uLCBpbmRleCkge1xuXHRcdFx0XHRcdC8vIEF2b2lkIHRvIHJlZHJhdyB0aGUgZGlhbG9nIGlmIGl0IGlzIG9uZSB0aGUgZm9sbG93aW5nIHBvcHVwc1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zICYmXG5cdFx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUG9wdXBzVG9Bdm9pZE11dGF0aW9ucy5zb21lKGUgPT4gJChgLiR7ZX1gKS5sZW5ndGgpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVkcmF3RGlhbG9nV2luZG93KCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IGZhbHNlLFxuXHRcdFx0fSk7XG5cblx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcy5mcmFtZUVsZW1lbnQpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdFx0fSk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc2l6ZURpYWxvZygpO1xuXHRcdFx0XHRyZXNpemVDb250ZW50KCk7XG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0fSwgMTUwKTtcblxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAucmVkcmF3RGlhbG9nV2luZG93KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93LnBhcmVudClcblx0XHRcdC5vZmYoJ3Jlc2l6ZS5MYXlvdXRQb3B1cCcpXG5cdFx0XHQub24oJ3Jlc2l6ZS5MYXlvdXRQb3B1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWRyYXdEaWFsb2dXaW5kb3coKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlZHJhd0RpYWxvZ1dpbmRvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdGNsZWFyVGltZW91dChsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyKTtcblx0XHRsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHJlc2l6ZURpYWxvZygpO1xuXHRcdFx0cmVzaXplQ29udGVudCgpO1xuXHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0fSwgMzAwKTtcblx0fTtcblxuXHRjb25zdCByZXNpemVEaWFsb2cgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5oYXNDbG9zZSkge1xuXHRcdFx0d2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuc2hvdygpO1xuXG5cdFx0XHRpZiAod2luZG93LnRvcC5faWZyYW1lUG9wdXAgIT0gdW5kZWZpbmVkIHx8IGZhbHNlKSB7XG5cdFx0XHRcdGNvbnN0ICRjbG9zZUJ1dHRvbiA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhci1jbG9zZScpO1xuXG5cdFx0XHRcdCRjbG9zZUJ1dHRvbi5yZW1vdmVBdHRyKCdocmVmJyk7XG5cdFx0XHRcdCRjbG9zZUJ1dHRvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKCkgPT4gd2luZG93LnRvcC5faWZyYW1lUG9wdXAuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAuY2xvc2UoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdMYXlvdXRCYXNlJykpIHtcblx0XHRcdHdpbmRvdy50b3AuJCgnYm9keScpLmNzcyh7XG5cdFx0XHRcdG92ZXJmbG93WTogJ2hpZGRlbicsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkb3ZlcmxheS53aWR0aCgnMTAwJScpO1xuXG5cdFx0Y2FsY1dpZHRoUGVyY2VudGFnZShwb3B1cFNpemUsICRvc1BvcHVwQ29udGVudCk7XG5cblx0XHQkb3NQb3B1cC5jc3Moe1xuXHRcdFx0bGVmdDogJ3Vuc2V0Jyxcblx0XHRcdHRvcDogJ3Vuc2V0Jyxcblx0XHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdFx0bWluV2lkdGg6IHBvcHVwTWluV2lkdGggKyAncHgnLFxuXHRcdFx0d2lkdGg6IHBvcHVwV2lkdGggKyAncHgnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZUNvbnRlbnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgJGJvZHkgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKTtcblx0XHR2YXIgY29udGVudFNjcm9sbFRvcCA9ICRib2R5LnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJyAmJiAkKCcuZGF0ZXJhbmdlcGlja2VyOnZpc2libGUnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBza2lwIHRoZSByZXNldCBvZiAuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnRcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGJvZHkuY3NzKHtcblx0XHRcdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRsZXQgYm9keUNvbnRlbnQgPSBwYWRkaW5nQm9keVxuXHRcdFx0PyAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKVswXS5zY3JvbGxIZWlnaHRcblx0XHRcdDogJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JykuaGVpZ2h0KCk7XG5cblx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19oZWFkZXInKS5pbm5lckhlaWdodCgpIHx8IDA7XG5cdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLmlubmVySGVpZ2h0KCkgfHwgMDtcblx0XHR2YXIgYm9keUhlaWdodCA9IGJvZHlDb250ZW50IHx8IDA7XG5cdFx0dmFyIGZvb3RlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fZm9vdGVyJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xuXHRcdHZhciBjb250ZW50SGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgaW50cm9IZWlnaHQgKyBib2R5SGVpZ2h0ICsgZm9vdGVySGVpZ2h0ICsgcGFkZGluZ0JvZHk7XG5cdFx0dmFyIGRpYWxvZ0hlaWdodCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLVBvcHVwLm9zLWludGVybmFsLXVpLWRpYWxvZycpLm91dGVySGVpZ2h0KCk7XG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cucGFyZW50KS5oZWlnaHQoKTtcblxuXHRcdGlmIChwb3B1cFNpemUgPT09ICdTbWFsbCcpIHtcblx0XHRcdHZhciBwYXJlbnRIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xuXG5cdFx0XHRpZiAoY29udGVudEhlaWdodCA+IHBhcmVudEhlaWdodCkge1xuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KHBhcmVudEhlaWdodCAtIDcwKTtcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KCRvc1BvcHVwQ29udGVudC5oZWlnaHQoKSAtIHBhZGRpbmdCb2R5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChjb250ZW50SGVpZ2h0IDwgZGlhbG9nSGVpZ2h0ICYmIFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkge1xuXHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IGRpYWxvZ0hlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XG5cdFx0XHRcdCRib2R5LmhlaWdodChmb3JjZWRCb2R5SGVpZ2h0KTtcblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA8IGRpYWxvZ0hlaWdodCkge1xuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xuXHRcdFx0XHRpZiAoY29udGVudEhlaWdodCA8IHBvcHVwTWluSGVpZ2h0KSB7XG5cdFx0XHRcdFx0dmFyIGRpZmVyZW5jZSA9IHBvcHVwTWluSGVpZ2h0IC0gY29udGVudEhlaWdodDtcblx0XHRcdFx0XHQkYm9keS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmVyZW5jZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA+PSBkaWFsb2dIZWlnaHQgJiYgU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSB7XG5cdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gZGlhbG9nSGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0ID49IGRpYWxvZ0hlaWdodCkge1xuXHRcdFx0XHRpZiAoY29udGVudEhlaWdodCA+IHBvcHVwTWF4SGVpZ2h0KSB7XG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChwb3B1cE1heEhlaWdodCk7XG5cdFx0XHRcdFx0dmFyIGZvcmNlZEJvZHlIZWlnaHQgPSBwb3B1cE1heEhlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XG5cdFx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignVW5leHBlY3RlZCBjb21iaW5hdGlvbi4uLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSB3aGVuIERhdGVUaW1lUmFuZ2VQaWNrZXIgaXMgb3BlbmVkXG5cdFx0dmFyIGRhdGVSYW5nZVBpY2tlciA9ICQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpO1xuXHRcdGlmIChkYXRlUmFuZ2VQaWNrZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRpZiAoZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IGRpYWxvZ0hlaWdodCkge1xuXHRcdFx0XHR2YXIgZGlmZmVyZW5jZSA9IGRhdGVSYW5nZVBpY2tlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSBkaWFsb2dIZWlnaHQ7XG5cdFx0XHRcdHZhciBib2R5SGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cblx0XHRcdFx0JCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JykuaGVpZ2h0KGJvZHlIZWlnaHQgKyBkaWZmZXJlbmNlICsgcGFkZGluZ0JvZHkpO1xuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQpO1xuXG5cdFx0XHRcdGNvbnN0IHBvcHVwVG90YWxIZWlnaHQgPSAkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdGNvbnN0IG5ld0NvbnRlbnRIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKS5vdXRlckhlaWdodCh0cnVlKSArIGhlYWRlckhlaWdodCArIGludHJvSGVpZ2h0ICsgZm9vdGVySGVpZ2h0O1xuXG5cdFx0XHRcdGlmICh3aW5kb3dIZWlnaHQgPCA3MjApIHtcblx0XHRcdFx0XHRjb25zdCBjb29yZHMgPSBkYXRlUmFuZ2VQaWNrZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnBhcmVudC5zY3JvbGxZICsgY29vcmRzLnRvcCAtIGNvb3Jkcy5oZWlnaHQ7XG5cdFx0XHRcdFx0ZGF0ZVJhbmdlUGlja2VyLmFkZENsYXNzKCdkcm9wLXVwJykuY3NzKCd0b3AnLCBwb2ludCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAod2luZG93SGVpZ2h0IDwgOTgwICYmIG5ld0NvbnRlbnRIZWlnaHQgPiBwb3B1cFRvdGFsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmNzcyh7XG5cdFx0XHRcdFx0XHRtYXhIZWlnaHQ6IG5ld0NvbnRlbnRIZWlnaHQgKyAncHgnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JGJvZHkuc2Nyb2xsVG9wKGNvbnRlbnRTY3JvbGxUb3ApO1xuXHR9O1xuXG5cdGNvbnN0IGluY3JlYXNlSGVpZ2h0ID0gZnVuY3Rpb24oZGlmZXJlbmNlKSB7XG5cdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodCgkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCkgKyBkaWZlcmVuY2UpO1xuXHR9O1xuXG5cdGNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKCRlbGVtZW50KSB7XG5cdFx0dmFyICR0YXJnZXRFbGVtZW50ID0gJGVsZW1lbnQ7XG5cdFx0aWYgKCEhJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcblx0XHRcdFx0dmFyIGhlYWRlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcblx0XHRcdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XG5cdFx0XHRcdHZhciBjdXJyZW50Qm9keVNjcm9sbCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpWzBdLnNjcm9sbFRvcCB8fCAwO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0ICsgY3VycmVudEJvZHlTY3JvbGwgLSAyMDtcblx0XHRcdFx0JCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jykuc2Nyb2xsVG9wKHRhcmdldEVsZW1lbnRPZmZzZXRUb3ApO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2FsY1dpZHRoUGVyY2VudGFnZSA9ICgpID0+IHtcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cucGFyZW50KS53aWR0aCgpO1xuXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xuXHRcdFx0bGV0IHBlcmNlbnRhZ2UgPSAwLjMzO1xuXG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcGVyY2VudGFnZSA9IDAuNTtcblx0XHRcdGVsc2UgaWYgKHdpbmRvd1dpZHRoID4gMTAyNCAmJiB3aW5kb3dXaWR0aCA8PSAxNDQwKSBwZXJjZW50YWdlID0gMC40O1xuXG5cdFx0XHRwb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiBwZXJjZW50YWdlKTtcblx0XHRcdHBvcHVwTWluV2lkdGggPSA0MDA7XG5cdFx0fSBlbHNlIGlmIChwb3B1cFNpemUgPT09ICdNZWRpdW0nKSB7XG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjg7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3dpdGNoIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLlBvcHVwV2lkdGgpIHtcblx0XHRcdFx0XHRjYXNlICdYU21hbGwnOlxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDIwMDtcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC4yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnU21hbGwnOlxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDMwMDtcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC4zO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnTWVkaXVtJzpcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuNjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gNzAwO1xuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNUb3VjaCA/IDAuOCA6IHBvcHVwV2lkdGhQZXJjZW50YWdlO1xuXHRcdFx0fVxuXG5cdFx0XHRwb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiBwb3B1cFdpZHRoUGVyY2VudGFnZSk7XG5cdFx0XHRwb3B1cE1pbkhlaWdodCA9IDEwMDtcblx0XHRcdHBvcHVwTWF4SGVpZ2h0ID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoXG5cdFx0XHRcdD8gcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC45KVxuXHRcdFx0XHQ6IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuNyk7XG5cblx0XHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHBvcHVwSGVpZ2h0ID0gcG9wdXBNYXhIZWlnaHQ7XG5cdFx0XHRlbHNlIHBvcHVwSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcblxuXHRcdFx0JG9zUG9wdXBDb250ZW50LmNzcyh7XG5cdFx0XHRcdG1heEhlaWdodDogcG9wdXBNYXhIZWlnaHQgKyAncHgnLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IHBvcHVwTWluSGVpZ2h0ICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiBwb3B1cEhlaWdodCArICdweCcsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ0xhcmdlJykge1xuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoICogMC44KTtcblx0XHRcdHBvcHVwTWF4SGVpZ2h0ID0gcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC45KTtcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ0ZpeGVkJykge1xuXHRcdFx0cG9wdXBXaWR0aCA9IFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGg7XG5cdFx0XHRwb3B1cE1pbldpZHRoID0gU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aDtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRyZXNpemVEaWFsb2csXG5cdFx0cmVzaXplQ29udGVudCxcblx0XHRpbmNyZWFzZUhlaWdodCxcblx0XHRyZWRyYXdEaWFsb2dXaW5kb3csXG5cdFx0c2Nyb2xsVG9FbGVtZW50LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykudW5sb2FkKGZ1bmN0aW9uKCkge1xuXHRpZiAoISEkKCcuTGF5b3V0UG9wdXAnKS5sZW5ndGgpIHtcblx0XHR3aW5kb3cudG9wLiQoJ2JvZHknKS5jc3Moe1xuXHRcdFx0b3ZlcmZsb3dZOiAnc2Nyb2xsJyxcblx0XHR9KTtcblx0fVxufSk7XG4iLCIvKiBDb21wb25lbnQgU3ViTGF5b3V0TGVmdCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbigpIHt9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TdWJMYXlvdXRMZWZ0ID0ge1xuXHRcdGNyZWF0ZSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBBY3Rpb25zTWVudSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgJHRyaWdnZXJFbGVtZW50ID0gJCgnIycgKyBjb25maWcudHJpZ2dlckVsZW1lbnQpO1xuXHRcdHZhciAkY29udGVudEVsZW1lbnQgPSAkKCcjJyArIGNvbmZpZy5jb250ZW50RWxlbWVudCk7XG5cblx0XHRpZiAoJGNvbnRlbnRFbGVtZW50LnRleHQoKS5sZW5ndGggPCAxKSB7XG5cdFx0XHQkdHJpZ2dlckVsZW1lbnQuaGlkZSgpO1xuXHRcdH1cblxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcblx0XHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbmZpZy5wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdsZWZ0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAncmlnaHQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2JvdHRvbS1sZWZ0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnYm90dG9tLXJpZ2h0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20tcmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdib3R0b20tbGVmdCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAndG9wLWxlZnQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICd0b3AtcmlnaHQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3RvcC1yaWdodCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3RvcC1sZWZ0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCR0cmlnZ2VyRWxlbWVudC50b29sdGlwc3Rlcih7XG5cdFx0XHRcdFx0Y29udGVudDogJCgnPHNlY3Rpb24vPicpLmFwcGVuZCgkY29udGVudEVsZW1lbnQuY2xvbmUodHJ1ZSwgdHJ1ZSkpLFxuXHRcdFx0XHRcdHRyaWdnZXI6IGNvbmZpZy50cmlnZ2VyRXZlbnQsXG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uLFxuXHRcdFx0XHRcdG1heFdpZHRoOiBjb25maWcubWF4V2lkdGgsXG5cdFx0XHRcdFx0dGhlbWU6XG5cdFx0XHRcdFx0XHQndG9vbHRpcHN0ZXItbG9jYXRpb24tLScgK1xuXHRcdFx0XHRcdFx0Y29uZmlnLmxvY2F0aW9uICtcblx0XHRcdFx0XHRcdCcgQWN0aW9uc01lbnUtdG9vbHRpcCBQYWRkaW5nLS0nICtcblx0XHRcdFx0XHRcdGNvbmZpZy5wYWRkaW5nICtcblx0XHRcdFx0XHRcdCcgQm9yZGVyLS0nICtcblx0XHRcdFx0XHRcdGNvbmZpZy5ib3JkZXIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5BY3Rpb25zTWVudSA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBCdXR0b25MaW5rICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5CdXR0b25DbGlja2ApO1xuXG5cdFx0XHQkd2lkZ2V0Lm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGNvbnN0IF90YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuXHRcdFx0XHRpZiAoX3RhcmdldC5jbG9zZXN0KCcuQnV0dG9uQ2xpY2suY2xpY2snKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdCQoJy5CdXR0b25DbGljay5jbGljaycpLnJlbW92ZUNsYXNzKCdjbGljaycpO1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5CdXR0b25MaW5rID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IENhcmRDaGFydHMgKi9cblNhcHBoaXJlV2lkZ2V0cy5DYXJkQ2hhcnRzUG9wdXAgPSAoKSA9PiB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddID0ge307XG5cdFx0Y29uc3QgaXNJbnNpZGVJZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblxuXHRcdGxldCAkY29tcG9uZW50ID0gJCgnLkNhcmRDaGFydHMnKTtcblx0XHRsZXQgJGhlYWRlciA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlcicpO1xuXHRcdGxldCAkY29udGVudCA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0NvbnRlbnQnKTtcblx0XHRsZXQgJHByb3BlcnRpZXMgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Qcm9wZXJ0aWVzJyk7XG5cdFx0bGV0ICRoZWFkZXJEaXYgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXJDaGFydCA+IGRpdicpO1xuXHRcdGxldCAkZmFrZUNvbHVtbnMgPSAkKCcuRmFrZUNvbHVtbnMnKTtcblx0XHRsZXQgJGJvZHlDb250ZW50ID0gJCgnLkxheW91dFBvcHVwX19ib2R5Jyk7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUgJiYgISRmYWtlQ29sdW1ucy5sZW5ndGgpIHtcblx0XHRcdCRoZWFkZXJEaXYuYXBwZW5kKGA8ZGl2IGNsYXNzPSdGYWtlQ29sdW1ucyc+PC9kaXY+YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHQkZmFrZUNvbHVtbnMgPSAkKCcuRmFrZUNvbHVtbnMnKTtcblxuXHRcdFx0JGNvbnRlbnQub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddLnNjcm9sbEZpbmlzaGVkKTtcblx0XHRcdFx0d2luZG93WydDYXJkQ2hhcnRzU2Nyb2xsJ10uc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgkY29udGVudC5zY3JvbGxUb3AoKSA+IDApICRoZWFkZXIuYWRkQ2xhc3MoJ1NoYWRvd01lZGl1bScpO1xuXHRcdFx0XHRcdGVsc2UgJGhlYWRlci5yZW1vdmVDbGFzcygnU2hhZG93TWVkaXVtJyk7XG5cdFx0XHRcdH0sIDUwKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHQkY29tcG9uZW50ID0gJCgnLkNhcmRDaGFydHMnKTtcblx0XHRcdCRoZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXInKTtcblx0XHRcdCRjb250ZW50ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ29udGVudCcpO1xuXHRcdFx0JHByb3BlcnRpZXMgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Qcm9wZXJ0aWVzJyk7XG5cdFx0XHQkZmFrZUNvbHVtbnMgPSAkKCcuRmFrZUNvbHVtbnMnKTtcblx0XHRcdCRib2R5Q29udGVudCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpO1xuXG5cdFx0XHRsZXQgaGVhZGVyVGl0bGVIZWlnaHQgPSA2Mztcblx0XHRcdGNvbnN0IGhlYWRlclByb3BlcnRpZXNIZWlnaHQgPSA1NjtcblxuXHRcdFx0Y29uc3QgJGNoYXJ0cyA9ICRjb250ZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19DaGFydHMgLk9TQ2hhcnQnKTtcblxuXHRcdFx0JGNoYXJ0cy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkY2hhcnQgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IG5ld1dpZHRoID0gJGNvbnRlbnQud2lkdGgoKSAtICRwcm9wZXJ0aWVzLndpZHRoKCkgKyA0MDtcblx0XHRcdFx0JGNoYXJ0LmhpZ2hjaGFydHMoKS5zZXRTaXplKG5ld1dpZHRoLCAkY2hhcnQuaGVpZ2h0KCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRjb25zdCB0aW1lb3V0SGVpZ2h0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJGhlYWRlclRpdGxlID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyVGl0bGUnKTtcblxuXHRcdFx0XHRcdGhlYWRlclRpdGxlSGVpZ2h0ID0gJGhlYWRlclRpdGxlLmxlbmd0aCA/ICRoZWFkZXJUaXRsZS5vdXRlckhlaWdodCgpIDogaGVhZGVyVGl0bGVIZWlnaHQgLSA2O1xuXG5cdFx0XHRcdFx0Y29uc3QgbmV3SGVpZ2h0ID0gJCh3aW5kb3cuZnJhbWVFbGVtZW50KS5oZWlnaHQoKSAtIGhlYWRlclRpdGxlSGVpZ2h0O1xuXG5cdFx0XHRcdFx0JGZha2VDb2x1bW5zLmNzcygnaGVpZ2h0JywgYCR7bmV3SGVpZ2h0ICsgaGVhZGVyUHJvcGVydGllc0hlaWdodH1weGApO1xuXHRcdFx0XHRcdCRjb250ZW50LmNzcygnaGVpZ2h0JywgYCR7bmV3SGVpZ2h0IC0gaGVhZGVyUHJvcGVydGllc0hlaWdodH1weGApO1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRIZWlnaHQpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gU2VlIE11dGF0aW9uT2JzZXJ2ZXIgKExheW91dFBvcHVwKVxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zID0gWydDaGFydHNQb3B1cCddO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgQ29sbGFwc2libGVTaWRlUGFuZWwgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y2xhc3MgQ29sbGFwc2libGVTaWRlUGFuZWwge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wZW5DbG9zZVNpZGVQYW5lbCh0b09wZW4pIHtcclxuXHRcdFx0aWYgKHRvT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuJGNvbnRlbnQuY3NzKCdkaXNwbGF5JywgJ2dyaWQnKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1vcGVuJyk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX0NvbnRlbnQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHRcdH0sIDM1MCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fSGVhZGVyJyk7XHJcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19Db250ZW50Jyk7XHJcblx0XHRcdHRoaXMuJGNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblx0XHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdFx0dGhpcy4kcGFuZWxDb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxDb250ZW50Jyk7XHJcblx0XHRcdHRoaXMuJGNsb3NlID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxIZWFkZXIgLmljb24nKTtcclxuXHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuUGFuZWxDbG9zZUJ1dHRvbicpO1xyXG5cclxuXHRcdFx0dGhpcy4kaGVhZGVyLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlU2lkZVBhbmVsKHRydWUpKTtcclxuXHRcdFx0dGhpcy4kY2xvc2Uub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub3BlbkNsb3NlU2lkZVBhbmVsKGZhbHNlKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0aWYgKCQoJy5QYW5lbENvbnRlbnRFbXB0eScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsLmNsb3NlKHRoaXMub3B0aW9ucy53aWRnZXRJZCwgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNBdXRvQ291bnRlcikge1xyXG5cdFx0XHRcdGNhbGN1bGF0ZUNvdW50ZXIodGhpcy4kcGFuZWxDb250ZW50LCB0aGlzLiRjb3VudGVyMSwgdGhpcy4kY291bnRlcjIpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRjb3VudGVyMS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdFx0dGhpcy4kY291bnRlcjIucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBoYXNFbXB0eU1lc3NhZ2UgPSB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnLkNvbGxhcHNpYmxlRW1wdHlNZXNzYWdlJyk7XHJcblx0XHRcdGNvbnN0IGNvbnRlbnRUb1ZlcmlmeSA9IGhhc0VtcHR5TWVzc2FnZS5sZW5ndGggPyB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnPjpmaXJzdC1jaGlsZCcpIDogdGhpcy4kcGFuZWxDb250ZW50O1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5oaWRlV2hlbkVtcHR5ICYmICFjb250ZW50VG9WZXJpZnkudGV4dCgpKSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9EaW9nbyBSaWJlaXJvIC0gaXQgc2VlbXMgd2Ugb25seSBuZWVkIG1hcmdpbnMgd2hlbiB3ZSBzaG93IHRoZSBoZWFkZXJcclxuXHRcdFx0aWYoIXRoaXMub3B0aW9ucy5oaWRlSGVhZGVyKSB7XHJcblx0XHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZScpLmFkZENsYXNzKCdNdWx0aU1hcmdpblRvcFNtYWxsJyk7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZTpmaXJzdCcpLmFkZENsYXNzKCdNdWx0aU1hcmdpblRvcExhcmdlJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjYWxjdWxhdGVDb3VudGVyID0gKHBhbmVsQ29udGVudCwgY291bnRlcjEsIGNvdW50ZXIyKSA9PiB7XHJcblx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0Y29uc3QgY291bnRlcnMgPSBwYW5lbENvbnRlbnQuZmluZCgnLkV4YXBhbmRhYmxlUGxhY2Vob2xkZXIuQ291bnRlcicpO1xyXG5cclxuXHRcdGNvdW50ZXJzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRvdGFsICs9ICskKHRoaXMpLnRleHQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvdW50ZXIxLnRleHQodG90YWwpO1xyXG5cdFx0Y291bnRlcjIudGV4dCh0b3RhbCk7XHJcblxyXG5cdFx0aWYgKHRvdGFsID09PSAwKSBjb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAod2lkZ2V0SWQsIGNvdW50ZXIpID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0dGhpcy5jb3VudGVyMSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1RpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy5jb3VudGVyMiA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblxyXG5cdFx0dGhpcy5jb3VudGVyMS50ZXh0KGNvdW50ZXIpO1xyXG5cdFx0dGhpcy5jb3VudGVyMi50ZXh0KGNvdW50ZXIpO1xyXG5cclxuXHRcdGlmICgrY291bnRlciA9PT0gMCkgdGhpcy5jb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsb3NlID0gKHdpZGdldElkLCBoaWRlSGVhZGVyLCB1cGRhdGVDb3VudGVyKSA9PiB7XHJcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwnKSkge1xyXG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaGlkZUhlYWRlcikge1xyXG5cdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1oZWFkZXJIaWRkZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1vcGVuJyk7XHJcblxyXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGUnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BTbWFsbCcpO1xyXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGU6Zmlyc3QnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BMYXJnZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoZWNrRW1wdHkgPSB3aWRnZXRJZCA9PiB7XHJcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcclxuXHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xyXG5cdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcclxuXHJcblx0XHR0aGlzLiRlbXB0eU1lc3NhZ2Uuc2hvdygpO1xyXG5cclxuXHRcdGNhbGN1bGF0ZUNvdW50ZXIodGhpcy4kcGFuZWxDb250ZW50LCB0aGlzLiRjb3VudGVyMSwgdGhpcy4kY291bnRlcjIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgQ29sbGFwc2libGVTaWRlUGFuZWwoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db2xsYXBzaWJsZVNpZGVQYW5lbCA9IHsgY3JlYXRlLCBjbG9zZSwgdXBkYXRlQ291bnRlciwgY2hlY2tFbXB0eSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IENvbXBMaW5lICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0ZnVuY3Rpb24gU2VjdGlvbkNvbXBsaW5lKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XG5cblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcblx0XHRcdHZhciBob2xkZXIgPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmUnKTtcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikuY2xvc2VzdCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpO1xuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IGhvbGRlci5hdHRyKCdpZCcpO1xuXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XG5cblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcblxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChob2xkZXIuaGFzQ2xhc3MoJ25vdFJlbmRlckludGVyYWN0aW9ucycpKSB7XG5cdFx0XHRcdFx0aG9sZGVyLmZpbmQoJy5Db21wTGluZS10b2dnbGUtaW50ZXJhY3Rpb25zJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAoJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU4JykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU5JykpIHtcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChob2xkZXIuaGFzQ2xhc3MoJ25vdFJlbmRlckludGVyYWN0aW9ucycpKSB7XG5cdFx0XHRcdFx0aG9sZGVyLmZpbmQoJy5Db21wTGluZS10b2dnbGUtaW50ZXJhY3Rpb25zJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXG5cdFx0dGhhdC5hamF4UmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLkNvbXBMaW5lX2hlYWRMaW5lJykub2ZmKCk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUgaW5wdXQsIC5Db21wTGluZV9oZWFkTGluZSBzZWxlY3QsIC5Db21wTGluZV9oZWFkTGluZSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIG5ldyBjbGljayBldmVudHNcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLnVuYmluZCgnY2xpY2snKTtcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXG5cdFx0XHQkKCcuQ29tcExpbmVFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdFx0XSA9PSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblx0XHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF0gPSB7XG5cdFx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdXJTdGF0ZSAhPVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdWydzZXJ2ZXInXVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdWydjbGllbnQnXSA9IGN1clN0YXRlO1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRcdF1bJ2NsaWVudCddID09IGZhbHNlICYmXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5Db21wTGluZV9FeHBhbmQnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdFx0XHRdWydjbGllbnQnXSA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHQhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyBzZXQgZXZlbnRzXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9ucyB0byBjcmVhdGUgYXJyYXkgc3RhdFxuXHRcdFx0JCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XG5cdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdF0gPSB7XG5cdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxuXHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS51bmJpbmQoJ2NsaWNrJyk7XG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcy5wYXJlbnRFbGVtZW50KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxuXHRcdFx0JCgnLkNvbXBMaW5lX2hlYWRMaW5lIGlucHV0LCAuQ29tcExpbmVfaGVhZExpbmUgc2VsZWN0LCAuQ29tcExpbmVfaGVhZExpbmUgYScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHJlbW92ZSB1bmVjZXNzYXJ5IGJlaGF2aW9yc1xuXG5cdFx0XHQvLyBldmVudCBhamF4XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KHRoYXQuYWpheFJlZnJlc2gpO1xuXHRcdH07XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZXhwYW5kYWJsZSA9IG5ldyBTZWN0aW9uQ29tcGxpbmUoKTtcblxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db21wTGluZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBDb3VudHJ5UGhvbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXHRcdGNvbnN0IGFkZGl0aW9uYWxWYWxpZGF0aW9ucyA9IGNvbmZpZy5hZGRpdGlvbmFsVmFsaWRhdGlvbnM7XG5cblx0XHRjb25zdCBjb3VudHJ5UGhvbmVJbnB1dCA9IHdpbmRvdy5pbnRsVGVsSW5wdXQoJGVsZW1lbnQsIHtcblx0XHRcdGluaXRpYWxDb3VudHJ5OiBjb25maWcuaW5pdGlhbENvdW50cnksXG5cdFx0XHRwcmVmZXJyZWRDb3VudHJpZXM6IGNvbmZpZy5wcmVmZXJyZWRDb3VudHJpZXMsXG5cdFx0XHRzZXBhcmF0ZURpYWxDb2RlOiBjb25maWcuc2VwYXJhdGVEaWFsQ29kZSxcblx0XHRcdG5hdGlvbmFsTW9kZTogY29uZmlnLm5hdGlvbmFsTW9kZSxcblx0XHRcdGF1dG9QbGFjZWhvbGRlcjogY29uZmlnLmF1dG9QbGFjZWhvbGRlciA/ICdwb2xpdGUnIDogZmFsc2UsXG5cdFx0XHRmb3JtYXRPbkRpc3BsYXk6IGZhbHNlLFxuXHRcdFx0dXRpbHNTY3JpcHQ6ICcvVjNfUGF0L2pzL3V0aWxzLmpzJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRpbnB1dCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblxuXHRcdCRpbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoJGlucHV0LnZhbCgpID09PSAnKycgfHwgJGlucHV0LnZhbCgpID09PSAnJykge1xuXHRcdFx0XHRjb3VudHJ5UGhvbmVJbnB1dC5zZXRDb3VudHJ5KGNvbmZpZy5pbml0aWFsQ291bnRyeSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkaW5wdXQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeVBob25lSW5wdXQuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyID0gYWRkaXRpb25hbFZhbGlkYXRpb25zLmZpbmQoaSA9PiBpLkNvdW50cnlQaG9uZVZhbGlkYXRpb25zLkNvdW50cnlDb2RlID09PSBzZWxlY3RlZENvdW50cnkuaXNvMik7XG5cdFx0XHRjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWwoKS50cmltKCk7XG5cblx0XHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuXHRcdFx0aWYgKGZpbHRlcikge1xuXHRcdFx0XHRjb25zdCB3aXRob3VDb2RlID0gdmFsdWUucmVwbGFjZShgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWAsICcnKTtcblxuXHRcdFx0XHRpc1ZhbGlkID0gd2l0aG91Q29kZS50cmltKCkubGVuZ3RoICsgMSA8PSBmaWx0ZXIuQ291bnRyeVBob25lVmFsaWRhdGlvbnMuUGhvbmVMZW5ndGg7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSA9PT0gYCske3NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX1gKSB7XG5cdFx0XHRcdCRpbnB1dC52YWwoYCske3NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX0gYCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGlzVmFsaWQgJiZcblx0XHRcdFx0KGUubWV0YUtleSB8fCAvLyBjbWQvY3RybFxuXHRcdFx0XHRlLndoaWNoIDw9IDAgfHwgLy8gYXJyb3cga2V5c1xuXHRcdFx0XHRlLndoaWNoID09IDggfHwgLy8gZGVsZXRlIGtleVxuXHRcdFx0XHRcdCghdmFsdWUubGVuZ3RoICYmIGUua2V5ID09PSAnKycpIHx8XG5cdFx0XHRcdFx0L1swLTldLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdCRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvdW50cnljaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdG9uQ2hhbmdlQ291bnRyeSgpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VDb3VudHJ5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgJHNlbGVjdGVkQ291bnRyeUlucHV0ID0gJChgIyR7Y29uZmlnLnNlbGVjdGVkQ291bnRyeUlucHV0fWApO1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeVBob25lSW5wdXQuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpO1xuXG5cdFx0XHQkc2VsZWN0ZWRDb3VudHJ5SW5wdXQudmFsKHNlbGVjdGVkQ291bnRyeS5pc28yKTtcblx0XHRcdCRzZWxlY3RlZENvdW50cnlJbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHR9O1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRvbkNoYW5nZUNvdW50cnkoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQ291bnRyeVBob25lID0ge1xuXHRcdGNyZWF0ZSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXHRjbGFzcyBEYXRhVGFibGVzIHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kdGFibGUgPSB0aGlzLiR3aWRnZXQuZmluZCgndGFibGUnKTtcblx0XHRcdHRoaXMuJHRhYmxlLmFkZENsYXNzKCdjZWxsLWJvcmRlciBjb21wYWN0Jyk7XG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xuXHRcdH1cblxuXHRcdG9uSW5pdCgpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4udGhpcy5jb25maWcsXG5cdFx0XHRcdGZpeGVkQ29sdW1uczogdHJ1ZSxcblx0XHRcdFx0aW5mbzogZmFsc2UsXG5cdFx0XHRcdG9yZGVyaW5nOiBmYWxzZSxcblx0XHRcdFx0cGFnaW5nOiBmYWxzZSxcblx0XHRcdFx0c2Nyb2xsQ29sbGFwc2U6IHRydWUsXG5cdFx0XHRcdHNjcm9sbFg6IHRydWUsXG5cdFx0XHRcdHNlYXJjaGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXG5cdFx0XHQkKCgpID0+IHtcblx0XHRcdFx0dGhpcy4kdGFibGUuRGF0YVRhYmxlKHRoaXMub3B0aW9ucyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IERhdGFUYWJsZXMoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRhdGFUYWJsZXMgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoKTtcbiIsIi8qIENvbXBvbmVudCBEYXRlVGltZVJhbmdlUGlja2VyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMgPSBbXTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxEYXRlVGltZVJhbmdlUGlja2Vycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnNbaV0uY29uZmlnLndpZGdldElkID09PSBjb25maWcud2lkZ2V0SWQpIHtcclxuXHRcdFx0XHRhbGxEYXRlVGltZVJhbmdlUGlja2Vycy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IERhdGVUaW1lUmFuZ2VQaWNrZXIoY29uZmlnKTtcclxuXHRcdGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLnB1c2god2luZG93W2NvbmZpZy53aWRnZXRJZF0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBEYXRlVGltZVJhbmdlUGlja2VyID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuY3VycmVudExvY2FsZSA9IGNvbmZpZy5jdXJyZW50TG9jYWxlO1xyXG5cclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygnRGF0ZVRpbWVSYW5nZVBpY2tlcicpO1xyXG5cdFx0dGhpcy4kY2xlYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2xlYXInKTtcclxuXHRcdHRoaXMuJGxhYmVsID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWxhYmVsJyk7XHJcblxyXG5cdFx0dGhpcy5pc0VtcHR5SG91ciA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygnYXR0YWNoZWRJbnB1dCcpO1xyXG5cdFx0XHR0aGlzLiRtb2RlbCA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1wbGFjZWhvbGRlciBpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xyXG5cdFx0XHR0aGlzLiRtb2RlbC5hdHRyKCd0YWJJbmRleCcsIC0xKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiRpbnB1dCA9ICQoJyMnICsgY29uZmlnLmlucHV0SWQpO1xyXG5cclxuXHRcdGlmICghdGhpcy5jb25maWcuYWxsb3dzVHlwaW5nKSB7XHJcblx0XHRcdHRoaXMuJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudExvY2FsZSA9PT0gJ0FSJykge1xyXG5cdFx0XHRtb21lbnQubG9jYWxlKCdhci1rdycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvcHRpb25zID0ge307XHJcblx0XHRvcHRpb25zLnN0YXJ0RGF0ZSA9IGNvbmZpZy5zdGFydERhdGU7XHJcblx0XHRvcHRpb25zLnNpbmdsZURhdGVQaWNrZXIgPSBjb25maWcuc2luZ2xlRGF0ZVBpY2tlcjtcclxuXHRcdG9wdGlvbnMuYXV0b0FwcGx5ID0gY29uZmlnLmF1dG9BcHBseTtcclxuXHRcdG9wdGlvbnMuYXV0b1VwZGF0ZUlucHV0ID0gY29uZmlnLmF1dG9VcGRhdGVJbnB1dDtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlciA9IGNvbmZpZy50aW1lUGlja2VyO1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VyMjRIb3VyID0gY29uZmlnLnRpbWVQaWNrZXIyNEhvdXI7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXJJbmNyZW1lbnQgPSBjb25maWcudGltZVBpY2tlckluY3JlbWVudDtcclxuXHRcdG9wdGlvbnMuc2hvd0Ryb3Bkb3ducyA9IGNvbmZpZy5oYXNEcm9wZG93bnM7IC8vIE1vbnRoL1llYXIgUGlja2VyXHJcblx0XHRvcHRpb25zLmRyb3BzID0gY29uZmlnLmRyb3BzO1xyXG5cdFx0b3B0aW9ucy5vcGVucyA9IGNvbmZpZy5jdXJyZW50TG9jYWxlID09PSAnQVInICYmIGNvbmZpZy5vcGVucyAhPSAnY2VudGVyJyA/ICdsZWZ0JyA6IGNvbmZpZy5vcGVucztcclxuXHJcblx0XHR2YXIgc3RyaW5nQ29ubmVjdGlvbiA9ICdbLCBhdF0nO1xyXG5cclxuXHRcdGlmIChjb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHRoaXMuJGlucHV0LnByb3AoJ3BsYWNlaG9sZGVyJywgJ0RELU1NLVlZWVkgSEg6TU0nKTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCA9IGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tYDtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1llYXJXaGVuVGV4dFxyXG5cdFx0XHRcdFx0PyAnRCBNTU0gWVlZWScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBISDptbSdcclxuXHRcdFx0XHRcdDogJ0QgTU1NJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIEhIOm1tJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCA9IGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IGhoOm1tIEFgO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzWWVhcldoZW5UZXh0XHJcblx0XHRcdFx0XHQ/ICdEIE1NTSBZWVlZJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIGhoOm1tIEEnXHJcblx0XHRcdFx0XHQ6ICdEIE1NTScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBoaDptbSBBJztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdvbmx5RGF0ZScpO1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB0aGlzLiRpbnB1dC5wcm9wKCdwbGFjZWhvbGRlcicsICdERC1NTS1ZWVlZJyk7XHJcblxyXG5cdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCA9IHRoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQ7XHJcblx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzWWVhcldoZW5UZXh0ID8gJ0QgTU1NIFlZWVknIDogJ0QgTU1NJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygncmFuZ2VEYXRlcycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzV2Vla0RheU5hbWVXaGVuVGV4dFxyXG5cdFx0XHQ/ICdkZGRbLCBdJyArIHRoaXMuY29uZmlnLmZvcm1hdExhYmVsXHJcblx0XHRcdDogdGhpcy5jb25maWcuZm9ybWF0TGFiZWw7XHJcblxyXG5cdFx0b3B0aW9ucy5sb2NhbGUgPSB7XHJcblx0XHRcdGRpcmVjdGlvbjogY29uZmlnLmN1cnJlbnRMb2NhbGUgPT09ICdBUicgPyAncnRsJyA6ICdsdHInLFxyXG5cdFx0XHRmb3JtYXQ6IHRoaXMuY29uZmlnLmZvcm1hdElucHV0LFxyXG5cdFx0XHRjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXHJcblx0XHRcdGFwcGx5TGFiZWw6ICdBcHBseScsXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChjb25maWcuaGFzVGV4dFRyaWdnZXIpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCd0ZXh0VHJpZ2dlcicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG51bGxkRGF0ZXMgPSBbJzAxLTAxLTE5MDAgMDA6MDA6MDAnLCAnMTkwMC0wMS0wMSAwMDowMDowMCddO1xyXG5cclxuXHRcdGlmIChjb25maWcuZW5kRGF0ZSAmJiAhbnVsbGREYXRlcy5zb21lKGkgPT4gaSA9PT0gY29uZmlnLmVuZERhdGUpKSB7XHJcblx0XHRcdG9wdGlvbnMuZW5kRGF0ZSA9IGNvbmZpZy5lbmREYXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcubWF4RGF0ZSAmJiAhbnVsbGREYXRlcy5zb21lKGkgPT4gaSA9PT0gY29uZmlnLm1heERhdGUpKSB7XHJcblx0XHRcdG9wdGlvbnMubWF4RGF0ZSA9IGNvbmZpZy5tYXhEYXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcubWluRGF0ZSAmJiAhbnVsbGREYXRlcy5zb21lKGkgPT4gaSA9PT0gY29uZmlnLm1pbkRhdGUpKSB7XHJcblx0XHRcdG9wdGlvbnMubWluRGF0ZSA9IGNvbmZpZy5taW5EYXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcuRGlzYWJsZWRXZWVrRGF5cykge1xyXG5cdFx0XHR2YXIgZGlzYWJsZWRXZWVrRGF5cyA9IGNvbmZpZy5EaXNhYmxlZFdlZWtEYXlzLnNwbGl0KCcsJyk7XHJcblx0XHRcdG9wdGlvbnMuaXNJbnZhbGlkRGF0ZSA9IGZ1bmN0aW9uKGRhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZGlzYWJsZWRXZWVrRGF5cy5pbmNsdWRlcyhcclxuXHRcdFx0XHRcdG1vbWVudChkYXRlKVxyXG5cdFx0XHRcdFx0XHQuZGF5KClcclxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQuZGF0ZXJhbmdlcGlja2VyKG9wdGlvbnMsIGZ1bmN0aW9uKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbGFiZWwpIHtcclxuXHRcdFx0Ly8gYWZ0ZXIgYSBzZWxlY3Rpb24gaXMgbWFkZVxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRsZXQgZm9ybWF0ID0gJyc7XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0Zm9ybWF0ID0gYCR7X3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tYDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSBfdGhpcy4kbW9kZWwudmFsKHN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KSk7XHJcblx0XHRcdFx0XHRlbHNlIF90aGlzLiRtb2RlbC52YWwoc3RhcnREYXRlLmZvcm1hdChfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgc3RhcnQsIGVuZDtcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0c3RhcnQgPSBzdGFydERhdGUuZm9ybWF0KGZvcm1hdCk7XHJcblx0XHRcdFx0XHRcdGVuZCA9IGVuZERhdGUuZm9ybWF0KGZvcm1hdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0RGF0ZS5mb3JtYXQoX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpO1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBlbmREYXRlLmZvcm1hdChfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0X3RoaXMuJG1vZGVsLnZhbChgJHtzdGFydH0gIMK3ICAke2VuZH1gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF90aGlzLiRtb2RlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaW5pdGlhbFZhbHVlID0gX3RoaXMuJGlucHV0LnZhbCgpO1xyXG5cdFx0XHRjb25zdCBhbGxvd3NNTVlZID0gX3RoaXMuY29uZmlnLmFsbG93c1R5cGluZyAmJiBfdGhpcy5jb25maWcuYWxsb3dzVHlwZU1NWVkgJiYgX3RoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXI7XHJcblxyXG5cdFx0XHRpZiAoYWxsb3dzTU1ZWSAmJiBpbml0aWFsVmFsdWUubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0X3RoaXMucGlja2VyLnNldFN0YXJ0RGF0ZShtb21lbnQoYDAxJHtpbml0aWFsVmFsdWV9YCwgJ0RETU1ZWScpKTtcclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0XHRsZXQgZm9ybWF0ID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSBmb3JtYXQgPSBgJHtfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdFx0ZWxzZSBmb3JtYXQgPSBfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdDtcclxuXHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudmFsKF90aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJG1vZGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gbm93IHdlIGhhdmUgYSBwcm9wZXIgaW5zdGFuY2VcclxuXHRcdHRoaXMucGlja2VyID0gdGhpcy4kaW5wdXQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7XHJcblxyXG5cdFx0dGhpcy4kY2FsZW5kYXIgPSAkKHRoaXMucGlja2VyLmNvbnRhaW5lcik7XHJcblxyXG5cdFx0aWYgKCEhdGhpcy5jb25maWcuY3NzQ2xhc3MpIHtcclxuXHRcdFx0dGhpcy4kY2FsZW5kYXIuYWRkQ2xhc3ModGhpcy5jb25maWcuY3NzQ2xhc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJHRpbWVIb2xkZXIgPSB0aGlzLiRjYWxlbmRhci5maW5kKCcuY2FsZW5kYXItdGltZScpO1xyXG5cdFx0dGhpcy4kYnV0dG9uc0hvbGRlciA9IHRoaXMuJGNhbGVuZGFyLmZpbmQoJy5kcnAtYnV0dG9ucycpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdXRvQXBwbHkpIHtcclxuXHRcdFx0dGhpcy4kYnV0dG9uc0hvbGRlci5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5pc0VtcHR5U3RhcnREYXRlKSB7XHJcblx0XHRcdHRoaXMuY2xlYXIoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmIChjb25maWcuaXNFbXB0eVN0YXJ0SG91cikge1xyXG5cdFx0XHR0aGlzLmlzRW1wdHlIb3VyID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcuZW5hYmxlZCkge1xyXG5cdFx0XHR0aGlzLm5hdGl2ZUV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLmN1c3RvbUV2ZW50cygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLiRpbnB1dC5vZmYoJ2NsaWNrIGZvY3VzIGtleWRvd24ga2V5dXAnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHR0aGlzLmhhbmRsZUN1c3RvbVZhbGlkYXRpb24oKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5oYW5kbGVDdXN0b21WYWxpZGF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBUTyBET1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLm5hdGl2ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmhhc0dvVG9kYXkpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuY2FsZW5kYXItdGFibGUgdGhlYWQgdHInKVxyXG5cdFx0XHRcdFx0LmVxKDApXHJcblx0XHRcdFx0XHQuYWZ0ZXIoXHJcblx0XHRcdFx0XHRcdCc8dHI+PHRkIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJEYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWdvdG9kYXlcIj4nICtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5jb25maWcuZ29Ub2RheUxhYmVsICtcclxuXHRcdFx0XHRcdFx0XHQnPC90ZD48L3RyPidcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy5kcm9wcyA9PT0gJ3VwJykge1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmNzcygndG9wJywgX3RoaXMuJGNhbGVuZGFyLm9mZnNldCgpLnRvcCAtIDI0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuaGFuZGxlVmlld3BvcnRQb3NpdGlvbigpO1xyXG5cclxuXHRcdFx0aWYgKCFfdGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdCQoJy5kcnAtc2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IHRleHQgPSAkKHRoaXMpLnRleHQoKTtcclxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLy0vZ2ksICfCtycpO1xyXG5cclxuXHRcdFx0XHRcdCQodGhpcykudGV4dCh0ZXh0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3Nob3cuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIgJiYgX3RoaXMuY29uZmlnLmhhc0NsZWFySG91cikge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuY2FsZW5kYXItdGltZScpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJEYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyXCI+PC9zcGFuPicpO1xyXG5cdFx0XHRcdGlmIChfdGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMC41KTtcclxuXHRcdFx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHRcdFx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uKCk7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5EYXRlVGltZVJhbmdlUGlja2VyLm9wZW5lZFdpZGdldElkID0gX3RoaXMuY29uZmlnLndpZGdldElkO1xyXG5cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5jc3NDbGFzcyA9PT0gJ0NhbGVuZGFyUG9wdXAnICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRjb25zdCBvbGRCb2R5SGVpZ2h0ID0gJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCArIDg7XHJcblx0XHRcdFx0Y29uc3QgY2FsZW5kYXJTYWZlSGVpZ2h0ID0gX3RoaXMuJGNhbGVuZGFyLm91dGVySGVpZ2h0KCkgKyAzMjtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmV3SGVpZ2h0ID0gb2xkQm9keUhlaWdodCA+IGNhbGVuZGFyU2FmZUhlaWdodCA/IG9sZEJvZHlIZWlnaHQgOiBjYWxlbmRhclNhZmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdCQoJzxkaXYgY2xhc3M9XCJDYWxlbmRhclBvcHVwX19PdmVybGF5XCI+PC9kaXY+JykuaW5zZXJ0QWZ0ZXIoX3RoaXMuJGNhbGVuZGFyKTtcclxuXHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50KS5hbmltYXRlKHsgbWluSGVpZ2h0OiBuZXdIZWlnaHQgfSk7XHJcblx0XHRcdFx0JCgnYm9keScpLmFuaW1hdGUoeyBtaW5IZWlnaHQ6IG5ld0hlaWdodCB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5yZW1vdmUoKTtcclxuXHRcdFx0X3RoaXMudXBkYXRlUGFyZW50SWZyYW1lKCk7XHJcblxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmNzc0NsYXNzID09PSAnQ2FsZW5kYXJQb3B1cCcgJiYgd2luZG93LmZyYW1lRWxlbWVudCkge1xyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudCkuY3NzKHsgbWluSGVpZ2h0OiAndW5zZXQnIH0pO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoeyBtaW5IZWlnaHQ6ICd1bnNldCcgfSk7XHJcblxyXG5cdFx0XHRcdCQoJy5DYWxlbmRhclBvcHVwX19PdmVybGF5JykucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdjYW5jZWwuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge30pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdvdXRzaWRlQ2xpY2suZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge30pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCd0aW1lY2hhbmdlZC5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdF90aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmhhc0NsZWFySG91cikge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuY2FsZW5kYXItdGltZScpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJEYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyXCI+PC9zcGFuPicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXV0b0FwcGx5KSB7XHJcblx0XHRcdFx0X3RoaXMuJGNsZWFyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignY2xpY2tEYXRlLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdXRvQXBwbHkpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2xlYXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY3VzdG9tRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy4kbGFiZWwub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLnBpY2tlci50b2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2xlYXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLmNsZWFyKCk7XHJcblx0XHRcdF90aGlzLnBpY2tlci5oaWRlKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNhbGVuZGFyLm9uKCdjbGljaycsICcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcwJylcclxuXHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcxMicpXHJcblx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5taW51dGVzZWxlY3QnKVxyXG5cdFx0XHRcdC52YWwoJzAnKVxyXG5cdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5hbXBtc2VsZWN0JylcclxuXHRcdFx0XHQudmFsKCdBTScpXHJcblx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRfdGhpcy5pc0VtcHR5SG91ciA9IHRydWU7XHJcblx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjYWxlbmRhci5vbignY2xpY2snLCAnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudCgpKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLnNldEVuZERhdGUobW9tZW50KCkpO1xyXG5cclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHJcblx0XHRcdGlmICghX3RoaXMuY29uZmlnLmF1dG9VcGRhdGVJbnB1dCB8fCBfdGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIgfHwgX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLiRtb2RlbCAmJiBfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdC8vIE5vdGhpbmdcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3RoaXMudXBkYXRlUGFyZW50SWZyYW1lKCk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS51cGRhdGVMYWJlbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxhYmVsTWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdExhYmVsO1xyXG5cdFx0dmFyIGlucHV0TWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdElucHV0O1xyXG5cclxuXHRcdGlmIChtb21lbnQodGhpcy5waWNrZXIuc3RhcnREYXRlKS5pc1NhbWUobW9tZW50KCksICdkYXknKSkge1xyXG5cdFx0XHRpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTSBZWVlZJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0gWVlZWScsICdbVG9kYXksXSBEIE1NTSBZWVlZJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTScpKSB7XHJcblx0XHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ0QgTU1NJywgJ1tUb2RheV0nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHRcdFx0aW5wdXRNYXNrID0gaW5wdXRNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIpIHtcclxuXHRcdFx0XHR0aGlzLiRsYWJlbC5odG1sKHRoaXMuY29uZmlnLnByZWZpeFRleHRUcmlnZ2VyICsgdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChsYWJlbE1hc2spKTtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoaW5wdXRNYXNrKSk7XHJcblx0XHRcdFx0XHRcdGlmKHRoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRtb2RlbCAmJiB0aGlzLiRtb2RlbC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbTpzc2ApKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRtb2RlbCAmJiB0aGlzLiRtb2RlbC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBzdGFydERhdGUgPSB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzayk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGVuZERhdGUgPSB0aGlzLnBpY2tlci5lbmREYXRlLmZvcm1hdChpbnB1dE1hc2spO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCk7XHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gdGhpcy5waWNrZXIuZW5kRGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGFuZGxlVmlld3BvcnRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50ICYmXHJcblx0XHRcdCgkKHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50RWxlbWVudCkuaGFzQ2xhc3MoJ3Rvb2x0aXBzdGVyLWNvbnRlbnQnKSB8fFxyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnRFbGVtZW50KS5oYXNDbGFzcygnb3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKSlcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzSW5WaWV3cG9ydCgpKSB7XHJcblx0XHRcdHZhciBjb29yZHMgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0aWYgKHRoaXMuJGNhbGVuZGFyLmhhc0NsYXNzKCdkcm9wLXVwJykgJiYgdGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCkge1xyXG5cdFx0XHRcdHZhciBwb2ludCA9IHdpbmRvdy5zY3JvbGxZICsgY29vcmRzLmJvdHRvbSArIHRoaXMuJGlucHV0LmhlaWdodCgpICsgNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdkcm9wLXVwJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcC1kb3duJylcclxuXHRcdFx0XHRcdC5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHQhdGhpcy4kY2FsZW5kYXIuaGFzQ2xhc3MoJ2Ryb3AtdXAnKSAmJlxyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnNjcm9sbFkgKyBjb29yZHMudG9wIC0gY29vcmRzLmhlaWdodCAtIHRoaXMuJGlucHV0LmhlaWdodCgpIC0gNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcygnZHJvcC11cCcpLmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYm91bmRpbmcgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGJvdW5kaW5nLnRvcCA+PSAwICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0ICsgNSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNSlcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihzZW5kTm90aWZpY2F0aW9uKSB7XHJcblx0XHR0aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KCkpO1xyXG5cdFx0dGhpcy5waWNrZXIuc2V0RW5kRGF0ZShtb21lbnQoKSk7XHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblx0XHR0aGlzLiRjbGVhci5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiRsYWJlbC5odG1sKCctLSAtLSAtLScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZW5kTm90aWZpY2F0aW9uIHx8IHNlbmROb3RpZmljYXRpb24gPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc2VuZE5vdGlmaWNhdGlvbihmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuc2hvdygpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmhpZGUoKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmNsaWNrQ2FuY2VsKCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2VuZE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKHNlbmREYXRlKSB7XHJcblx0XHRpZiAodGhpcy4kd2lkZ2V0Lmhhc0NsYXNzKCdhdHRhY2hlZElucHV0JykpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbmREYXRlIHx8IHNlbmREYXRlID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tOnNzYCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLCAnbnVsbHx0cnVlJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUudXBkYXRlUGFyZW50SWZyYW1lID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUucmVzaXplKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoJCgnLlBhZ2UuTGF5b3V0UG9wdXAnKS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLnJlZHJhd0RpYWxvZ1dpbmRvdygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5EYXRlVGltZVJhbmdlUGlja2VyID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnM7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IERyYWdEcm9wQXJlYSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgZHJhZ0Ryb3BBcmVhV2lkZ2V0O1xuXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLmRyYWdEcm9wQXJlYUlkXSA9IG5ldyBEcmFnRHJvcEFyZWEoY29uZmlnKTtcblx0XHRkcmFnRHJvcEFyZWFXaWRnZXQgPSB3aW5kb3dbY29uZmlnLmRyYWdEcm9wQXJlYUlkXTtcblxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuRHJhZ0Ryb3BBcmVhLnJlZnJlc2hEcmFnRHJvcCk7XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIHJlZnJlc2hEcmFnRHJvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcmFnZ2FibGUoKTtcblx0XHRcdGRyYWdEcm9wQXJlYVdpZGdldC5zZXR1cERyb3BwYWJsZSgpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIERyYWdEcm9wQXJlYSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy4kYXJlYSA9ICQoJyMnICsgY29uZmlnLmRyYWdEcm9wQXJlYUlkKTtcblx0XHR0aGlzLiRhcmVhLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdHRoaXMuc2tpbiA9IGNvbmZpZy5za2luO1xuXHRcdHRoaXMuZmFrZU5vdGlmeVdpZGdldElkID0gY29uZmlnLmZha2VOb3RpZnlXaWRnZXRJZDtcblx0XHR0aGlzLnNldHVwRHJvcHBhYmxlKCk7XG5cdFx0aWYgKGNvbmZpZy5zb3J0YWJsZSkge1xuXHRcdFx0dGhpcy5zZXR1cFNvcnRhYmxlKCk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0dXBEcmFnZ2FibGUoKTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5oYW5kbGVEcm9wcGFibGUoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5zZXR1cERyYWdnYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcmFnZ2FibGUnKS5kcmFnZ2FibGUoe1xuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXG5cdFx0XHRzY29wZTogdGhpcy5jb25maWcuZHJhZ0Ryb3BBcmVhSWQsXG5cdFx0XHRkZWxheTogMCxcblx0XHRcdHNjcm9sbDogdHJ1ZSxcblx0XHRcdHJldmVydDogJ2ludmFsaWQnLFxuXHRcdFx0cmV2ZXJ0RHVyYXRpb246IDAsXG5cdFx0XHRjb25uZWN0VG9Tb3J0YWJsZTogJy5EcmFnRHJvcC1kcm9wcGFibGUnLFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG5cdFx0XHRcdGlmICh1aS5oZWxwZXIuaGFzQ2xhc3MoJ3VpLWRyYWdnYWJsZS1kcmFnZ2luZycpKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHRhcmdldCA9IF90aGlzLiRhcmVhLmZpbmQoJy51aS1kcm9wcGFibGUudWktc29ydGFibGUnKTtcblxuXHRcdFx0XHRcdGlmIChfdGhpcy5za2luID09PSAnVGVhbXMnKSB7XG5cdFx0XHRcdFx0XHQvLyQodWkuaGVscGVyKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRPc05vdGlmeVdpZGdldCgkdGFyZ2V0LmRhdGEoJ2Zha2Vub3RpZnknKSwgdWkuaGVscGVyLmRhdGEoJ2l0ZW10eXBlJykgKyAnfCcgKyB1aS5oZWxwZXIuZGF0YSgnaXRlbWlkJykpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcblx0XHRcdFx0XHRcdFx0JHRhcmdldC5kYXRhKCdmYWtlbm90aWZ5JyksXG5cdFx0XHRcdFx0XHRcdF90aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcmFnZ2FibGUtcGxhY2Vob2xkZXInKS5pbmRleCgpICsgJ3wnICsgdWkuaGVscGVyLmRhdGEoJ2l0ZW1pZCcpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwRHJvcHBhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5kcm9wcGFibGUoe1xuXHRcdFx0aG92ZXJDbGFzczogJ2hvdmVyZWQnLFxuXHRcdFx0YWRkQ2xhc3NlczogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcblx0XHRcdHNjb3BlOiB0aGlzLmNvbmZpZy5kcmFnRHJvcEFyZWFJZCxcblx0XHRcdHRvbGVyYW5jZTogJ3BvaW50ZXInLFxuXHRcdFx0ZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5za2luID09PSAnVGVhbXMnKSB7XG5cdFx0XHRcdFx0JCh1aS5kcmFnZ2FibGUpLmhpZGUoKTtcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcblx0XHRcdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kYXRhKCdmYWtlbm90aWZ5JyksXG5cdFx0XHRcdFx0XHR1aS5kcmFnZ2FibGUuZGF0YSgnaXRlbXR5cGUnKSArICd8JyArIHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtaWQnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXG5cdFx0XHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGF0YSgnZmFrZW5vdGlmeScpLFxuXHRcdFx0XHRcdFx0X3RoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicpLmluZGV4KCkgKyAnfCcgKyB1aS5kcmFnZ2FibGUuZGF0YSgnaXRlbWlkJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBTb3J0YWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLnNvcnRhYmxlKHtcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcblx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXG5cdFx0XHR0b2xlcmFuY2U6ICdwb2ludGVyJyxcblx0XHRcdHJldmVydDogMjAwLFxuXHRcdFx0aXRlbXM6ICcuRHJhZ0Ryb3AtZHJvcHBhYmxlLWl0ZW1zIC5EcmFnRHJvcC1kcmFnZ2FibGUnLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICdEcmFnRHJvcC1kcmFnZ2FibGUtcGxhY2Vob2xkZXInLFxuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRhcmVhLm9uKCdjbGljaycsICcuRHJhZ0Ryb3AtZHJhZ2dhYmxlIGlucHV0JywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGNvbnN0ICRjaGVja2JveCA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0Y29uc3QgJGRyb3BwYWJsZSA9ICRjaGVja2JveC5jbG9zZXN0KCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJyk7XG5cdFx0XHRjb25zdCAkZHJhZ2dhYmxlID0gJGNoZWNrYm94LmNsb3Nlc3QoJy5EcmFnRHJvcC1kcmFnZ2FibGUnKTtcblx0XHRcdGNvbnN0ICRhY3Rpb24gPSAkZHJhZ2dhYmxlLmZpbmQoJy5EcmFnRHJvcC1kcmFnZ2FibGUtc2VsZWN0LWFjdGlvbiBhJyk7XG5cblx0XHRcdCRhY3Rpb24udHJpZ2dlcignY2xpY2snKTtcblxuXHRcdFx0aWYgKCRkcm9wcGFibGUuaGFzQ2xhc3MoJ2FsbG93TXVsdGlwbGUnKSkge1xuXHRcdFx0XHRpZiAoJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdFx0XHRcdC8vJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cdFx0XHRcdFx0JGRyYWdnYWJsZS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHRcdFx0JGRyYWdnYWJsZS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vX3RoaXMuaGFuZGxlRHJvcHBhYmxlKCRkcm9wcGFibGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kYXJlYS5vbignY2xpY2snLCAnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLmhhbmRsZURyb3BwYWJsZSA9IGZ1bmN0aW9uKCRkcm9wcGFibGUpIHtcblx0XHRpZiAoJGRyb3BwYWJsZS5oYXNDbGFzcygnYWxsb3dNdWx0aXBsZScpKSB7XG5cdFx0XHR2YXIgJGFjdGlvbnMgPSAkZHJvcHBhYmxlLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUtaW50cm8nKTtcblx0XHRcdHZhciBjaGtTZWxlY3RlZCA9ICRkcm9wcGFibGUuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5sZW5ndGg7XG5cdFx0XHRpZiAoY2hrU2VsZWN0ZWQgPiAwKSB7XG5cdFx0XHRcdCRhY3Rpb25zLmZpbmQoJ2EsIGJ1dHRvbicpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGRyb3BwYWJsZS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuRHJhZ0Ryb3BBcmVhID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdHJlZnJlc2hEcmFnRHJvcDogcmVmcmVzaERyYWdEcm9wLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IERyb3Bkb3duQ2F0ZWdvcmllcyAqL1xuKGZ1bmN0aW9uICgkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBvcHRHcm91cFNldFZhbHVlKHNlbGVjdElkLCBpbnB1dEJveElkLCBidXR0b25JZCkge1xuXHRcdHZhciB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpLnZhbHVlO1xuXHRcdCQoJyMnICsgaW5wdXRCb3hJZCkudmFsKHYpO1xuXHRcdCQoJyMnICsgc2VsZWN0SWQgKyAnIG9wdGlvbltzZWxlY3RlZF0nKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xuXG5cdFx0aWYgKHYgPiAtMSkge1xuXHRcdFx0JCgnIycgKyBzZWxlY3RJZCArICcgb3B0aW9uW3ZhbHVlPVwiJyArIHYgKyAnXCJdJykuYXR0cignc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHR9XG5cblx0XHQkKCcjJyArIGJ1dHRvbklkKS5jbGljaygpO1xuXHRcdCQoJyNzMmlkXycgKyBzZWxlY3RJZCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLWFjdGl2ZScpO1xuXHR9XG5cblx0ZnVuY3Rpb24gT3NDdXN0b21WYWxpZGF0b3JPcHRHcm91cChhLCBiKSB7XG5cdFx0dmFyIF9lID0gJCgnIycgKyBhLmNvbnRyb2x0b3ZhbGlkYXRlKTtcblx0XHR2YXIgaXNWYWxpZCA9IF9lLmZpbmQoJ29wdGlvbltzZWxlY3RlZF0nKS5sZW5ndGg7XG5cdFx0dmFyIGhhc1NpYmxpbmdfTWFuZGF0b3J5U2VsZWN0MiA9IF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5sZW5ndGg7XG5cblx0XHRpZiAoaGFzU2libGluZ19NYW5kYXRvcnlTZWxlY3QyKSB7XG5cdFx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0XHRfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykucmVtb3ZlQ2xhc3MoJ05vdF9WYWxpZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2UucHJldignZGl2LnNlbGVjdDItY29udGFpbmVyLk1hbmRhdG9yeScpLmFkZENsYXNzKCdOb3RfVmFsaWQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaXNWYWxpZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZE9wdEdyb3VwVmFsaWRhdG9yKG9wdEdyb3VwRWxlbWVudElkKSB7XG5cdFx0T3NQYWdlX1ZhbGlkYXRvcnMucHVzaCh7XG5cdFx0XHRjb250cm9sdG92YWxpZGF0ZTogb3B0R3JvdXBFbGVtZW50SWQsXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0ZXJyb3JtZXNzYWdlOiAnUmVxdWlyZWQgZmllbGQhJyxcblx0XHRcdGV2YWx1YXRpb25mdW5jdGlvbjogJ1NhcHBoaXJlV2lkZ2V0cy5Ecm9wZG93bkNhdGVnb3JpZXMuT3NDdXN0b21WYWxpZGF0b3JPcHRHcm91cCcsXG5cdFx0XHRpbml0aWFsdmFsdWU6ICcnLFxuXHRcdFx0aXN2YWxpZDogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ecm9wZG93bkNhdGVnb3JpZXMgPSB7XG5cdFx0b3B0R3JvdXBTZXRWYWx1ZSxcblx0XHRPc0N1c3RvbVZhbGlkYXRvck9wdEdyb3VwLFxuXHRcdGFkZE9wdEdyb3VwVmFsaWRhdG9yLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IERyb3B6b25lICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvdy5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0YmluZEV2ZW50cyhjb25maWcpO1xuXG5cdFx0XHRjb25zdCBteURyb3B6b25lID0gbmV3IHdpbmRvdy5Ecm9wem9uZShjb25maWcuaGlkZGVuSW5wdXRDb250YWluZXIsIHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgcHJldkZpbGU7XG5cblx0XHRcdFx0XHRjb25zdCBmaWxlc0xpc3QgPSBjb25maWcuZmlsZXNMaXN0ID8gY29uZmlnLmZpbGVzTGlzdC5zcGxpdCgnLCcpIDogW107XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgZmlsZXNMaXN0KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2NrRmlsZSA9IHsgbmFtZTogaXRlbSwgc2l6ZTogMTIzNDU2NzggfTtcblxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdhZGRlZGZpbGUnLCBtb2NrRmlsZSk7XG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoJ2NvbXBsZXRlJywgbW9ja0ZpbGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5maWxlcy5wdXNoKG1vY2tGaWxlKTtcblxuXHRcdFx0XHRcdFx0JChgJHtjb25maWcuaGlkZGVuSW5wdXRDb250YWluZXJ9IC5kei1maWxlbmFtZWApLmF0dHIoJ3RpdGxlJywgaXRlbSk7XG5cblx0XHRcdFx0XHRcdHByZXZGaWxlID0gbW9ja0ZpbGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCtjb25maWcubWF4RmlsZXMgPT09IDEgJiYgY29uZmlnLmlzUmVwbGFjZVByZXZpb3VzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uKCdhZGRlZGZpbGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHByZXZGaWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUZpbGUocHJldkZpbGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90aWZ5SW5wdXQgPSAkKGAjJHtjb25maWcubm90aWZ5SW5wdXRJZH1gKTtcblxuXHRcdFx0XHRcdHRoaXMub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdHByZXZGaWxlID0gZmlsZTtcblxuXHRcdFx0XHRcdFx0JChgIyR7Y29uZmlnLm5vdGlmeUlucHV0SWR9IC5kei1maWxlbmFtZWApLmF0dHIoJ3RpdGxlJywgZmlsZS5uYW1lKTtcblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC52YWwocmVzcG9uc2VUZXh0KTtcblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC5jaGFuZ2UoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHRoaXMub24oJ2Vycm9yJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2VUZXh0KSB7XG5cdFx0XHRcdFx0XHRwcmV2RmlsZSA9IGZpbGU7XG5cblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC52YWwocmVzcG9uc2VUZXh0KTtcblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC5jaGFuZ2UoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5VcGxvYWRNZXNzYWdlQ2xhc3NgKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5kei1jbGlja2FibGVgKS5jbGljaygpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ecm9wem9uZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgRXhwYW5kYWJsZUxpbmsgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSB3aWRnZXRJRCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnRXcmFwcGVyID0gJChgIyR7d2lkZ2V0SUR9YCk7XG5cblx0XHRpZiAoJGVsZW1lbnRXcmFwcGVyLnBhcmVudCgnLkV4cGFuZGFibGVMaXN0JykuaGFzQ2xhc3MoJ0hpZGVXaGVuRW1wdHknKSkge1xuXHRcdFx0Y29uc3QgdGV4dCA9ICRlbGVtZW50V3JhcHBlci5maW5kKCcuRXhwYW5kYWJsZUxpbmtfX0NvbnRlbnQnKS50ZXh0KCk7XG5cblx0XHRcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkgJGVsZW1lbnRXcmFwcGVyLnBhcmVudCgnLkV4cGFuZGFibGVMaXN0JykuaGlkZSgpO1xuXHRcdH1cblxuXHRcdGJpbmRFdmVudHMod2lkZ2V0SUQpO1xuXHR9O1xuXG5cdGNvbnN0IGJpbmRFdmVudHMgPSB3aWRnZXRJRCA9PiB7XG5cdFx0JChgIyR7d2lkZ2V0SUR9IC5FeHBhbmRhYmxlTGlua19fSGVhZGVyYCkuY2xpY2soKCkgPT4gb3BlbkNsb3NlKGAjJHt3aWRnZXRJRH1gKSk7XG5cdH07XG5cblx0Y29uc3Qgb3BlbkNsb3NlID0gZWxlbWVudElEID0+IHtcblx0XHQvLyBXaGVuIHRoZSBleHBhbmRhYmxlcyBhcmUgaW5zaWRlIGEgY29udGFpbmVyIHdpdGggY2xhc3MgRXhwYW5kYWJsZUxpbmtHcm91cCwgd2lsbCBhY3QgbGlrZSBhIGV4cGFuZGFibGUgZ3JvdXBcblx0XHRjb25zdCAkbGlua0dyb3VwID0gJChlbGVtZW50SUQpLmNsb3Nlc3QoJy5FeHBhbmRhYmxlTGlua0dyb3VwJyk7XG5cblx0XHRpZiAoJGxpbmtHcm91cC5sZW5ndGgpIHtcblx0XHRcdGNvbnN0ICRleHBhbmRhYmxlcyA9ICRsaW5rR3JvdXAuZmluZCgnLkV4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpLm5vdChlbGVtZW50SUQpO1xuXG5cdFx0XHQkZXhwYW5kYWJsZXMucmVtb3ZlQ2xhc3MoJ0V4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpO1xuXHRcdH1cblxuXHRcdCQoZWxlbWVudElEKS50b2dnbGVDbGFzcygnRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJyk7XG5cblx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZSkge1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZS5yZXNpemUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkV4cGFuZGFibGVMaW5rID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEZ1bGxTY3JlZW5UYWJzV3JhcHBlciAqL1xuU2FwcGhpcmVXaWRnZXRzLkZ1bGxTY3JlZW5UYWJzV3JhcHBlciA9ICgpID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlRhYldyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICR3cmFwcGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuRnVsbFNjcmVlblRhYnNXcmFwcGVyX19UYWJzJyk7XG5cdFx0XHQkd3JhcHBlci5maW5kKCcqJykucmVtb3ZlQ2xhc3MoJ0FjdGl2ZScpO1xuXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdBY3RpdmUnKTtcblx0XHR9KTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFBlcnNvbkNhcmQgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHR2YXIgUGVyc29uQ2FyZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0JCgnLklzRXhwYW5kYWJsZSAuUGVyc29uQ2FyZF9faGVhZGVyTGVmdEluZm8sIC5Jc0V4cGFuZGFibGUgLlBlcnNvbkNhcmRfX2NvbnRlbnQnKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkaGVhZGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZF9oZWFkZXInKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZE9wZW5MaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkT3BlbkxpbmsnKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZENsb3NlTGluayA9ICRoZWFkZXIuZmluZCgnLlBlcnNvbkNhcmRfX09uQ2FyZENsb3NlQ2xpY2snKTtcblx0XHRcdFx0Y29uc3QgJGNvbnRlbnQgPSAkaGVhZGVyLm5leHQoKTtcblxuXHRcdFx0XHRjb25zdCAkY2FyZCA9ICQodGhpcykuY2xvc2VzdCgnLlBlcnNvbkNhcmQnKTtcblxuXHRcdFx0XHQkY29udGVudC5yZW1vdmVDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdGlmICgkY2FyZC5oYXNDbGFzcygnSXNPcGVuJykpIHtcblx0XHRcdFx0XHQkb25DYXJkQ2xvc2VMaW5rLnRyaWdnZXJIYW5kbGVyKCdjbGljaycpO1xuXHRcdFx0XHRcdCRjYXJkLnJlbW92ZUNsYXNzKCdJc09wZW4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkb25DYXJkT3BlbkxpbmsudHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7XG5cblx0XHRcdFx0XHQkY29udGVudC5hZGRDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdFx0JGNhcmQuYWRkQ2xhc3MoJ0lzT3BlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblxuXHQkKCcuU3RvcFByb3BhZ2F0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSk7XG5cblx0UGVyc29uQ2FyZEV2ZW50KCk7XG5cblx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChQZXJzb25DYXJkRXZlbnQpO1xufSk7XG4iLCIvKiBDb21wb25lbnQgR2VuZXJpY0dhbGxlcnkgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHYWxsZXJ5KGNvbmZpZyk7XG5cdH07XG5cblx0dmFyIEdlbmVyaWNHYWxsZXJ5ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyB0aGlzLmNvbmZpZy53aWRnZXRJZCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy5lcXVhbEhlaWdodCA9IHRoaXMuY29uZmlnLmVxdWFsSGVpZ2h0O1xuXHRcdGlmIChcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCc+IC5HZW5lcmljR2FsbGVyeS1jb250ZW50ID4gc3BhbicpLmxlbmd0aCA9PT0gMSAmJlxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5HZW5lcmljR2FsbGVyeS1jb250ZW50ID4gc3BhbicpLmhhc0NsYXNzKCdMaXN0UmVjb3JkcycpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLiRnYWxsZXJ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuLkxpc3RSZWNvcmRzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCcpO1xuXHRcdH1cblxuXHRcdGxldCB0ZW1wbGF0ZUNvbHVtbiA9ICdyZXBlYXQoJyArIHRoaXMuY29uZmlnLmNvbHVtblNpemluZyArICcsIG1pbm1heCgnICsgdGhpcy5jb25maWcuY29sdW1uTWluV2lkdGggKyAnLCAxZnIpKSc7XG5cblx0XHRpZiAodGhpcy5jb25maWcubWF4SXRlbXNSb3cgPiAwKSB7XG5cdFx0XHR0ZW1wbGF0ZUNvbHVtbiA9IGByZXBlYXQoJHt0aGlzLmNvbmZpZy5jb2x1bW5TaXppbmd9LCBtaW5tYXgobWF4KCR7dGhpcy5jb25maWcuY29sdW1uTWluV2lkdGh9LCAoMTAwJSAtICgke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSAtIDEpICogJHt0aGlzLmNvbmZpZy5nYXBDb2x1bW59cHgpIC8gJHt0aGlzLmNvbmZpZy5tYXhJdGVtc1Jvd30pLCAxZnIpKWA7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZ2FsbGVyeS5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2dyaWQnLFxuXHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogdGVtcGxhdGVDb2x1bW4sXG5cdFx0fSk7XG5cblx0XHR0aGlzLiRnYWxsZXJ5SXRlbXMgPSB0aGlzLiRnYWxsZXJ5LmNoaWxkcmVuKCk7XG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ0dlbmVyaWNHYWxsZXJ5LWl0ZW0nKSkge1xuXHRcdFx0XHQkKHRoaXMpLndyYXAoJzxkaXYgY2xhc3M9XCJHZW5lcmljR2FsbGVyeS1pdGVtXCI+PC9kaXY+Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkdlbmVyaWNHYWxsZXJ5ID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEdlbmVyaWNHcmlkICovXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgYWxsR2VuZXJpY0dyaWRzID0gW107XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBHZW5lcmljR3JpZChjb25maWcpO1xuXHRcdGFsbEdlbmVyaWNHcmlkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblx0fTtcblxuXHR2YXIgR2VuZXJpY0dyaWQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbmZpZyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkdlbmVyaWNHcmlkID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHR9O1xuXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IEhvcml6b250YWxUb29sYmFyICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdCgkd2lkZ2V0LCBjb25maWcpKTtcblxuXHRcdGlmIChjb25maWcuaXNBcnJvd05hdmlnYXRpb24pIHtcblx0XHRcdCQod2luZG93KS5sb2FkKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgJGl0ZW1XcmFwcGVyID0gJHdpZGdldC5maW5kKCcuTWVudUl0ZW1XcmFwcGVyLkFjdGl2ZScpO1xuXHRcdFx0XHRpZiAoJGl0ZW1XcmFwcGVyLmxlbmd0aCkge1xuXHRcdFx0XHRcdCRpdGVtV3JhcHBlclswXS5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0YmxvY2s6ICdlbmQnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgkd2lkZ2V0LCBjb25maWcpID0+IHtcblx0XHRpZiAoY29uZmlnLmlzQXJyb3dOYXZpZ2F0aW9uKSB7XG5cdFx0XHRoYW5kbGVBcnJvd3MoJHdpZGdldCk7XG5cblx0XHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xuXHRcdFx0Y29uc3QgJGxpc3RJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5MaXN0UmVjb3JkcycpO1xuXHRcdFx0Y29uc3QgJGJ0blJpZ2h0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fcmlnaHRCdG4nKTtcblx0XHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xuXG5cdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbCgoKSA9PiBoYW5kbGVBcnJvd3MoJHdpZGdldCkpO1xuXG5cdFx0XHQkYnRuUmlnaHQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xuXHRcdFx0XHR2YXIgc2lkZVdpZHRoID0gbWF4U2Nyb2xsbCAtIDUwO1xuXHRcdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoY3VycmVudFNjcm9sbCArIDUwKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFNjcm9sbCA9PSBzaWRlV2lkdGgpICRidG5SaWdodC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgIT0gNTApICRidG5MZWZ0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRidG5MZWZ0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xuXHRcdFx0XHR2YXIgbWF4U2Nyb2xsbCA9ICRsaXN0SXRlbXMud2lkdGgoKSAtICR0b29sYmFySXRlbXMud2lkdGgoKTtcblx0XHRcdFx0dmFyIHNpZGVXaWR0aCA9IG1heFNjcm9sbGwgLSA1MDtcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgLSA1MCk7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgIT0gc2lkZVdpZHRoKSAkYnRuUmlnaHQucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkJyk7XG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IDUwKSAkYnRuTGVmdC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFuZGxlUmVzaXplKCR3aWRnZXQpO1xuXHRcdFx0YmluZEV2ZW50c0NsaWNrKCR3aWRnZXQpO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpKTtcblxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1Rvb2xiYXJGaXhlZCcsICgpID0+IGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KSwgZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVBcnJvd3MgPSAkd2lkZ2V0ID0+IHtcblx0XHRjb25zdCAkdG9vbGJhckl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKTtcblx0XHRjb25zdCAkbGlzdEl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLkxpc3RSZWNvcmRzJyk7XG5cdFx0Y29uc3QgJGJ0blJpZ2h0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fcmlnaHRCdG4nKTtcblx0XHRjb25zdCAkYnRuTGVmdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX2xlZnRCdG4nKTtcblxuXHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XG5cdFx0bGV0IG1lbnVXaWR0aCA9ICRsaXN0SXRlbXMud2lkdGgoKTtcblx0XHRsZXQgZXh0ZXJuYWxXaWR0aCA9ICR0b29sYmFySXRlbXMud2lkdGgoKTtcblx0XHR2YXIgbWF4U2Nyb2xsbCA9IG1lbnVXaWR0aCAtIGV4dGVybmFsV2lkdGg7XG5cblx0XHRpZiAoZXh0ZXJuYWxXaWR0aCA+IG1lbnVXaWR0aCkge1xuXHRcdFx0JGJ0bkxlZnQuaGlkZSgpO1xuXHRcdFx0JGJ0blJpZ2h0LmhpZGUoKTtcblxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5hZGRDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRidG5MZWZ0LnNob3coKTtcblx0XHRcdCRidG5SaWdodC5zaG93KCk7XG5cblx0XHRcdCR3aWRnZXQuZmluZCgnLlRvb2xiYXJfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ1Rvb2xiYXJfY29udGFpbmVyLS1ub2Fycm93cycpO1xuXHRcdH1cblxuXHRcdGlmIChjdXJyZW50U2Nyb2xsID09PSAwKSAkYnRuTGVmdC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcblx0XHRlbHNlICRidG5MZWZ0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xuXG5cdFx0aWYgKGN1cnJlbnRTY3JvbGwgPj0gbWF4U2Nyb2xsbCkgJGJ0blJpZ2h0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xuXHRcdGVsc2UgJGJ0blJpZ2h0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xuXHR9O1xuXG5cdGhhbmRsZVJlc2l6ZSA9ICR3aWRnZXQgPT4ge1xuXHRcdGxldCBpdGVtc1RvdGFsID0gMDtcblx0XHRsZXQgaGFzSXRlbXNIaWRkZW4gPSBmYWxzZTtcblxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcblx0XHQkbGlzdEl0ZW1zLmZpbmQoJz4gYVt1aV0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0Y29uc3QgbWVudVdpZHRoID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKS5vdXRlcldpZHRoKHRydWUpO1xuXG5cdFx0JGxpc3RJdGVtcy5maW5kKCdhW3VpXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xuXG5cdFx0XHRpZiAoaXRlbXNUb3RhbCArIDkwIDwgbWVudVdpZHRoKSB7XG5cdFx0XHRcdCQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYXNJdGVtc0hpZGRlbiA9IHRydWU7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGhhc0l0ZW1zSGlkZGVuICYmICEkbGlzdEl0ZW1zLmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9ucycpLmxlbmd0aCkge1xuXHRcdFx0JHdpZGdldFxuXHRcdFx0XHQuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zJylcblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdC5hcHBlbmRUbygkbGlzdEl0ZW1zKTtcblxuXHRcdFx0aGFzSXRlbXNIaWRkZW4gPSBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCAkb3B0aW9uc0xpc3QgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNMaXN0Jyk7XG5cblx0XHQkbGlzdEl0ZW1zLmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9ucycpLmNzcygnZGlzcGxheScsICRvcHRpb25zTGlzdC5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnKTtcblxuXHRcdGNvbnN0ICRoaWRkZW5JdGVtcyA9ICRsaXN0SXRlbXMuZmluZCgnPiBhW3VpXScpLmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMpLmNzcygnZGlzcGxheScpID09ICdub25lJztcblx0XHR9KTtcblxuXHRcdCRvcHRpb25zTGlzdC5lbXB0eSgpO1xuXG5cdFx0Y29uc3QgaGFzTm90aWZpY2F0aW9uSGlkZGVuID0gJGhpZGRlbkl0ZW1zLmZpbmQoJy5NZW51SXRlbVdyYXBwZXJfQmFkZ2U6bm90KDplbXB0eSknKS5sZW5ndGggIT09IDA7XG5cdFx0Y29uc3QgJHRyaWdnZXIgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uJyk7XG5cblx0XHRpZiAoaGFzTm90aWZpY2F0aW9uSGlkZGVuKSAkdHJpZ2dlci5hZGRDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uLS1ub3RpZmljYXRpb24nKTtcblx0XHRlbHNlICR0cmlnZ2VyLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xuXG5cdFx0JGhpZGRlbkl0ZW1zXG5cdFx0XHQuY2xvbmUoKVxuXHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHQuYXBwZW5kVG8oJG9wdGlvbnNMaXN0KTtcblx0fTtcblxuXHRiaW5kRXZlbnRzQ2xpY2sgPSAkd2lkZ2V0ID0+IHtcblx0XHRjb25zdCAkbW9yZU9wdGlvbnMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKTtcblx0XHRjb25zdCAkdHJpZ2dlciA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0ljb24nKTtcblx0XHRjb25zdCAkb3B0aW9uc0xpc3QgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19Nb3JlT3B0aW9uc0xpc3QnKTtcblxuXHRcdCR0cmlnZ2VyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdCRtb3JlT3B0aW9ucy50b2dnbGVDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnMtLW9wZW4nKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXG5cdFx0JG9wdGlvbnNMaXN0Lm9uKCdtb3VzZXdoZWVsJywgZXZlbnQgPT4ge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cblx0XHQkKCdib2R5Jykub24oJ21vdXNldXAnLCBldmVudCA9PiB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnBhcmVudHMoKTtcblxuXHRcdFx0aWYgKCEkdGFyZ2V0LmFuZFNlbGYoKS5pcygkbW9yZU9wdGlvbnMpKSB7XG5cdFx0XHRcdCRtb3JlT3B0aW9ucy5yZW1vdmVDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnMtLW9wZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSG9yaXpvbnRhbFRvb2xiYXIgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgSG91clBpY2tlciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNsYXNzIEhvdXJQaWNrZXIge1xuXHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0Ly8gT3B0aW9ucyB1c2VkIGJ5IGpRdWVyeSBUaW1lcnBpY2tlciAoRXh0ZXJuYWwgTGliKVxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHR9O1xuXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuSG91clBpY2tlci5hbGxJbnRhbmNlcy5wdXNoKGNvbmZpZy53aWRnZXRJZCk7XG5cblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XG5cdFx0fVxuXG5cdFx0aXNDb21wb25lbnRWYWxpZCgpIHtcblx0XHRcdGxldCB2YWxpZCA9IHRydWU7XG5cdFx0XHRsZXQgbWVzc2FnZSA9IGBDb21wb25lbnQgSG91clBpY2tlciAoJHt0aGlzLm9wdGlvbnMud2lkZ2V0SWR9KTpgO1xuXHRcdFx0bGV0IGVycm9ycyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy4kbW9kZWwubGVuZ3RoICYmIHRoaXMuJG1vZGVsLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfSAtIE5lZWRzIG9uZSAtIGFuZCBqdXN0IG9uZSAtIElucHV0IGVsZW1lbnQuYDtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLiRtb2RlbC5sZW5ndGggJiYgdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19QbGFjZWhvbGRlciBpbnB1dCcpLmxlbmd0aCkge1xuXHRcdFx0XHRlcnJvcnMgPSBgJHtlcnJvcnN9XFxuIC0gVGhlIElucHV0IGVsZW1lbnQgbXVzdCBiZSBvZiB0eXBlIFRleHQuYDtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF2YWxpZCkgY29uc29sZS5lcnJvcihgJHttZXNzYWdlfSAke2Vycm9yc31gKTtcblxuXHRcdFx0cmV0dXJuIHZhbGlkO1xuXHRcdH1cblxuXHRcdHNldENvbXBvbmVudFBvc2l0aW9uKCkge1xuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoJy51aS10aW1lcGlja2VyLWNvbnRhaW5lcicpO1xuXHRcdFx0Y29uc3QgbGFiZWxMZWZ0ID0gdGhpcy4kbGFiZWwub2Zmc2V0KCkubGVmdDtcblx0XHRcdGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLiRsYWJlbC53aWR0aCgpO1xuXHRcdFx0Y29uc3QgbGFiZWxPdXRlcldpZHRoID0gdGhpcy4kbGFiZWwub3V0ZXJXaWR0aCgpO1xuXHRcdFx0Y29uc3Qgd2lkZ2V0T3V0ZXJXaWR0aCA9ICR3aWRnZXQub3V0ZXJXaWR0aCgpO1xuXHRcdFx0Y29uc3Qgd2lkZ2V0TWluV2lkdGggPSArJHdpZGdldC5jc3MoJ21pbi13aWR0aCcpLnJlcGxhY2UoJ3B4JywgJycpO1xuXHRcdFx0Y29uc3QgaXNPdXRzaWRlV2luZG93ID1cblx0XHRcdFx0bGFiZWxMZWZ0ICsgbGFiZWxPdXRlcldpZHRoID4gJCh3aW5kb3cpLnNjcm9sbExlZnQoKSArICQod2luZG93KS53aWR0aCgpIC0gd2lkZ2V0T3V0ZXJXaWR0aDtcblxuXHRcdFx0JHdpZGdldC5jc3Moe1xuXHRcdFx0XHRsZWZ0OiAoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gbGFiZWxMZWZ0IC0gKHdpZGdldE1pbldpZHRoIC0gbGFiZWxXaWR0aCkgLyAyO1xuXG5cdFx0XHRcdFx0aWYgKGlzT3V0c2lkZVdpbmRvdykgdmFsdWUgPSBsYWJlbExlZnQgKyBsYWJlbFdpZHRoIC0gd2lkZ2V0T3V0ZXJXaWR0aDtcblx0XHRcdFx0XHRlbHNlIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gbGFiZWxMZWZ0O1xuXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2V0RWxlbWVudENsYXNzKHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWUgPyAkKHNlbGVjdG9yKS5hZGRDbGFzcyhjbGFzc05hbWUpIDogZmFsc2U7XG5cdFx0fVxuXG5cdFx0ZGVmaW5lVGltZUZvcm1hdCgpIHtcblx0XHRcdGxldCBmb3JtYXQgPSBbXTtcblx0XHRcdGxldCBhbVBtID0gJyc7XG5cblx0XHRcdGZvcm1hdC5wdXNoKHRoaXMub3B0aW9ucy5pczI0aEZvcm1hdCA/ICdISCcgOiAnaGgnKTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2hvd01pbnV0ZXMpIGZvcm1hdC5wdXNoKCdtbScpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zaG93U2Vjb25kcykgZm9ybWF0LnB1c2goJ3NzJyk7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5pczI0aEZvcm1hdCkgYW1QbSA9ICcgcCc7XG5cblx0XHRcdHJldHVybiBgJHtmb3JtYXQuam9pbignOicpfSR7YW1QbX1gO1xuXHRcdH1cblxuXHRcdGNvbnZlcnRUaW1lMTJ0bzI0KHZhbHVlKSB7XG5cdFx0XHRjb25zdCBbdGltZSwgbW9kaWZpZXJdID0gdmFsdWUuc3BsaXQoJyAnKTtcblx0XHRcdGxldCBbaG91cnMsIG1pbnV0ZXMgPSAnMDAnLCBzZWNvbmRzID0gJzAwJ10gPSB0aW1lLnNwbGl0KCc6Jyk7XG5cblx0XHRcdGlmIChob3VycyA9PT0gJzEyJykgaG91cnMgPSAnMDAnO1xuXHRcdFx0aWYgKG1vZGlmaWVyID09PSAnUE0nKSBob3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCkgKyAxMjtcblxuXHRcdFx0cmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuXHRcdH1cblxuXHRcdGNvbnZlcnRUaW1lRm9ybWF0VG9NYXNrKHZhbHVlID0gJycpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bYS16QS1aXSsvZywgJy0tJyk7XG5cdFx0fVxuXG5cdFx0b25DaGFuZ2VFdmVudCh2YWx1ZSA9ICcnKSB7XG5cdFx0XHRsZXQgbW9kZWwgPSAnMDEtMDEtMTkwMCAwMDowMDowMCc7IC8vaS5lLiBudWxsXG5cdFx0XHRsZXQgbGFiZWwgPSB0aGlzLmNvbnZlcnRUaW1lRm9ybWF0VG9NYXNrKHRoaXMub3B0aW9ucy50aW1lRm9ybWF0KTtcblxuXHRcdFx0aWYgKHZhbHVlICYmICEhdmFsdWUudHJpbSgpKSB7XG5cdFx0XHRcdC8vIFRoaXMgY29uZGl0aW9uIGlzIGNvcnJlY3QsIG1vZGVsIGFsd2F5cyB1c2VzIHRoZSAyNGggZm9ybWF0XG5cdFx0XHRcdG1vZGVsID0gdGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0ID8gdmFsdWUgOiB0aGlzLmNvbnZlcnRUaW1lMTJ0bzI0KHZhbHVlKTtcblx0XHRcdFx0bGFiZWwgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc05vdGlmeUVuYWJsZWQpIE9zTm90aWZ5V2lkZ2V0KHRoaXMub3B0aW9ucy5ob3VyUGlja2VyRmFrZU5vdGlmeUlkLCBtb2RlbCk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzVGV4dFRyaWdnZXJhYmxlKSB0aGlzLiRsYWJlbC50ZXh0KGxhYmVsKTtcblxuXHRcdFx0dGhpcy4kbW9kZWwudmFsKG1vZGVsKTtcblx0XHRcdHRoaXMuJG1vZGVsLmNoYW5nZSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7dGhpcy5vcHRpb25zLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kbW9kZWwgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG5cdFx0XHR0aGlzLiRpbnB1dCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuSG91clBpY2tlcl9fRGlzcGxheWVkIC5Ib3VyUGlja2VyX19JbnB1dFZhbHVlJyk7XG5cdFx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy4kaW5wdXQ7XG5cblx0XHRcdHRoaXMub3B0aW9ucy50aW1lRm9ybWF0ID0gdGhpcy5kZWZpbmVUaW1lRm9ybWF0KCk7XG5cblx0XHRcdGlmICghdGhpcy5pc0NvbXBvbmVudFZhbGlkKCkpIHJldHVybjtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy4kY29tcG9uZW50O1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNUZXh0VHJpZ2dlcmFibGUpIHtcblx0XHRcdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdIb3VyUGlja2VyLS10ZXh0VHJpZ2dlcicpO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGFiZWwgPSAkY29udGFpbmVyLmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0xhYmVsVmFsdWUnKTtcblx0XHRcdFx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy4kbGFiZWw7XG5cblx0XHRcdFx0XHR0aGlzLiRsYWJlbC50ZXh0KHRoaXMuY29udmVydFRpbWVGb3JtYXRUb01hc2sodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQpKTtcblxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuJGxhYmVsLnRpbWVwaWNrZXIoKS5vcGVuKCk7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2V0Q29tcG9uZW50UG9zaXRpb24oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNDbGVhcmFibGUpIHtcblx0XHRcdFx0XHR0aGlzLiRidXR0b25DbGVhciA9ICRjb250YWluZXIuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fQnV0dG9uQ2xlYXInKTtcblxuXHRcdFx0XHRcdHRoaXMuJGJ1dHRvbkNsZWFyLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlRXZlbnQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQudGltZXBpY2tlcih7XG5cdFx0XHRcdFx0Li4udGhpcy5vcHRpb25zLFxuXHRcdFx0XHRcdGNoYW5nZTogdGltZSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQodGltZSA/ICQoKS50aW1lcGlja2VyLmZvcm1hdFRpbWUodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQsIHRpbWUpIDogbnVsbCksXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuc2V0RWxlbWVudENsYXNzKCcudWktdGltZXBpY2tlci1jb250YWluZXInLCB0aGlzLm9wdGlvbnMuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicpO1xuXG5cdFx0XHRcdHRoaXMuJGlucHV0LnByb3AoJ3JlYWRvbmx5JywgIXRoaXMub3B0aW9ucy5pc1R5cGVFbmFibGVkKTtcblx0XHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCB0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBIb3VyUGlja2VyKGNvbmZpZyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkhvdXJQaWNrZXIgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGFsbEludGFuY2VzOiBbXSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IElucHV0TEFTQSAqL1xuKGZ1bmN0aW9uKCkge1xuXHR2YXIgc2V0dXBJbnB1dCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdCQoJ2JvZHknKS5vZmYoJ2NsaWNrJywgJyMnICsgY29uZmlnLmxhYmVsSWQpO1xuXHRcdCQoJ2JvZHknKS5vZmYoJ2JsdXIgY2hhbmdlIGlucHV0JywgJyMnICsgY29uZmlnLmlucHV0SWQpO1xuXG5cdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cblx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5oaWRlKCk7XG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuc2hvdygpO1xuXG5cdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xuXG5cdFx0JCgnYm9keScpLm9uKCdjbGljaycsICcjJyArIGNvbmZpZy5sYWJlbElkLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLmhpZGUoKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnNob3coKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cblx0XHQkKCdib2R5Jykub24oJ2JsdXInLCAnIycgKyBjb25maWcuaW5wdXRJZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0KGNvbmZpZyk7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5oaWRlKCk7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5zaG93KCk7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuYXBwbHlNYXJraW5nKHsgdGFyZ2V0OiBjb25maWcubGFiZWxJZCB9KTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fSk7XG5cblx0XHQkKCdib2R5Jykub24oJ2NoYW5nZSBpbnB1dCcsICcjJyArIGNvbmZpZy5pbnB1dElkLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5hcHBseU1hcmtpbmcoeyB0YXJnZXQ6ICdwYWdlJyB9KTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIGhhbmRsZVByb21wdCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGlmICghJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkubGVuZ3RoKSB7XG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKVxuXHRcdFx0XHQudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5wcm9wKCdwbGFjZWhvbGRlcicpKVxuXHRcdFx0XHQuY3NzKCdjb2xvcicsICcjOTk5Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpXG5cdFx0XHRcdC50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnZhbCgpKVxuXHRcdFx0XHQuY3NzKCdjb2xvcicsICcnKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0ID0gU2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0ID0gU2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0IHx8IHt9O1xuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3Quc2V0dXBJbnB1dCA9IHNldHVwSW5wdXQ7XG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQgPSBoYW5kbGVQcm9tcHQ7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXHRjbGFzcyBJbnB1dFdpdGhDbGVhciB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cdFx0XHR0aGlzLiRjbGVhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItY2xlYXInKTtcblx0XHRcdHRoaXMuJG5vdGlmeUxpbmsgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLW5vdGlmeS1saW5rJyk7XG5cdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLS1zaGllbGQnKTtcblx0XHRcdHRoaXMub25Jbml0KCk7XG5cdFx0fVxuXG5cdFx0b25Jbml0KCkge1xuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSAhPT0gJycpIHRoaXMuJGNsZWFyLnNob3coKTtcblx0XHRcdFx0ZWxzZSB0aGlzLiRjbGVhci5zaG93KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSA9PT0gJycpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuJGNsZWFyLmhpZGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGNsZWFyLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcblx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLiRub3RpZnlMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR9KTtcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNTaGllbGQpIHtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZC5oaWRlKCk7XG5cdFx0XHRcdH0sIHRoaXMuY29uZmlnLnNoaWVsZFRpbWVvdXQpO1xuXHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2hpZWxkVGltZW91dCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBJbnB1dFdpdGhDbGVhcihjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoQ2xlYXIgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblx0Y2xhc3MgSW5wdXRXaXRoTGlzdCB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cdFx0XHR0aGlzLiRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cblx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XG5cblx0XHRcdHRoaXMub25Jbml0KCk7XG5cdFx0fVxuXG5cdFx0b25Jbml0KCkge1xuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XG5cdFx0XHRcdC8vIEdldHRpbmcgZWxlbWVudHMgYWdhaW4gaW4gb3JkZXIgdG8gd29yayB3aGVuIHRoaXMgY29tcG9uZW50IGlzIGNsb25lZCAoZS5nLiB3aGVuIHVzaW5nIGluc2lkZSBBY3Rpb25zTWVudSlcblx0XHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7dGhpcy5jb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xuXHRcdFx0XHRjb25zdCAkbGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fTGlzdCcpO1xuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fSGlkZGVuSW5wdXQgaW5wdXQnKTtcblxuXHRcdFx0XHRpZiAoJGlucHV0LnZhbCgpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0XHQkbGlzdC5lbXB0eSgpO1xuXG5cdFx0XHRcdFx0JGxpc3QuYXBwZW5kKGA8ZGl2PjxiPkNyZWF0ZTo8L2I+ICR7JGlucHV0LnZhbCgpfTwvZGl2PmApO1xuXG5cdFx0XHRcdFx0aWYgKCEkbGlzdC5pcygnOnZpc2libGUnKSkgJGxpc3Quc2hvdygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRsaXN0LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJGxpc3Qub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGNvbnN0ICRsaW5rTm90aWZ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0LW5vdGlmeS1saW5rJyk7XG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xuXG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0LnZhbCgkaW5wdXQudmFsKCkpO1xuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC5jaGFuZ2UoKTtcblxuXHRcdFx0XHQkbGlua05vdGlmeS5jbGljaygpO1xuXHRcdFx0XHQkbGlzdC5oaWRlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aExpc3QoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLklucHV0V2l0aExpc3QgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoKTtcbiIsIi8qIENvbXBvbmVudCBMaW5lQWRkICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS5MaW5lQWRkJywgKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0V2lkdGggPSBmdW5jdGlvbih3aWRnZXRJZCkge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoYCMke3dpZGdldElkIHx8IFNhcHBoaXJlV2lkZ2V0cy5MaW5lQWRkLndpZGdldElkfWApO1xuXHRcdFx0Y29uc3Qgd2lkdGhzID0gW107XG5cblx0XHRcdGZvciAoaSA9IDE7IGkgPCA4OyBpKyspIHtcblx0XHRcdFx0bGV0IG1heFdpZHRoQ29udGVudCA9IE1hdGgubWF4LmFwcGx5KFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0JHdpZGdldFxuXHRcdFx0XHRcdFx0LmZpbmQoJy5sYWNvbCcgKyBpKVxuXHRcdFx0XHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykud2lkdGgoKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0KClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHR3aWR0aHMucHVzaChtYXhXaWR0aENvbnRlbnQpO1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy5sYWNvbCcgKyBpKS53aWR0aChtYXhXaWR0aENvbnRlbnQpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQgPSB7IGNyZWF0ZSwgc2V0V2lkdGggfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IExpbmVEZXRhaWxzRXhwYW5kQm94ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgaW5pdCA9IGNvbmZpZyA9PiB7XG5cdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSArIC5MaW5lRGV0YWlsc0V4cGFuZEJveF9hY3Rpb25gKS5jbGljayhldmVudCA9PiB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdChjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTGluZURldGFpbHNFeHBhbmRCb3ggPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTG9jYXRpb25Cb3ggKi9cblNhcHBoaXJlV2lkZ2V0cy5Mb2NhdGlvbkJveCA9IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRpZiAoJGNvbXBvbmVudC5oYXNDbGFzcygnT24nKSkge1xuXHRcdCQoJy5EaXNhYmxlUm9vbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnT2ZmJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPbicpO1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdG9wYWNpdHk6ICcxJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCRjb21wb25lbnRcblx0XHRcdC5hZGRDbGFzcygnT24nKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxuXHRcdFx0LnBhcmVudCgnLlJvb21Cb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdG9wYWNpdHk6ICcxJyxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cblx0XHQkKCcuRGlzYWJsZVJvb206bm90KCMnICsgd2lkZ2V0SWQgKyAnKScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdPZmYnKTtcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ09uJyk7XG5cdFx0fSk7XG5cblx0XHQkKCcuRGlzYWJsZVJvb20uT2ZmJylcblx0XHRcdC5wYXJlbnQoJy5Sb29tQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHRvcGFjaXR5OiAnMC41MCcsXG5cdFx0XHR9KVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xuXHR9XG59O1xuIiwiLyogQ29tcG9uZW50IE1haW5JbnRlcmFjdGl2ZUNhcmQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gW107XG5cdHZhciBkZWZhdWx0RHVyYXRpb24gPSAzMDA7XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhbGxNYWluSW50ZXJhY3RpdmVDYXJkc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xuXHRcdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IE1haW5JbnRlcmFjdGl2ZUNhcmQoY29uZmlnKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblxuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkICYmICEhb3NBamF4QmFja2VuZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBNYWluSW50ZXJhY3RpdmVDYXJkID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzTG9ja2VkT25DbG9zZSA9IGZhbHNlO1xuXHRcdHRoaXMuaXNPcGVuID0gY29uZmlnLmlzT3Blbjtcblx0XHR0aGlzLmlzRW5hYmxlZCA9IGNvbmZpZy5pc0VuYWJsZWQ7XG5cdFx0dGhpcy5pc1NlbGVjdGFibGUgPSBjb25maWcuaXNTZWxlY3RhYmxlO1xuXHRcdHRoaXMuYWxsb3dPcGVuaW5nID0gY29uZmlnLmFsbG93T3BlbmluZztcblx0XHR0aGlzLmFsbG93TXVsdGlwbGVPcGVuID0gY29uZmlnLmFsbG93TXVsdGlwbGVPcGVuO1xuXHRcdHRoaXMuZW1pdE5vdGlmeU9uT3BlbiA9IGNvbmZpZy5lbWl0Tm90aWZ5T25PcGVuO1xuXHRcdHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4gPSBjb25maWcuaGlkZUFjdGlvbnNPbk9wZW47XG5cdFx0dGhpcy5oaWRlQ2FwdGlvbk9uT3BlbiA9IGNvbmZpZy5oaWRlQ2FwdGlvbk9uT3Blbjtcblx0XHR0aGlzLmhpZGVUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4gPSBjb25maWcuaGlkZVN1YlRpdGxlT25PcGVuO1xuXHRcdHRoaXMuaGVhZGVySGVpZ2h0V2hlbk9wZW4gPSBjb25maWcuaGVhZGVySGVpZ2h0V2hlbk9wZW47XG5cdFx0dGhpcy5NYWluSW50ZXJhY3RpdmVDYXJkRmFrZU5vdGlmeUlkID0gY29uZmlnLm1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQ7XG5cblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdHRoaXMuJGNhcmQgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCcpO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyJyk7XG5cdFx0dGhpcy4kaGVhZGVyVGV4dCA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dCcpO1xuXHRcdHRoaXMuJGV4cGFuZEljb24gPSB0aGlzLiRoZWFkZXIuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtZXhwYW5kLWljb24nKTtcblx0XHR0aGlzLiRib2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiBkaXYgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5Jyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLWFjdGlvbnMnXG5cdFx0KTtcblx0XHR0aGlzLiRjYXB0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dC1jYXB0aW9uJ1xuXHRcdCk7XG5cdFx0dGhpcy4kdGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc3ViVGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXN1YnRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc2VsZWN0VHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZSA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlLXRyaWdnZXInXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtcGxhY2Vob2xkZXInXG5cdFx0KTtcblx0XHR0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRyaWdnZXJBY3Rpb24tcGxhY2Vob2xkZXInXG5cdFx0KTtcblxuXHRcdGlmICh0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIuZmluZCgnYScpLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW4oZmFsc2UsIC0xKTtcblx0XHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3ModGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiArICdIZWFkZXInKTtcblxuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnYWxsb3dPcGVuaW5nJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcblxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuXHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XG5cdFx0XHRcdF90aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcud2lkZ2V0SWQpLCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0fSk7XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKCEhdGhpcy4kYm9keS5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJykubGVuZ3RoICYmIHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR2YXIgYWJzb2x1dGVBY3Rpb25zV2lkdGggPSBNYXRoLm1heC5hcHBseShcblx0XHRcdFx0TWF0aCxcblx0XHRcdFx0dGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJylcblx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0KTtcblx0XHRcdHZhciBoZWFkZXJNYXhXaWR0aCA9IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gYWJzb2x1dGVBY3Rpb25zV2lkdGg7XG5cdFx0XHRpZiAoaGVhZGVyTWF4V2lkdGggPiAxMCkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXJUZXh0LmNzcyh7XG5cdFx0XHRcdFx0bWF4V2lkdGg6IGhlYWRlck1heFdpZHRoICsgJ3B4Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zIC5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLW9wZW46bm90KFtkaXNhYmxlZF0pJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMub3Blbih0cnVlKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlclxuXHRcdFx0LmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHRpZiAodGhpcy5hbGxvd09wZW5pbmcpIHtcblx0XHRcdGNvbnN0IGNsaWNrQWN0aW9uID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGlmICgkKGV2dC50YXJnZXQpLmhhc0NsYXNzKCdCdXR0b24nKSkge1xuXHRcdFx0XHRcdC8vIHRoZSB1c2VyIGNsaWNrZWQgb24gYSBCdXR0b24gaW5zaWRlIHRoZSBoZWFkZXIsIG5vdGhpbmcgdG8gZG8gaGVyZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChfdGhpcy5pc09wZW4pIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0IV90aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJylcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkbyBub3QgY2xvc2Ugd2hlbiBhbmQgaWZyYW1lIGV4aXN0c1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnYScpLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJykubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIHRoZSBjYXJkIGhhcyBhY3Rpb25zXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZXhwYW5kSWNvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc1NlbGVjdGFibGUpIHtcblx0XHRcdHRoaXMuJHNlbGVjdFRyaWdnZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKF90aGlzLiRzZWxlY3RQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5jbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignWW91IG5lZWQgMSBsaW5rIGluIHRoaXMgcGxhY2Vob2xkZXIuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oc2VuZE5vdGlmeSwgZHVyYXRpb24pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kdGl0bGUuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbWl0Tm90aWZ5T25PcGVuKSB7XG5cdFx0XHRpZiAoc2VuZE5vdGlmeSkge1xuXHRcdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLk1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQsICdvcGVuJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy4kdHJpZ2dlcikge1xuXHRcdFx0dGhpcy4kdHJpZ2dlci5jbGljaygpO1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0XHR0aGlzLiRib2R5LnNsaWRlRG93bihkdXJhdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmhhc0NsYXNzKCdja2Vfd3lzaXd5Z19mcmFtZScpKSB7XG5cdFx0XHR2YXIgaWZyYW1lQ29udGVudHMgPSB0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdGlmcmFtZUNvbnRlbnRzLmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWlmcmFtZS1hY3Rpb25zJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5hbGxvd011bHRpcGxlT3Blbikge1xuXHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChpdGVtID0+IChpdGVtICE9PSB0aGlzICYmIGl0ZW0uYWxsb3dPcGVuaW5nID8gaXRlbS5jbG9zZShkdXJhdGlvbikgOiBudWxsKSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgZGVmYXVsdER1cmF0aW9uO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdFx0dGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0aWYgKHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiYgIXRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKSkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtaWZyYW1lLWFjdGlvbnMnKVxuXHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdH1cblx0XHR0aGlzLiRib2R5LnNsaWRlVXAoZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNlbGYuJGNhcmQuaGFzQ2xhc3MoJ2ZvcmNlT3BlbicpKSB7XG5cdFx0XHRcdHNlbGYuJGNhcmQucmVtb3ZlQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLnNob3coKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiR0aXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZUNhcHRpb25Pbk9wZW4pIHtcblx0XHRcdHRoaXMuJGNhcHRpb24uY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpID4gMTApIHtcblx0XHRcdHRoaXMuJGhlYWRlclRleHQuY3NzKHtcblx0XHRcdFx0bWF4V2lkdGg6IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpICsgJ3B4Jyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5pc09wZW47XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcztcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQnKS5sZW5ndGgpIHtcblx0XHRpZiAoISEhU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdH0pO1xuXHR9LCAxMDAwKTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IE1lbnVCYXIgKi9cblNhcHBoaXJlV2lkZ2V0cy5NZW51QmFyID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRtZW51V2lkZ2V0ID0gJCgnIycgKyBjb25maWcubWVudVdpZGdldCk7XG5cblx0XHR2YXIgbWVudVJlc2lkZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXZXaWR0aCA9IDA7XG5cdFx0XHR2YXIgYXZhaWxhYmVFc3BhY2UgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtJykud2lkdGgoKTtcblxuXHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuYXZXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG5hdldpZHRoID4gYXZhaWxhYmVFc3BhY2UpIHtcblx0XHRcdFx0dmFyIGxhc3RJdGVtID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5sYXN0KCk7XG5cdFx0XHRcdGxhc3RJdGVtLmF0dHIoJ2RhdGEtd2lkdGgnLCBsYXN0SXRlbS5vdXRlcldpZHRoKHRydWUpKTtcblx0XHRcdFx0bGFzdEl0ZW0ucHJlcGVuZFRvKCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpKTtcblx0XHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBmaXJzdE1vcmVFbGVtZW50ID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyIC5NZW51SXRlbScpLmZpcnN0KCk7XG5cdFx0XHRcdGlmIChuYXZXaWR0aCArIGZpcnN0TW9yZUVsZW1lbnQuZGF0YSgnd2lkdGgnKSA8IGF2YWlsYWJlRXNwYWNlKSB7XG5cdFx0XHRcdFx0Zmlyc3RNb3JlRWxlbWVudC5pbnNlcnRBZnRlcigkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmxhc3QoKSk7XG5cdFx0XHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLmlzKCc6ZW1wdHknKSkge1xuXHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCEkKHRoaXMpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0Lmhhc0NsYXNzKCdNZW51YmFyX19leHRyYUNvbnRhaW5lcicpXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuYWN0aXZlSW5kaWNhdG9yJykuYWRkQ2xhc3MoJ3NoYWRvdycpO1xuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKVxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZUluZGljYXRvcicpKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKVxuXHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtIC5pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm1vdXNldXAoZSA9PiB7XG5cdFx0XHR2YXIgJG1lbnUgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0uYWN0aXZlJyk7XG5cdFx0XHR2YXIgJG1vcmVPcHRpb25zID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtJyk7XG5cblx0XHRcdC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBtZW51IG9yIGEgZGVzY2VuZGFudCBvZiB0aGUgbWVudVxuXHRcdFx0aWYgKCRtZW51Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKCEkbWVudS5pcyhlLnRhcmdldCkgJiYgJG1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHQkbWVudS5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHRcdCQoJy5hY3RpdmVJbmRpY2F0b3InKS5yZW1vdmVDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJG1vcmVPcHRpb25zLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdCRtb3JlT3B0aW9ucy5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHQkKCcuYWN0aXZlSW5kaWNhdG9yJykucmVtb3ZlQ2xhc3MoJ3NoYWRvdycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IE11bHRpcGxlU2VsZWN0aW9uQnV0dG9uICovXG5TYXBwaGlyZVdpZGdldHMuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24gPSBmdW5jdGlvbihXcmFwcGVySWQpIHtcblx0Y29uc3QgJHdpZGdldCA9ICQoV3JhcHBlcklkKTtcblx0Y29uc3QgJGNvbnRyb2wgPSAkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cdGlmICgkKFdyYXBwZXJJZCArICcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuaXMoJzpkaXNhYmxlZCcpKSB7XG5cdFx0JHdpZGdldC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0fSBlbHNlIHtcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHR9XG5cblx0aWYgKCQoV3JhcHBlcklkICsgJyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmNoZWNrZWQnKSkge1xuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9IGVsc2Uge1xuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9XG5cblx0JHdpZGdldC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cblx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkgJHBhcmVudC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0ZWxzZSAkcGFyZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0JHdpZGdldC5maW5kKCcuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24tbGFiZWwnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkY29udHJvbFswXS5jbGljaygpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkY29udHJvbC5pcygnOmNoZWNrZWQnKSkgJHdpZGdldC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRlbHNlICR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH0sIDEwKTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IENvbmZpcm1hdGlvblBhbmVsM09wdGlvbnMgQ29uZmlybWF0aW9uUGFuZWwgc2FtZSBqYXZhc2NyaXB0IGNvZGUqL1xuXG5TYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwgPSB7XG5cdGlzQW55UGFuZWxPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJykgJiYgJCgnLlBhbmVsQ29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XG5cdH0sXG5cblx0dG9nZ2xlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkgcmV0dXJuO1xuXG5cdFx0aWYgKCFTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuaXNBbnlQYW5lbE9wZW5lZCgpKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVJbigxNDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQuc2V0TW9kYWxNaW5pbWl6ZWQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVPdXQoMTQwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdC5maW5kKCcuUGFuZWxDb250YWluZXInKVxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0c2V0UGFuZWxCZWhhdmlvcjogZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlBhbmVsW2NvbmZpcm1hdGlvbi1wYW5lbC10cmlnZ2VyLWVsZW1lbnRpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoaXNfcGFuZWwgPSAkKHRoaXMpO1xuXHRcdFx0JCgnIycgKyB0aGlzX3BhbmVsLmF0dHIoJ2NvbmZpcm1hdGlvbi1wYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC50b2dnbGVQYW5lbCh0aGlzX3BhbmVsLmF0dHIoJ2lkJykpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcblx0aWYgKG9zQWpheEJhY2tlbmQuRXZlbnRIYW5kbGVycy5BZnRlckFqYXhSZXF1ZXN0LnRvU3RyaW5nKCkuaW5kZXhPZignc2V0UGFuZWxCZWhhdmlvcicpID09IC0xKSB7XG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuc2V0UGFuZWxCZWhhdmlvcik7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IENvbmZpcm1hdGlvblBvcHVwICovXG52YXIgX2lzSW5JZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cCA9IHtcblx0aXNBbnlDb25maXJtYXRpb25PcGVuZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJykgJiYgd2luZG93LnRvcC4kKCcuY29uZmlybS1jb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpICYmICQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHRcdH1cblx0fSxcblxuXHR0b2dnbGVDb25maXJtOiBmdW5jdGlvbihfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKSB7XG5cdFx0aWYgKCFPc1ZhbGlkYXRvck9uU3VibWl0KCkpIHJldHVybjtcblxuXHRcdGlmICghdGhpcy5pc0FueUNvbmZpcm1hdGlvbk9wZW5lZCgpKSB7XG5cdFx0XHR2YXIgX2JvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHR2YXIgX2JvZHlKUyA9IGRvY3VtZW50LmJvZHk7XG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0X2JvZHkgPSB3aW5kb3cudG9wLiQoJ2JvZHknKTtcblx0XHRcdFx0X2JvZHlKUyA9IHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keTtcblx0XHRcdH1cblxuXHRcdFx0X2JvZHkuYWRkQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKTtcblxuXHRcdFx0dmFyIF9jb25maXJtSWQgPSAnY29uZmlybV8nICsgX2lkO1xuXG5cdFx0XHR2YXIgX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgX2NvbmZpcm1JZCk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybSBjb25maXJtLXdiJyk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29uZmlybS10cmlnZ2VyLWVsZW1lbnRpZCcsIF9pZCk7XG5cblx0XHRcdHZhciBfYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2JhY2tncm91bmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWJhY2tncm91bmQgY29uZmlybS13YicpO1xuXHRcdFx0X2JhY2tncm91bmQuc2V0QXR0cmlidXRlKCdpZCcsICdiZ18nICsgX2NvbmZpcm1JZCk7XG5cdFx0XHRfY29udGFpbmVyLmFwcGVuZENoaWxkKF9iYWNrZ3JvdW5kKTtcblxuXHRcdFx0dmFyIF9jb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tY29udGFpbmVyIGNvbmZpcm0td2InKTtcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tdGl0bGUnKTtcblx0XHRcdHZhciBfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShfcXVlc3Rpb24pO1xuXHRcdFx0X2NvbmZpcm1UaXRsZS5hcHBlbmRDaGlsZChfdGl0bGUpO1xuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1UaXRsZSk7XG5cblx0XHRcdHZhciBfY29uZmlybU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1Nc2cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLW1lc3NhZ2UnKTtcblxuXHRcdFx0X2NvbmZpcm1Nc2cuaW5uZXJIVE1MID0gX21lc3NhZ2U7IC8qIFNldCBIVE1MIHRvIHJlbmRlciB0aGUgbWVzc2FnZSBIVE1MIHRhZ3MsIHNpbWlsYXIgdG8gdGhlIEVzY2FwZSBDb250ZW50IHNldCBhcyBOby4gKi9cblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtTXNnKTtcblxuXHRcdFx0dmFyIF9jb25maXJtQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS1hY3Rpb25zJyk7XG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybUFjdGlvbnMpO1xuXG5cdFx0XHR2YXIgX25vQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQnV0dG9uIFRoaXJkIE11bHRpTWFyZ2luUmlnaHQxMCcpO1xuXHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICdjYW5jZWwtYnV0dG9uJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtTm8xJyk7XG5cdFx0XHRpZiAoX0hhc05vdGlmeU9uQ2FuY2VsID09ICdUcnVlJykge1xuXHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJyArXG5cdFx0XHRcdFx0XHRcdCdpZnJhbWVfJyArXG5cdFx0XHRcdFx0XHRcdF9pZCArXG5cdFx0XHRcdFx0XHRcdCdcIikuY29udGVudFdpbmRvdy5Pc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIsXCJDQU5DRUxcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybUlkICtcblx0XHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J09zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHRcdCdcIixcIkNBTkNFTFwiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J1NhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgKyBfY29uZmlybUlkICsgJ1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J1NhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgKyBfY29uZmlybUlkICsgJ1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX25vQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vJyk7XG5cdFx0XHRfbm9CdG5MbmsuYXBwZW5kQ2hpbGQoX25vQnRuKTtcblx0XHRcdF9jb25maXJtQWN0aW9ucy5hcHBlbmRDaGlsZChfbm9CdG5MbmspO1xuXG5cdFx0XHR2YXIgX3llc0J0bkxuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0EnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCdXR0b24gU2V0QXNWYWxpZCBJc19EZWZhdWx0Jyk7XG5cdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICcnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtWWVzMScpO1xuXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdCdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIicgK1xuXHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcblx0XHRcdFx0XHRcdF9pZCArXG5cdFx0XHRcdFx0XHQnXCIpLmNvbnRlbnRXaW5kb3cuT3NOb3RpZnlXaWRnZXQoXCInICtcblx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHQnXCIsXCJPS1wiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRfY29uZmlybUlkICtcblx0XHRcdFx0XHRcdCdcIik7J1xuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdCdPc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdCdcIixcIk9LXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3llc0J0biA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdZZXMnKTtcblx0XHRcdF95ZXNCdG5MbmsuYXBwZW5kQ2hpbGQoX3llc0J0bik7XG5cdFx0XHRfY29uZmlybUFjdGlvbnMuYXBwZW5kQ2hpbGQoX3llc0J0bkxuayk7XG5cblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtQWN0aW9ucyk7XG5cblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xuXG5cdFx0XHRfYm9keUpTLmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xuXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHRcdC4kKCcjJyArIF9jb25maXJtSWQpXG5cdFx0XHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuJCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xuXHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5zZXRNb2RhbE1pbmltaXplZCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlSW4oMTQwKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcjJyArIF9jb25maXJtSWQpXG5cdFx0XHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCArICcgW2NhbmNlbC1idXR0b25dJykuZm9jdXMoKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VDb25maXJtUG9wdXA6IGZ1bmN0aW9uKF9jb25maXJtSWQpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKTtcblx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xuXHRcdCQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0LmZpbmQoJy5jb25maXJtLWNvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0XHQkKCcjJyArIF9jb25maXJtSWQpLnJlbW92ZSgpO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0Y3JlYXRlOiBmdW5jdGlvbihfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIF9pZClcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLnRvZ2dsZUNvbmZpcm0oX2lkLCBfcXVlc3Rpb24sIF9tZXNzYWdlLCBfbm90aWZ5SWQsIF9IYXNOb3RpZnlPbkNhbmNlbCk7XG5cdFx0XHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVudS1pZCcsIF9pZCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lXycgKyBfaWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBNb2RhbFBvcHVwICovXG5cbnZhciBfaXNJbklmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuXG5TYXBwaGlyZVdpZGdldHMuTW9kYWxQb3B1cCA9IHtcblx0Y3JlYXRlOiBmdW5jdGlvbih3aWRnZXRJZCkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVXNlIHRoaXMgY29kZSB0byBhcHBlbmQgdGhlIGNvbXBvbmVudCB0byB0aGUgcm9vdCBib2R5XG5cdFx0XHQvLyB3aW5kb3cuZnJhbWVFbGVtZW50ICYmICQod2luZG93LmZyYW1lRWxlbWVudCkuY2xvc2VzdCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtYm9keScpLmxlbmd0aCA+IDBcblx0XHRcdGlmIChmYWxzZSkge1xuXHRcdFx0XHRjb25zdCAkcGFyZW50Qm9keSA9IHBhcmVudC4kKCdib2R5Jyk7XG5cdFx0XHRcdGxldCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cblx0XHRcdFx0aWYgKCRwYXJlbnRCb2R5LmZpbmQoJHdpZGdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JHBhcmVudEJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JHdpZGdldFxuXHRcdFx0XHRcdFx0XHQud3JhcCgnPGRpdi8+Jylcblx0XHRcdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0XHRcdC5kZXRhY2goKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkd2lkZ2V0ID0gcGFyZW50LiQoYCMke3dpZGdldElkfWApO1xuXHRcdFx0XHRjb25zdCAkYnRuQ2xvc2UgPSAkd2lkZ2V0LmZpbmQoJy5tb2RhbFBvcHVwX2Nsb3NlJyk7XG5cblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdzaG93Y2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcblxuXHRcdFx0XHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHRcdGNvbnN0ICRtb2RhbFJlbW90ZUFwcHQgPSB3aW5kb3cudG9wLiQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXG5cdFx0XHRcdFx0aWYgKCRtb2RhbFJlbW90ZUFwcHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbWluaW1pemVNb2RhbCA9ICRtb2RhbFJlbW90ZUFwcHQuZmluZCgnLk1pbmltaXplJyk7XG5cdFx0XHRcdFx0XHQkbWluaW1pemVNb2RhbC5jbGljaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRidG5DbG9zZS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdPcGVuJyk7XG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnc2hvd2Nsb3NlJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBQYW5lbEJ5SUROb3RpZnkgKi9cbnZhciBwYW5lbE5vdGlmeVdpZGdldDtcblNhcHBoaXJlV2lkZ2V0cy5QYW5lbEJ5SWROb3RpZnkgPSB7XG5cdGlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXHR9LFxuXHR0b2dnbGVQYW5lbEJ5Tm90aWZ5OiBmdW5jdGlvbihJZCkge1xuXHRcdGlmICghaXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQoKSkge1xuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXHRcdFx0JCgnIycgKyBJZClcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxuXHRcdFx0XHQuZmFkZUluKDE0MCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChqdXN0RHJhZ2dlZCA9PSBmYWxzZSkge1xuXHRcdFx0XHRcdCQoJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsIHBhbmVsTWFyZ2luTGVmdClcblx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwYW5lbExlZnQpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MocGFuZWxBcnJvd0NsYXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnIycgKyBJZClcblx0XHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0XHQuc2xpZGVEb3duKDE1MCk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdFx0XHQkKCcjJyArIElkKVxuXHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHRcdC5mYWRlT3V0KDE0MCk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjJyArIElkKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxuXHRcdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH1cblx0fSxcblx0dG9nZ2xlUGFuZWxOb3RpZnlCeUlkOiBmdW5jdGlvbihJZCkge1xuXHRcdCQoJ2JvZHknKS50b2dnbGVDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHQkKCcjJyArIElkKVxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0LnBhcmVudCgpXG5cdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHQuZmFkZVRvZ2dsZSgxNDApO1xuXG5cdFx0cGFuZWxOb3RpZnlXaWRnZXQgPSAkKCcjJyArIElkKVxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0LmF0dHIoJ05vdGlmeUlkJyk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBJZClcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFBhbmVsQnlJRCAqL1xuU2FwcGhpcmVXaWRnZXRzLlBhbmVsQnlJZCA9IHtcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdH0sXG5cblx0dG9nZ2xlQnV0dG9uOiBmdW5jdGlvbihpZCkge1xuXHRcdGNvbnN0ICR0b2dnbGVCdXR0b24gPSAkKGAjJHtpZH1gKS5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJykubGVuZ3RoXG5cdFx0XHQ/ICQoYCMke2lkfWApLnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0OiAkKGAjJHtpZH1gKTtcblxuXHRcdCR0b2dnbGVCdXR0b24uY2xpY2soKTtcblx0fSxcblxuXHR0b2dnbGVQYW5lbEJ5SWQ6IGZ1bmN0aW9uKElkKSB7XG5cdFx0Y29uc3QgJHRvZ2dsZUJ1dHRvbiA9ICQoYCMke0lkfWApLnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKTtcblx0XHRjb25zdCAkcGFuZWwgPSAkdG9nZ2xlQnV0dG9uLnBhcmVudCgpLmNoaWxkcmVuKCcuUGFuZWwnKTtcblx0XHRjb25zdCAkcGFuZWxDb250YWluZXIgPSAkcGFuZWwuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpO1xuXHRcdGNvbnN0ICRwYW5lbEJhY2tncm91bmQgPSAkcGFuZWwuY2hpbGRyZW4oJy5QYW5lbEJhY2tncm91bmQnKTtcblxuXHRcdGlmICghdGhpcy5pc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuXG5cdFx0XHQkcGFuZWwuc2hvdygpO1xuXHRcdFx0JHBhbmVsQ29udGFpbmVyLnNsaWRlRG93bigyMDApO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGp1c3REcmFnZ2VkICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlmIChqdXN0RHJhZ2dlZCA9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0JCgnLlBhbmVsQnlJZE5ld19QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcGFuZWxMZWZ0KVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MocGFuZWxBcnJvd0NsYXNzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRwYW5lbEJhY2tncm91bmQuZmFkZUluKDgwKTtcblxuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XG5cdFx0XHR9LCA1MCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRwYW5lbENvbnRhaW5lci5zbGlkZVVwKDIwMCk7XG5cblx0XHRcdCRwYW5lbEJhY2tncm91bmQuZmFkZU91dCg4MCwgKCkgPT4ge1xuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XG5cblx0XHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcblx0XHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXG5cdFx0XHRcdCRwYW5lbC5oaWRlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFBvcFVwTWVudSAqL1xuU2FwcGhpcmVXaWRnZXRzLlBvcFVwTWVudSA9IHtcblx0bWVudVBvc2l0aW9uOiBmdW5jdGlvbihpZCwgQ29udGV4dCwgTG9jYWxlKSB7XG5cdFx0LyogSGlkZSBhbnkgb3RoZXIgbWVudXMgb24gcGFnZSBhbmQgc2V0IGJ1dHRvbiBhcyBjb2xsYXBzZWQuICovXG5cdFx0JCgnLnBvcHVwLW1lbnU6dmlzaWJsZScpLmhpZGUoKTtcblxuXHRcdC8vdmFyIF90aGlzID0gJCh0aGlzKTtcblx0XHR2YXIgX3RoaXMgPSAkKCcjJyArIGlkKTtcblx0XHR2YXIgWHggPSAwO1xuXHRcdHZhciBZeSA9IDA7XG5cdFx0dmFyIFd3ID0gMDtcblx0XHR2YXIgSGggPSAwO1xuXG5cdFx0Ly9fdGhpcy5jaGlsZHJlbignLmJ1dHRvbi1leHBhbmQ6dmlzaWJsZScpLmhpZGUoKTtcblxuXHRcdC8qIEdldCB0aGUgbWVudSBlbGVtZW50LiAqL1xuXHRcdHZhciBfZWwgPSBfdGhpcy5uZXh0KCcucG9wdXAtbWVudScpO1xuXG5cdFx0LyogRGlzcGxheSB0aGUgbWVudS4gKi9cblx0XHRfZWwuc2hvdygpO1xuXG5cdFx0LyogU2V0IGJ1dHRvbiBjb2xsYXBzZS4gKi9cblx0XHRfdGhpcy5jaGlsZHJlbignLmJ1dHRvbi1jb2xsYXBzZScpLnNob3coKTtcblxuXHRcdC8qIEdldCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgYnV0dG9uLiAqL1xuXHRcdGJ1dHRvbkhoID0gX3RoaXMub3V0ZXJIZWlnaHQoKTtcblx0XHRidXR0b25XdyA9IF90aGlzLm91dGVyV2lkdGgoKTtcblxuXHRcdHZhciBidXR0b25ZID0gX3RoaXMucG9zaXRpb24oKS50b3AgKyBidXR0b25IaCArIDEwO1xuXHRcdHZhciBidXR0b25YID0gX3RoaXMub2Zmc2V0KCkubGVmdDtcblx0XHQvL3ZhciBidXR0b25YID0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xuXG5cdFx0LyogR2V0IHRoZSBkaXN0YW5jZSBvZiBtZW51IGJ1dHRvbiBhbmQgdGhlIHBhcmVudCBlbGVtZW50ICovXG5cdFx0dmFyIHBvcHVwUGFyZW50WHggPSBfdGhpcy5vZmZzZXQoKS5sZWZ0IC0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xuXG5cdFx0dmFyIHBvcHVwWHggPSBfZWwub2Zmc2V0KCkubGVmdDtcblx0XHR2YXIgcG9wdXBXdyA9IF9lbC5vdXRlcldpZHRoKCk7XG5cblx0XHRYeCA9IE1hdGguYWJzKGJ1dHRvblggLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpIC0gcG9wdXBQYXJlbnRYeCk7XG5cdFx0WXkgPSBNYXRoLmFicyhidXR0b25IaCAtIGJ1dHRvblkgLSAkKCdib2R5Jykuc2Nyb2xsVG9wKCkpO1xuXG5cdFx0aWYgKExvY2FsZSAhPSAnQVInKSB7XG5cdFx0XHQvKiBDaGVjayBpZiBjbGlja2VkIHBvc2l0aW9uIHBsdXMgdGhlIHBvcHVwIHdpZHRoIGV4Y2VlZCB0aGUgd2luZG93IHdpZHRoLiAqL1xuXHRcdFx0aWYgKGJ1dHRvblggKyBwb3B1cFd3IC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSA+ICQoQ29udGV4dCkud2lkdGgoKSkge1xuXHRcdFx0XHRYeCA9IGJ1dHRvblggLSBwb3B1cFd3IC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSAtIHBvcHVwUGFyZW50WHggKyBidXR0b25Xdztcblx0XHRcdFx0Ly9YeCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIHBvcHVwV3cpIC0gJCgnYm9keScpLnNjcm9sbExlZnQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKiBTZXQgbWVudSBwb3NpdGlvbi4gKi9cblx0XHRfZWwuY3NzKHtcblx0XHRcdGxlZnQ6IFh4ICsgJ3B4Jyxcblx0XHRcdHRvcDogYnV0dG9uWSArICdweCcsXG5cdFx0fSk7XG5cblx0XHQvKiBSZWZyZXNoIHZhbHVlICovXG5cdFx0cG9wdXBYeCA9IF9lbC5vZmZzZXQoKS5sZWZ0O1xuXG5cdFx0dmFyIF9iYWxsb29uRWwgPSBfZWwuY2hpbGRyZW4oJy5wb3B1cC1tZW51LWJhbGxvb24nKTtcblxuXHRcdHZhciBfYmFsbG9vblh4ID0gX2JhbGxvb25FbC5vZmZzZXQoKS5sZWZ0O1xuXHRcdHZhciBfYmFsbG9vbld3ID0gX2JhbGxvb25FbC5vdXRlcldpZHRoKCk7XG5cdFx0dmFyIF9iYWxsb29uUG9zWHggPSBNYXRoLmFicyhidXR0b25YIC0gWHggLSBwb3B1cFBhcmVudFh4KTtcblxuXHRcdC8qIElzIHRoZSBiYWxsb29uIGljb24gcG9zaXRpb25lZCBvdXQgb2YgdGhlIHBvcHVwIG1lbnU/ICovXG5cdFx0aWYgKF9iYWxsb29uUG9zWHggKyBYeCArIF9iYWxsb29uV3cgPiBYeCArIHBvcHVwV3cpIHtcblx0XHRcdF9iYWxsb29uUG9zWHggPSBfYmFsbG9vblBvc1h4IC0gX2JhbGxvb25Xdztcblx0XHR9XG5cblx0XHQvKiBTZXQgcG9zaXRpb24gb2YgdGhlIGJhbGxvb24gZWZmZWN0LiAqL1xuXHRcdF9iYWxsb29uRWwuY3NzKCdsZWZ0JywgX2JhbGxvb25Qb3NYeCArICdweCcpO1xuXHR9LFxuXHRtZW51RXZlbnRzOiBmdW5jdGlvbihDb250ZXh0LCBMb2NhbGUpIHtcblx0XHQkKCcucG9wdXAtYnV0dG9uJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcFVwTWVudS5tZW51UG9zaXRpb24oaWQsIENvbnRleHQsIExvY2FsZSk7XG5cblx0XHRcdFx0LyplLnN0b3BQcm9wYWdhdGlvbigpOyovXG5cblx0XHRcdFx0LyogUHJldmVudCBsaW5rIHN1Ym1pc3Npb24gKi9cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHQvKiB2ICoqKiBIaWRlIHBvcHVwIHdoZW4gY2xpY2sgb3V0c2lkZSAqKiogdiAqL1xuXHRcdGZ1bmN0aW9uIFBNQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdC8qaWYgKCh0YXJnZXQucGFyZW50cygpLmluZGV4KCQoJ2Fbc2FwcGhpcmVob3NwaXRhbF0sIC5Ib3NwaXRhbFBvcFVwJykpID09IC0xKSkge30qL1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFxuXHRcdFx0XHRcdFx0Jy5wb3B1cC1idXR0b24sIC5wb3B1cC1tZW51LCAub3MtaW50ZXJuYWwtdWktYXV0b2NvbXBsZXRlLCAub3MtaW50ZXJuYWwtdWktbWVudS1pdGVtLCAub3MtaW50ZXJuYWwtdWktY29ybmVyLWFsbCwgdWktYXV0b2NvbXBsZXRlLWl0ZW0nXG5cdFx0XHRcdFx0KS5sZW5ndGhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0JCgnLnBvcHVwLW1lbnU6dmlzaWJsZScpLmhpZGUoKTtcblx0XHRcdFx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlOnZpc2libGUnKS5oaWRlKCk7XG5cdFx0XHRcdFx0Ly8kKCcuYnV0dG9uLWV4cGFuZCcpLnNob3coKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBfUE1Jc0RyYWcgPSBmYWxzZTtcblx0XHR2YXIgX1BNSXNDbGljayA9IGZhbHNlO1xuXHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xuXHRcdFx0X1BNSXNDbGljayA9IHRydWU7XG5cdFx0fSk7XG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRfUE1Jc0RyYWcgPSB0cnVlO1xuXHRcdH0pO1xuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRQTUNsaWNrT3V0c2lkZShldmVudCk7XG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcblx0XHRcdF9QTUlzQ2xpY2sgPSBmYWxzZTtcblx0XHR9KTtcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0aWYgKCFfUE1Jc0RyYWcgJiYgX1BNSXNDbGljaykge1xuXHRcdFx0XHRQTUNsaWNrT3V0c2lkZShldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcblx0XHRcdF9QTUlzQ2xpY2sgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdCQoJy5idXR0b24tY29sbGFwc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0JCgnYm9keScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSk7XG5cdFx0LyogXiAqKiogSGlkZSBwb3B1cCB3aGVuIGNsaWNrIG91dHNpZGUgKioqIF4gKi9cblx0fSxcbn07XG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVQYW5lbCAqL1xuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwgPSB7XG5cdGNoZWNrT3BlblBhbmVsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpICYmICQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHR9LFxuXG5cdHRvZ2dsZVNhcHBoaXJlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwuY2hlY2tPcGVuUGFuZWwoKSkge1xuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xuXHRcdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlSW4oMTQwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnIycgKyBQYW5lbElkKVxuXHRcdFx0XHRcdC5maW5kKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXInKVxuXHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VTYXBwaGlyZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0LmZpbmQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcblx0XHQkKCcuUGFuZWxbcGFuZWwtdHJpZ2dlci1lbGVtZW50aWRdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGlzX3BhbmVsID0gJCh0aGlzKTtcblx0XHRcdCQoJyMnICsgdGhpc19wYW5lbC5hdHRyKCdwYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnRvZ2dsZVNhcHBoaXJlUGFuZWwodGhpc19wYW5lbC5hdHRyKCdpZCcpKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcblxuXHRpZiAob3NBamF4QmFja2VuZC5FdmVudEhhbmRsZXJzLkFmdGVyQWpheFJlcXVlc3QudG9TdHJpbmcoKS5pbmRleE9mKCdzZXRQYW5lbEJlaGF2aW9yJykgPT0gLTEpIHtcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IpO1xuXHR9XG59KTtcbiIsInJlcXVpcmUoJy4vY29uZmlybWF0aW9uLXBhbmVsJyk7XG5yZXF1aXJlKCcuL21vZGFsLXBvcHVwJyk7XG5yZXF1aXJlKCcuL3BhbmVsLWJ5LWlkJyk7XG5yZXF1aXJlKCcuL3BvcHVwLW1lbnUnKTtcbnJlcXVpcmUoJy4vc2FwcGhpcmUtcGFuZWwnKTtcbiIsIi8qIENvbXBvbmVudCBQYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpLmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScpO1xuXHRcdGNvbnN0ICRsaXN0UXVldWVXcmFwcGVyID0gJHdpZGdldC5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmVfX0xpc3RRdWV1ZXMnKTtcblx0XHRjb25zdCAkZHJvcGRvd24gPSAkbGlzdFF1ZXVlV3JhcHBlci5maW5kKCcuSW5saW5lRHJvcGRvd25fbGFiZWwnKTtcblxuXHRcdCRsaXN0UXVldWVXcmFwcGVyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGlmICghJGRyb3Bkb3duLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCR3aWRnZXQudG9nZ2xlQ2xhc3MoJ1BhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlLS1hY3RpdmUnKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJywgKCkgPT4ge1xuXHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdQYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZS0tYWN0aXZlJyk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignY2xpY2suUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBQYXRpZW50Q2FsbENhbmNlbCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xuXHRcdGNvbnN0ICRjb3VudGRvd24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWNvdW50ZXJdJyk7XG5cdFx0bGV0ICRjYWxsQnV0dG9uID0gJHdpZGdldC5maW5kKCdbdWk9ZGF0YS1idXR0b24tY2FsbF0nKTtcblx0XHRsZXQgJGNhbmNlbEJ1dHRvbiA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtYnV0dG9uLWNhbmNlbF0nKTtcblx0XHRjb25zdCAkb3RoZXJDb250ZW50ID0gJHdpZGdldC5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxfX090aGVyJyk7XG5cblx0XHRsZXQgaW50ZXJ2YWw7XG5cdFx0bGV0IHRpbWVDb3VudGVyO1xuXG5cdFx0Y29uc3QgY2FsbFBhdGllbnQgPSBmdW5jdGlvbigkd2lkZ2V0KSB7XG5cdFx0XHR0b2dnbGVDYWxsaW5nU3RhdGUoKTtcblxuXHRcdFx0aWYgKGNvbmZpZy5zaG93Q291bnRkb3duKSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbiArICcgJyArIGNvbmZpZy50aW1lVG9DYW5jZWwpO1xuXHRcdFx0ZWxzZSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbik7XG5cblx0XHRcdHN0YXJ0Q291bnRlcigpO1xuXHRcdH07XG5cblx0XHRjb25zdCB0b2dnbGVDYWxsaW5nU3RhdGUgPSAoKSA9PiB7XG5cdFx0XHQkd2lkZ2V0LnRvZ2dsZUNsYXNzKCdDYWxsaW5nUGF0aWVudCcpO1xuXHRcdFx0JGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsUGF0aWVudCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHNldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ0NhbGxpbmdQYXRpZW50Jyk7XG5cdFx0XHQkY2FsbEJ1dHRvbi5zaG93KCk7XG5cdFx0XHQkb3RoZXJDb250ZW50LnNob3coKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc3RhcnRDb3VudGVyID0gKCkgPT4ge1xuXHRcdFx0dGltZUNvdW50ZXIgPSBjb25maWcudGltZVRvQ2FuY2VsO1xuXHRcdFx0aW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRlciwgMTAwMCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAoKSA9PiB7XG5cdFx0XHR0aW1lQ291bnRlci0tO1xuXG5cdFx0XHRpZiAodGltZUNvdW50ZXIgPT09IDApIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KGNvbmZpZy5wYXRpZW50Q2FsbEZha2VOb3RpZnlJZCwgJycpO1xuXG5cdFx0XHRcdHNldEluaXRpYWxTdGF0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLnNob3dDb3VudGRvd24pICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luICsgJyAnICsgdGltZUNvdW50ZXIpO1xuXHRcdFx0ZWxzZSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbik7XG5cdFx0fTtcblxuXHRcdGlmIChjb25maWcuc3RhcnRDb3VudGluZykgY2FsbFBhdGllbnQoJHdpZGdldCk7XG5cblx0XHQkY2FsbEJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAoJHdpZGdldC5oYXNDbGFzcygnQ2FsbGluZ1BhdGllbnQnKSkgcmV0dXJuO1xuXG5cdFx0XHRjYWxsUGF0aWVudCgkd2lkZ2V0KTtcblxuXHRcdFx0JGNhbGxCdXR0b24uaGlkZSgpO1xuXHRcdFx0JG90aGVyQ29udGVudC5oaWRlKCk7XG5cdFx0fSk7XG5cblx0XHQkY2FuY2VsQnV0dG9uLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdHRpbWVDb3VudGVyID0gY29uZmlnLnRpbWVUb0NhbmNlbDtcblx0XHRcdCRjb3VudGRvd24udGV4dCh0aW1lQ291bnRlcik7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblxuXHRcdFx0dG9nZ2xlQ2FsbGluZ1N0YXRlKCk7XG5cblx0XHRcdCRjYWxsQnV0dG9uLnNob3coKTtcblx0XHRcdCRvdGhlckNvbnRlbnQuc2hvdygpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QYXRpZW50Q2FsbENhbmNlbCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uQ2FyZCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlByZXNjcmlwdGlvbkNhcmRgKTtcblxuXHRcdGlmIChjb25maWcuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHRjb25zdCAkZXhwYW5kTGluayA9ICRjb21wb25lbnQuZmluZCgnLlByZXNjcmlwdGlvbkNhcmRfX0V4cGFuZEljb24nKTtcblxuXHRcdFx0JGV4cGFuZExpbmsuY2xpY2soKCkgPT4ge1xuXHRcdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdQcmVzY3JpcHRpb25DYXJkLS1leHBhbmRlZCcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25DYXJkID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFByZXNjcmlwdGlvbkV4cGFuZGFibGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBQcmVzY3JpcHRpb25FeHBhbmRhYmxlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Y29uc3Qgd2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdFx0Y29uc3QgcHJldmlld3N0YXQgPSBbXTtcblxuXHRcdGNvbnN0ICRlbGVtZW50V3JhcHBlciA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblxuXHRcdGNvbnN0IGNsaWNrRXZlbnRzID0gb2IgPT4ge1xuXHRcdFx0aWYgKCQob2IpLmhhc0NsYXNzKCdQcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcl9fTGlua3NEaXYnKSkge1xuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5wYXJlbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfY29udGVudCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcblxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xuXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoaXMuaW5pdCA9ICgpID0+IHtcblx0XHRcdGNvbnN0ICRoZWFkZXIgPSAkZWxlbWVudFdyYXBwZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyJyk7XG5cdFx0XHRjb25zdCAkbGlua3MgPSAkaGVhZGVyLmZpbmQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcl9fTGlua3NEaXYnKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIGFycmF5IHN0YXRcblx0XHRcdCQoJy5TZWN0aW9uUHJlc2NyaXB0aW9uRXhwYW5kYWJsZUFyZWEnKS5lYWNoKCgpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhdCA9ICRoZWFkZXIuaGFzQ2xhc3MoJ2V4cGFuZGVkJykgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHByZXZpZXdzdGF0W3dpZGdldElkXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoJGhlYWRlci5oYXNDbGFzcygnTm90RXhwYW5kYWJsZScpKSB7XG5cdFx0XHRcdCRoZWFkZXIub24oJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXHRcdFx0fSBlbHNlIGlmICgkaGVhZGVyLmhhc0NsYXNzKCdpc0xpbmtFcGFuZGFibGVDbGljaycpKSB7XG5cdFx0XHRcdCRsaW5rcy5vbignY2xpY2snLCBlID0+IGNsaWNrRXZlbnRzKCRsaW5rcykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGhlYWRlci5vbignY2xpY2snLCBlID0+IGNsaWNrRXZlbnRzKCRoZWFkZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZWxlbWVudHMgPVxuXHRcdFx0XHQnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGlucHV0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgc2VsZWN0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgYSc7XG5cdFx0XHQkKGVsZW1lbnRzKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoYWpheFJlZnJlc2gpO1xuXHRcdH07XG5cblx0XHRjb25zdCBhamF4UmVmcmVzaCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQvLyQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcicpLm9mZigpO1xuXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxuXHRcdFx0JChcblx0XHRcdFx0Jy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBpbnB1dCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIHNlbGVjdCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGEnXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXG5cdFx0XHQkKCcuU2VjdGlvblByZXNjcmlwdGlvbkV4cGFuZGFibGVBcmVhJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50Jylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IHRydWUgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgZXhwYW5kYWJsZSA9IG5ldyBQcmVzY3JpcHRpb25FeHBhbmRhYmxlKGNvbmZpZyk7XG5cblx0XHRleHBhbmRhYmxlLmluaXQoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZUhlYWRlciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2FwcGhpcmVIZWFkZXIoY29uZmlnKTtcblx0XHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdH07XG5cblx0dmFyIGhhbmRsZURlbW9ncmFwaGljcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xuXHR9O1xuXG5cdHZhciBTYXBwaGlyZUhlYWRlciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy5pc0NvbmZpZGVudGlhbCA9IGNvbmZpZy5pc0NvbmZpZGVudGlhbDtcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXInKTtcblx0XHR0aGlzLiRuYXZpZ2F0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1uYXZpZ2F0aW9uJyk7XG5cdFx0dGhpcy4kaWRlbnRpZmljYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWlkZW50aWZpY2F0aW9uJyk7XG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpO1xuXHRcdHRoaXMuJGluZm9ybWF0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1pbmZvcm1hdGlvbicpO1xuXHRcdHRoaXMuJGFjdGlvbnMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFjdGlvbnMnKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC10cmlnZ2VyJyk7XG5cdFx0dGhpcy4kYWRkaXRpb25hbENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFkZGl0aW9uYWwtY29udGVudCcpO1xuXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUoKTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuJGluZm9ybWF0aW9uLnRleHQoKSA9PT0gJycpIHtcblx0XHRcdHRoaXMuJGluZm9ybWF0aW9uLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZztcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoX3RoaXMuJGhlYWRlci5oYXNDbGFzcygnaXNPcGVuJykpIHtcblx0XHRcdFx0X3RoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0XHRcdC8vJCgnLkxheW91dEJhc2UtaGVhZGVyJykuY3NzKCd6LWluZGV4JywgMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdGhpcy4kaGVhZGVyLmFkZENsYXNzKCdpc09wZW4nKTtcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGRlbW9ncmFwaGljLmZpbmQoJy5EZW1vZ3JhcGhpYy1pdGVtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLmhpZGUoKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0bGV0IGl0ZW1zVG90YWwgPSAwO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50V2lkdGggPSB0aGlzLiR3aWRnZXQub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRjb25zdCBuYXZpZ2F0aW9uV2lkdGggPSB0aGlzLiRuYXZpZ2F0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgaWRlbnRpZmljYXRpb25XaWR0aCA9IHRoaXMuJGlkZW50aWZpY2F0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNzV2lkdGggPSB0aGlzLiRkZW1vZ3JhcGhpYy53aWR0aCgpO1xuXHRcdGNvbnN0IGluZm9ybWF0aW9uV2lkdGggPSB0aGlzLiRpbmZvcm1hdGlvbi53aWR0aCgpO1xuXHRcdGNvbnN0IGFjdGlvbnNXaWR0aCA9IHRoaXMuJGFjdGlvbnMud2lkdGgoKTtcblxuXHRcdHRoaXMuJGRlbW9ncmFwaGljLmZpbmQoJy5EZW1vZ3JhcGhpYy1pdGVtJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0aXRlbXNUb3RhbCArPSBwYXJzZUludCgkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSksIDEwKTtcblxuXHRcdFx0Ly8gNjQgLT4gbWFyZ2lucyBhbmQgOTkgLT4gTW9yZSBJbmZvIGJ1dHRvblxuXHRcdFx0aWYgKGl0ZW1zVG90YWwgKyA2NCArIDExMCA8IGRlbW9ncmFwaGljV2lkdGgpIHtcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG5cdFx0XHRcdFx0LmFwcGVuZFRvKF90aGlzLiRhZGRpdGlvbmFsQ29udGVudCk7XG5cdFx0XHRcdF90aGlzLiRhZGRpdGlvbmFsVHJpZ2dlci5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy4kYWRkaXRpb25hbENvbnRlbnQuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5zaG93QWRkaXRpb25hbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oaWRlQWRkaXRpb25hbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzT3BlbicpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlciA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRoYW5kbGVEZW1vZ3JhcGhpY3M6IGhhbmRsZURlbW9ncmFwaGljcyxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcblxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdGlmICghIVNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xuXHR9XG5cdGlmICghISQoJy5TYXBwaGlyZUhlYWRlci1kZW1vZ3JhcGhpY3MnKS5sZW5ndGgpIHtcblx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkXS5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcblx0XHRcdH0pO1xuXHR9XG59KTtcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZVBvcHVwICovXG52YXIgUmljaFdpZGdldHNfUG9wdXBfRWRpdG9yX25vdGlmeVdpZGdldDtcblxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdC8vIENoZWNrIGlmIHRoZSB3aWRnZXQgaXMgbG9hZGVkIGluc2lkZSBhbiBpRnJhbWVcblx0bGV0IGlzSW5zaWRlSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XG5cblx0Ly8gQ29uc3RhbnRzXG5cdGNvbnN0IFBPUFVQX0lOSVRJQUxfV0lEVEggPSAzMDA7XG5cdGNvbnN0IFBPUFVQX0lOSVRJQUxfSEVJR0hUID0gMTAwO1xuXHRjb25zdCBQT1BVUF9XSU5ET1dfSU5ERVggPSA0MDEwO1xuXHRjb25zdCBQT1BVUF9DTE9TSU5HX1RBRyA9ICdjbG9zaW5nJztcblx0Y29uc3QgUE9QVVBfQ0xPU0lOR19WQUxVRSA9ICd0cnVlJztcblxuXHRsZXQgUE9QVVBfTk9USUZZX1dJREdFVDtcblx0bGV0IFBPUFVQX1BBUkVOVF9VUkw7XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRpZiAoY29uZmlnLmlnbm9yZUlmcmFtZSkgaXNJbnNpZGVJZnJhbWUgPSBmYWxzZTtcblxuXHRcdCQoKS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdFx0XHRjb25zdCBfaWQgPSBjb25maWcubGlua0lkO1xuXHRcdFx0Y29uc3QgbGlua1F1ZXJ5ID0gYCMke2NvbmZpZy5saW5rSWR9YDtcblx0XHRcdGxldCBsaW5rV2lkZ2V0O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsaW5rV2lkZ2V0ID0gJChsaW5rUXVlcnkpLmdldCgwKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdGlmICh0eXBlb2YgbGlua1dpZGdldCA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHQvL0Nhc2UgdGhlIHdpZGdldCBpcyBpbmV4aXN0ZW50IG9yIGludmlzaWJsZSwgaXQgd2lsbCBzaG93IG5vIGVycm9ycy5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRQT1BVUF9QQVJFTlRfVVJMID0gY29uZmlnLnBhcmVudFVybDtcblxuXHRcdFx0Y29uc3QgbGlua1Jlc3VsdCA9IGdldExpbmtIUkVGKGxpbmtXaWRnZXQpO1xuXHRcdFx0Y29uc3QgbGlua0hyZWYgPSBsaW5rUmVzdWx0WzBdO1xuXHRcdFx0Y29uc3QgaXNBQnV0dG9uID0gbGlua1Jlc3VsdFsxXTtcblxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rSHJlZiA9PSAndW5kZWZpbmVkJyB8fCBsaW5rSHJlZiA9PSAnJyB8fCBsaW5rSHJlZiA9PSAnIycgfHwgbGlua0hyZWYuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0d2luZG93Lk9zSGFuZGxlRXhjZXB0aW9uKFxuXHRcdFx0XHRcdFx0bmV3IEVycm9yKCdQb3B1cCBsaW5rIGlkIG11c3QgYmUgdGhlIGlkIG9mIGEgTGluayBvciBCdXR0b24gV2lkZ2V0IHdpdGggTWV0aG9kIE5hdmlnYXRlLicpLFxuXHRcdFx0XHRcdFx0b3V0c3lzdGVtcy5vc0Vycm9yQ29kZXMuU3lzdGVtSmF2YXNjcmlwdEVycm9yLFxuXHRcdFx0XHRcdFx0J1BvcHVwX0VkaXRvcidcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBleGlzdGluZyBvbi1jbGljayBldmVudFxuXHRcdFx0aWYgKGlzQUJ1dHRvbikge1xuXHRcdFx0XHRsaW5rV2lkZ2V0LnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0bGlua1dpZGdldFxuXHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3dpbmRvdy5sb2NhdGlvbi5ocmVmPScsICdyZXR1cm4gZmFsc2U7d2luZG93LmxvY2F0aW9uLmhyZWY9Jylcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIGNvbmZpcm1hdGlvbiBtZXNzYWdlLCBzdG9yZSBpbiBhbiBhdHRyaWJ1dGUgdGhlIHJlc3VsdFxuXHRcdFx0aWYgKGxpbmtXaWRnZXQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJykgIT0gbnVsbCkge1xuXHRcdFx0XHRsaW5rV2lkZ2V0LnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0bGlua1dpZGdldFxuXHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdCdpZiggcmV0ICE9IHRydWUgKScsXG5cdFx0XHRcdFx0XHRcdFwiJCgnXCIgKyBsaW5rUXVlcnkgKyBcIicpLmdldCgwKS5zZXRBdHRyaWJ1dGUoJ2NvbmZpcm1lZCcsIHJldCk7IGlmKCByZXQgIT0gdHJ1ZSApXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0Ly8gVGhlIGNsaWNrSGFuZGxlciBldmVudCBpcyByZWdpc3RlcmVkIGluIG9zanMgYW5kICQgZm9yIGNvbXBhdGliaWxsaXR5IHJlYXNvbnMsIHRoZXkgbXVzdCBub3QgcnVuIGJvdGggZm9yIHRoZSBzYW1lIGNsaWNrLlxuXHRcdFx0XHQvLyBWYXJpYWJsZSBpcyBzZXQgdG8gZmFsc2UgaW4gcmVzaXplIGZ1bmN0aW9uLlxuXHRcdFx0XHRpZiAoJC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnKSA9PSB0cnVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgY2xpY2tlZCBsaW5rIGlzIGRpc2FibGVkXG5cdFx0XHRcdGlmIChsaW5rV2lkZ2V0LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIGxpbmtEaXNhYmxlZCA9IGxpbmtXaWRnZXRcblx0XHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHRcdGlmIChsaW5rRGlzYWJsZWQgPT0gJ2Rpc2FibGVkJyB8fCBsaW5rRGlzYWJsZWQuaW5kZXhPZigndHJ1ZScpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGxpbmtXaWRnZXQuZ2V0QXR0cmlidXRlKCdjb25maXJtZWQnKSA9PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmIChPc0lzSUUoKSkgb3NGb2N1c0JhY2tlbmQuQ2xlYXJGb2N1c2VkRWxlbWVudCgpO1xuXG5cdFx0XHRcdGxldCBwb3B1cERpdjtcblx0XHRcdFx0bGV0IHBsZWFzZVdhaXREaXY7XG5cblx0XHRcdFx0Y29uc3Qgd2FpdFRleHQgPSBgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDM2cHg7XCI+JHtjb25maWcubG9hZGluZ01lc3NhZ2V9PC9kaXY+YDtcblx0XHRcdFx0Y29uc3QgaW1nSFRNTCA9ICc8ZGl2IGNsYXNzPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjwvZGl2Pic7XG5cdFx0XHRcdGNvbnN0IGxvYWRpbmdFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJMYXlvdXRQb3B1cC1sb2FkaW5nXCI+JHtpbWdIVE1MfSAke3dhaXRUZXh0fTwvZGl2PmA7XG5cdFx0XHRcdGNvbnN0IGlGcmFtZUVsZW1lbnQgPSBgPGlmcmFtZSBpZD1cImlmcmFtZV8ke19pZH1cIiB3aWR0aD1cIjEwMCVcIiBzY3JvbGxpbmc9XCJub1wiIGhlaWdodD1cIjEwMCVcIiBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIvPmA7XG5cblx0XHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdFx0bGV0IF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRcdFx0XHRfZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBub25lOycpO1xuXHRcdFx0XHRcdF9kaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3aW5kb3dfJyArIF9pZCk7XG5cdFx0XHRcdFx0d2luZG93LnRvcC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9kaXYpO1xuXG5cdFx0XHRcdFx0cG9wdXBEaXYgPSB3aW5kb3cudG9wLiQoJyN3aW5kb3dfJyArIF9pZCk7XG5cdFx0XHRcdFx0cG9wdXBEaXYuYXBwZW5kKGlGcmFtZUVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IHBvcHVwRGl2LnByZXBlbmQobG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBvcHVwRGl2ID0gJChcIjxkaXYgc3R5bGU9J3RleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogbm9uZTsnPjwvZGl2PlwiKS5hcHBlbmRUbygnYm9keScpO1xuXHRcdFx0XHRcdHBvcHVwRGl2LmFwcGVuZChpRnJhbWVFbGVtZW50KTtcblxuXHRcdFx0XHRcdHBsZWFzZVdhaXREaXYgPSBwb3B1cERpdi5wcmVwZW5kKGxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGxvYWRUYXJnZXRQYWdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLlBPUFVQX05PVElGWV9XSURHRVQgPSBjb25maWcubm90aWZ5SWQ7XG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGlmcmFtZSBvYmplY3Qgb24gdGhlIGRvY3VtZW50IHBhcmVudFxuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAgPSB3aW5kb3cuZnJhbWVFbGVtZW50LmNvbnRlbnRXaW5kb3c7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwID0gd2luZG93O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFBPUFVQX05PVElGWV9XSURHRVQgPSBjb25maWcubm90aWZ5SWQ7XG5cdFx0XHRcdFx0UmljaFdpZGdldHNfUG9wdXBfRWRpdG9yX25vdGlmeVdpZGdldCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cC5SaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0ID0gY29uZmlnLm5vdGlmeUlkO1xuXG5cdFx0XHRcdFx0Ly8gTG9hZCB0YXJnZXQgcGFnZVxuXHRcdFx0XHRcdGNvbnN0IG9ocmVmID0gZ2V0TGlua0hSRUYobGlua1dpZGdldClbMF07XG5cdFx0XHRcdFx0Y29uc3QgcmhyZWYgPSBvaHJlZi5yZXBsYWNlKC8oXFw/fCYpXz0uKj8oJnwkKS8sICckMV89JyArICtuZXcgRGF0ZSgpLm5vdyArICckMicpO1xuXHRcdFx0XHRcdGNvbnN0IHhocmVmID0gcmhyZWYgKyAocmhyZWYgPT0gb2hyZWYgPyAocmhyZWYuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ189JyArICtuZXcgRGF0ZSgpIDogJycpO1xuXG5cdFx0XHRcdFx0cG9wdXBEaXYuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgeGhyZWYpO1xuXG5cdFx0XHRcdFx0KGZ1bmN0aW9uKHBvcHVwRGl2KSB7XG5cdFx0XHRcdFx0XHRwb3B1cERpdi5maW5kKCdpZnJhbWUnKS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQvLyBBZnRlciBsb2FkaW5nIHRyeSB0byByZXNpemVcblx0XHRcdFx0XHRcdFx0cmVzaXplKHBvcHVwRGl2LCBfaWQsIGNvbmZpZy5zZXRXaWR0aCwgY29uZmlnLnNldEhlaWdodCwgdHJ1ZSwgZXZlbnQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkocG9wdXBEaXYpO1xuXG5cdFx0XHRcdFx0cG9wdXBEaXYgPSBudWxsO1xuXHRcdFx0XHRcdHBsZWFzZVdhaXREaXYgPSBudWxsO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdG9wZW5Qb3B1cChwb3B1cERpdiwgcGxlYXNlV2FpdERpdiwgbG9hZFRhcmdldFBhZ2UsIGV2ZW50LCBjb25maWcpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cblx0XHRcdCQobGlua1F1ZXJ5KS5jbGljayhjbGlja0hhbmRsZXIpO1xuXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5wb3B1cFdpZHRoID0gY29uZmlnLnNldFdpZHRoIHx8IFBPUFVQX0lOSVRJQUxfV0lEVEg7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVzaXplID0gKGRpdlRvUG9wdXAsIF9pZCwgc2V0V2lkdGgsIHNldEhlaWdodCwgcmVjZW50ZXIsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gQ29kZSB0byBzdXBwb3J0IG9sZCByZXNpemUgbWV0aG9kIFBvcHVwX1dpbmRvd19yZXNpemUoc2V0V2lkdGgsIHNldEhlaWdodCwgcmVjZW50ZXIpXG5cdFx0aWYgKHR5cGVvZiByZWNlbnRlciA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmVjZW50ZXIgPSBzZXRIZWlnaHQ7XG5cdFx0XHRzZXRIZWlnaHQgPSBzZXRXaWR0aDtcblx0XHRcdHNldFdpZHRoID0gZGl2VG9Qb3B1cDtcblxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdGRpdlRvUG9wdXAgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGl2VG9Qb3B1cCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlc2l6ZSBtdXN0IGJhaWwgb3V0IGltbWVkaWF0ZWx5IGlmIHRoZSBwb3B1cCBpcyBtYXJrZWQgYXMgY2xvc2luZywgYW5kIG5vdCBzdGFydCB0aGUgYW5pbWF0aW9uLlxuXHRcdGlmICgkLmRhdGEoZGl2VG9Qb3B1cC5nZXQoMCksIFBPUFVQX0NMT1NJTkdfVEFHKSA9PSBQT1BVUF9DTE9TSU5HX1ZBTFVFKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0bGV0IGRvY3VtZW50U2VydmVyO1xuXHRcdGxldCBmcmFtZU9iaiA9IGRpdlRvUG9wdXAuZmluZCgnaWZyYW1lJylbMF07XG5cblx0XHRpZiAodHlwZW9mIGZyYW1lT2JqID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRmcmFtZU9iaiA9IHdpbmRvdy50b3AuJCgnI2lmcmFtZV8nICsgX2lkKVswXTtcblx0XHR9XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdGRvY3VtZW50U2VydmVyID0gd2luZG93LnRvcC5kb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXC9dKikuKi8sICckMScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudFNlcnZlciA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcL10qKS4qLywgJyQxJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBmcmFtZU9iaiAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc3QgZnJhbWVTZXJ2ZXIgPSBmcmFtZU9iai5zcmMucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcL10qKS4qLywgJyQxJyk7XG5cdFx0XHRjb25zdCBzYW1lT3JpZ2luID0gZnJhbWVTZXJ2ZXIudG9Mb3dlckNhc2UoKSA9PSBkb2N1bWVudFNlcnZlci50b0xvd2VyQ2FzZSgpIHx8IGZyYW1lU2VydmVyLmluZGV4T2YoJ2h0dHAnKSAhPSAwO1xuXG5cdFx0XHRpZiAoIXNhbWVPcmlnaW4gJiYgKHNldFdpZHRoID09IC0xIHx8IHNldEhlaWdodCA9PSAtMSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBIFBvcHVwIHdpdGggYSBzY3JlZW4gZnJvbSBhIGRpZmZlcmVudCBzZXJ2ZXIgKG9yIGh0dHBzKSBuZWVkcyBleHBsaWNpY3Qgd2lkdGgsIGhlaWdodCBzZXQuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzYW1lT3JpZ2luKSB7XG5cdFx0XHRcdGlmIChmcmFtZU9iai5jb250ZW50RG9jdW1lbnQgIT09IG51bGwgfHwgZnJhbWVPYmouY29udGVudFdpbmRvdyAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHZhciBpbm5lckRvYyA9IGZyYW1lT2JqLmNvbnRlbnREb2N1bWVudCA/IGZyYW1lT2JqLmNvbnRlbnREb2N1bWVudCA6IGZyYW1lT2JqLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRcdFx0aWYgKGlubmVyRG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgPT0gMClcblx0XHRcdFx0XHRcdC8vIFN0cmFuZ2VseSB0aGlzIGV2ZW50IGlzIGFsc28gdHJpZ2dlcmVkIG9uIGNsb3NlXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IG9sZEhlaWdodDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRvbGRIZWlnaHQgPSB3aW5kb3cudG9wXG5cdFx0XHRcdFx0LiQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHQucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJylcblx0XHRcdFx0XHQub3V0ZXJIZWlnaHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9sZEhlaWdodCA9ICQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHQucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJylcblx0XHRcdFx0XHQub3V0ZXJIZWlnaHQoKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHdpZHRoID0gc2V0V2lkdGggPT0gLTEgPyAkKGlubmVyRG9jKS53aWR0aCgpIDogc2V0V2lkdGg7XG5cdFx0XHRsZXQgaGVpZ2h0ID0gc2V0SGVpZ2h0ID09IC0xID8gJChpbm5lckRvYykuaGVpZ2h0KCkgOiBzZXRIZWlnaHQ7XG5cblx0XHRcdHZhciB0aXRsZUhlaWdodDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR0aXRsZUhlaWdodCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhcicpLmhlaWdodCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGl0bGVIZWlnaHQgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuaGVpZ2h0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFZlcmlmeSBpZiB0aGUgcGFyZW50IHdpbmRvdyB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHBvcC11cCB3aW5kb3csIGlmIHNvIHNldCB0aGUgcmVzcG9uc2l2ZSBjbGFzcyBvbiB0aGUgaWZyYW1lIGJvZHkgKGZvciByZXNwb25zaXZlIHRoZW1lcylcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHdpZHRoKSB7XG5cdFx0XHRcdC8vIG9ubHkgc2V0IHRoZSBjbGFzcyBpZiB0aGUgb3JpZ2luIGlzIHRoZSBzYW1lXG5cdFx0XHRcdGlmIChzYW1lT3JpZ2luKSB7XG5cdFx0XHRcdFx0JChpbm5lckRvYylcblx0XHRcdFx0XHRcdC5maW5kKCdib2R5Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnUmVzcG9uc2l2ZScpO1xuXHRcdFx0XHRcdHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAyMDsgLy8gMTBweCBcInBhZGRpbmdcIiBlZmZlY3QsIHRvIGtlZXAgdGhlIHBvcHVwIGxvb2sgYW5kIGZlZWwgb24gdG9wIG9mIGNvbnRlbnRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggaXNzdWVzIHdpdGggc2Nyb2xsYmFyc1xuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSkge1xuXHRcdFx0XHQvLyBJRTcgbmVlZHMgYSBsaXR0bGUgbW9yZSBzcGFjZSB0byByZW1vdmUgdGhlIHNjcm9sbGJhcnNcblx0XHRcdFx0aWYgKCQuYnJvd3Nlci5tc2llKSBoZWlnaHQgPSBoZWlnaHQgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly93aGVuIGV4cGxpY2l0bHkgc2V0dGluZyB0aGUgaGVpZ2h0XG5cdFx0XHRcdGlmIChzYW1lT3JpZ2luKSBpbm5lckRvYy5ib2R5LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoZGl2VG9Qb3B1cCkuaGVpZ2h0KGhlaWdodCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vSGlkZSBFQ1Rcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wXG5cdFx0XHRcdFx0LiQoaW5uZXJEb2MpXG5cdFx0XHRcdFx0LmZpbmQoJy5FQ1RfRmVlZGJhY2tDb250YWluZXInKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHZhciBkaXZQb3B1cE91dGVyV2luZG93ID0gd2luZG93LnRvcC4kKGRpdlRvUG9wdXApLnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChpbm5lckRvYylcblx0XHRcdFx0XHQuZmluZCgnLkVDVF9GZWVkYmFja0NvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dmFyIGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSAkKGRpdlRvUG9wdXApLnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYW5pbWF0ZUZpbmFsID0ge307XG5cblx0XHRcdGlmIChzZXRIZWlnaHQgPT0gLTEpIHtcblx0XHRcdFx0dmFyIG9sZFRvcCA9IHBhcnNlSW50KGRpdlBvcHVwT3V0ZXJXaW5kb3cuY3NzKCd0b3AnKSk7XG5cdFx0XHRcdGlmIChyZWNlbnRlcikgYW5pbWF0ZUZpbmFsLnRvcCA9IE1hdGgubWF4KDIwLCBvbGRUb3AgKyAob2xkSGVpZ2h0IC0gKGhlaWdodCArIHRpdGxlSGVpZ2h0KSkgLyAyKTtcblx0XHRcdFx0YW5pbWF0ZUZpbmFsLmhlaWdodCA9IGhlaWdodCArIHRpdGxlSGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2V0V2lkdGggPT0gLTEpIHtcblx0XHRcdFx0dmFyIG9sZExlZnQgPSBwYXJzZUludChkaXZQb3B1cE91dGVyV2luZG93LmNzcygnbGVmdCcpKTtcblx0XHRcdFx0aWYgKHJlY2VudGVyKSBhbmltYXRlRmluYWwubGVmdCA9IG9sZExlZnQgKyAoZGl2UG9wdXBPdXRlcldpbmRvdy53aWR0aCgpIC0gd2lkdGgpIC8gMjtcblx0XHRcdFx0YW5pbWF0ZUZpbmFsLndpZHRoID0gd2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0ZGl2UG9wdXBPdXRlcldpbmRvdy53aWR0aCgpID09IGFuaW1hdGVGaW5hbC53aWR0aCAmJlxuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LmhlaWdodCgpID09IGFuaW1hdGVGaW5hbC5oZWlnaHQgLSAoJC5icm93c2VyLm1zaWUgPyAxIDogMClcblx0XHRcdCkge1xuXHRcdFx0XHQkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQ+LkxheW91dFBvcHVwLWxvYWRpbmcnKS5oaWRlKCk7XG5cdFx0XHRcdCQoZGl2VG9Qb3B1cCkuaGVpZ2h0KGhlaWdodCAtICgkLmJyb3dzZXIubXNpZSA/IDEgOiAwKSk7IC8vIHJlc3RvcmUgc2l6ZVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gbm90aGluZyB0byBkby4uLlxuXHRcdFx0fVxuXG5cdFx0XHQvLyBoaWRlIGNvbnRlbnQgaW4gZmlyc3QgcmVzaXplIC0gcmVhZGp1c3RtZW50cyB3aWxsIG5vdCBmbGlja3Jcblx0XHRcdGlmIChkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgPT0gUE9QVVBfSU5JVElBTF9XSURUSCAmJiBkaXZQb3B1cE91dGVyV2luZG93LmhlaWdodCgpID09IFBPUFVQX0lOSVRJQUxfSEVJR0hUKSB7XG5cdFx0XHRcdCQoZnJhbWVPYmopLmhlaWdodCgwKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9uQW5pbWF0aW9uQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhci1jbG9zZS1uby10aXRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcFxuXHRcdFx0XHRcdFx0XHQuJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnaWZyYW1lJylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgnMTAwJScpXG5cdFx0XHRcdFx0XHRcdC53aWR0aChhbmltYXRlRmluYWwud2lkdGgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlLW5vLXRpdGxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0XHQkKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KCcxMDAlJylcblx0XHRcdFx0XHRcdFx0LndpZHRoKGFuaW1hdGVGaW5hbC53aWR0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAxMyk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgZGl2UGxlYXNlV2FpdDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRkaXZQbGVhc2VXYWl0ID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQ+LkxheW91dFBvcHVwLWxvYWRpbmcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpdlBsZWFzZVdhaXQgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQ+LkxheW91dFBvcHVwLWxvYWRpbmcnKTtcblx0XHRcdH1cblxuXHRcdFx0ZGl2UGxlYXNlV2FpdC5oaWRlKCk7XG5cblx0XHRcdGlmIChzZXRIZWlnaHQgPT0gLTEgfHwgc2V0V2lkdGggPT0gLTEpIHtcblx0XHRcdFx0ZGl2UG9wdXBPdXRlcldpbmRvdy5hbmltYXRlKGFuaW1hdGVGaW5hbCwge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAsXG5cdFx0XHRcdFx0Y29tcGxldGU6IG9uQW5pbWF0aW9uQ29tcGxldGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25BbmltYXRpb25Db21wbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0aW5uZXJEb2MgPSBudWxsO1xuXHRcdFx0ZGl2UG9wdXBPdXRlcldpbmRvdyA9IG51bGw7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuXHRcdGxldCBwb3B1cFRvQ2xvc2U7XG5cdFx0bGV0IHBvcHVwQ29udGFpbmVyO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRwb3B1cFRvQ2xvc2UgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdFx0cG9wdXBDb250YWluZXIgPSB3aW5kb3cudG9wLiQoJy5TYXBwaGlyZVBvcHVwJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvcHVwVG9DbG9zZSA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdFx0cG9wdXBDb250YWluZXIgPSAkKCcuU2FwcGhpcmVQb3B1cCcpO1xuXHRcdH1cblxuXHRcdHBvcHVwVG9DbG9zZS5kYXRhKFBPUFVQX0NMT1NJTkdfVEFHLCBQT1BVUF9DTE9TSU5HX1ZBTFVFKTtcblxuXHRcdC8vc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRpZiAocG9wdXBUb0Nsb3NlLmxlbmd0aCkgcG9wdXBUb0Nsb3NlLmRpYWxvZygnY2xvc2UnKTtcblxuXHRcdHBvcHVwVG9DbG9zZS5yZW1vdmUoKTtcblx0XHRwb3B1cENvbnRhaW5lci5yZW1vdmUoKTtcblx0XHQvL30sIDApO1xuXHR9O1xuXG5cdGNvbnN0IGdldExpbmtIUkVGID0gd2lkZ2V0ID0+IHtcblx0XHRsZXQgbGlua0hyZWY7XG5cdFx0bGV0IGlzQUJ1dHRvbiA9IGZhbHNlO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vQ2hlY2tzIGlmIHRoZSBpZCBpcyBmcm9tIGEgbGluayBvciBub3Rcblx0XHRcdGxpbmtIcmVmID0gJCh3aWRnZXQpLmF0dHIoJ2hyZWYnKTtcblxuXHRcdFx0Ly9UZXN0cyBmb3IgdmlzaWJpbGl0eS9leGlzdGVuY2Vcblx0XHRcdGlmICh0eXBlb2YgbGlua0hyZWYgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Y29uc3Qgb25DbGljayA9IHdpZGdldC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIG9uQ2xpY2sgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRpc0FCdXR0b24gPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYgKG9uQ2xpY2sgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0bGV0IGhyZWZNYXRjaDtcblxuXHRcdFx0XHRcdFx0aWYgKChocmVmTWF0Y2ggPSBvbkNsaWNrLnRvU3RyaW5nKCkubWF0Y2goL2hyZWY9JyhbXiddKiknLykpICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0bGlua0hyZWYgPSBocmVmTWF0Y2hbMV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdHJldHVybiBbbGlua0hyZWYsIGlzQUJ1dHRvbl07XG5cdH07XG5cblx0Y29uc3Qgb3BlblBvcHVwID0gKGRpdlRvUG9wdXAsIGRpdlBsZWFzZVdhaXQsIGxvYWRUYXJnZXRQYWdlLCBldmVudCwgY29uZmlnKSA9PiB7XG5cdFx0Ly8gRGVzdHJveSBhbnkgcHJldmlvdXMgZGlhbG9nXG5cdFx0Y2xvc2UobnVsbCk7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdGNvbnN0ICRqUGFyZW50ID0gd2luZG93LnRvcC4kO1xuXHRcdFx0JGpQYXJlbnQoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdC8vIElmIGFueSBjbG9zZSBpcyBwZW5kaW5nLCBzY2hlZHVsZSB0byBleGVjdXRlIGl0c2VsZiBhc3luY2hyb25vdXNseSBleGl0XG5cdFx0Ly8gSWYgbm8gY2xvc2UgaXMgcGVuZGluZywgY29udGludWUgd2l0aCBvcGVuIG9wZXJhdGlvblxuXHRcdGxldCBjbG9zaW5nUG9wdXBzO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSBjbG9zaW5nUG9wdXBzID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRlbHNlIGNsb3NpbmdQb3B1cHMgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2xvc2luZ1BvcHVwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCQuZGF0YShjbG9zaW5nUG9wdXBzLmdldChpKSwgUE9QVVBfQ0xPU0lOR19UQUcpID09IFBPUFVQX0NMT1NJTkdfVkFMVUUpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRvcGVuUG9wdXAoZGl2VG9Qb3B1cCwgZGl2UGxlYXNlV2FpdCwgbG9hZFRhcmdldFBhZ2UsIGV2ZW50LCBjb25maWcpO1xuXHRcdFx0XHR9LCAxMyk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBfZGlhbG9nO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0cG9wdXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdTYXBwaGlyZVBvcHVwJyk7XG5cblx0XHRcdHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG5cblx0XHRcdF9kaWFsb2cgPSB3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJzxkaXYgY2xhc3M9XCJTYXBwaGlyZVBvcHVwXCI+PC9kaXY+JykuYXBwZW5kVG8oJ2JvZHknKTtcblxuXHRcdFx0X2RpYWxvZyA9ICQoZGl2VG9Qb3B1cCk7XG5cdFx0fVxuXG5cdFx0JChkaXZQbGVhc2VXYWl0KS5zaG93KCk7XG5cblx0XHRpZiAoJCgnLklTaWRlYmFyJykubGVuZ3RoKSB3aW5kb3cucGFyZW50LlNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLm9wZW5TaWRlYmFySWZyYW1lKDApO1xuXG5cdFx0X2RpYWxvZy5zaG93KCkuZGlhbG9nKHtcblx0XHRcdGFwcGVuZFRvOiAnLlNhcHBoaXJlUG9wdXAnLFxuXHRcdFx0ZGlhbG9nQ2xhc3M6ICdvcy1pbnRlcm5hbC1Qb3B1cCcsXG5cdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0YXV0b1Jlc2l6ZTogZmFsc2UsXG5cdFx0XHRjbG9zZU9uRXNjYXBlOiAhY29uZmlnLmhpZGVDbG9zZUJ1dHRvbixcblx0XHRcdGJnaWZyYW1lOiB0cnVlLFxuXHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdGF1dG9PcGVuOiB0cnVlLFxuXHRcdFx0dGl0bGU6IGNvbmZpZy5zZXRUaXRsZSxcblx0XHRcdG1vZGFsOiAhKGNvbmZpZy51c2VNb2RhbCA9PT0gZmFsc2UpLFxuXHRcdFx0aGVpZ2h0OiBjb25maWcuc2V0SGVpZ2h0ID09IC0xID8gUE9QVVBfSU5JVElBTF9IRUlHSFQgOiBjb25maWcuc2V0SGVpZ2h0LFxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxuXHRcdFx0d2lkdGg6IGNvbmZpZy5zZXRXaWR0aCA9PSAtMSA/IFBPUFVQX0lOSVRJQUxfV0lEVEggOiBjb25maWcuc2V0V2lkdGgsXG5cdFx0XHR6SW5kZXg6IFBPUFVQX1dJTkRPV19JTkRFWCxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gSWYgdGhlIHBvcHVwIGlzIGNsb3NlZCBiZWZvcmUgaXQgaXMgcmVzaXplZCAoRVNDKSB3ZSBuZWVkIHRvIHNldCB0aGUgcHJvY2Vzc2luZyBldmVudCB0byBmYWxzZS5cblx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cblx0XHRcdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS51bmJpbmQoJ2xvYWQnKTtcblx0XHRcdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnYWJvdXQ6YmxhbmsnKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuZW1wdHkoKTtcblx0XHRcdFx0XHRfZGlhbG9nLmVtcHR5KCk7XG5cdFx0XHRcdH0sIDEzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmhlaWdodCgwKTtcblx0XHRfZGlhbG9nLnBhcmVudHMoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5kcm9wU2hhZG93KCk7XG5cblx0XHRpZiAoY29uZmlnLkNzc0NsYXNzZXMgIT09ICcgJykge1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5hZGRDbGFzcyhjb25maWcuQ3NzQ2xhc3Nlcyk7XG5cdFx0XHRlbHNlICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5hZGRDbGFzcyhjb25maWcuQ3NzQ2xhc3Nlcyk7XG5cdFx0fVxuXG5cdFx0bG9hZFRhcmdldFBhZ2UoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cCA9IHsgY3JlYXRlLCBjbG9zZSwgcmVzaXplIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZVJhZGlvQnV0dG9uICovXG5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVSYWRpb0J1dHRvbiA9IHdpZGdldElkID0+IHtcblx0Y29uc3QgJHdpZGdldCA9ICQoYCMke3dpZGdldElkfWApO1xuXHRjb25zdCAkaW5wdXQgPSAkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXHRjb25zdCAkbGFiZWwgPSAkd2lkZ2V0LmZpbmQoJy5CdXR0b25SYWRpb0lucF9yYWRpb1RleHQnKTtcblx0Y29uc3QgbmFtZSA9ICRpbnB1dC5wcm9wKCduYW1lJyk7XG5cblx0Y29uc3QgYWRkUmVtb3ZlQ2xhc3MgPSAoJGVsLCB0b0FkZCkgPT4ge1xuXHRcdGlmICh0b0FkZCkgJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRlbHNlICRlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdH07XG5cblx0Y29uc3QgaXNDaGVja2VkID0gJGVsID0+IHtcblx0XHRpZiAoJGVsLmlzKCc6Y2hlY2tlZCcpKSBhZGRSZW1vdmVDbGFzcygkd2lkZ2V0LCB0cnVlKTtcblx0XHRlbHNlIGFkZFJlbW92ZUNsYXNzKCR3aWRnZXQsIGZhbHNlKTtcblx0fTtcblxuXHQkaW5wdXQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7bmFtZX1cIl1gKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkUmVtb3ZlQ2xhc3MoJCh0aGlzKS5jbG9zZXN0KCcuQnV0dG9uUmFkaW9JbnAnKSwgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0aXNDaGVja2VkKCQodGhpcykpO1xuXHR9KTtcblxuXHQkbGFiZWwuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNsb3Nlc3RFbGVtZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuQnV0dG9uUmFkaW9JbnAnKTtcblxuXHRcdGlmICgkY2xvc2VzdEVsZW1lbnQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHJldHVybiBmYWxzZTtcblxuXHRcdCRpbnB1dFswXS5jbGljaygpO1xuXHRcdC8vaXNDaGVja2VkKCRpbnB1dCk7XG5cdH0pO1xuXG5cdGlzQ2hlY2tlZCgkaW5wdXQpO1xufTtcbiIsIi8qIENvbXBvbmVudCBTY2FsZU1haW5TdHJ1Y3R1cmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZXR1cFNjYWxlKCk7XHJcblx0XHRcdGJpbmRDbGlja3MoKTtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQgJiZcclxuXHRcdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0YmluZENsaWNrcygpO1xyXG5cdFx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTY2FsZUNvdW50ID0gY29uZiA9PiB7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgQ2FyZFNjYWxlID0gY29uZi5Jc0NhcmRTY2FsZTtcclxuXHRcdFx0dmFyIFJ1bGVyU2NhbGUgPSBjb25mLklzUnVsZXJTY2FsZTtcclxuXHRcdFx0dmFyIE11bHRpcGxlU2NhbGUgPSBjb25mLklzTXVsdGlwbGVTY2FsZTtcclxuXHRcdFx0dmFyICR0b3RhbFBsYWNlID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcclxuXHRcdFx0dmFyIHRvdGFsQ2FyZFNjYWxlID0gMDtcclxuXHRcdFx0dmFyIHRvdGFsTXVsdGlwbGVTY2FsZSA9IDA7XHJcblx0XHRcdHZhciB0b3RhbFJ1bGVyU2NhbGUgPSAwO1xyXG5cclxuXHRcdFx0dmFyIFNjYWxlVHlwZUNhcmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdG90YWxTZWxlY3RlZCA9ICQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJykuZmluZCgnLlNjYWxlQ2FyZC5hY3RpdmUnKS5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIHRvdGFsTnVtYmVyID0gMDtcclxuXHRcdFx0XHQkKFwiLlNjYWxlTGlzdC5DYXJkU2NhbGU6bm90KCcuaXNUaXRsZScpXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5maW5kKCcuU2NhbGVDYXJkJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0b3RhbE51bWJlciArPSAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAodG90YWxOdW1iZXIgPT09IHRvdGFsU2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdHZhciB0b3RhbCA9IFtdO1xyXG5cdFx0XHRcdFx0dmFyIGlucHV0VmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdHZhciAkc2NhbGVSb3cgPSAkKCcuU2NhbGVMaXN0LkNhcmRTY2FsZTpub3QoLmlzVGl0bGUpJyk7XHJcblx0XHRcdFx0XHQkc2NhbGVSb3cuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aW5wdXRWYWx1ZSA9ICQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNjYWxlQ2FyZC5hY3RpdmUnKVxyXG5cdFx0XHRcdFx0XHRcdC5kYXRhKCd2YWx1ZScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpXHJcblx0XHRcdFx0XHRcdFx0LnZhbChpbnB1dFZhbHVlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdCQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlIC5TY2FsZUNhcmQuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dG90YWwucHVzaCgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR2YXIgZmluYWxUb3RhbCA9IGV2YWwodG90YWwuam9pbignKycpKTtcclxuXHRcdFx0XHRcdHJldHVybiBmaW5hbFRvdGFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBTY2FsZVR5cGVSdWxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJyc7XHJcblx0XHRcdFx0dmFyICRhY3RpdmVSdWxlciA9ICQoJy5SdWxlclNjYWxlX251bWJlci5hY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAoJGFjdGl2ZVJ1bGVyLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJCgnLlJ1bGVyU2NhbGVfbnVtYmVyLmFjdGl2ZScpXHJcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuUnVsZXJTY2FsZScpXHJcblx0XHRcdFx0XHRcdC5kYXRhKCkudmFsdWU7XHJcblx0XHRcdFx0XHQkKCcuU2NhbGVMaXN0LlJ1bGVyJylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpXHJcblx0XHRcdFx0XHRcdC52YWwoYWN0aXZlUnVsZXJWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVJ1bGVyVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBhY3RpdmVSdWxlclZhbHVlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIFNjYWxlVHlwZU11bHRpcGxlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIG51bWJlcm9mQ29scyA9ICQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZScpXHJcblx0XHRcdFx0XHQuZmlyc3QoKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBudW1iZXJvZlJvd3MgPSAkKCcuQnV0dG9uR3JvdXBTY2FsZScpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknKVxyXG5cdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgdG90YWwgPSBbXTtcclxuXHRcdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdFx0dmFyIGogPSAwO1xyXG5cdFx0XHRcdHZhciBjb3VudEFjdGl2ZSA9IDA7XHJcblx0XHRcdFx0dmFyIGNvdW50YWxsQWN0aXZlQ29scyA9IDA7XHJcblx0XHRcdFx0dmFyIHRvdGFsT2ZJdGVtcyA9IG51bWJlcm9mQ29scyAqIG51bWJlcm9mUm93cztcclxuXHRcdFx0XHR2YXIgdG90YWxTY29yZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtYmVyb2ZDb2xzOyBpKyspIHtcclxuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZlJvd3M7IGorKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRcdFx0XHRcdCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJ1xyXG5cdFx0XHRcdFx0XHQpW2pdO1xyXG5cdFx0XHRcdFx0XHR2YXIgQnV0dG9uU2NhbGVTZWxlY3RlZCA9IFNjYWxlTGlzdFNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbaV07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQnV0dG9uU2NhbGVTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2NhbGVWYWx1ZSA9IEJ1dHRvblNjYWxlU2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKVswXS5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0dG90YWwucHVzaChwYXJzZUludChTY2FsZVZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdFx0dG90YWxTY29yZS5wdXNoKHBhcnNlSW50KFNjYWxlVmFsdWUpKTtcclxuXHRcdFx0XHRcdFx0XHRjb3VudEFjdGl2ZSA9IGNvdW50QWN0aXZlICsgMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY291bnRBY3RpdmUgPT09IG51bWJlcm9mUm93cykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzdWJUb3RhbCA9IGV2YWwodG90YWwuam9pbignKycpKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3VidG90YWxTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsIC5CdXR0b25Hcm91cFNjYWxlJylbaV07XHJcblx0XHRcdFx0XHRcdFx0c3VidG90YWxTY2FsZS5pbm5lclRleHQgPSBzdWJUb3RhbDtcclxuXHRcdFx0XHRcdFx0XHRjb3VudGFsbEFjdGl2ZUNvbHMgPSBjb3VudGFsbEFjdGl2ZUNvbHMgKyAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb3VudEFjdGl2ZSA9IDA7XHJcblx0XHRcdFx0XHR0b3RhbCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJykubGVuZ3RoID09PSB0b3RhbE9mSXRlbXMpIHtcclxuXHRcdFx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0XHRcdHZhciBqID0gMDtcclxuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1iZXJvZlJvd3M7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0Um93ID0gJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnR0b3RhbCknKVtpXTtcclxuXHRcdFx0XHRcdFx0dmFyICRTY2FsZUxpc3RJbnB1dCA9ICQoU2NhbGVMaXN0Um93KS5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKTtcclxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlc1NlbGVjdGVkID0gJyc7XHJcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZkNvbHM7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBBY3RpdmVCdXR0b24gPSAkKFNjYWxlTGlzdFJvdykuZmluZCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKVtqXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgQWN0aXZlVmFsdWUgPSBBY3RpdmVCdXR0b24uaW5uZXJUZXh0O1xyXG5cdFx0XHRcdFx0XHRcdC8vdmFsdWVzU2VsZWN0ZWQ9dmFsdWVzU2VsZWN0ZWQrJywnK0FjdGl2ZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBudW1iZXJvZkNvbHMgLSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZXNTZWxlY3RlZCArPSBBY3RpdmVWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVzU2VsZWN0ZWQgKz0gQWN0aXZlVmFsdWUgKyAnLCc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCRTY2FsZUxpc3RJbnB1dC52YWwodmFsdWVzU2VsZWN0ZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIGdldFRvdGFsID0gZXZhbCh0b3RhbFNjb3JlLmpvaW4oJysnKSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZ2V0VG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3QgVG90YWxDYWxjID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IGlzRW1wdHkgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYgKENhcmRTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0dG90YWxDYXJkU2NhbGUgPSBTY2FsZVR5cGVDYXJkKCk7XHJcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxDYXJkU2NhbGUgPT09ICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKFJ1bGVyU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRvdGFsUnVsZXJTY2FsZSA9IFNjYWxlVHlwZVJ1bGVyKCk7XHJcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxSdWxlclNjYWxlID09PSAnJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChNdWx0aXBsZVNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0b3RhbE11bHRpcGxlU2NhbGUgPSBTY2FsZVR5cGVNdWx0aXBsZSgpO1xyXG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsTXVsdGlwbGVTY2FsZSA9PT0gJyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zdCAkZm9vdGVyUmVzdWx0ID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcclxuXHRcdFx0XHRjb25zdCAkdG90YWxTY29yZSA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpO1xyXG5cdFx0XHRcdGNvbnN0ICRzY29yZUxhYmVsID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQgLlRvdGFsTGFiZWwnKTtcclxuXHJcblx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcclxuXHRcdFx0XHRcdCR0b3RhbFNjb3JlLnRleHQoJy0tLScpO1xyXG5cdFx0XHRcdFx0JHNjb3JlTGFiZWwudGV4dCgnLScpO1xyXG5cclxuXHRcdFx0XHRcdCRmb290ZXJSZXN1bHQucmVtb3ZlQ2xhc3MoJ0NvbG9yWmV0YUJHJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICghaXNOYU4odG90YWxNdWx0aXBsZVNjYWxlKSAmJiAhaXNOYU4odG90YWxDYXJkU2NhbGUpICYmICFpc05hTih0b3RhbFJ1bGVyU2NhbGUpKSB7XHJcblx0XHRcdFx0XHRjb25zdCB0b3RhbEFic29sdXRlU2NvcmUgPSB0b3RhbENhcmRTY2FsZSArIHRvdGFsTXVsdGlwbGVTY2FsZSArIHRvdGFsUnVsZXJTY2FsZTtcclxuXHRcdFx0XHRcdGNvbnN0IHRvdGFsQWJzb2x1dGVMYWJlbCA9IHRvdGFsQWJzb2x1dGVTY29yZSA+IDExID8gJ0hpZ2gnIDogJ0xvdyc7XHJcblxyXG5cdFx0XHRcdFx0JHRvdGFsU2NvcmUudGV4dCh0b3RhbEFic29sdXRlTGFiZWwpO1xyXG5cdFx0XHRcdFx0JHNjb3JlTGFiZWwudGV4dCh0b3RhbEFic29sdXRlU2NvcmUpO1xyXG5cclxuXHRcdFx0XHRcdCRmb290ZXJSZXN1bHQuYWRkQ2xhc3MoJ0NvbG9yWmV0YUJHJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgJGhpZGRlbkxpbmsgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2hpZGRpbmdMaW5rIGEnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoJGhpZGRlbkxpbmsubGVuZ3RoID4gMCkgJGhpZGRlbkxpbmsuY2xpY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoQ2FyZFNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0JCgnLlNjYWxlQ2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJyk7XHJcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQuZmluZCgnLlNjYWxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoUnVsZXJTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdCQoJy5SdWxlclNjYWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5maW5kKCcudmlld21vZGUnKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dmFyICRydWxlclNjYWxlTGlzdCA9ICQodGhpcykuY2xvc2VzdCgnLlNjYWxlTGlzdC5SdWxlcicpO1xyXG5cdFx0XHRcdFx0XHQkcnVsZXJTY2FsZUxpc3QuZmluZCgnLlJ1bGVyU2NhbGVfbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5SdWxlclNjYWxlX251bWJlcicpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChNdWx0aXBsZVNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0dmFyIGNvdW50ZXI7XHJcblx0XHRcdFx0dmFyIFNjYWxlTGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzVGl0bGUnKTtcclxuXHRcdFx0XHR2YXIgU2NhbGVMaXN0U3ViVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNTdWJ0b3RhbCcpO1xyXG5cdFx0XHRcdHZhciBTY2FsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJyk7XHJcblxyXG5cdFx0XHRcdCQoJy5CdXR0b25Hcm91cFNjYWxlJylcclxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bnRoLWNoaWxkKDJuKScpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ0V2ZW5MaW5lJyk7XHJcblx0XHRcdFx0dmFyIG51bWJlck9mR3JvdXBTY2FsZSA9IFNjYWxlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0JCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwgLkJ1dHRvbkdyb3VwU2NhbGUnKS50ZXh0KDApO1xyXG5cdFx0XHRcdC8vIENoZWNrIGlmIE11bHRpcGxlIFNjYWxlIFRpdGxlIGV4aXN0cyB0aGVuIGFkanVzdCB0aXRsZSB3aWR0aFxyXG5cdFx0XHRcdGlmICgkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNUaXRsZScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGZvciAoY291bnRlciA9IDA7IGNvdW50ZXIgPCBudW1iZXJPZkdyb3VwU2NhbGU7IGNvdW50ZXIrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0V2lkdGggPSBTY2FsZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdFx0U2NhbGVMaXN0VGl0bGUucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4JztcclxuXHRcdFx0XHRcdFx0U2NhbGVMaXN0U3ViVG90YWwucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCQoJy5CdXR0b25Hcm91cF9idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRzZXR1cFNjYWxlID0gKCkgPT4ge1xyXG5cdFx0dmFyIElzQ2FyZFNjYWxlO1xyXG5cdFx0dmFyIElzUnVsZXJTY2FsZTtcclxuXHRcdHZhciBJc011bHRpcGxlU2NhbGU7XHJcblxyXG5cdFx0JCgnLlNjYWxlQ2FyZCcpLmxlbmd0aCA+IDAgPyAoSXNDYXJkU2NhbGUgPSB0cnVlKSA6IChJc0NhcmRTY2FsZSA9IGZhbHNlKTtcclxuXHRcdCQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoID4gMCA/IChJc011bHRpcGxlU2NhbGUgPSB0cnVlKSA6IChJc011bHRpcGxlU2NhbGUgPSBmYWxzZSk7XHJcblx0XHQkKCcuUnVsZXJTY2FsZScpLmxlbmd0aCA+IDAgPyAoSXNSdWxlclNjYWxlID0gdHJ1ZSkgOiAoSXNSdWxlclNjYWxlID0gZmFsc2UpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFNjYWxlQ291bnQoe1xyXG5cdFx0XHRcdElzQ2FyZFNjYWxlOiBJc0NhcmRTY2FsZSxcclxuXHRcdFx0XHRJc1J1bGVyU2NhbGU6IElzUnVsZXJTY2FsZSxcclxuXHRcdFx0XHRJc011bHRpcGxlU2NhbGU6IElzTXVsdGlwbGVTY2FsZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LCA1MDApO1xyXG5cclxuXHRcdGlmICgkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV90b3RhbFNjb3JlJykudGV4dCgnLS0tJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJlc2V0U2NhbGVzID0gKCkgPT4ge1xyXG5cdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9jb250ZW50JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV90b3RhbFNjb3JlJykudGV4dCgnLS0tJyk7XHJcblx0XHRcdHNldHVwU2NhbGUoKTtcclxuXHRcdH0sIDYwMCk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX2NvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9O1xyXG5cclxuXHRiaW5kQ2xpY2tzID0gKCkgPT4ge1xyXG5cdFx0aWYgKCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wgJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVG9nZ2xlSXRlbUNvbnRyb2wnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCQoJy5OYXZpZ2F0aW9uX2NvbnRyb2wnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCQoJy5OYXZpZ2F0aW9uX3JpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0ISQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxyXG5cdFx0XHRcdFx0XHQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcuTmF2aWdhdGlvbl9sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0ISQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxyXG5cdFx0XHRcdFx0XHQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNjYWxlTWFpblN0cnVjdHVyZSA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVG9nZ2xlSXRlbUNvbnRyb2wgKi9cblNhcHBoaXJlV2lkZ2V0cy5Ub2dnbGVJdGVtQ29udHJvbCA9ICgpID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdC5ub3QoJzpjaGVja2VkJylcblx0XHRcdFx0XHQucHJvcCgnY2hlY2tlZCcsIHRydWUpXG5cdFx0XHRcdFx0LmNsaWNrKCk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcblx0XHRcdFx0XHRcdC5pcygnOmNoZWNrZWQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wgaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKVxuXHRcdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdFx0XHRcdC5pcygnOmNoZWNrZWQnKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fSk7XG59O1xuIiwidmFyIFNlYXJjaFNlbGVjdERlZmluZSA9ICh3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lID0gd2luZG93LlNlYXJjaFNlbGVjdERlZmluZSB8fCB7fSk7XG5cblNhcHBoaXJlV2lkZ2V0cy5TZWxlY3RTU0QgPSBmdW5jdGlvbiBTU0RTZWxlY3RTZXR1cChjb25maWcpIHtcblx0JChmdW5jdGlvbigpIHtcblx0XHR2YXIgJFNTRHNlbGVjdElkID0gJCgnIycgKyBjb25maWcuU1NEU2VsZWN0SWQpO1xuXHRcdHZhciBpc011bHRpcGxlID0gY29uZmlnLmlzTXVsdGlwbGU7XG5cblx0XHR2YXIgJENvbXBvbmVudFNTRCA9ICRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKTtcblx0XHR2YXIgJENvbXBvbmVudFNTRGlucHV0ID0gJENvbXBvbmVudFNTRC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpO1xuXHRcdHZhciBDb21wb25lbnRpbnB1dGxlbmd0aCA9ICRDb21wb25lbnRTU0RpbnB1dC52YWwoKS5sZW5ndGg7XG5cblx0XHRpZiAoQ29tcG9uZW50aW5wdXRsZW5ndGggPiAwKSB7XG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdFNELXNlYXJjaGVkLXRlcm0nLFxuXHRcdFx0XHRjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcblx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZhciAkZmF2b3JpdGVzU2VhcmNoSW5wdXQgPSAkQ29tcG9uZW50U1NELmZpbmQoJy5TZWFyY2hTRF9maWx0ZXJmYXZvcml0ZXMgaW5wdXQnKTtcblxuXHRcdGlmICgkZmF2b3JpdGVzU2VhcmNoSW5wdXQubGVuZ3RoKSB7XG5cdFx0XHR2YXIgZmF2b3JpdGVzU2VhcmNoTGVuZ3RoID0gJGZhdm9yaXRlc1NlYXJjaElucHV0LnZhbCgpLmxlbmd0aDtcblxuXHRcdFx0aWYgKGNvbmZpZy5IYXNGYXZvcml0ZSA9PT0gJ1RydWUnICYmIGZhdm9yaXRlc1NlYXJjaExlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fY29udGVudFRpdGxlJykuaGlnaGxpZ2h0KCRmYXZvcml0ZXNTZWFyY2hJbnB1dC52YWwoKSwge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdFNELXNlYXJjaGVkLXRlcm0nLFxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuXHRcdFx0XHRcdHdvcmRzT25seTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBPcGVuQ29uZmlybVBvcHVwID0gZnVuY3Rpb24oJFNTRHNlbGVjdElkKSB7XG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdFx0JFBvcHVwSUQgPSAkQ29tcG9uZW50U1NELnNpYmxpbmdzKCcuU1NEUG9wdXBXcmFwcGVyJyk7XG5cblx0XHRcdCRQb3B1cElELmZhZGVJbignZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkQ29tcG9uZW50U1NELmFkZENsYXNzKCdEb250X0Nsb3NlJyk7XG5cdFx0XHRcdCRQb3B1cElEXG5cdFx0XHRcdFx0LmZpbmQoJy5TU0Rwb3B1cE9rJylcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JFBvcHVwSUQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19zdGFyVHJpZ2dlciA+IGEnKS5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCRQb3B1cElEXG5cdFx0XHRcdFx0LmZpbmQoJy5TU0Rwb3B1cENhbmNlbCcpXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRQb3B1cElELmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgkQ29tcG9uZW50U1NELnJlbW92ZUNsYXNzKCdEb250X0Nsb3NlJyksIDUwMCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgU1NEQ2hlY2tCb3hTZWxlY3QgPSBmdW5jdGlvbigkd2lkZ2V0SWQpIHtcblx0XHRcdHZhciBjaGVja0JveENvdW50ID0gMDtcblx0XHRcdGlmIChpc011bHRpcGxlID09PSAnVHJ1ZScpIHtcblx0XHRcdFx0Y2hlY2tCb3hDb3VudCA9ICR3aWRnZXRJZFxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2VhcmNoU0Quc2hvd0Zhdm9yaXRlJylcblx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX19tdWx0aXBsZSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubGVuZ3RoO1xuXG5cdFx0XHRcdCRhbGxMaXN0Y2FyZCA9ICR3aWRnZXRJZC5jbG9zZXN0KCcuU2VhcmNoU0RfY29udGVudCcpO1xuXG5cdFx0XHRcdGlmIChjaGVja0JveENvdW50ID4gMCkge1xuXHRcdFx0XHRcdCR3aWRnZXRJZC5jbG9zZXN0KCcuU2VhcmNoU0Quc2hvd0Zhdm9yaXRlJykuYWRkQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50IC5TZWxlY3RTRCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKVxuXHRcdFx0XHRcdFx0XHQub2ZmKCdjbGljaycpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX2FjdGlvbkxpbmsnKVxuXHRcdFx0XHRcdFx0XHQub2ZmKCdjbGljaycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCR3aWRnZXRJZC5jbG9zZXN0KCcuU2VhcmNoU0Quc2hvd0Zhdm9yaXRlJykucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50IC5TZWxlY3RTRCAnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX2NvbnRlbnRXcmFwcGVyJylcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmIChpc011bHRpcGxlID09PSAnVHJ1ZScpIHtcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0U1NEQ2hlY2tCb3hTZWxlY3QoJFNTRHNlbGVjdElkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJMaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKCEkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEIC5TZWxlY3RTRF9fc3RhcldyYXBwZXInKS5oYXNDbGFzcygnc3RhckRpc2FibGVkJykpIHtcblx0XHRcdFx0aWYgKCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX19zdGFyV3JhcHBlcicpLmhhc0NsYXNzKCdzdGFyU2VsZWN0ZWQnKSkge1xuXHRcdFx0XHRcdE9wZW5Db25maXJtUG9wdXAoJFNTRHNlbGVjdElkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19zdGFyVHJpZ2dlciA+IGEnKS5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX2NvbnRlbnRXcmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0JENvbXBvbmVudFNTRCA9ICRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKTtcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJykuY2xpY2soKTtcblx0XHRcdGlmICghJENvbXBvbmVudFNTRC5oYXNDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKSkge1xuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLnJldHVyblRvU2VhcmNoKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2guY2xvc2VTU0QoJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcblx0XHRcdH1cblxuXHRcdFx0JENvbXBvbmVudFNTRGlucHV0LnZhbCgnJyk7XG5cdFx0fSk7XG5cblx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX2FjdGlvbkxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKS5jbGljaygpO1xuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5jbG9zZVNTRCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcblxuU2FwcGhpcmVXaWRnZXRzLlNTRFNlYXJjaCA9IGZ1bmN0aW9uIFNTRHNlYXJjaFNldHVwKGNvbmZpZykge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkU1NEd2lkZ2V0ID0gJCgnIycgKyBjb25maWcuU1NEV2lkZ2V0SWQpOyAvLyBTU0RDb21wb25lbnQgbWFwIG5vdCB1c2VkIGFnYWluXG5cdFx0dmFyICRTU0RDb21wb25lbnQgPSAkU1NEd2lkZ2V0LmZpbmQoJy5TZWFyY2hTRCcpOyAvLyBTU0RTZWFyY2ggQ29tcG9uZW50IGlkIGZvciB1c2UgaW4gdGhlIGZ1bmN0aW9uIGFuZCBtYW5pcHVsYXRlIGNsYXNzZXNcblx0XHR2YXIgJFNTRENvbXBvbmVudENvbnRlbnQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50Jyk7IC8vIFNTRGNvbXBvbmVudCBjb250ZW50XG5cdFx0dmFyIGhhc0Nsb25lID0gY29uZmlnLkhhc0Nsb25lOyAvLyBIYXNDbG9uZSB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcblx0XHR2YXIgaGFzRmF2b3JpdGUgPSBjb25maWcuSGFzRmF2b3JpdGU7IC8vIEhhc0Zhdm9yaXRlIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxuXHRcdHZhciBzaG93Q2xvbmVzID0gY29uZmlnLlNob3dDbG9uZXM7IC8vIFNob3dDbG9uZXMgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXG5cdFx0dmFyIGxldHRlckxpbWl0ID0gY29uZmlnLkxpbWl0TGV0dGVyOyAvLyBOdW1iZXIgb2YgbGV0dGVyIHRvIGVudGVyIGJlZm9yZSB0cmlnZ2VyIHRoZSBzZWFyY2ggYWN0aW9uXG5cdFx0dmFyIGhhc1NoaWVsZCA9IGNvbmZpZy5IYXNTaGllbGQ7XG5cdFx0dmFyIHNoaWVsZFRpbWVvdXQgPSBjb25maWcuU2hpZWxkVGltZW91dDtcblx0XHR2YXIgaW5wdXRMZW5ndGggPSBjb25maWcuU2VhcmNoSW5wdXRMZW5ndGg7XG5cdFx0dmFyICR3aWRnZXRTaGllbGQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRC0tc2hpZWxkJyk7XG5cdFx0dmFyIHNlYXJjaFRyaWdnZXJUaW1lcjtcblx0XHRjb25zdCAkU1NEQ2xlYXJCdXR0b24gPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpO1xuXHRcdGNvbnN0ICRTU0RJbnB1dEVsZW1lbnQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jyk7XG5cblx0XHQkU1NESW5wdXRFbGVtZW50LmF0dHIoJ21heExlbmd0aCcsIGlucHV0TGVuZ3RoKTtcblxuXHRcdHZhciBleGVjdXRlU2VhcmNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2VhcmNoVHJpZ2dlclRpbWVyKTtcblx0XHRcdHNlYXJjaFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9LCA3MDApO1xuXHRcdH07XG5cblx0XHRpZiAoaGFzU2hpZWxkKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdpZGdldFNoaWVsZC5oaWRlKCk7XG5cdFx0XHR9LCBzaGllbGRUaW1lb3V0KTtcblx0XHR9XG5cblx0XHQvKiAgUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuXHRcdCAqICAgYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuXHRcdCAqICAgTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG5cdFx0ICogICBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuXHRcdCAqL1xuXHRcdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuXHRcdFx0dmFyIHRpbWVvdXQ7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0LyoqKipcblx0XHQgKiAgIFJlc2V0IFNlYXJjaCBVSSB0byB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdCAqL1xuXHRcdHZhciByZXNldFVJID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlcicpLnNob3coKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9GYXZvcml0ZScpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnMnKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVSZW1vdmUnKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fY2xvbmVXcmFwcGVyJykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlciAuU2VhcmNoU0RfX3JldHVybicpLmhpZGUoKTtcblxuXHRcdFx0aWYgKCRTU0RJbnB1dEVsZW1lbnQudmFsKCkudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Zhdm9yaXRlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKlxuXHRcdCAqICBHbyB0byBGYXZvcml0ZXMgVUlcblx0XHQgKiAgLS0gIHJlc3QgU1NEY29tcG9uZW50XG5cdFx0ICogIC0tICBzaG93IEZhdm9yaXRlIGZlYXR1cmVzXG5cdFx0ICogIC0tICByZW1vdmUgY2xhc3Mgc2hvd0Nsb25lIGlmIGNvbXBvbmVudCBoYXZlIHRoYXQgY2xhc3Ncblx0XHQgKiAgLS0gIGFkZCBjbGFzcyBzaG93RmF2b3JpdGUgdG8gaGF2ZSBjb21wb25lbnQgY29udHJvbFxuXHRcdCAqICAtLSAgYWRkQ2xhc3MgT3BlbiB3aXRoIHNsaWRlXG5cdFx0ICovXG5cdFx0dmFyIGdvVG9GYXZvcml0ZXMgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHRyZXNldFVJKCRTU0RDb21wb25lbnQpO1xuXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCcnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlcicpLmhpZGUoKTtcblxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdFx0fVxuXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rICcpLnNob3coKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZSAnKS5zaG93KCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnc2hvd0Zhdm9yaXRlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWxlY3RTRC5oYXNGYXZvcml0ZSA+IGEnKS5mb2N1cygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xuXG5cdFx0XHQvLyBsb2FkaW5nIHNob3cgaGlkZSBsaXN0XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKioqKioqKioqKioqKipcblx0XHQgKlxuXHRcdCAqICBHbyB0byBDbG9uZSBVSVxuXHRcdCAqICAtLSAgcmVtb3ZlIGNsYXNzIE9wZW5cblx0XHQgKiAgLS0gQWRkIFNob3dDbG9uZSBjbGFzc1xuXHRcdCAqICAtLSBTbGlkZURvd24gZWZmZWN0IGFuZCBhZGQgT3BlbiBDbGFzc1xuXHRcdCAqL1xuXHRcdHZhciBnb1RvQ2xvbmUgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQvLyBsb2FkaW5nIHNob3cgaGlkZSBsaXN0XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCcnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblxuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdzaG93Q2xvbmUnKSkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdzaG93Q2xvbmUnKTtcblx0XHRcdH1cblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiBSZXR1cm4gdG8gc2VhcmNoIGZyb20gZmF2b3JpdGUgb3IgY2xvbmVcblx0XHQgKi9cblx0XHR2YXIgcmV0dXJuVG9TZWFyY2ggPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQvLyBsb2FkaW5nIHNob3cgaGlkZSBsaXN0XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNldFVJKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19pbnB1dFdyYXBwZXIgLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XG5cblx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdoYXNDbG9uZScpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Nsb25lJyk7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Zhdm9yaXRlJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzRmF2b3JpdGUnKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLnNob3coKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFNTRENsZWFyIGNsb3NlcyBTU0RTZWFyY2ggY29udGFpbmVyXG5cdFx0ICogICBhbmQgY2xlYXIgc3NkIGZpbHRlciBpbnB1dFxuXHRcdCAqL1xuXHRcdHZhciBzc2RDbGVhciA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgQ2xvc2VTU0QgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcblx0XHQgKiAgIG11c3QgcmVtb3ZlIGhpZ2h0bGlnaHRTZWxlY3Rpb24gZG9uZSBieSBrZXlib2FyZCBuYXZpZ2F0aW9uXG5cdFx0ICovXG5cdFx0dmFyIGNsb3NlU1NEID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudENvbnRlbnQuc2xpZGVVcCgnMjUwJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCcuc2VsZWN0ZWQnKTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIEFkZCBPcGVuIGNsYXNzIHRvIFNTRENvbXBvbmVudFxuXHRcdCAqICAgaWYgU1NEQ29tcG9uZW50IGhhcyBjbGFzcyBPcGVuIHRoZW4gZm9jdXNcblx0XHQgKiAgIG1ha2VzIG9wZW4gZWZmZWN0LCBjaGVjayB0aGUgY2hhcmFjdGVycyBpbnNpZGUgdGhlIGlucHV0IHRvIGZpbHRlclxuXHRcdCAqL1xuXHRcdHZhciBzc2RGb2N1cyA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdGlmICghJFNTRENvbXBvbmVudC5oYXNDbGFzcygnT3BlbicpKSB7XG5cdFx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY29udGVudExpc3QnKS5oaWRlKCk7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xuXHRcdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLmhpZGUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnLnNob3dDbG9uZScpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCcuc2hvd0Zhdm9yaXRlJyk7XG5cblx0XHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hMaW5rSW5wdXQgYScpLmNsaWNrKCk7XG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBXaGVuIGNsaWNraW5nIGNsaWNraW5nIG91dHNpZGUgdGhlIGNvbXBvbmVudFxuXHRcdCAqICAgdGhlIFNTRCBtdXN0IGNsb3NlIGFuZCByZXR1cm4gdG8gaW5pdGlhbCBzdGF0ZVxuXHRcdCAqL1xuXHRcdHZhciBDbGlja091dCA9IGZ1bmN0aW9uKGUsICRTU0RDb21wb25lbnQpIHtcblx0XHRcdGlmICghJFNTRENvbXBvbmVudC5pcyhlLnRhcmdldCkgJiYgJFNTRENvbXBvbmVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFRyaWdnZXJzIHRoZSBsaW5rIHRvIGluaXRpYWxpemVcblx0XHQgKiAgIHRoZSBkYXRhYmFzZSBzZWFyY2ggYmFzZWQgb24gY3VycmVudCBsZW5ndGggb2YgdGhlIHN0cmluZyBpbnNlcnRlZCBvbiB0aGUgaW5wdXRcblx0XHQgKi9cblx0XHR2YXIgVHJpZ2dlclNlYXJjaCA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdHZhciBjdXJyZW50V29yZCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoKTtcblx0XHRcdHZhciBjdXJyZW50Q291bnQgPSBjdXJyZW50V29yZC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudENvdW50ID49IGxldHRlckxpbWl0IHx8IGN1cnJlbnRDb3VudCA9PT0gMCkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hMaW5rSW5wdXQgPiBhJykuY2xpY2soKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFJlbW92ZXMgYWxsIGZhdm9yaXRlIGNoZWNrZWQgYm94ZXNcblx0XHQgKiAgIGFuZCBlbmRzIE11bHRpcGxlU2VsZWN0XG5cdFx0ICovXG5cdFx0dmFyIE11bHRpVW5jaGVjayA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdCRjaGVja0JveGVzID0gJFNTRENvbXBvbmVudC5wYXJlbnQoKS5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xuXG5cdFx0XHQkU1NEQ29tcG9uZW50XG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX19tdWx0aXBsZSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBLZXlCb2FyZCBldmVudHMgdXAgZG93biBhbmQgZW50ZXIgaWYgbm90IGZpbHRlclxuXHRcdCAqL1xuXHRcdHZhciBrZXlib2FyZEV2ZW50cyA9IGZ1bmN0aW9uKGUsICRTU0RDb21wb25lbnQpIHtcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRTZWxlY3RlZCA9ICRTU0RDb21wb25lbnRDb250ZW50LmZpbmQoJy5MaXN0UmVjb3JkcyA+IHNwYW4uc2VsZWN0ZWQnKTsgLy8gQ3VycmVudCBzZWxlY3RhYmxlIGl0ZW1cblx0XHRcdFx0dmFyICRmaXJzdFNlbGVjdCA9ICRTU0RDb21wb25lbnRDb250ZW50LmZpbmQoJy5MaXN0UmVjb3JkcyA+IHNwYW46Zmlyc3QtY2hpbGQnKTsgLy8gRmlyc3Qgc2VsZWN0YWJsZSBpdGVtXG5cdFx0XHRcdHZhciAkbGFzdFNlbGVjdCA9ICRTU0RDb21wb25lbnRDb250ZW50LmZpbmQoJy5MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpOyAvLyBMYXN0IHNlbGVjdGFibGUgaXRlbVxuXHRcdFx0XHR2YXIgY291bnRTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZC5sZW5ndGg7IC8vIE51bWJlciBvZiBzZWxlY3RlZCBpdGVtXG5cblx0XHRcdFx0aWYgKGUud2hpY2ggPT0gMzgpIHtcblx0XHRcdFx0XHQvLyBpZiBrZXkgcHJlc3NlZCBpcyB1cCBhcnJvd1xuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSAkbGFzdFNlbGVjdDtcblx0XHRcdFx0XHRcdCRsYXN0U2VsZWN0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHRuZXh0ID0gY3VycmVudFNlbGVjdGVkLnByZXYoKTtcblxuXHRcdFx0XHRcdFx0aWYgKG5leHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBuZXh0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxhc3QoKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS53aGljaCA9PSA0MCkge1xuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIGRvd24gYXJyb3dcblx0XHRcdFx0XHRpZiAoY291bnRTZWxlY3RlZCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0JGZpcnN0U2VsZWN0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRuZXh0ID0gY3VycmVudFNlbGVjdGVkLm5leHQoKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHRcdFx0aWYgKG5leHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBuZXh0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmVxKDApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLndoaWNoID09IDEzKSB7XG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZW50ZXJcblx0XHRcdFx0XHRpZiAoY291bnRTZWxlY3RlZCA+IDApIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX2FjdGlvbkxpbmsnKS5jbGljaygpO1xuXHRcdFx0XHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoJFNTRENvbXBvbmVudC5maW5kKCdTZWFyY2hTRF9fX2lucHV0IGlucHV0JykuaXMoJzphY3RpdmUnKSAmJiBjb3VudFNlbGVjdGVkID09PSAwKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXhlY3V0ZVNlYXJjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBUaGUgZmlyc3Qgc3RlcCBpcyB0byByZXNldCB0aGUgc2VldGluZ3MgdG8gZGVmYXVsdFxuXHRcdCAqL1xuXHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cblx0XHQvKlxuXHRcdCAqICBSZW1vdmUgYXV0b0NvbXBsZXRlIGZyb20gc2VhcmNoIGlucHV0XG5cdFx0ICovXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmF0dHIoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblxuXHRcdC8qXG5cdFx0ICogICBJZiBTU0QgaGFzIENsb25lIGFuZCB0aGUgY2xvbmUgbGlzdCBpcyB2aXNpYmxlXG5cdFx0ICogICBvbmNsaWNrIFwiQ2xvbmUgcHJldmlvdXMgbWVkaWNhdGlvblwiIHRoZW5cblx0XHQgKiAgIHJlbW92ZSBPcGVuIGFuZCBzaG93IGl0ZW1zIHRvIGNsb25lIGxpc3Rcblx0XHQgKi9cblx0XHRpZiAoaGFzQ2xvbmUgPT09ICdUcnVlJykge1xuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzQ2xvbmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHRcdH1cblxuXHRcdGlmIChoYXNGYXZvcml0ZSA9PT0gJ1RydWUnKSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNGYXZvcml0ZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLnNob3coKTtcblx0XHR9XG5cblx0XHRpZiAoKGhhc0Nsb25lID09PSAnVHJ1ZScpICYgKHNob3dDbG9uZXMgPT09ICdUcnVlJykpIHtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2Nsb25lV3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVSZW1vdmUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XG5cdFx0XHRkZWJvdW5jZShUcmlnZ2VyU2VhcmNoKCRTU0RDb21wb25lbnQpLCA1NTApO1xuXHRcdFx0ZGVib3VuY2UoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmZvY3VzKCksIDU2MCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRnb1RvQ2xvbmUoJFNTRENvbXBvbmVudCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9DbG9uZSA+IGEnKS5jbGljaygpO1xuXHRcdH0pO1xuXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XG5cdFx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9uc0NhbmNlbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0TXVsdGlVbmNoZWNrKCRTU0RDb21wb25lbnQpO1xuXHRcdH0pO1xuXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVib3VuY2Uoc3NkRm9jdXMoJFNTRENvbXBvbmVudCksIDYwMCk7XG5cdFx0fSk7XG5cblx0XHQkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XG5cdFx0XHRDbGlja091dChlLCAkU1NEQ29tcG9uZW50KTtcblx0XHR9KTtcblx0XHQvKlxuXHRcdCAqICAgS2V5Qm9hcmQgZXZlbnRzIG9uIGtleSBwcmVzc1xuXHRcdCAqL1xuXHRcdCRTU0RDb21wb25lbnRcblx0XHRcdC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpXG5cdFx0XHQuYWRkKCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNEX2FjdGlvbkxpbmsnKSlcblx0XHRcdC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS53aGljaCAhPSAxMykge1xuXHRcdFx0XHRcdGtleWJvYXJkRXZlbnRzKGUsICRTU0RDb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCRTU0RJbnB1dEVsZW1lbnQudmFsKCkudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHRcdCRTU0RDbGVhckJ1dHRvbi5hbmltYXRlKHsgb3BhY2l0eTogJ2hpZGUnIH0sIDMwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnc2hvdycgfSwgMzAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQvKlxuXHRcdCAqICAgUHJldmVudCBmb3JtIHN1Ym1pc3Npb24gb24gZW50ZXIsXG5cdFx0ICogICBpbnN0ZWFkIGdvIHRvIGtleWJvYXJkIGV2ZW50cyB0byB0cmlnZ2VyXG5cdFx0ICogICB0aGUgc2VsZWN0aW9uXG5cdFx0ICovXG5cdFx0JCgkU1NEQ29tcG9uZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XG5cdFx0XHRcdGtleWJvYXJkRXZlbnRzKGUsICRTU0RDb21wb25lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19yZW1vdmUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0ZGVib3VuY2UocmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCksIDYwMCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcblx0XHRcdGdvVG9GYXZvcml0ZXMoJFNTRENvbXBvbmVudCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9GYXZvcml0ZSA+IGEnKS5jbGljaygpO1xuXHRcdH0pO1xuXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9uc0FkZCA+IGEnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGRlYm91bmNlKFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCksIDIwMCk7XG5cdFx0XHRkZWJvdW5jZShyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KSwgMzUwKTtcblx0XHR9KTtcblxuXHRcdC8qXG5cdFx0ICogICBPbiBBamF4IFJlcXVlc3QgaGlkZSBsb2FkaW5nIGRpdiBpZiB0aGUgU1NEIGlzIG9wZW4gdGhlbiBzaG93IHRoZVxuXHRcdCAqICAgTGlzdFJlY29yZHNcblx0XHQgKi9cblx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnT3BlbicpKSB7XG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5oaWRlKCk7XG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudENvbnRlbnQuc2xpZGVEb3duKCcxMDAwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLnNob3coKTtcblx0XHRcdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQkKCdmb3JtJykuYXBwZW5kKCc8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzc2RJbnB1dFwiIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCIgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+Jyk7XG5cblx0XHR3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaCA9IHtcblx0XHRcdHJldHVyblRvU2VhcmNoOiByZXR1cm5Ub1NlYXJjaCxcblx0XHRcdHJlc2V0VUk6IHJlc2V0VUksXG5cdFx0XHRjbG9zZVNTRDogY2xvc2VTU0QsXG5cdFx0XHRzc2RGb2N1czogc3NkRm9jdXMsXG5cdFx0XHRUcmlnZ2VyU2VhcmNoOiBUcmlnZ2VyU2VhcmNoLFxuXHRcdFx0c3NkQ2xlYXI6IHNzZENsZWFyLFxuXHRcdH07XG5cdH0pO1xufTtcbi8vIEFkZGVkIHRvIGNsb3NlIHRoZSBzZWxlY3QgbGlzdCBpZiB3ZSBjbGljayB0aGUgcHJlc2NyaXB0aW9uIElmcmFtZTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuXHR2YXIgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdHJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHRmdW5jdGlvbihldmVudCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIikgJiZcblx0XHRcdFx0ZG9jdW1lbnRcblx0XHRcdFx0XHQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIilcblx0XHRcdFx0XHQuY29udGVudFdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRCcpLmNsYXNzTGlzdC5yZW1vdmUoJ09wZW4nKTtcblx0XHRcdFx0XHRcdHZhciBhbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRF9fX2lucHV0JykuY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgaW4gYWxsSW5wdXQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsbElucHV0W2VsZW1lbnRdLnZhbHVlICE9IHVuZGVmaW5lZCA/IChhbGxJbnB1dFtlbGVtZW50XS52YWx1ZSA9ICcnKSA6IG51bGw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59KTtcbiIsIi8qIENvbXBvbmVudCBTZWFyY2hDbGllbnRTaWRlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgU2VhcmNoQ2xpZW50U2lkZSB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdH07XG5cblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XG5cblx0XHRcdCQod2luZG93KS5sb2FkKCgpID0+IHtcblx0XHRcdFx0b3NBamF4QmFja2VuZCAmJlxuXHRcdFx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCQoJyMnICsgdGhpcy5vcHRpb25zLmlucHV0SWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcblx0XHRcdCQoJyMnICsgdGhpcy5vcHRpb25zLmlucHV0SWQpLm9uKCdjaGFuZ2Uga2V5ZG93biBwYXN0ZSBpbnB1dCcsIGUgPT4ge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaENsaWVudFNpZGUoXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuaW5wdXRJZCxcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5zZWFyY2hhYmxlRWxlbWVudFNlbGVjdG9yLFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLnNlYXJjaGFibGVDaGlsZFNlbGVjdG9yXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2VhcmNoQ2xpZW50U2lkZShpbnB1dElkLCBzZWxlY3RvciwgY2hpbGRTZWxlY3Rvcikge1xuXHRcdFx0aWYgKCQoJyMnICsgaW5wdXRJZCkuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdFx0dmFyIHNlYXJjaFRleHQgPSBvc2pzKCcjJyArIGlucHV0SWQpXG5cdFx0XHRcdFx0LnZhbCgpXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHZhciBzZWFyY2hDb3VudGVyID0gMDtcblx0XHRcdFx0dmFyIHNlbGVjaW9uID0gb3NqcyhzZWxlY3Rvcik7XG5cblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XG5cdFx0XHRcdHNlbGVjaW9uLnJlbW92ZUNsYXNzKCdzZWFyY2hGb3VuZCcpO1xuXHRcdFx0XHRzZWxlY2lvbi51bmhpZ2hsaWdodCgpO1xuXG5cdFx0XHRcdGlmIChjaGlsZFNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudFRvU2VhcmNoID0gb3NqcyhjaGlsZFNlbGVjdG9yKTtcblx0XHRcdFx0XHRlbGVtZW50VG9TZWFyY2gudW5oaWdobGlnaHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzZWFyY2hUZXh0Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRzZWxlY2lvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dFRvQ29tcGFyZSA9IGNoaWxkU2VsZWN0b3Jcblx0XHRcdFx0XHRcdFx0PyAkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZChjaGlsZFNlbGVjdG9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoKVxuXHRcdFx0XHRcdFx0XHQ6IHRoaXMuaW5uZXJUZXh0O1xuXG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdHRleHRUb0NvbXBhcmVcblx0XHRcdFx0XHRcdFx0XHQudHJpbSgpXG5cdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0XHQuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoRm91bmQnKTtcblx0XHRcdFx0XHRcdFx0c2VhcmNoQ291bnRlcisrO1xuXHRcdFx0XHRcdFx0XHRvc2pzKHRoaXMpLmhpZ2hsaWdodChzZWFyY2hUZXh0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuYWRkQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNlYXJjaENsaWVudFNpZGUoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNlYXJjaENsaWVudFNpZGUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2VjdGlvbkV4cGFuZGFibGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBTZWN0aW9uRXhwYW5kYWJsZUN1c3RvbSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xuXHRcdHZhciBwcmV2aWV3c3RhdCA9IFtdO1xuXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xuXHRcdGZ1bmN0aW9uIGNsaWNrRXZlbnRzKG9iKSB7XG5cdFx0XHQvLyBzdG9yZSBxdWVyeXMgaW4gYSBzaW5nbGUgdmFyXG5cdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKTtcblxuXHRcdFx0Ly8gZ2V0IGlkXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XG5cblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xuXG5cdFx0XHRcdGlmICgkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTgnKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTknKSkge1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tJykub2ZmKCk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKFxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gYSdcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIG5ldyBjbGljayBldmVudHNcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxuXHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xuXHRcdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxuXHRcdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudHNcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b20nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHtcblx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQkKHRoaXMpLmhhc0NsYXNzKCdIaWRlV2hlbkVtcHR5JykgJiZcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKVxuXHRcdFx0XHRcdFx0LnRleHQoKS5sZW5ndGggPT09IDBcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5oaWRlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBoYWNrIHRvIGRpc3BsYXkgYSBtZXNzYWdlIHdoZW4gU2VjdGlvbkV4cGFuZGFibGVDdXN0b20gaGFzIG5vIGNoaWxkIGl0ZW1zXG5cdFx0XHRcdHZhciBpc0VtcHR5ID0gdHJ1ZTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCBkaXYsIC5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50IHNwYW4nKVxuXHRcdFx0XHRcdC5ub3QoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50LS1lbXB0eScpXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpc0VtcHR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFpc0VtcHR5KSB7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50LS1lbXB0eScpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgJGV4cGFuZGFibGVJbnN0YW5jZSA9ICQodGhpcyk7XG5cdFx0XHRcdHZhciAkdG9nZ2xlciA9ICQodGhpcykuZmluZCgnPiAuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlcicpO1xuXHRcdFx0XHRpZiAoJHRvZ2dsZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dmFyICR0b2dnbGVyU3RhdGUgPSBmYWxzZTtcblx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxzaG93XScpLmRhdGEoJ2xhYmVsc2hvdycpKTtcblx0XHRcdFx0XHQkdG9nZ2xlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHQkdG9nZ2xlclN0YXRlID0gISR0b2dnbGVyU3RhdGU7XG5cdFx0XHRcdFx0XHRpZiAoJHRvZ2dsZXJTdGF0ZSkge1xuXHRcdFx0XHRcdFx0XHQkZXhwYW5kYWJsZUluc3RhbmNlLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxoaWRlXScpLmRhdGEoJ2xhYmVsaGlkZScpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCRleHBhbmRhYmxlSW5zdGFuY2UuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBhJ1xuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBldmVudCBhamF4XG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tKCk7XG5cblx0XHRleHBhbmRhYmxlLmluaXQoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xuXHRcdHZhciBwcmV2aWV3c3RhdCA9IFtdO1xuXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xuXHRcdGZ1bmN0aW9uIGNsaWNrRXZlbnRzKG9iKSB7XG5cdFx0XHQvLyBzdG9yZSBxdWVyeXMgaW4gYSBzaW5nbGUgdmFyXG5cdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2NvbnRlbnQnKTtcblxuXHRcdFx0Ly8gZ2V0IGlkXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XG5cblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdC8vIHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0Ly8gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHQvLyBTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXG5cdFx0dGhhdC5hamF4UmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKS5vZmYoKTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBhJ1xuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxuXHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcblx0XHRcdFx0aWYgKGN1clN0YXRlICE9IHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddKSB7XG5cdFx0XHRcdFx0Ly8gY3Vyc3RhdGVcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9IGN1clN0YXRlO1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddID0gY3VyU3RhdGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IGZhbHNlICYmICQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2NvbnRlbnQnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyBzZXQgZXZlbnRzXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9ucyB0byBjcmVhdGUgYXJyYXkgc3RhdFxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKFxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgYSdcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZXZlbnQgYWpheFxuXHRcdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KHRoYXQuYWpheFJlZnJlc2gpO1xuXHRcdH07XG5cdH1cblxuXHRjb25zdCBzZXRPcGVuQ2xvc2VDbGFzcyA9IGlkID0+IHtcblx0XHRpZC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGlmIChpZC5wYXJlbnQoKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjbG9zZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnb3BlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlKCk7XG5cblx0XHRleHBhbmRhYmxlLmluaXQoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdHNldE9wZW5DbG9zZUNsYXNzLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2VsZWN0U3lzdGVtICovXG5TYXBwaGlyZVdpZGdldHMuU2VsZWN0U3lzdGVtID0gY29uZmlnID0+IHtcblx0JChmdW5jdGlvbigpIHtcblx0XHR2YXIgV2lkZ2V0SWQgPSBjb25maWcuV2lkZ2V0SWQ7IC8vQ29tYm8gQm94IElkIHRvIGJlIHVzZWQuXG5cdFx0dmFyIENsYXNzID0gY29uZmlnLkNsYXNzOyAvL0FsbCBDb21ibyBib3hlcyB3aXRoIHRoaXMgY2xhc3Mgd2lsbCBiZSBiZSB0cmFuc2Zvcm1lZC5cblx0XHR2YXIgTm9SZXN1bHRzVGV4dCA9IGNvbmZpZy5Ob1Jlc3VsdHNUZXh0OyAvL1RleHQgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzLlxuXHRcdHZhciBpbnB1dFR5cGUgPSBjb25maWcuSW5wdVR5cGU7IC8vT3B0aW9uczogRklsdGVycywgRHJvcGRvd24sIFNlbGVjdDJcblx0XHR2YXIgUHJvbXB0ID0gY29uZmlnLlByb21wdDsgLy9Qcm9tcHQgaW4gc2VhcmNoXG5cdFx0dmFyIFNlbGVjdDJUeXBlID0gY29uZmlnLlNlbGVjdFR5cGU7IC8vIFR5cGUgb2Ygc2VsZWN0MiBjb25maWd1cmF0aW9uXG5cdFx0dmFyIEhhc1NlYXJjaCA9IGNvbmZpZy5IYXNTZWFyY2g7IC8vIGhhcyBzZWFyY2hcblx0XHR2YXIgT25TZWxlY3RpbmdKUyA9IGNvbmZpZy5PblNlbGVjdGluZ0pTO1xuXHRcdHZhciBPblVuU2VsZWN0aW5nSlMgPSBjb25maWcuT25VblNlbGVjdGluZ0pTO1xuXHRcdHZhciBNYXhpbXVtTGVuZ3RoID0gY29uZmlnLk1heGltdW1MZW5ndGg7XG5cdFx0dmFyIFNlbGVjdGVkVmFsdWUgPSBjb25maWcuU2VsZWN0ZWRWYWx1ZTtcblx0XHR2YXIgYWxsb3dDbGVhciA9IGNvbmZpZy5hbGxvd0NsZWFyO1xuXHRcdC8vICBTZWxlY3QyIEFqYXggQ29uZmlndXJhdGlvblxuXHRcdHZhciBBamF4VVJMID0gY29uZmlnLkFqYXhVUkw7XG5cdFx0dmFyIEFqYXhEZWxheSA9IGNvbmZpZy5BamF4RGVsYXk7XG5cdFx0dmFyIFBhZ2luYXRpb25TaXplID0gY29uZmlnLlBhZ2luYXRpb25TaXplO1xuXHRcdHZhciBNaW5pbXVtSW5wdXRMZW5naHQgPSBjb25maWcuTWluaW11bUlucHV0TGVuZ2h0O1xuXHRcdHZhciBTZWFyY2hUZXJtID0gY29uZmlnLlNlYXJjaFRlcm07XG5cdFx0dmFyIFNlYXJjaEV4dHJhUGFyYW0xID0gY29uZmlnLlNlYXJjaEV4dHJhUGFyYW0xO1xuXHRcdHZhciBQYWdlVGVybSA9IGNvbmZpZy5QYWdlVGVybTtcblx0XHR2YXIgQW1vdW50UGFnZSA9IGNvbmZpZy5QYWdlQW1vdW50O1xuXHRcdHZhciBpc011bHRpcGxlID0gY29uZmlnLmlzTXVsdGlwbGU7XG5cdFx0dmFyIFNlbGVjdDJPcHRpb25zID0ge307XG5cdFx0dmFyICRXaWRnZXRJZGVudGlmaWVyO1xuXG5cdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXG5cdFx0U2VsZWN0Mk9wdGlvbnMudGhlbWUgPSAnZGVmYXVsdCBTZWxlY3RTeXN0ZW0nO1xuXG5cdFx0LyogIFxuICAgICAgICAgIENoYW5nZSBzZWxlY3QyIHNlYXJjaCBkaXNwbGF5IFxuICAgICAgICAgICAgICAtTXVsdGlwbGUgU2VsZWN0MiBzZWFyY2ggVUkgbGlrZSBTaW5nbGUgU2VsZWN0MlxuICAgICAgKi9cblx0XHQkLmZuLnNlbGVjdDIuYW1kLmRlZmluZShcblx0XHRcdCdTZWFyY2hMaWtlU2luZ2xlJyxcblx0XHRcdFtcblx0XHRcdFx0J3NlbGVjdDIvdXRpbHMnLFxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bicsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hDb250YWluZXInLFxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsXG5cdFx0XHRdLFxuXHRcdFx0ZnVuY3Rpb24oVXRpbHMsIERyb3Bkb3duLCBBdHRhY2hCb2R5LCBBdHRhY2hDb250YWluZXIsIFNlYXJjaCwgbWluaW11bVJlc3VsdHNGb3JTZWFyY2gpIHtcblx0XHRcdFx0bGV0IGRyb3Bkb3duU2VhcmNoID0gVXRpbHMuRGVjb3JhdGUoRHJvcGRvd24sIFNlYXJjaCk7XG5cdFx0XHRcdGRyb3Bkb3duU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgJHJlbmRlcmVkID0gRHJvcGRvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdC8vIEFkZCBhYmlsaXR5IGZvciBhIHBsYWNlaG9sZGVyIGluIHRoZSBzZWFyY2ggYm94XG5cdFx0XHRcdFx0bGV0IHBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLmdldCgncGxhY2Vob2xkZXJGb3JTZWFyY2gnKSB8fCAnJztcblx0XHRcdFx0XHR2YXIgJHNlYXJjaCA9ICQoXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd25cIj4nICtcblx0XHRcdFx0XHRcdFx0JzxpbnB1dCBjbGFzcz1cInNlbGVjdDItc2VhcmNoX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiJyArXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyICtcblx0XHRcdFx0XHRcdFx0J1wiIHR5cGU9XCJzZWFyY2hcIicgK1xuXHRcdFx0XHRcdFx0XHQnIHRhYmluZGV4PVwiLTFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCInICtcblx0XHRcdFx0XHRcdFx0JyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwidGV4dGJveFwiIC8+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3NwYW4+J1xuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHR0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuXHRcdFx0XHRcdHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblx0XHRcdFx0XHQkc2VhcmNoLmFkZENsYXNzKCdNdWx0aXBsZVNlbGVjdCcpO1xuXG5cdFx0XHRcdFx0JHJlbmRlcmVkLnByZXBlbmQoJHNlYXJjaCk7XG5cdFx0XHRcdFx0JHNlYXJjaC5wYXJlbnQoKS5hZGRDbGFzcygnTXVsdGlwbGVTZWxlY3QnKTtcblx0XHRcdFx0XHRyZXR1cm4gJHJlbmRlcmVkO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIERlY29yYXRlIHRoZSBkcm9wZG93bitzZWFyY2ggd2l0aCB0aGUgY29udGFpbmVyc1xuXHRcdFx0XHRsZXQgYWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKGRyb3Bkb3duU2VhcmNoLCBBdHRhY2hDb250YWluZXIpO1xuXHRcdFx0XHRhZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoYWRhcHRlciwgQXR0YWNoQm9keSk7XG5cblx0XHRcdFx0cmV0dXJuIGFkYXB0ZXI7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdC8qKlxuXHRcdCAqIERlZmF1bHQgQ29uZmlndXJhdGlvbiBuZWVkZWQgdG8gYXNzb2NpYXRlIHRoZSB3aWRnZXQgdG8gdGhlIHNlbGVjdDIgcGx1Z2luXG5cdFx0ICovXG5cdFx0aWYgKFdpZGdldElkID09PSAnJyAmJiBDbGFzcyAhPSAnJykge1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXIgPSAkKCcuJyArIENsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXIgPSAkKCcjJyArIFdpZGdldElkKTtcblx0XHR9XG5cdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnc2VsZWN0LWhpZGUgJyArIGlucHV0VHlwZTtcblxuXHRcdC8vICBTZWxlY3QyT3B0aW9ucy5kcm9wZG93blBhcmVudD0gJCgnIycrUGFyZW50RGl2KTtcblxuXHRcdHZhciBmb3JtYXRSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdHZhciAkc2VsZWN0ZWRPcHRpb25zVmFsdWUgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQnKTtcblx0XHRcdHZhciBzZWxlY3RlZE9wdGlvbnMgPSAkc2VsZWN0ZWRPcHRpb25zVmFsdWUubGVuZ3RoO1xuXHRcdFx0dmFyIHRvdGFsT3B0aW9ucyA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbicpLmxlbmd0aDtcblx0XHRcdHZhciBzZWxlY3RBbGxPcHQgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246Zmlyc3QtY2hpbGQ6c2VsZWN0ZWQnKS5sZW5ndGg7XG5cdFx0XHR2YXIgYWN0aXZlVmFsdWVzID0gJyc7XG5cdFx0XHR2YXIgYWxsT3B0RXhjZXB0QWxsID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnOnNlbGVjdGVkOm5vdChcIi5TZWxlY3RlZEFsbFwiKScpLmxlbmd0aDtcblx0XHRcdHZhciAkYWxsT3B0RXhjZXB0QWxsT2JqID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnOnNlbGVjdGVkOm5vdChcIi5TZWxlY3RlZEFsbFwiKScpO1xuXG5cdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID09PSB0b3RhbE9wdGlvbnMpIHtcblx0XHRcdFx0aWYgKHRvdGFsT3B0aW9ucyAtIDEgPiAzKSB7XG5cdFx0XHRcdFx0cmV0dXJuICdBbGwgU2VsZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRhbGxPcHRFeGNlcHRBbGxPYmouZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZVZhbHVlcyArICcgJyArICQodGhpcylbMF0uaW5uZXJUZXh0O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZVZhbHVlcy5yZXBsYWNlKC8sXFxzKiQvLCAnJyk7XG5cdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVZhbHVlcztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRvdGFsb3B0ID0gdG90YWxPcHRpb25zIC0gMTtcblx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA+IDMpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zICsgJyBvZiAnICsgdG90YWxvcHQgKyAnIHNlbGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID4gMCkge1xuXHRcdFx0XHRcdFx0JHNlbGVjdGVkT3B0aW9uc1ZhbHVlLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZVZhbHVlcyArICcgJyArICQodGhpcylbMF0uaW5uZXJUZXh0ICsgJywgJztcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcblx0XHRcdFx0XHRcdHJldHVybiBhY3RpdmVWYWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnU2VsZWN0IGFuIG9wdGlvbic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmIChOb1Jlc3VsdHNUZXh0ICE9ICcnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5mb3JtYXROb01hdGNoZXMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIE5vUmVzdWx0c1RleHQ7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmIChpbnB1dFR5cGUgIT0gJycpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSBpbnB1dFR5cGU7XG5cdFx0fVxuXG5cdFx0aWYgKGFsbG93Q2xlYXIgPT09ICdUcnVlJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dDbGVhciA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKE1heGltdW1MZW5ndGggIT0gJycpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLm1heGltdW1JbnB1dExlbmd0aCA9IE1heGltdW1MZW5ndGg7XG5cdFx0fVxuXG5cdFx0aWYgKFByb21wdCAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMucGxhY2Vob2xkZXIgPSBQcm9tcHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLnBsYWNlaG9sZGVyID0ge1xuXHRcdFx0XHRpZDogJy0xJywgLy8gdGhlIHZhbHVlIG9mIHRoZSBvcHRpb25cblx0XHRcdFx0dGV4dDogJ1NlbGVjdCBhbiBvcHRpb24nLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICczJykge1xuXHRcdFx0Ly8gU2VsZWN0MiBBamF4XG5cdFx0XHRTZWxlY3QyT3B0aW9ucyA9IHt9O1xuXG5cdFx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0NsZWFyID0gZmFsc2U7XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLnRlbXBsYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24ocmVwbykge1xuXHRcdFx0XHRpZiAoIXJlcG8uZWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybiBQcm9tcHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVwby5mdWxsX25hbWUgfHwgcmVwby50ZXh0O1xuXHRcdFx0fTtcblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVSZXN1bHQgPSBmdW5jdGlvbihyZXBvKSB7XG5cdFx0XHRcdGlmIChyZXBvLmxvYWRpbmcpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwby50ZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBtYXJrdXAgPSAnPGRpdiBjbGFzcz1cIlwiQ2xlYXJmaXhcIlwiPicgKyAnPGRpdiBjbGFzcz1cIlwiVGhlbWVHcmlkX1dpZHRoMTJcIlwiPicgKyByZXBvLnRleHQgKyAnPC9kaXY+Jztcblx0XHRcdFx0aWYgKHJlcG8uZGVzY3JpcHRpb24pIHtcblx0XHRcdFx0XHRtYXJrdXAgKz0gJzxkaXYgY2xhc3M9XCJcIk9TQXV0b01hcmdpblRvcFwiXCI+JyArIHJlcG8uZGVzY3JpcHRpb24gKyAnPC9kaXY+Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXJrdXAgKz0gJzwvZGl2Pic7XG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XG5cdFx0XHR9O1xuXG5cdFx0XHQoU2VsZWN0Mk9wdGlvbnMuYWpheCA9IHtcblx0XHRcdFx0dXJsOiBBamF4VVJMLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkZWxheTogQWpheERlbGF5LFxuXHRcdFx0XHRkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdFx0XHR2YXIgU2VsZWN0MkFqYXhPcHQgPSB7fTtcblx0XHRcdFx0XHR2YXIgU3BsaXRQYXJhbWV0ZXIgPSBTZWFyY2hFeHRyYVBhcmFtMS5zcGxpdCgnLCcpO1xuXHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0LlNlYXJjaFBhcmFtZXRlciA9IHBhcmFtcy50ZXJtO1xuXHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0LlBhZ2UgPSBwYXJhbXMucGFnZSB8fCAxO1xuXHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0LlBhZ2VBbW91bnQgPSBBbW91bnRQYWdlO1xuXG5cdFx0XHRcdFx0U3BsaXRQYXJhbWV0ZXIuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHRcdFx0dmFyIHNwbGl0VGV4dCA9IGVsLnNwbGl0KCc6Jyk7XG5cdFx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdFtzcGxpdFRleHRbMF1dID0gc3BsaXRUZXh0WzFdO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFNlbGVjdDJBamF4T3B0O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24oZGF0YSwgcGFyYW1zKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBhZ2UgPSBwYXJhbXMucGFnZSB8fCAxO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHJlc3VsdHM6IGRhdGEuaXRlbXMsXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdG1vcmU6IHBhcmFtcy5wYWdlICogUGFnaW5hdGlvblNpemUgPCBkYXRhLnRvdGFsX2NvdW50LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjYWNoZTogdHJ1ZSxcblx0XHRcdH0pLFxuXHRcdFx0XHQoU2VsZWN0Mk9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID0gTWluaW11bUlucHV0TGVuZ2h0KTtcblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24obWFya3VwKSB7XG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY29uZmlnLmlzTXVsdGlwbGUpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMubXVsdGlwbGUgPSB0cnVlO1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdTZWxlY3QyQWpheCBNdWx0aXBsZSc7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXggTXVsdGlwbGUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMubXVsdGlwbGUgPSBmYWxzZTtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXgnO1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ1NlbGVjdDJBamF4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKFNlbGVjdGVkVmFsdWUgIT09ICcnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UoU2VsZWN0ZWRWYWx1ZSk7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gbmV3IE9wdGlvbihkYXRhLlZhbHVlLCBkYXRhLklkLCB0cnVlLCB0cnVlKTtcblxuXHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLmFwcGVuZChvcHRpb24pLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbXBvbmVudCBTZWxlY3RTeXN0ZW0gKCR7V2lkZ2V0SWR9KTogU2VsZWN0ZWRWYWx1ZSBtdXN0IGJlIGEgdmFsaWQgSlNPTiFgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IDA7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50YWdzID0gY29uZmlnLkhhc1RhZ3M7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jbG9zZU9uc2VsZWN0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICcyJykge1xuXHRcdFx0Ly9TZWxlY3QyIHdpdGggQ2hlY2tCb3hcblxuXHRcdFx0dmFyIGlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdGlmICgkV2lkZ2V0SWRlbnRpZmllclswXS5vcHRpb25zLmxlbmd0aCA9PT0gJFdpZGdldElkZW50aWZpZXJbMF0uc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRpc0FsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFdpZGdldElkICE9ICcnKSB7XG5cdFx0XHRcdG9wdGlvbiA9IG5ldyBPcHRpb24oJ1NlbGVjdCBBbGwnLCAnQWxsJywgdHJ1ZSwgaXNBbGxTZWxlY3RlZCk7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnByZXBlbmQob3B0aW9uKTtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ1NlbGVjdGVkQWxsJyk7XG5cdFx0XHR9XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IHRydWU7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jbG9zZU9uU2VsZWN0ID0gZmFsc2U7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0h0bWwgPSBmYWxzZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSBmYWxzZTtcblxuXHRcdFx0aWYgKEhhc1NlYXJjaCA9PT0gJ1RydWUnKSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9ICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZSgnU2VhcmNoTGlrZVNpbmdsZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSAtMTtcblx0XHRcdH1cblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnTXVsdGlwbGVTZWxlY3QnO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdNdWx0aXBsZVNlbGVjdCc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVNlbGVjdGlvbiA9IGZvcm1hdFJlc3VsdDtcblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICc2Jykge1xuXHRcdFx0Ly8gU2VsZWN0MiBIdG1sT3B0aW9uc1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMgPSB7fTtcblx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInIHx8IGNvbmZpZy5sb2NhbGUgPT09ICdGQScpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhSHRtbE9wdGlvbiA9IFtdO1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHZhciBvcHRpb25PYmplY3QgPSB7XG5cdFx0XHRcdFx0aWQ6ICQodGhpcykudmFsKCksXG5cdFx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXG5cdFx0XHRcdFx0aHRtbDogJCh0aGlzKS50ZXh0KCksXG5cdFx0XHRcdH07XG5cdFx0XHRcdGRhdGFIdG1sT3B0aW9uLnB1c2gob3B0aW9uT2JqZWN0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdjdXN0b21TZWxlY3QnO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdkcm9wZG93bkN1c3RvbSc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kYXRhID0gZGF0YUh0bWxPcHRpb247XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbihtYXJrdXApIHtcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcblx0XHRcdH07XG5cblx0XHRcdGlmIChTZWxlY3RlZFZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChTZWxlY3RlZFZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbCgnJykudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMScpIHtcblx0XHRcdC8vIFNlbGVjdDIgVGFnQ3VzdG9tXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50YWdzID0gdHJ1ZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ3RhZ0N1c3RvbSc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ3RhZ0N1c3RvbSc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5Ub2tlblNlcGFyYXRvcyA9IFsnLCcsICcgJ107XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jcmVhdGVTZWFyY2hDaG9pY2UgPSBmdW5jdGlvbih0ZXJtLCBkYXRhKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQkKGRhdGEpLmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRleHQubG9jYWxlQ29tcGFyZSh0ZXJtKSA9PT0gMDtcblx0XHRcdFx0XHR9KS5sZW5ndGggPT09IDBcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGlkOiB0ZXJtLFxuXHRcdFx0XHRcdFx0dGV4dDogdGVybSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzUnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIFRhZ011bHRpcGxlXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50YWdzID0gdHJ1ZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ3RhZ1N5c3RlbSc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ3RhZ1N5c3RlbSc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jcmVhdGVUYWcgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdFx0dmFyIHRlcm0gPSAkLnRyaW0ocGFyYW1zLnRlcm0pO1xuXHRcdFx0XHRpZiAodGVybSA9PT0gJycpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkOiAnIycgKyB0ZXJtLFxuXHRcdFx0XHRcdHRleHQ6IHRlcm0sXG5cdFx0XHRcdFx0bmV3VGFnOiB0cnVlLCAvLyBhZGQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmIChIYXNTZWFyY2ggPT09ICdGYWxzZScpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKE9uVW5TZWxlY3RpbmdKUyAhPSAnJyB8fCBPblNlbGVjdGluZ0pTICE9ICcnKSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllclxuXHRcdFx0XHQuc2VsZWN0MihTZWxlY3QyT3B0aW9ucylcblx0XHRcdFx0Lm9uKCdzZWxlY3QyOnVuc2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdCQodGhpcykuZGF0YSgndW5zZWxlY3RpbmcnLCB0cnVlKTtcblx0XHRcdFx0XHRPblVuU2VsZWN0aW5nSlM7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignc2VsZWN0OnNlbGVjdGluZycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRPblNlbGVjdGluZ0pTO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3NlbGVjdDpvcGVuaW5nJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ3Vuc2VsZWN0aW5nJykpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlRGF0YSgndW5zZWxlY3RpbmcnKTtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignc2VsZWN0Om9wZW4nLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3QyOmNsb3NlJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICcyJykge1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0dmFyIGlkd2lkZ2V0ID0gJyMnICsgV2lkZ2V0SWQ7XG5cblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFVuc2VsZWN0ZWRJZCA9IGUucGFyYW1zLmRhdGEuaWQ7XG5cdFx0XHRcdFx0aWYgKFVuc2VsZWN0ZWRJZCA9PT0gJ0FsbCcpIHtcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZEl0ZW1zID0gW107XG5cdFx0XHRcdFx0XHR2YXIgYWxsT3B0aW9ucyA9ICQoaWR3aWRnZXQgKyAnIG9wdGlvbicpO1xuXHRcdFx0XHRcdFx0YWxsT3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZEl0ZW1zLnB1c2goJCh0aGlzKS52YWwoKSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChzZWxlY3RlZEl0ZW1zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dmFyIHRvdGFsT3B0aW9ucyA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbicpLmxlbmd0aDtcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPT09IHRvdGFsT3B0aW9ucyAtIDEgJiYgJChpZHdpZGdldCArICcgPiAgb3B0aW9uOnNlbGVjdGVkOmZpcnN0LWNoaWxkJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZEl0ZW1zID0gW107XG5cdFx0XHRcdFx0XHRcdHZhciBhbGxPcHRpb25zID0gJChpZHdpZGdldCArICcgb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdGFsbE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEl0ZW1zLnB1c2goJCh0aGlzKS52YWwoKSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChzZWxlY3RlZEl0ZW1zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLm9uKCdzZWxlY3QyOnVuc2VsZWN0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFVuc2VsZWN0ZWRJZCA9IGUucGFyYW1zLmRhdGEuaWQ7XG5cdFx0XHRcdFx0aWYgKFVuc2VsZWN0ZWRJZCA9PT0gJ0FsbCcpIHtcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQgKyAnID4gb3B0aW9uJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdFx0JChpZHdpZGdldClcblx0XHRcdFx0XHRcdFx0LnZhbCgnJylcblx0XHRcdFx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0Ly8kKGlkd2lkZ2V0ICsnID4gb3B0aW9uJykuYXR0cignc2VsZWN0ZWQnLCBcInNlbGVjdGVkXCIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKGlkd2lkZ2V0ICsgJyA+IG9wdGlvbjpmaXJzdC1jaGlsZCcpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgU2hpZnRDb250YWluZXIgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0bGV0IHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcjtcblx0bGV0ICRzaGlmdENvbnRhaW5lcklkID0gJCgpO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IHNoaWZ0Q29udGFpbmVySWQgPT4ge1xuXHRcdC8vICQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdCRzaGlmdENvbnRhaW5lcklkID0gJChzaGlmdENvbnRhaW5lcklkKTtcblxuXHRcdGhhc1Njcm9sbEJhcigpO1xuXHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcblxuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0Ly8gXHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0Ly8gfSwgMTUwMCk7XG5cblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX19hcnJvdycpXG5cdFx0XHQub2ZmKCdtb3VzZWRvd24nKVxuXHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0XHRcdH0sIDE1MDApO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2hpZnRUYWJsZSA9ICgpID0+IHtcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdHZhciAkZWxGbGFnID0gJCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZpbmQoJy5GbGFnTGluZScpO1xuXHRcdFx0dmFyICRlbEZsYWdUaW1lID0gJCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZpbmQoJy5GbGFnTGluZV90aW1lJyk7XG5cdFx0XHR2YXIgJGNvbHVtbkZsYWcgPSAkZWxGbGFnLmRhdGEoJ2NvbHVtbicpO1xuXHRcdFx0dmFyICRtaW51dGVzRmxhZyA9ICRlbEZsYWcuZGF0YSgnbWludXRlcycpO1xuXHRcdFx0dmFyICRzbG90cyA9ICQodGhpcylcblx0XHRcdFx0LmNsb3Nlc3QoJy5TaGlmdENvbnRhaW5lcicpXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENlbGxDb250ZW50Jyk7XG5cdFx0XHR2YXIgJHNsb3RXaWR0aCA9IE1hdGgucm91bmQoJHNsb3RzLmVxKDApLndpZHRoKCkpO1xuXHRcdFx0dmFyIG1pbnV0ZXNQb3NpdGlvbiA9ICgkbWludXRlc0ZsYWcgKiAkc2xvdFdpZHRoKSAvIDYwO1xuXG5cdFx0XHQvLyBoYW5kbGUgY3VycmVudCB0aW1lIGZsb2cgaG9yaXpvbnRhbCBwb3NpdGlvbmluZ1xuXHRcdFx0dmFyIHNsb3RzUG9zaXRpb24gPSBbXTtcblx0XHRcdCRzbG90cy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0XHRzbG90c1Bvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0fSk7XG5cdFx0XHQkZWxGbGFnLmNzcygnbGVmdCcsIHNsb3RzUG9zaXRpb25bJGNvbHVtbkZsYWcgLSAxXSArIG1pbnV0ZXNQb3NpdGlvbik7XG5cdFx0XHQkZWxGbGFnLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0aWYgKCRjb2x1bW5GbGFnID09PSAkc2xvdHMubGVuZ3RoKSB7XG5cdFx0XHRcdCRlbEZsYWdUaW1lLmNzcyh7XG5cdFx0XHRcdFx0cmlnaHQ6ICcxcHgnLFxuXHRcdFx0XHRcdGxlZnQ6ICdhdXRvJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGhhbmRsZSBjZWxscyB0aGF0IG1pZ2h0IHNwYW4gb3ZlciBzZXZlcmFsIHNsb3RzXG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDYXJkJylcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsUm93KSB7XG5cdFx0XHRcdFx0dmFyIHJvd0hhc1NwYW5uZWRDZWxsID0gZmFsc2U7XG5cdFx0XHRcdFx0JChlbFJvdylcblx0XHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDZWxsQ29udGVudCcpXG5cdFx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxDZWxsKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBjb2xzcGFuID0gJChlbENlbGwpLmRhdGEoJ2NvbHNwYW4nKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNvbHNwYW4gPT09IHNsb3RzUG9zaXRpb24ubGVuZ3RoIHx8IHJvd0hhc1NwYW5uZWRDZWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6ICcxIDEgYXV0bycsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29sc3BhbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRyb3dIYXNTcGFubmVkQ2VsbCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiArKHNsb3RzUG9zaXRpb25bY29sc3Bhbl0gLSBzbG90c1Bvc2l0aW9uWzBdKSArICdweCcsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gaGFuZGxlIGhvcml6b250YWwgc2Nyb2xsIGJlaGF2aW9yXG5cdFx0XHRpZiAoZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aCkge1xuXHRcdFx0XHQkKGVsKS53aWR0aChlbC5zY3JvbGxXaWR0aCk7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0XHQuZmluZCgnLlNoaWZ0Q29udGFpbmVyX2hlYWRlcicpXG5cdFx0XHRcdFx0LndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoZWwpLndpZHRoKCdhdXRvJyk7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0XHQuZmluZCgnLlNoaWZ0Q29udGFpbmVyX2hlYWRlcicpXG5cdFx0XHRcdFx0LndpZHRoKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFzU2Nyb2xsQmFyID0gKCkgPT4ge1xuXHRcdHZhciAkU2Nyb2xsYWJsZURpdiA9ICRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJyk7XG5cdFx0aWYgKCRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJykubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCRTY3JvbGxhYmxlRGl2LmdldCgwKS5zY3JvbGxIZWlnaHQgPiAkU2Nyb2xsYWJsZURpdi5oZWlnaHQoKSkge1xuXHRcdFx0XHR2YXIgJGxhc3RDZWxsID0gJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLklzVGltZXI6bGFzdC1jaGlsZCcpO1xuXHRcdFx0XHQkbGFzdENlbGwuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJzdweCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZWRyYXdTaGlmdFRpbWVsaW5lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dChzaGlmdFRpbWVsaW5lUmVzaXplVGltZXIpO1xuXHRcdHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRoYXNTY3JvbGxCYXIoKTtcblx0XHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcblx0XHR9LCA0MDApO1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xuXHRcdHZhciBoQ29udGVudCA9ICQoJy5Db250ZW50JykuaGVpZ2h0KCk7XG5cdFx0dmFyIGhXaW5kb3cgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cblx0XHRpZiAoaENvbnRlbnQgPiBoV2luZG93KSByZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRjaGVja1Njcm9sbCxcblx0XHRyZWRyYXdTaGlmdFRpbWVsaW5lLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdylcblx0Lm9mZigncmVzaXplLkdlbmVyaWNHYWxsZXJ5Jylcblx0Lm9uKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknLCBmdW5jdGlvbigpIHtcblx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xuXG5cdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKTtcblxuXHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCAxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0sIDE1MDApO1xuXHR9KTtcblxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdGlmICghISQoJy5TaGlmdENvbnRhaW5lcicpLmxlbmd0aCkge1xuXHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xuXHRcdH0sIDQwMCk7XG5cblx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgNTAwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0sIDYwMCk7XG5cblx0XHQkKCcubmF2aWdhdGlvbi1jb250cm9sLWl0ZW0nKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0fSk7XG5cblx0XHQvL1ZlcmlmeSB0aGUgc2Nyb2xsIGlmIHRvb2x0aXAgb3BlbmVkXG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnLnRvb2x0aXBzdGVyLWJhc2UnKS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItYmFzZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xuXHRcdFx0fSwgNDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDUwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdH0sIDYwMCk7XG5cblx0XHRcdC8vIFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lO1xuXHRcdH0pO1xuXHR9XG59KTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlICovXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZSA9IHdpZGdldElkID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3QgJHNoaWZ0VGFibGUgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRcdGNvbnN0ICRoZWFkZXJDZWxsTGlzdCA9ICRzaGlmdFRhYmxlLmZpbmQoJy5TaGlmdFRhYmxlX19IZWFkZXJMYWJlbHMgLlNoaWZ0VGFibGVDZWxsJyk7XG5cdFx0XHRjb25zdCAkaG91ckxpbmUgPSAkc2hpZnRUYWJsZS5maW5kKCcuSG91ckxpbmUnKTtcblxuXHRcdFx0Y29uc3QgY29sdW1uTGluZSA9ICRob3VyTGluZS5kYXRhKCdjb2x1bW4nKTtcblx0XHRcdGNvbnN0IG1pbnV0ZXNMaW5lID0gJGhvdXJMaW5lLmRhdGEoJ21pbnV0ZXMnKTtcblxuXHRcdFx0Y29uc3QgY2VsbFdpZHRoID0gJGhlYWRlckNlbGxMaXN0LmVxKDApLndpZHRoKCk7XG5cdFx0XHRjb25zdCBtaW51dGVzUG9zaXRpb24gPSAoY2VsbFdpZHRoIC8gNjApICogbWludXRlc0xpbmU7XG5cblx0XHRcdC8vIEhhbmRsZSBjdXJyZW50IGhvdXIgbGluZSBob3Jpem9udGFsIHBvc2l0aW9uaW5nXG5cdFx0XHRjb25zdCBjZWxsUG9zaXRpb24gPSBbXTtcblxuXHRcdFx0JGhlYWRlckNlbGxMaXN0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHRcdGNlbGxQb3NpdGlvbi5wdXNoKCQodGhpcykucG9zaXRpb24oKS5sZWZ0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkaG91ckxpbmUuY3NzKCdsZWZ0JywgY2VsbFBvc2l0aW9uW2NvbHVtbkxpbmUgLSAxXSArIG1pbnV0ZXNQb3NpdGlvbik7XG5cdFx0XHQkaG91ckxpbmUuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblx0XHR9LCA1MDApO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgU2hpZnRUYWJsZUNhcmQgKi9cblNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlQ2FyZCA9IHdpZGdldElkID0+IHtcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xuXHRjb25zdCAkYWN0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLk1vcmVBY3Rpb25zJyk7XG5cdGNvbnN0IGhhc0FjdGlvbnMgPSAkYWN0aW9ucy5sZW5ndGggPiAwO1xuXG5cdGlmIChoYXNBY3Rpb25zKSB7XG5cdFx0JGFjdGlvbnMub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQkKCcuU2hpZnRUYWJsZUNhcmQnKS5yZW1vdmVDbGFzcygnU2hpZnRUYWJsZUNhcmQtLXNlbGVjdGVkJyk7XG5cdFx0XHQkY29tcG9uZW50LmFkZENsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgb25DbGlja091dHNpZGUgPSBlID0+IHtcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuXHRcdFx0aWYgKCFlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJGNvbXBvbmVudCkgJiYgISR0YXJnZXQucGFyZW50cygkY29tcG9uZW50KS5pcygkY29tcG9uZW50KSkge1xuXHRcdFx0XHQkY29tcG9uZW50LnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcbiIsIlNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlQ2FyZFByb2dyZXNzID0gY29uZmlnID0+IHtcblx0Y29uc3QgREVGQVVMVF9QQURESU5HID0gODtcblx0Y29uc3QgREVGQVVMVF9DQVJEX0hFSUdIVCA9IDU2O1xuXG5cdGNvbnN0IHNldFRhYmxlQ2FyZFByb2dyZXNzID0gKCkgPT4ge1xuXHRcdGNvbnN0IGNhcmRQcm9ncmVzSUQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdFx0Y29uc3Qgc3RhcnRDb2x1bW4gPSBjb25maWcuc3RhcnRDb2x1bW47XG5cdFx0Y29uc3QgZW5kQ29sdW1uID0gY29uZmlnLmVuZENvbHVtbjtcblxuXHRcdGNvbnN0ICRjYXJkUHJvZ3Jlc3MgPSAkKCcjJyArIGNhcmRQcm9ncmVzSUQpO1xuXHRcdGNvbnN0ICRzaGlmdFRhYmxlID0gJGNhcmRQcm9ncmVzcy5jbG9zZXN0KCcuU2hpZnRUYWJsZScpO1xuXHRcdGNvbnN0ICR0YWJsZUNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0NvbnRlbnQgLlNoaWZ0VGFibGVDZWxsJyk7XG5cdFx0Y29uc3QgJHRhYmxlUm93Q29udGVudCA9ICRjYXJkUHJvZ3Jlc3MuY2xvc2VzdCgnLlNoaWZ0VGFibGVSb3dfX0NvbnRlbnQnKTtcblx0XHRjb25zdCAkdGFibGVDYXJkID0gJHRhYmxlUm93Q29udGVudC5maW5kKCcuU2hpZnRUYWJsZUNhcmQnKTtcblx0XHRjb25zdCAkY2FyZFByb2dyZXNzTGlzdCA9ICR0YWJsZVJvd0NvbnRlbnQuZmluZCgnLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MnKTtcblx0XHRjb25zdCAkcHJvZ3Jlc3NCYXJMaXN0ID0gJGNhcmRQcm9ncmVzcy5maW5kKCcuUHJvZ3Jlc3NCYXJXcmFwJyk7XG5cdFx0Y29uc3QgJGFjdGlvbnMgPSAkY2FyZFByb2dyZXNzLmZpbmQoJy5Nb3JlQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY2FyZHNUb3RhbCA9ICR0YWJsZUNhcmQubGVuZ3RoO1xuXHRcdGNvbnN0IHRpbWVTbG90V2lkdGggPSAkdGFibGVDZWxsTGlzdFsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHRjb25zdCBjb2xGaWxsID0gcGFyc2VJbnQoZW5kQ29sdW1uKSAtIHBhcnNlSW50KHN0YXJ0Q29sdW1uKSArIDE7XG5cdFx0Y29uc3QgbWludXRlVmFsdWVXaWR0aCA9IHRpbWVTbG90V2lkdGggLyA2MDtcblx0XHRjb25zdCBoYXNBY3Rpb25zID0gJGFjdGlvbnMubGVuZ3RoID4gMDtcblxuXHRcdGxldCB0b3RhbExlZnQgPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYXJzZUludChzdGFydENvbHVtbik7IGkrKykge1xuXHRcdFx0dG90YWxMZWZ0ICs9ICR0YWJsZUNlbGxMaXN0W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdH1cblxuXHRcdGxldCByb3VuZFdpZHRoID0gTWF0aC5yb3VuZCgodGltZVNsb3RXaWR0aCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG5cdFx0Y29uc3QgcGFkZGluZ09mZnNldCA9IERFRkFVTFRfUEFERElORyAqIDI7XG5cdFx0Y29uc3QgbmV3V2lkdGggPSBjb2xGaWxsICogcm91bmRXaWR0aCAtIHBhZGRpbmdPZmZzZXQ7XG5cdFx0Y29uc3QgZGlyZWN0aW9uID0gJCgnLlBhZ2UnKS5oYXNDbGFzcygnQVInKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdGQScpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuXHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd3aWR0aCcsIGAke25ld1dpZHRofXB4YCk7XG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ21heC13aWR0aCcsICd1bnNldCcpO1xuXHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKGRpcmVjdGlvbiwgYCR7KHRvdGFsTGVmdCArPSBERUZBVUxUX1BBRERJTkcpfXB4YCk7XG5cblx0XHRpZiAoY2FyZHNUb3RhbCA+IDApIHtcblx0XHRcdGxldCBjb3VudCA9IDA7XG5cblx0XHRcdCR0YWJsZUNhcmQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHRjb25zdCBpc092ZXJsYXBlZCA9IGNoZWNrRm9yT3ZlcmxhcCgkY2FyZFByb2dyZXNzWzBdLCAkdGhpc1swXSk7XG5cblx0XHRcdFx0aWYgKGlzT3ZlcmxhcGVkID09PSB0cnVlICYmIGNvdW50IDwgJGNhcmRQcm9ncmVzc0xpc3QubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3RvcCcsICR0aGlzWzBdLm9mZnNldFRvcCArICRjYXJkUHJvZ3Jlc3MuaGVpZ2h0KCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y291bnQgPSBjb3VudCsrO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRjYXJkUHJvZ3Jlc3NMaXN0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBoZWxwZXIgPSBoZWxwZXJPYmooJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KTtcblxuXHRcdFx0XHRpZiAoaGVscGVyLmlzT3ZlcmxhcGVkKSB7XG5cdFx0XHRcdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3RvcCcsICR0aGlzWzBdLm9mZnNldFRvcCArIDEzMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3RvcCcsICR0YWJsZVJvd0NvbnRlbnQuaGVpZ2h0KCkgLSBERUZBVUxUX1BBRERJTkcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gNCArIERFRkFVTFRfQ0FSRF9IRUlHSFQgKyBERUZBVUxUX1BBRERJTkcgKiAyO1xuXG5cdFx0XHQkdGFibGVSb3dDb250ZW50LmhlaWdodCgkY2FyZFByb2dyZXNzTGlzdC5sYXN0KCkucG9zaXRpb24oKS50b3AgKyBvZmZzZXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY2FyZFByb2dyZXNzTGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0Y29uc3QgaGVscGVyID0gaGVscGVyT2JqKCR0aGlzLCAkY2FyZFByb2dyZXNzLCAkY2FyZFByb2dyZXNzTGlzdCk7XG5cblx0XHRcdFx0aWYgKGhlbHBlci5pc092ZXJsYXBlZCkge1xuXHRcdFx0XHRcdGNvbnN0IG9mZnNldCA9IERFRkFVTFRfQ0FSRF9IRUlHSFQgKyBERUZBVUxUX1BBRERJTkcgKiAyO1xuXG5cdFx0XHRcdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3RvcCcsICRjYXJkUHJvZ3Jlc3NbMF0ub2Zmc2V0VG9wICsgb2Zmc2V0ICsgJ3B4Jyk7XG5cdFx0XHRcdFx0aGVscGVyLiRzaGlmdENhcmQuaGVpZ2h0KGhlbHBlci4kc2hpZnRDYXJkLmhlaWdodCgpICsgJHRoaXNbMF0ub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGltZVNsb3RXaWR0aCAhPT0gJHRhYmxlQ2VsbExpc3RbMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIHtcblx0XHRcdFx0c2V0VGFibGVDYXJkUHJvZ3Jlc3MoY29uZmlnKTtcblx0XHRcdH1cblx0XHR9LCA1MDApO1xuXG5cdFx0aWYgKGhhc0FjdGlvbnMpIHtcblx0XHRcdCRhY3Rpb25zLm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MtLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG5cdFx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuXHRcdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY2FyZFByb2dyZXNzKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkUHJvZ3Jlc3MpLmlzKCRjYXJkUHJvZ3Jlc3MpKSB7XG5cdFx0XHRcdFx0JGNhcmRQcm9ncmVzcy5yZW1vdmVDbGFzcygnU2hpZnRUYWJsZUNhcmRQcm9ncmVzcy0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvKiRwcm9ncmVzc0Jhckxpc3QuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0Y29uc3QgYmVnaW5zbG90ID0gJCh0aGlzKS5kYXRhKCdiZWdpbnNsb3QnKTtcblx0XHRcdGNvbnN0IGJlZ2lubWludXRlID0gJCh0aGlzKS5kYXRhKCdiZWdpbm1pbnV0ZScpO1xuXHRcdFx0Y29uc3QgZW5kc2xvdCA9ICQodGhpcykuZGF0YSgnZW5kc2xvdCcpO1xuXHRcdFx0Y29uc3QgZW5kbWludXRlID0gJCh0aGlzKS5kYXRhKCdlbmRtaW51dGUnKTtcblx0XHRcdGNvbnN0IGFjdGlvbnNXaWR0aCA9IDU2O1xuXG5cdFx0XHRjb25zdCBwcm9ncmVzc0Jhck1pbnV0ZXMgPSAoZW5kc2xvdCAtIGJlZ2luc2xvdCkgKiA2MCArIGVuZG1pbnV0ZSAtIGJlZ2lubWludXRlO1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3NlbmRXaXRoUGVyID0gcHJvZ3Jlc3NCYXJNaW51dGVzICogbWludXRlVmFsdWVXaWR0aDtcblxuXHRcdFx0Y29uc3QgJHByb2dyZXNzVG90YWwgPSAkKHRoaXMpLmZpbmQoJy5Qcm9ncmVzc0Jhcl9fYW5pbWF0aW9uJyk7XG5cblx0XHRcdC8vJCh0aGlzKS5jc3MoJ2xlZnQnLCAoKGJlZ2luc2xvdCAtIDEpICogNjAgKyBiZWdpbm1pbnV0ZSkgKiBtaW51dGVWYWx1ZVdpZHRoICsgJ3B4Jyk7XG5cdFx0XHQkcHJvZ3Jlc3NUb3RhbC5jc3MoJ3dpZHRoJywgcHJvZ3Jlc3NlbmRXaXRoUGVyIC0gYWN0aW9uc1dpZHRoICsgJ3B4Jyk7XG5cdFx0fSk7Ki9cblx0fTtcblxuXHRjb25zdCBjaGVja0Zvck92ZXJsYXAgPSAoZWwxLCBlbDIpID0+IHtcblx0XHRjb25zdCBib3VuZHMxID0gZWwxLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IGJvdW5kczIgPSBlbDIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRjb25zdCBmaXJzdElzdExlZnRtb3N0ID0gYm91bmRzMS5sZWZ0IDw9IGJvdW5kczIubGVmdDtcblx0XHRjb25zdCBsZWZ0ZXN0ID0gZmlyc3RJc3RMZWZ0bW9zdCA/IGJvdW5kczEgOiBib3VuZHMyO1xuXHRcdGNvbnN0IHJpZ2h0ZXN0ID0gZmlyc3RJc3RMZWZ0bW9zdCA/IGJvdW5kczIgOiBib3VuZHMxO1xuXG5cdFx0Ly8gUmVwbGFjZSA+IHRvIHRvID49IGlmIGJvcmRlciBvdmVybGFwIHNob3VsZCBjb3VudFxuXHRcdGlmIChsZWZ0ZXN0LnJpZ2h0ID4gcmlnaHRlc3QubGVmdCkge1xuXHRcdFx0Y29uc3QgZmlyc3RJc1RvcG1vc3QgPSBib3VuZHMxLnRvcCA8PSBib3VuZHMyLnRvcDtcblx0XHRcdGNvbnN0IHRvcGVzdCA9IGZpcnN0SXNUb3Btb3N0ID8gYm91bmRzMSA6IGJvdW5kczI7XG5cdFx0XHRjb25zdCBib3R0b21lc3QgPSBmaXJzdElzVG9wbW9zdCA/IGJvdW5kczIgOiBib3VuZHMxO1xuXG5cdFx0XHQvLyBSZXBsYWNlID4gdG8gPj0gaWYgYm9yZGVyIHNob3VsZCBjb3VudFxuXHRcdFx0cmV0dXJuIHRvcGVzdC5ib3R0b20gPiBib3R0b21lc3QudG9wO1xuXHRcdH0gZWxzZSByZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0Y29uc3QgaGVscGVyT2JqID0gKCR0aGlzLCAkY2FyZFByb2dyZXNzLCAkY2FyZFByb2dyZXNzTGlzdCkgPT4ge1xuXHRcdGNvbnN0ICRzaGlmdENhcmQgPSAkdGhpcy5jbG9zZXN0KCcuU2hpZnRUYWJsZVJvd19fQ29udGVudCcpO1xuXHRcdGxldCBpc092ZXJsYXBlZCA9IGNoZWNrRm9yT3ZlcmxhcCgkY2FyZFByb2dyZXNzWzBdLCAkdGhpc1swXSk7XG5cdFx0Y29uc3QgY3JlYXRlZElkID0gJGNhcmRQcm9ncmVzcy5hdHRyKCdpZCcpO1xuXHRcdGNvbnN0IGxvb3BlZElkID0gJHRoaXMuYXR0cignaWQnKTtcblx0XHRjb25zdCAkZmlyc3RTbG90Q3JlYXRlZCA9ICRjYXJkUHJvZ3Jlc3NMaXN0WzBdO1xuXG5cdFx0aXNPdmVybGFwZWQgPSBpc092ZXJsYXBlZCA9PT0gdHJ1ZSAmJiBjcmVhdGVkSWQgIT0gbG9vcGVkSWQgJiYgY3JlYXRlZElkICE9ICRmaXJzdFNsb3RDcmVhdGVkLmlkO1xuXG5cdFx0cmV0dXJuIHsgJHNoaWZ0Q2FyZCwgY3JlYXRlZElkLCBsb29wZWRJZCwgJGZpcnN0U2xvdENyZWF0ZWQsIGlzT3ZlcmxhcGVkIH07XG5cdH07XG5cblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0c2V0VGFibGVDYXJkUHJvZ3Jlc3MoY29uZmlnKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRpZiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0pIHtcblx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3dbY29uZmlnLndpZGdldElkXS5yZXNpemVkRmluaXNoZWQpO1xuXHRcdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0ucmVzaXplZEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0VGFibGVDYXJkUHJvZ3Jlc3MoY29uZmlnKTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgU2hpZnRUYWJsZUNhcmRIb3ZlciAqL1xuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkSG92ZXIgPSB3aWRnZXRJZCA9PiB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRjYXJkID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0Y29uc3QgJGNhcmRDb250ZW50ID0gJGNhcmQuZmluZCgnLlNoaWZ0VGFibGVDYXJkSG92ZXJfX0NvbnRlbnQnKTtcblxuXHRcdCRjYXJkQ29udGVudC5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCRjYXJkLmFkZENsYXNzKCdTaGlmdFRhYmxlQ2FyZEhvdmVyLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY2FyZCkgJiYgISR0YXJnZXQucGFyZW50cygkY2FyZCkuaXMoJGNhcmQpKSB7XG5cdFx0XHRcdCRjYXJkLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZEhvdmVyLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgU2lkZU1lbnVTdHJ1Y3R1cmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjbGFzcyBTaWRlTWVudSB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdH07XG5cblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XG5cdFx0fVxuXG5cdFx0c2V0TWFpbk1lbnVXaWR0aCgpIHtcblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgJHNpZGVCYXJJZnJhbWUgPSAkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyLm5vdEV4cGFuZGFibGUnKTtcblxuXHRcdFx0XHRpZiAoJHNpZGVCYXJJZnJhbWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y29uc3QgJG1haW5NZW51ID0gJCgnLkxheW91dEJhc2UtTWFpbk1lbnUnKTtcblx0XHRcdFx0XHQkbWFpbk1lbnUuY3NzKHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnY2FsYygxMDAlIC0gMjYycHgpJyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b3BlbkNsb3NlTWVudSh0b09wZW4pIHtcblx0XHRcdGlmICh0b09wZW4pIHtcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LmFkZENsYXNzKCdTaWRlTWVudS0tb3BlbicpO1xuXG5cdFx0XHRcdCQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXInKS5jc3Moe1xuXHRcdFx0XHRcdHpJbmRleDogMCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ1NpZGVNZW51LS1vcGVuJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XG5cdFx0XHRcdFx0ekluZGV4OiA3MCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0d2luZG93Q2xpY2soJGNvbXBvbmVudCkge1xuXHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJylcblx0XHRcdFx0Lm9uKCdjbGljay5TaWRlTWVudVN0cnVjdHVyZScsIGV2ZW50ID0+IHtcblx0XHRcdFx0XHRjb25zdCBpc01lbnVJdGVtID0gZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudCAmJiAkKGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQpLmhhc0NsYXNzKCdNZW51SXRlbScpO1xuXG5cdFx0XHRcdFx0aWYgKCFpc01lbnVJdGVtKSB7XG5cdFx0XHRcdFx0XHQkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHQkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdFx0XHRcdFx0JCh3aW5kb3cpLm9mZignY2xpY2suU2lkZU1lbnVTdHJ1Y3R1cmUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcblx0XHRcdHRoaXMuc2V0TWFpbk1lbnVXaWR0aCgpO1xuXG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt0aGlzLm9wdGlvbnMud2lkZ2V0SWR9YCk7XG5cdFx0XHR0aGlzLiR0cmlnZ2VyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVHJpZ2dlcicpO1xuXHRcdFx0dGhpcy4kc2hpZWxkID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fU2hpZWxkJyk7XG5cdFx0XHR0aGlzLiRjbG9zZUJ1dHRvbiA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVDbG9zZScpO1xuXHRcdFx0dGhpcy4kdGFiSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RhYkl0ZW1zIC5NZW51SXRlbScpO1xuXHRcdFx0dGhpcy4kbWVudUl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtX19JdGVtVGl0bGUnKTtcblx0XHRcdHRoaXMuJHN1Ykl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtX3N1Ykl0ZW1zJyk7XG5cdFx0XHR0aGlzLiRkZXBhcnRtZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVGFicyAuRGVwYXJ0bWVudE5hbWUnKTtcblxuXHRcdFx0Ly90aGlzLiR0cmlnZ2VyLmhpZGUoKTtcblx0XHRcdHRoaXMuJGRlcGFydG1lbnQuaGlkZSgpO1xuXG5cdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLmlmcmFtZUNvbnRhaW5lcicpO1xuXHRcdFx0dGhpcy4kaWZyYW1lQ29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxkcy1yaW5nIE9JXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lci5maW5kKCdpZnJhbWUnKS5sb2FkKCgpID0+IHtcblx0XHRcdFx0dGhpcy4kaWZyYW1lQ29udGFpbmVyLmZpbmQoJy5sZHMtcmluZycpLmZhZGVPdXQoKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpKSB7XG5cdFx0XHRcdFx0Ly90aGlzLiR0cmlnZ2VyLnNob3coKTtcblx0XHRcdFx0XHR0aGlzLiRkZXBhcnRtZW50LnNob3coKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHRyaWdnZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KHRydWUpKTtcblx0XHRcdHRoaXMuJHNoaWVsZC5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUoZmFsc2UpKTtcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xuXG5cdFx0XHR0aGlzLiR0YWJJdGVtLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdGNvbnN0ICRsaW5rID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fbGFiZWwgYScpO1xuXG5cdFx0XHRcdGlmICgkbGluay5sZW5ndGgpICRsaW5rLmdldCgwKS5jbGljaygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJG1lbnVJdGVtLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdFx0Y29uc3QgaXNJY29uID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ljb24gaWNvbi1jaGFuZ2Vkb3duJztcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCAmJiAhaXNJY29uKSByZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCk7XG5cdFx0XHRcdGNvbnN0ICRzdWJJdGVtcyA9ICR0YXJnZXQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJyk7XG5cdFx0XHRcdGNvbnN0ICRsaW5rID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fbGFiZWwgYScpO1xuXG5cdFx0XHRcdGlmICgkbGluay5sZW5ndGgpICRsaW5rLmdldCgwKS5jbGljaygpO1xuXG5cdFx0XHRcdGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcdCR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCRzdWJJdGVtcy5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudFxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5hY3RpdmUnKVxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudFxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5zaG93Jylcblx0XHRcdFx0XHRcdC5ub3QoJHRhcmdldClcblx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnc2hvdycpO1xuXG5cdFx0XHRcdFx0JHRhcmdldC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJykpIHtcblx0XHRcdFx0XHRcdHRoaXMud2luZG93Q2xpY2sodGhpcy4kY29tcG9uZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRzdWJJdGVtLm9uKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcblxuXHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdC5maW5kKCcuU2lkZU1lbnVfX1RhYkl0ZW1zID4gZGl2OmVtcHR5Jylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcmVzaXplVGFicyA9ICgkY29tcG9uZW50LCAkbWVudVRhYnMsIGlzUmVjdXJzaXZlKSA9PiB7XG5cdFx0Y29uc3QgJG1lbnVUcmlnZ2VyID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RyaWdnZXInKTtcblx0XHRjb25zdCBoZWFkZXJXaWR0aCA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19IZWFkZXInKS5vdXRlcldpZHRoKCk7XG5cdFx0Y29uc3QgJG1lbnVJdGVtcyA9ICRtZW51VGFicy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpO1xuXHRcdGNvbnN0IHRhYnNXaWR0aCA9ICRtZW51SXRlbXMubGVuZ3RoID8gJG1lbnVJdGVtcy5vdXRlcldpZHRoKCkgOiAkbWVudVRhYnMub3V0ZXJXaWR0aCgpO1xuXG5cdFx0Y29uc3QgZml4ZWRWYWx1ZSA9ICQod2luZG93LnBhcmVudCkud2lkdGgoKSA8IDEwMjQgPyAxODAgOiAxOTY7XG5cdFx0bGV0IGhhc0l0ZW1Ub1JlbW92ZSA9IHRydWU7XG5cblx0XHRpZiAodGFic1dpZHRoID4gMCAmJiB0YWJzV2lkdGggKyBmaXhlZFZhbHVlID4gaGVhZGVyV2lkdGggJiYgaGFzSXRlbVRvUmVtb3ZlKSB7XG5cdFx0XHRjb25zdCAkbW9yZU9wdGlvbnMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCcpO1xuXHRcdFx0Y29uc3QgJGxhc3RJdGVtID0gJG1lbnVUYWJzXG5cdFx0XHRcdC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW0nKVxuXHRcdFx0XHQubGFzdCgpXG5cdFx0XHRcdC5kZXRhY2goKTtcblxuXHRcdFx0aWYgKCEkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKS5sZW5ndGgpIHtcblx0XHRcdFx0JCgnPGRpdiBjbGFzcz1cIlNpZGVNZW51X19NZW51SXRlbXNcIj48L2Rpdj4nKS5hcHBlbmRUbygkbW9yZU9wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1vcmVPcHRpb25zLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0XHQkbGFzdEl0ZW0ucHJlcGVuZFRvKCRtZW51SXRlbXMpO1xuXG5cdFx0XHQkbWVudVRyaWdnZXIuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuXHRcdFx0aGFzSXRlbVRvUmVtb3ZlID0gISEkbGFzdEl0ZW0ubGVuZ3RoO1xuXG5cdFx0XHRyZXNpemVUYWJzKCRjb21wb25lbnQsICRtZW51VGFicywgISEkbGFzdEl0ZW0ubGVuZ3RoKTtcblx0XHR9IGVsc2UgaWYgKCFpc1JlY3Vyc2l2ZSkge1xuXHRcdFx0Y29uc3QgJG1lbnVJdGVtcyA9ICRtZW51VGFicy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpO1xuXHRcdFx0bGV0ICRmaXJzdEl0ZW0gPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCAuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW0nKS5maXJzdCgpO1xuXG5cdFx0XHRjb25zdCBuZXdMaW5rV2lkdGggPSAxNDAgKiAxLjE2ICsgMTY7IC8vIEZvbnQtc2l6ZSArIHBhZGRpbmcgYmV0d2VlbiBpdGVtcyAoZ2FwKVxuXHRcdFx0Y29uc3QgbmV3SXRlbXNXaWR0aCA9IG5ld0xpbmtXaWR0aCArICRtZW51SXRlbXMub3V0ZXJXaWR0aCgpO1xuXG5cdFx0XHRpZiAobmV3SXRlbXNXaWR0aCArIGZpeGVkVmFsdWUgPCBoZWFkZXJXaWR0aCkge1xuXHRcdFx0XHQkZmlyc3RJdGVtID0gJGZpcnN0SXRlbS5kZXRhY2goKTtcblx0XHRcdFx0JGZpcnN0SXRlbS5hcHBlbmRUbygkbWVudVRhYnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKSk7XG5cblx0XHRcdFx0aWYgKCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50IC5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkbWVudVRyaWdnZXIuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNldFRhYnNUaGVtZSA9ICgpID0+IHtcblx0XHQkKHRvcC5kb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuU2lkZU1lbnUnLCB3aW5kb3cucGFyZW50LmRvY3VtZW50KS5hZGRDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpO1xuXG5cdFx0XHRjb25zdCAkY29tcG9uZW50ID0gJCgnLlNpZGVNZW51Jywgd2luZG93LnBhcmVudC5kb2N1bWVudCk7XG5cdFx0XHRjb25zdCAkbWVudVRhYnMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVGFicycpO1xuXG5cdFx0XHQkbWVudVRhYnMuZmluZCgnPiBkaXY6ZW1wdHknKS5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRpdGVtcyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKS5kZXRhY2goKTtcblx0XHRcdCRpdGVtcy5hcHBlbmRUbygkbWVudVRhYnMpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMsIHRydWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQod2luZG93LnBhcmVudCkucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnJlc2l6ZWRGaW5pc2hlZCk7XG5cdFx0XHRcdHdpbmRvdy5yZXNpemVkRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcblx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZU1lbnUoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNpZGVNZW51ID0geyBjcmVhdGUsIHNldFRhYnNUaGVtZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgSVNpZGViYXIgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNpZGViYXIoY29uZmlnKTtcblx0XHRTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblx0fTtcblxuXHR2YXIgY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNpZGViYXIud2lkZ2V0SWRdLmNsb3NlKCk7XG5cdH07XG5cblx0dmFyIFNpZGViYXIgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuaXNFeHBhbmRhYmxlID0gY29uZmlnLmlzRXhwYW5kYWJsZTtcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kc2lkZWJhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXInKTtcblx0XHR0aGlzLiRzaWRlYmFyTWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItbWVudScpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51SXRlbSA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2lkZWJhck1lbnVJdGVtJyk7XG5cdFx0dGhpcy4kc2lkZWJhclNoaWVsZCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItc2hpZWxkJyk7XG5cdFx0dGhpcy4kc2lkZWJhckNvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCc+IGRpdicpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnUEgnKSAmJiAkKHRoaXMpLnRleHQoKSA9PT0gJycpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXHRcdGlmICghdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHRoaXMub3Blbk1lbnVJdGVtKDApO1xuXHRcdH1cblx0XHQkKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFjb25maWcuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHRcdCQoYC4ke2NvbmZpZy5zZWxlY3RlZFRhYn1gKS5jbGljaygpO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIgLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHRcdCQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdOnZpc2libGUnKVxuXHRcdFx0XHRcdC5lcSgwKVxuXHRcdFx0XHRcdC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnVubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhciAubGRzLXJpbmcnKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRzaWRlYmFyTWVudS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmICghX3RoaXMuJHNpZGViYXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuXHRcdFx0XHRfdGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGVjdGVkUG9zaXRpb24gPSAkKHRoaXMpLmluZGV4KCk7XG5cdFx0XHRfdGhpcy5vcGVuTWVudUl0ZW0oc2VsZWN0ZWRQb3NpdGlvbik7XG5cdFx0fSk7XG5cdFx0dGhpcy4kc2lkZWJhclNoaWVsZC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kc2lkZWJhci5vbignY2xpY2snLCAnLlNlYXJjaFNpZGVCYXJGaWVsZHMgLkJ1dHRvbkdyb3VwX2J1dHRvbjpmaXJzdC1jaGlsZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHNpZGViYXJcblx0XHRcdFx0LmZpbmQoJy5GaWVsZHNTbGlkZXInKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYjEnKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1RhYjInKTtcblx0XHRcdF90aGlzLnNldEZpZWxkRm9jdXMoX3RoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmVxKDApKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyLm9uKCdjbGljaycsICcuU2VhcmNoU2lkZUJhckZpZWxkcyAuQnV0dG9uR3JvdXBfYnV0dG9uOmxhc3QtY2hpbGQnLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLiRzaWRlYmFyXG5cdFx0XHRcdC5maW5kKCcuRmllbGRzU2xpZGVyJylcblx0XHRcdFx0LmFkZENsYXNzKCdUYWIyJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdUYWIxJyk7XG5cdFx0XHRfdGhpcy5zZXRGaWVsZEZvY3VzKF90aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5lcSgwKSk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUub3Blbk1lbnVJdGVtID0gZnVuY3Rpb24oc2VsZWN0ZWRQb3NpdGlvbikge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kc2lkZWJhclxuXHRcdFx0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXHRcdFx0LmVxKHNlbGVjdGVkUG9zaXRpb24pXG5cdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdHRoaXMuJHNpZGViYXJcblx0XHRcdC5maW5kKCcuSVNpZGViYXItY29udGVudCA+IC5JU2lkZWJhci1jb250ZW50LXBhbmVsJylcblx0XHRcdC5oaWRlKClcblx0XHRcdC5lcShzZWxlY3RlZFBvc2l0aW9uKVxuXHRcdFx0LnNob3coKTtcblx0XHR0aGlzLiRzaWRlYmFyLmFkZENsYXNzKCdvcGVuJyk7XG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQubGVuZ3RoICYmIHRoaXMuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LlNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLm9wZW5TaWRlYmFySWZyYW1lKDApO1xuXHRcdH1cblx0XHRpZiAodGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5zZXRGaWVsZEZvY3VzKHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmVxKDApKTtcblx0XHR9XG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJykubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykuc2VsZWN0MignY2xvc2UnKTtcblx0XHR9XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUuc2V0RmllbGRGb2N1cyA9IGZ1bmN0aW9uKCRpbnB1dCkge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LmNsaWNrKCkuc2VsZWN0KCk7XG5cdFx0fSwgMjUwKTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LlNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLmNsb3NlU2lkZWJhcklmcmFtZSgwKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaXNFeHBhbmRhYmxlKSB7XG5cdFx0XHR0aGlzLiRzaWRlYmFyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHR0aGlzLiRzaWRlYmFyLmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLiRzaWRlYmFyLmZpbmQoJy5JU2lkZWJhci1jb250ZW50ID4gLklTaWRlYmFyLWNvbnRlbnQtcGFuZWwnKS5oaWRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdGNsb3NlOiBjbG9zZSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIlNhcHBoaXJlV2lkZ2V0cy5TbWFsbEJveFNlbGVjdGFibGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblxuXHRpZiAoY29uZmlnLnNlbGVjdE9uQ2xpY2spIHtcblx0XHQkY29tcG9uZW50LmNsaWNrKCgpID0+IHtcblx0XHRcdGNvbnN0ICRsaXN0ID0gJCgnLlNtYWxsQm94TGlzdCAuU21hbGxCb3hTZWxlY3RhYmxlJykubm90KCRjb21wb25lbnQpO1xuXG5cdFx0XHQkbGlzdC5yZW1vdmVDbGFzcygnU21hbGxCb3hTZWxlY3RhYmxlLS1zZWxlY3RlZCcpO1xuXHRcdFx0JGNvbXBvbmVudC50b2dnbGVDbGFzcygnU21hbGxCb3hTZWxlY3RhYmxlLS1zZWxlY3RlZCcpO1xuXHRcdH0pO1xuXHR9XG59O1xuIiwiLyogQ29tcG9uZW50IFNwaW5uZXJIb3Jpem9udGFsICovXG5TYXBwaGlyZVdpZGdldHMuU3Bpbm5lckhvcml6b250YWwgPSB7XG5cdGNyZWF0ZTogY29uZmlnID0+IHtcblx0XHRjb25zdCAkaW5wdXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IGlucHV0YCk7XG5cdFx0Y29uc3QgJHBsdXMgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IGEuUGx1c2ApO1xuXHRcdGNvbnN0ICRtaW51cyA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gYS5NaW51c2ApO1xuXG5cdFx0bGV0IHZhbCA9ICRpbnB1dC52YWwoKTtcblxuXHRcdGlmICh2YWwgPD0gK2NvbmZpZy5taW5WYWx1ZSkge1xuXHRcdFx0JG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIGlmICh2YWwgPj0gK2NvbmZpZy5tYXhWYWx1ZSkge1xuXHRcdFx0JHBsdXMuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cblx0XHQkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFsID0gTWF0aC5hYnMocGFyc2VJbnQodGhpcy52YWx1ZSwgMTApIHx8ICtjb25maWcubWluVmFsdWUpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbCA+ICtjb25maWcubWF4VmFsdWUgPyArY29uZmlnLm1heFZhbHVlIDogdmFsIDwgK2NvbmZpZy5taW5WYWx1ZSA/ICtjb25maWcubWluVmFsdWUgOiB2YWw7XG5cblx0XHRcdGlmICh2YWwgPD0gK2NvbmZpZy5taW5WYWx1ZSkgJG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRlbHNlICRtaW51cy5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXG5cdFx0XHRpZiAodmFsID49ICtjb25maWcubWF4VmFsdWUpICRwbHVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRlbHNlICRwbHVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0fSk7XG5cdH0sXG5cdGluY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSkge1xuXHRcdHZhciBfZWxlbWVudCA9ICQoZWxlbWVudElkKVxuXHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxuXHRcdFx0LmZpcnN0KCk7XG5cdFx0aWYgKF9lbGVtZW50LnZhbCgpID09IHVuZGVmaW5lZCB8fCBfZWxlbWVudC52YWwoKSA9PSAnJyB8fCBpc05hTihwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSkpIHtcblx0XHRcdF9lbGVtZW50LnZhbChtaW5WYWx1ZSk7XG5cdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XG5cdFx0XHRcdF9lbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPCBtYXhWYWx1ZSkge1xuXHRcdFx0XHRfZWxlbWVudC52YWwocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgKyAxKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xuXHRcdFx0XHRcdF9lbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHRcdC5maW5kKCdhLk1pbnVzJylcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA+PSBtYXhWYWx1ZSkge1xuXHRcdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcblx0XHRcdFx0XHQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGRlY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXG5cdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpXG5cdFx0XHQuZmlyc3QoKTtcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xuXHRcdFx0X2VsZW1lbnQudmFsKG1pblZhbHVlKTtcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA+IG1pblZhbHVlKSB7XG5cdFx0XHRcdF9lbGVtZW50LnZhbChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSAtIDEpO1xuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdFx0LmZpbmQoJ2EuUGx1cycpXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPD0gbWluVmFsdWUpIHtcblx0XHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcbn07XG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lclZlcnRpY2FsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcblx0XHRcdGNvbnN0ICRpbnB1dFNwaW5uZXIgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5TcGlubmVySW5wdXRWZXJ0aWNhbCBpbnB1dGApO1xuXG5cdFx0XHQkaW5wdXRTcGlubmVyLm9uKCdibHVyIGtleXVwIGlucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0Y29uc3QgY3VycmVudElucHV0VmFsdWUgPSAkaW5wdXRTcGlubmVyLnZhbCgpO1xuXG5cdFx0XHRcdGlmIChjb25maWcubnVtYmVyTGlzdCAmJiBldmVudC50eXBlID09PSAnYmx1cicpIHtcblx0XHRcdFx0XHRjb25zdCBpbnB1dFZhbHVlSW50ID0gcGFyc2VJbnQoY3VycmVudElucHV0VmFsdWUpO1xuXHRcdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Q7XG5cdFx0XHRcdFx0Y29uc3QgJGVycm9yTWVzc2FnZSA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlNwaW5uZXJFcnJvck1lc3NhZ2VgKTtcblxuXHRcdFx0XHRcdCRlcnJvck1lc3NhZ2UuY3NzKCdkaXNwbGF5JywgYXJyYXlUb1NwaW4uaW5kZXhPZihpbnB1dFZhbHVlSW50KSA9PT0gLTEgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50SW5wdXRWYWx1ZSA8IGNvbmZpZy5taW5WYWx1ZSkgJG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0XHRlbHNlICRtaW51c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoJGlucHV0U3Bpbm5lci52YWwoKSA8PSBjb25maWcubWluVmFsdWUpIHtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLm51bWJlckxpc3QgJiYgJGlucHV0U3Bpbm5lci52YWwoKSA9PT0gJycpIHtcblx0XHRcdFx0bGV0IGN1cnJlbnROdW1iZXIgPSAwO1xuXHRcdFx0XHRjb25zdCBhcnJheVRvU3BpbiA9IGNvbmZpZy5udW1iZXJMaXN0LnNwbGl0KCcsJyk7XG5cblx0XHRcdFx0JGlucHV0U3Bpbm5lci52YWwoYXJyYXlUb1NwaW5bY3VycmVudE51bWJlcl0pO1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcuaXNDdXJzb3JPbkZvY3VzKSB7XG5cdFx0XHRcdCQoJ2JvZHknKS5vbignZm9jdXMnLCBgIyR7Y29uZmlnLmlucHV0SUR9IGlucHV0YCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHRoYXQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHZhciB2YWwgPSB0aGF0LnZhbHVlO1xuXHRcdFx0XHRcdFx0dGhhdC52YWx1ZSA9ICcnO1xuXHRcdFx0XHRcdFx0dGhhdC52YWx1ZSA9IHZhbDtcblx0XHRcdFx0XHR9LCAxKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcuaXNJbnB1dEVtcHR5KSB7XG5cdFx0XHRcdCRpbnB1dFNwaW5uZXIuYXR0cigndmFsdWUnLCAnJyk7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBpbmNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xuXHRcdGNvbnN0ICRzcGlubmVyID0gJChlbGVtZW50SWQpO1xuXHRcdGxldCAkaW5wdXQgPSAkc3Bpbm5lci5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmZpcnN0KCk7XG5cblx0XHR2YXIgZm9yY2VJbnRlZ2VyID0gJChlbGVtZW50SWQpLmRhdGEoJ2ZvcmNlaW50ZWdlcicpID09PSAnVHJ1ZScgPyB0cnVlIDogZmFsc2U7XG5cdFx0dmFyIGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKTtcblx0XHR2YXIgaW5jcmVtZW50VW5pdCA9IDE7XG5cdFx0dmFyIGlzRGVjaW1hbHMgPSBjdXJyZW50VmFsdWUgJSAxICE9IDA7XG5cdFx0dmFyIGFycmF5dG9zcGluID0gbGlzdFRvc3BpbjtcblxuXHRcdGNvbnN0ICRtaW51c1ZlcnRpY2FsID0gJChlbGVtZW50SWQpLmZpbmQoJy5NaW51c1ZlcnRpY2FsJyk7XG5cdFx0Y29uc3QgJHBsdXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuUGx1c1ZlcnRpY2FsJyk7XG5cblx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cblx0XHRpZiAoYXJyYXl0b3NwaW4ubGVuZ3RoKSB7XG5cdFx0XHR2YXIgY3VycmVudFBvc2l0aW9uID0gYXJyYXl0b3NwaW4uaW5kZXhPZihwYXJzZUludCgkaW5wdXQudmFsKCkpKTtcblx0XHRcdHZhciBtYXhpbXVtVG9TcGluID0gYXJyYXl0b3NwaW4ubGFzdEluZGV4T2YoYXJyYXl0b3NwaW4uc2xpY2UoLTEpWzBdKTtcblxuXHRcdFx0JHBsdXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cblx0XHRcdGlmIChtYXhpbXVtVG9TcGluIC0gMSA9PT0gY3VycmVudFBvc2l0aW9uKSB7XG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbiArIDE7XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XG5cblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRpZiAodHJpZ2dlck9uSW5wdXQpICRpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xuXHRcdFx0fSBlbHNlIGlmIChtYXhpbXVtVG9TcGluID09PSBjdXJyZW50UG9zaXRpb24pIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICUgbWF4aW11bVRvU3Bpbjtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSAoY3VycmVudFBvc2l0aW9uICsgMSkgJSBtYXhpbXVtVG9TcGluO1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xuXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gbWF4aW11bVRvU3BpbikgJHBsdXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHRpZiAoY3VycmVudFBvc2l0aW9uID09PSAwKSAkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cblx0XHRcdCRzcGlubmVyLmZpbmQoJy5TcGlubmVyRXJyb3JNZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA8IG1pblZhbHVlKSB7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFmb3JjZUludGVnZXIgJiYgaXNEZWNpbWFscykgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWx1ZSA9PT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKSkge1xuXHRcdFx0XHQkaW5wdXQudmFsKG1pblZhbHVlKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpIDwgbWF4VmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSAwICYmICFmb3JjZUludGVnZXIpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdFx0XHQkaW5wdXQudmFsKHBhcnNlRmxvYXQoKGN1cnJlbnRWYWx1ZSArIGluY3JlbWVudFVuaXQpLnRvRml4ZWQoMSkpKTtcblxuXHRcdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblxuXHRcdFx0XHRcdCRtaW51c1ZlcnRpY2FsLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHBsdXNWZXJ0aWNhbC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNoZWNrRGlzYWJsZWRTdGF0dXMoZWxlbWVudElkLCBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSksIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGRlY3JlbWVudCA9IChlbGVtZW50SWQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCwgbGlzdFRvc3BpbiA9IFtdKSA9PiB7XG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XG5cdFx0Y29uc3QgJGlucHV0ID0gJHNwaW5uZXIuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKS5maXJzdCgpO1xuXG5cdFx0bGV0IGZvcmNlSW50ZWdlciA9ICQoZWxlbWVudElkKS5kYXRhKCdmb3JjZWludGVnZXInKSA9PT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSk7XG5cdFx0bGV0IGluY3JlbWVudFVuaXQgPSAxO1xuXHRcdGxldCBpc0RlY2ltYWxzID0gY3VycmVudFZhbHVlICUgMSAhPSAwO1xuXHRcdGxldCBhcnJheXRvc3BpbiA9IGxpc3RUb3NwaW47XG5cblx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xuXHRcdGNvbnN0ICRwbHVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLlBsdXNWZXJ0aWNhbCcpO1xuXG5cdFx0aWYgKGFycmF5dG9zcGluLmxlbmd0aCkge1xuXHRcdFx0bGV0IGN1cnJlbnRQb3NpdGlvbiA9IGFycmF5dG9zcGluLmluZGV4T2YocGFyc2VJbnQoJGlucHV0LnZhbCgpKSk7XG5cdFx0XHRsZXQgbWF4aW11bVRvU3BpbiA9IGFycmF5dG9zcGluLmxhc3RJbmRleE9mKGFycmF5dG9zcGluLnNsaWNlKC0xKVswXSk7XG5cblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT0gMCkge1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW21heGltdW1Ub1NwaW5dKTtcblxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdGlmICh0cmlnZ2VyT25JbnB1dCkgJGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSAoY3VycmVudFBvc2l0aW9uIC0gMSkgJSBtYXhpbXVtVG9TcGluO1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xuXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblx0XHRcdH1cblxuXHRcdFx0JHNwaW5uZXIuZmluZCgnLlNwaW5uZXJFcnJvck1lc3NhZ2UnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWZvcmNlSW50ZWdlciAmJiBpc0RlY2ltYWxzKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xuXG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQgfHwgY3VycmVudFZhbHVlID09PSAnJyB8fCBpc05hTihwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpKSB7XG5cdFx0XHRcdCRpbnB1dC52YWwobWluVmFsdWUpO1xuXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPiBtaW5WYWx1ZSkge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IDEgJiYgIWZvcmNlSW50ZWdlcikgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcblxuXHRcdFx0XHRcdCRpbnB1dC52YWwocGFyc2VGbG9hdCgoY3VycmVudFZhbHVlIC0gaW5jcmVtZW50VW5pdCkudG9GaXhlZCgxKSkpO1xuXG5cdFx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXG5cdFx0XHRcdFx0JHBsdXNWZXJ0aWNhbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2hlY2tEaXNhYmxlZFN0YXR1cyhlbGVtZW50SWQsIHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKSwgbWluVmFsdWUsIG1heFZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdHJpZ2dlckV2ZW50cyA9IChpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCkgPT4ge1xuXHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdGlmICh0cmlnZ2VyT25JbnB1dCkgaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcblx0fTtcblxuXHRjb25zdCBjaGVja0Rpc2FibGVkU3RhdHVzID0gKGVsZW1lbnRJZCwgdmFsdWVUb0NoZWNrLCBtaW5WYWx1ZSwgbWF4VmFsdWUpID0+IHtcblx0XHRpZiAodmFsdWVUb0NoZWNrIDw9IG1pblZhbHVlKSB7XG5cdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0LmZpbmQoJ2EuTWludXNWZXJ0aWNhbCcpXG5cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0LmZpbmQoJ2EuTWludXNWZXJ0aWNhbCcpXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRpZiAodmFsdWVUb0NoZWNrID49IG1heFZhbHVlKSB7XG5cdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0LmZpbmQoJ2EuUGx1c1ZlcnRpY2FsJylcblx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHQuZmluZCgnYS5QbHVzVmVydGljYWwnKVxuXHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNwaW5uZXJWZXJ0aWNhbCA9IHtcblx0XHRjcmVhdGUsXG5cdFx0aW5jcmVtZW50LFxuXHRcdGRlY3JlbWVudCxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTcGxpdEJ1dHRvbiAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU3BsaXRCdXR0b24oY29uZmlnKTtcblx0fTtcblxuXHR2YXIgU3BsaXRCdXR0b24gPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgdGhpcy5jb25maWcud2lkZ2V0SWQpO1xuXHRcdHRoaXMuJGJ1dHRvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYnV0dG9uJyk7XG5cdFx0dGhpcy4kYnV0dG9uTGluayA9IHRoaXMuJGJ1dHRvbi5maW5kKCc+IGEnKTtcblx0XHR0aGlzLiR0cmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TcGxpdEJ1dHRvbi10cmlnZ2VyJyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYWN0aW9ucycpO1xuXHRcdGlmICghIXRoaXMuJGFjdGlvbnMudGV4dCgpKSB7XG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnPiAuU3BsaXRCdXR0b24nKS5hZGRDbGFzcygnaGFzVHJpZ2dlcicpO1xuXHRcdFx0dGhpcy5idWlsZEFjdGlvbnNUcmlnZ2VyKCk7XG5cdFx0fVxuXHR9O1xuXG5cdFNwbGl0QnV0dG9uLnByb3RvdHlwZS5idWlsZEFjdGlvbnNUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgY2xhc3NMaXN0ID0gdGhpcy4kYnV0dG9uTGlua1swXS5jbGFzc0xpc3QudmFsdWU7XG5cdFx0dGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhjbGFzc0xpc3QpO1xuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xuXHRcdFx0aWYgKCFfdGhpcy4kdHJpZ2dlci5oYXNDbGFzcygndG9vbHRpcHN0ZXJlZCcpKSB7XG5cdFx0XHRcdF90aGlzLiR0cmlnZ2VyLnRvb2x0aXBzdGVyKHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb250ZW50OiAkKCc8c2VjdGlvbi8+JykuYXBwZW5kKF90aGlzLiRhY3Rpb25zLmNsb25lKHRydWUpKSxcblx0XHRcdFx0XHR0cmlnZ2VyOiBfdGhpcy5jb25maWcudHJpZ2dlckV2ZW50LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBfdGhpcy5jb25maWcucG9zaXRpb24sXG5cdFx0XHRcdFx0bWF4V2lkdGg6IF90aGlzLmNvbmZpZy5tYXhXaWR0aCxcblx0XHRcdFx0XHR0aGVtZTogJ3Rvb2x0aXBzdGVyLXNwbGl0YnV0dG9uIFBhZGRpbmctJyArIF90aGlzLmNvbmZpZy5wYWRkaW5nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0X3RoaXMuJGFjdGlvbnMucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNwbGl0QnV0dG9uID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwidmFyIG1pbGlzZWNvbmRwYXNzZWQgPSAwO1xudmFyIHN0b3B0aW1lciA9IHRydWU7XG52YXIgbXlUaW1vdXQgID0gbnVsbDtcblxuZnVuY3Rpb24gb25LZXlkb3duRnVuY3Rpb24oKSB7XG4gICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XG4gIFxuICAgIHN0b3B0aW1lcj10cnVlO1xuICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xuICAgIG15VGltb3V0ID0gbnVsbDtcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIG9uS2V5VXBGdW5jdGlvbihlbGVtZW50VG9DbGljaykge1xuICBzdG9wdGltZXIgPSBmYWxzZTtcbiAgXG4gIGlmKG1pbGlzZWNvbmRwYXNzZWQgPT0gMCAmJiBteVRpbW91dD09bnVsbCl7XG4gICAgICBteVRpbW91dCA9IHNldEludGVydmFsKFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkKz0xMDA7XG4gICAgICAgICBcbiAgICAgICAgICBpZiAobWlsaXNlY29uZHBhc3NlZCA+PSA0MDAgJiYgc3RvcHRpbWVyPT1mYWxzZSkge1xuICAgICAgICAgICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XG4gICAgICAgICAgICBzdG9wdGltZXI9dHJ1ZTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xuICAgICAgICAgICAgZWxlbWVudFRvQ2xpY2suY2xpY2soKTtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcbiAgICAgICAgICAgIG15VGltb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcbiAgICAgICAgICAgIG15VGltb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBpZihzdG9wdGltZXI9PXRydWUpe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteVRpbW91dCk7XG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XG4gICAgICAgIH0gICBcbiAgICB9XG59O1xuXG5pZih0eXBlb2Yoc3NkQ29tcG9uZW50KSA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgIHNzZENvbXBvbmVudCA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBudW1iZXJPZkFjdGl2ZTogMCxcbiAgICAgICAgaXNSVEw6IGZhbHNlLFxuICAgICAgICBpZDogJycsXG4gICAgICAgIHRvRGVzdHJveTogZmFsc2UsXG4gICAgICAgIG9uQmx1ckRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNzZENvbXBvbmVudC5pZCAhPSAnJykge1xuICAgICAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnIycgKyBzc2RDb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgICAgIHZhciBfd3JhcHBlciA9ICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKTtcbiAgICAgICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LnRvRGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICBfd3JhcHBlci5maW5kKCcuU1NETGlzdFJlZnJlc2hIYW5kbGVyJykuZmluZCgnYS50by1kZXN0cm95JykuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICBfd3JhcHBlci5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0KSB7XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudFdpZGdldCA9ICQoc3NkQ29tcG9uZW50V2lkZ2V0KS5jaGlsZHJlbignZGl2LlNTRC1XcmFwcGVyOm5vdCguU2VsZWN0ZWQpJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vSWYgdGhpcyBTU0QtV3JhcHBlciBpcyBhbHJlYWR5IFNlbGVjdGVkLCByZXR1cm4uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSlcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuYmx1cigpOyAvL0JsdXJzIHRoZSBvdGhlciBmb2N1c2VkIFNTRCdzLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUrKztcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQod2luZG93KS53aWR0aCgpIC0gJCh0aGlzKS5vdXRlcldpZHRoKCkgLSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLlNTRC1MaXN0JykuYXR0cignY3VycmVudC1mb2N1cycsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLlNTRC1MaXN0JykuYXR0cignY3VycmVudC1mb2N1cycsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighX3NzZENvbXBvbmVudFdpZGdldC5wYXJlbnQoKS5oYXNDbGFzcygnU1NEUG9wdXAnKSl7XG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKF9zc2RDb21wb25lbnRXaWRnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5hZGRDbGFzcygnUG9zaXRpb25lZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdTZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIDFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYmx1cjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlBvc2l0aW9uZWQuU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3dyYXBwZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoJCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlQ2xhc3MoJ1Bvc2l0aW9uZWQnKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJycsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJycsXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6ICcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZyBGaXhlZCBLZXlib2FyZE5hdicpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnU2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLlNTRC1CYXInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgMVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZS0tO1xuICAgICAgICAgICAgJChcIi5TU0RfTGlzdFJlY29yZHMgc3BhbiwgLlNTRF9MaXN0TGluZS5TaG93TW9yZSwgLlNTRF9EZWxldGVPbkJsdXJcIikucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGVyZSdzIG5vIFNTRCBhY3RpdmUsIHRoZXJlJ3Mgbm8gbmVlZCB0byByZXNpemUgaXQuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBfc3NkV3JhcHBlciA9ICQoJ2Rpdi5TU0QtV3JhcHBlci5TZWxlY3RlZCcpLmZpcnN0KCk7XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudFdpZGdldCA9ICQoJyMnICsgX3NzZFdyYXBwZXIuYXR0cignZGF0YS1zc2QtcGxhY2Vob2xkZXInKSlbMF07XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RXcmFwcGVyLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKF9zc2RDb21wb25lbnRXaWRnZXQpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0vKixcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSAtICQoX3NzZENvbXBvbmVudFdpZGdldCkub3V0ZXJXaWR0aCgpIC0gX3NzZENvbXBvbmVudFdpZGdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgfSkuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCwgc3NkQmFyLCBzZWxlY3RlZFRhYiwgaXNJbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3NlbGVjdGVkVGFiID0gJChzZWxlY3RlZFRhYik7XG5cbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzKHNzZENvbXBvbmVudFdpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFfc2VsZWN0ZWRUYWIuaXMoJy5TZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcihzc2RCYXIpO1xuICAgICAgICAgICAgICAgIF9zZWxlY3RlZFRhYi5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoc3NkQmFyLGlzSW5wdXRFdmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzU2VsZWN0ZWRUYWI6IGZ1bmN0aW9uKHNzZEJhcixpc0lucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2VhcmNoIGlucHV0P1xuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2VhcmNoSW5wdXQtQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb0NsaWNrID0gc3NkQmFyLnNpYmxpbmdzKCcuU1NETGlzdFJlZnJlc2hIYW5kbGVyJykuZmluZCgnYTpub3QoLnRvLWRlc3Ryb3kpJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaXNJbnB1dEV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvQ2xpY2suY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3NkQmFyLmZpbmQoJy5JbnB1dFBsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdCg6Zm9jdXMpJykuZmlyc3QoKS5zZWxlY3QoKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2VsZWN0ZWQgdGFiIGlzIHRoZSBTaG9ydCBsaXN0P1xuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2hvcnRMaXN0U2VsZWN0b3ItQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3NkQmFyLmZpbmQoJy5TaG9ydExpc3RTZWxlY3Rvci1Db250YWluZXIgPiBhJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qXG4gICAgICAgICAqIE1ldGhvZCBiZWluZyBjYWxsZWQgYnkgdXNlciBhY3Rpb24ganNfc3NkQ29tcG9uZW50X2ZvY3VzQ3VycmVudFJvd1xuICAgICAgICAgKi9cbiAgICAgICAgZm9jdXNDdXJyZW50Um93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcbiAgICAgICAgICAgIHZhciBfc3NkTGlzdCA9IF9zc2RDb21wb25lbnQuZmluZCgnLlNTRC1MaXN0Jyk7XG4gICAgICAgICAgICB2YXIgX2N1cnJlbnRGb2N1cyA9IF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnKTtcblxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnS2V5Ym9hcmROYXYnKTtcbiAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3BhbjpudGgtY2hpbGQoJyArIF9jdXJyZW50Rm9jdXMgKyAnKScpLmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICB9LFxuICAgICAgICB0YWJzQ2xlYXI6IGZ1bmN0aW9uKHNzZEJhcikge1xuICAgICAgICAgICAgJChzc2RCYXIpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ1NlbGVjdGVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaEljb246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgJChldmVudC5kYXRhLnNzZEJhcikuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXInKSxmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qXG4gICAgICAgICAqIEBuYW1lIGlucHV0RXZlbnRcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIFxuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfaW5wdXRDb250YWluZXIgPSAkKGV2ZW50LmRhdGEuaW5wdXQpLmNsb3Nlc3QoJy5TZWFyY2hJbnB1dC1Db250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsIF9pbnB1dENvbnRhaW5lcix0cnVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoJChldmVudC5kYXRhLmlucHV0KS52YWwoKSA9PSAnJykge1xuICAgICAgICAgICAgICAgIF9pbnB1dENvbnRhaW5lci5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpLnJlbW92ZUNsYXNzKCdTZWFyY2hpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pbnB1dENvbnRhaW5lci5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpLmFkZENsYXNzKCdTZWFyY2hpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bkV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICBvbktleWRvd25GdW5jdGlvbigpOyAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmRIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiU2hpZnRcIiB8fCBldmVudC5rZXkgPT0gXCJDb250cm9sXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJ2Rpdi5TU0QtV3JhcHBlci5TZWxlY3RlZCAuU1NELUNvbXBvbmVudCcpLmZpcnN0KCk7XG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xuXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJFbnRlclwiICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0tleWJvYXJkTmF2Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2N1cnJlbnRGb2N1cyA9IF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB2YXIgX3NlbGVjdGVkRWxlbWVudCA9ICQobnVsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKF9jdXJyZW50Rm9jdXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bnRoLWNoaWxkKCcgKyBfY3VycmVudEZvY3VzICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnS2V5Ym9hcmROYXYnKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykucHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSAkKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFfc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aCAmJiBfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50LmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCFfc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXNTZWxlY3RlZFRhYihfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtQmFyJyksZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIV9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLlNTRF9MaXN0TGluZS5EaXNhYmxlZCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ2EuT3RoZXJDb250cm9sTGluaycpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCBfY3VycmVudEZvY3VzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmNsZWFyS2V5Ym9hcmROYXZTdGF0dXMoX3NzZENvbXBvbmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyS2V5Ym9hcmROYXZTdGF0dXM6IGZ1bmN0aW9uKHNzZENvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnQgPSAkKHNzZENvbXBvbmVudCk7XG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xuXG4gICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5yZW1vdmVDbGFzcygnS2V5Ym9hcmROYXYnKTtcbiAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKVxuICAgICAgICAgICAgICAgIC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW4uZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKVxuICAgICAgICAgICAgICAgIC5maW5kKCcuRXhwYW5kQ29udHJvbCA+IGEnKS5ibHVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnQgPSAkKCdkaXYuU1NELVdyYXBwZXIuU2VsZWN0ZWQgLlNTRC1Db21wb25lbnQnKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYoTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSA8PSAxMDI0KXtcbiAgICAgICAgICAgICAgICBpZihfc3NkQ29tcG9uZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+ICQoXCIudG9vbGJhci13cmFwcGVyLkZpeGVkXCIpLm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5yZW1vdmVDbGFzcygnRml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAkKCcuU1NELVdyYXBwZXIuU2VsZWN0ZWQgPiAuU1NELUNvbXBvbmVudC5GaXhlZCA+IC5TU0QtQmFyJykuY3NzKCd0b3AnLCAkKFwiLnRvb2xiYXItd3JhcHBlci5GaXhlZFwiKS5vdXRlckhlaWdodCgpICsgJ3B4Jyk7IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLypOb3QgTW9iaWxlIGFwcGx5IGZpeGVkIGJlaGF2aW91ciovXG4gICAgICAgICAgICAgICAgaWYoX3NzZENvbXBvbmVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkrICQoJy5DVFRBU0xldmVsQXNzZXNzbWVudE1haW5Db250YWluZXInKS5vdXRlckhlaWdodCh0cnVlKSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkgKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpICsgJ3B4Jyk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdGaXhlZCcpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbihfaW5wdXRJZCkgeyAvKiBVc2VkIHRvIGRlc3Ryb3kgYSBzcGVjaWZpYyBzc2QgY29tcG9uZW50IGJ5IHJlY2VpdmUgdGhlIGlucHV0IGlkZW50aWZpZXIgYXMgcGFyYW1ldGVyIGFuZCBkZXRlcm1pbmUgdGhlIHdyYXBwZXIgdG8gcmVtb3ZlLiAqL1xuICAgICAgICAgICAgJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbihzc2RDb21wb25lbnRXaWRnZXQsX3RvRGVzdHJveSkge1xuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lmxlbmd0aCsrO1xuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID0gMDtcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5pc1JUTCA9ICQoJ2h0bWwnKS5pcygnLnJ0bCcpO1xuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRvRGVzdHJveSA9IF90b0Rlc3Ryb3k7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNzZENvbXBvbmVudFdpZGdldCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5pZCA9ICQoc3NkQ29tcG9uZW50V2lkZ2V0KS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKHNzZENvbXBvbmVudFdpZGdldCk7XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RDb21wb25lbnRXaWRnZXQuZmluZCgnLlNTRC1Db21wb25lbnQnKTtcbiAgICAgICAgICAgIHZhciBfc3NkQmFyID0gX3NzZENvbXBvbmVudC5jaGlsZHJlbignLlNTRC1CYXInKS5maXJzdCgpO1xuICAgICAgICAgICAgdmFyIF9zZWFyY2hJY29uID0gX3NzZEJhci5maW5kKCcuU2VhcmNoSWNvbicpLmZpcnN0KCk7XG4gICAgICAgICAgICB2YXIgX2lucHV0ID0gX3NzZEJhci5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLmZpcnN0KCk7XG4gICAgICAgICAgICB2YXIgX2NsZWFyQ29udHJvbCA9IF9zc2RCYXIuZmluZCgnLkNsZWFyQ29udHJvbCcpLmZpcnN0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9zZWFyY2hJY29uLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LnNlYXJjaEljb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfc3NkQmFyLmNoaWxkcmVuKCdkaXYnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywge1xuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsIHRoaXMsZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9jbGVhckNvbnRyb2wub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHNzZENvbXBvbmVudC5vbkJsdXJEZXN0cm95KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5dXAnKS5vbigna2V5dXAnLCB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhcixcbiAgICAgICAgICAgICAgICBpbnB1dDogX2lucHV0XG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuaW5wdXRFdmVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9pbnB1dC5vZmYoJ2tleWRvd24nKS5vbigna2V5ZG93bicsIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyLFxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5rZXlkb3duRXZlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKF9zc2RDb21wb25lbnQpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50OiBfc3NkQ29tcG9uZW50XG4gICAgICAgICAgICB9LCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHNzZENvbXBvbmVudC5yZXNpemUoKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZighJChldmVudC50YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7IC8qIENsaWNrcyBvbiBoaWRkZW4gZWxlbWVudHMgYXJlIGRpc21pc3NlZC4gKi9cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGUgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFlLmxlbmd0aCkgeyAvLyBVc2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgU1NELUNvbXBvbmVudD9cbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5vbkJsdXJEZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gXCIyN1wiKSB7IC8vIFVzZXIgaGl0IEVzY2FwZVxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5vbkJsdXJEZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYoc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID4gMCkgeyAvLyBJZiB0aGVyZSdzIGFuIFNTRCBjb21wb25lbnQgYWN0aXZlLCBnbyBmb3IgS2V5Ym9hcmQgaGFuZGxlclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmtleWJvYXJkSGFuZGxlcihldmVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHsgLy8gSWYgdGhlcmUncyBhbiBTU0QgY29tcG9uZW50IGFjdGl2ZSwgZ28gZm9yIHNjcm9sbCBoYW5kbGVyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuc2Nyb2xsSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsIi8qIENvbXBvbmVudCBTU0RMaXN0TGluZSAqL1xuU2FwcGhpcmVXaWRnZXRzLlNTRExpc3RMaW5lID0ge1xuXHR0b2dnbGU6IChsaW5lSWQsIGxpbmVIYW5kbGVyID0gJycpID0+IHtcblx0XHR2YXIgX2xpbmUgPSAkKGxpbmVJZCkuaXMoJy5TU0RfTGlzdExpbmUnKVxuXHRcdFx0PyAkKGxpbmVJZClcblx0XHRcdDogJChsaW5lSWQpXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuU1NEX0xpc3RMaW5lJylcblx0XHRcdFx0XHQuZmlyc3QoKTtcblxuXHRcdGlmICghX2xpbmUubGVuZ3RoKSByZXR1cm47XG5cblx0XHR2YXIgX2V4cGFuZENvbnRyb2wgPSAkKCcuZXhwYW5kLWNvbnRyb2wtY3VzdG9tLXdpZHRoJyk7XG5cblx0XHRpZiAoX2V4cGFuZENvbnRyb2wubGVuZ3RoICE9IDApIHtcblx0XHRcdF9leHBhbmRDb250cm9sLnJlbW92ZUNsYXNzKCdleHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcblx0XHRcdF9leHBhbmRDb250cm9sLmNzcygnd2lkdGgnLCAnJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFfbGluZS5pcygnLkFjdGl2ZScpKSB7XG5cdFx0XHR2YXIgX2xpbmVIZWFkZXIgPSBfbGluZVxuXHRcdFx0XHQuY2xvc2VzdCgnZGl2LlNlbGVjdGFibGVMaXN0LCAuU2VsZWN0YWJsZUxpc3QtTGlzdFJlY29yZHMnKVxuXHRcdFx0XHQuZmluZCgnZGl2LlNlbGVjdGFibGVMaXN0LUxpbmUuQWN0aXZlJylcblx0XHRcdFx0Lm5vdChfbGluZSk7XG5cblx0XHRcdF9saW5lSGVhZGVyLmZpbmQoJ2FbaGlkZS1hY3Rpb25dJykuY2xpY2soKTtcblx0XHRcdF9saW5lSGVhZGVyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnQWN0aXZlJylcblx0XHRcdFx0LmNoaWxkcmVuKCdzcGFuJylcblx0XHRcdFx0LmhpZGUoMjAwKTtcblx0XHRcdF9saW5lLmFkZENsYXNzKCdBY3RpdmUnKTtcblxuXHRcdFx0aWYgKCQobGluZUhhbmRsZXIpLmxlbmd0aCkge1xuXHRcdFx0XHQkKGxpbmVIYW5kbGVyKS5jbGljaygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfbGluZS5yZW1vdmVDbGFzcygnQWN0aXZlJyk7XG5cdFx0fVxuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBUYWJsZUZvcm0gKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBhZGRFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xuXHRcdGNvbnN0ICRsaXN0ID0gJCgnLlRhYmxlRm9ybUNvbHVtbjpub3QoLlRhYmxlRm9ybUNvbHVtbi0tZWRpdE1vZGUpIC5UYWJsZUZvcm1Db2x1bW5fX0ZpZWxkcyA+IC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0JGxpc3QuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiVGFibGVGb3JtQ29sdW1uX19FbXB0eUl0ZW1cIj48L2Rpdj4nKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xuXHRcdGNvbnN0ICRsaXN0ID0gJCgnLlRhYmxlRm9ybUNvbHVtbjpub3QoLlRhYmxlRm9ybUNvbHVtbi0tZWRpdE1vZGUpIC5UYWJsZUZvcm1Db2x1bW5fX0ZpZWxkcyA+IC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0JGxpc3QuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQuZmluZCgnPiAuVGFibGVGb3JtQ29sdW1uX19FbXB0eUl0ZW06Zmlyc3QnKVxuXHRcdFx0XHQucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgb25Db21wb25lbnRSZWxvYWQgPSB3aWRnZXRJZCA9PiB7XG5cdFx0Y29uc3QgJHRhYmxlID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0Y29uc3QgJGVkaXRpbmcgPSAkdGFibGUuZmluZCgnLlRhYmxlRm9ybUNvbHVtbi0tZWRpdE1vZGUnKTtcblxuXHRcdGlmICgkZWRpdGluZy5sZW5ndGgpIHtcblx0XHRcdCR0YWJsZS5hZGRDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGFibGUucmVtb3ZlQ2xhc3MoJ1RhYmxlRm9ybS0tc2Nyb2xsRGlzYWJsZWQnKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRhYmxlRm9ybSA9IHsgYWRkRW1wdHlMaW5lLCBvbkNvbXBvbmVudFJlbG9hZCwgcmVtb3ZlRW1wdHlMaW5lIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBUYWJzRXh0ZW5kZWQgKi9cblNhcHBoaXJlV2lkZ2V0cy5UYWJzRXh0ZW5kZWQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlRhYnNfRXh0ZW5kZWRgKTtcblx0XHRjb25zdCAkdGFiSGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuVGFic19oZWFkZXInKTtcblx0XHRjb25zdCAkdGFiQ29udGFpbmVyID0gJGNvbXBvbmVudC5maW5kKCcuVGFic0NvbnRhaW5lcicpO1xuXHRcdGNvbnN0ICR0YWJzID0gJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWInKTtcblx0XHRjb25zdCAkdGFic0VuYWJsZWQgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYjpub3QoLmRpc2FibGVkKScpO1xuXHRcdGNvbnN0ICR0YWJzSW5wdXQgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzX0lucHV0IGlucHV0Jyk7XG5cblx0XHQkdGFicy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHRhYnNFbmFibGVkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRhYkNvbnRhaW5lci5hdHRyKCdhY3RpdmV0YWInLCAkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpO1xuXG5cdFx0XHQkdGFic0lucHV0LnZhbCgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpO1xuXHRcdFx0JHRhYnNJbnB1dC5jaGFuZ2UoKTtcblx0XHR9KTtcblxuXHRcdCR0YWJzRW5hYmxlZC5vZmYoJ21vdXNlZG93bicpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdHZhciAkdGFic0V4dGVuZGVkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcuVGFic19FeHRlbmRlZCcpO1xuXHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcblx0XHR9KTtcblxuXHRcdCQoJy5UYWJzX0V4dGVuZGVkLkhpZGVBY3RpdmVPbkNsaWNrIC5UYWJzX2hlYWRlcicpXG5cdFx0XHQub2ZmKCdtb3VzZWRvd24nKVxuXHRcdFx0Lm9uKCdtb3VzZWRvd24nLCAnLlRhYnNfX3RhYi5hY3RpdmUnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XG5cdFx0XHRcdHZhciAkdGFic0JvZHkgPSAkdGFic0V4dGVuZGVkLmZpbmQoJy5UYWJzX2JvZHknKTtcblxuXHRcdFx0XHRpZiAoJHRhYnNCb2R5Lmhhc0NsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpKSB7XG5cdFx0XHRcdFx0JHRhYnNCb2R5LnJlbW92ZUNsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpO1xuXHRcdFx0XHRcdCR0YWJzRXh0ZW5kZWQucmVtb3ZlQ2xhc3MoJ2lzQ2xvc2VkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHRhYnNCb2R5LmFkZENsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpO1xuXHRcdFx0XHRcdCR0YWJzRXh0ZW5kZWQuYWRkQ2xhc3MoJ2lzQ2xvc2VkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0JHRhYkhlYWRlci5maW5kKCcuVGFic19FeHRlbmRlZC0tZGlzYWJsZWQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0JChlbClcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jylcblx0XHRcdFx0Lm9mZignY2xpY2snKTtcblx0XHR9KTtcblxuXHRcdCRjb21wb25lbnQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdGlmICgkKGVsKS5oYXNDbGFzcygnVGFic19FeHRlbmRlZC0tY2xvc2Vkb25zdGFydCcpKSB7XG5cdFx0XHRcdCQoZWwpXG5cdFx0XHRcdFx0LmZpbmQoJy5UYWJzX2JvZHknKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnVGFic19ib2R5LS1jbG9zZWQnKTtcblx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ2lzQ2xvc2VkJyk7XG5cdFx0XHRcdCQoZWwpLnJlbW92ZUNsYXNzKCdUYWJzX0V4dGVuZGVkLS1jbG9zZWRvbnN0YXJ0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdCQoZWwpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVGFic19FeHRlbmRlZC0tY2xvc2UnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHQkKGV2dC50YXJnZXQpXG5cdFx0XHRcdFx0XHQuY2xvc2VzdCgnLlRhYnNfYm9keScpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKCFjb25maWcudGFiMUVuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTFdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0aWYgKCFjb25maWcudGFiMkVuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTJdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0aWYgKCFjb25maWcudGFiM0VuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTNdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0aWYgKCFjb25maWcudGFiNEVuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTRdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0aWYgKCFjb25maWcudGFiNUVuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTVdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBUYWJ1bGFyTGlzdCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgYWxsVGFidWxhckxpc3RzID0gW107XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcudGFidWxhckxpc3RJZF0gPSBuZXcgVGFidWxhckxpc3QoY29uZmlnKTtcblx0XHRhbGxUYWJ1bGFyTGlzdHMucHVzaCh3aW5kb3dbY29uZmlnLnRhYnVsYXJMaXN0SWRdKTtcblxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFsbFRhYnVsYXJMaXN0cyA9IFNhcHBoaXJlV2lkZ2V0cy5UYWJ1bGFyTGlzdC5hbGwoKTtcblx0XHRcdGFsbFRhYnVsYXJMaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcblx0XHRcdFx0ZWxlbWVudC5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcblx0XHRcdFx0ZWxlbWVudC5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcygyMDApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50YWJ1bGFybGlzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFsbFRhYnVsYXJMaXN0cyA9IFNhcHBoaXJlV2lkZ2V0cy5UYWJ1bGFyTGlzdC5hbGwoKTtcblx0XHRcdGFsbFRhYnVsYXJMaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcblx0XHRcdFx0ZWxlbWVudC5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcygyMDApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIFRhYnVsYXJMaXN0ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIgPSAwO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLnRhYnVsYXJMaXN0SWQpO1xuXHRcdHRoaXMuJHdpZGdldExpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuVGFidWxhckxpc3QnKTtcblx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93JykuZWFjaChmdW5jdGlvbihpLCByb3cpIHtcblx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCA9IDA7XG5cdFx0XHQkKHJvdylcblx0XHRcdFx0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy12YWx1ZXMgLlRhYnVsYXJMaXN0Um93LWl0ZW0nKVxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuXHRcdFx0XHRcdCQoZWwpLmFkZENsYXNzKCdUYWJ1bGFyTGlzdENvbHVtbicgKyAoaSArIDEpKTtcblx0XHRcdFx0XHRfdGhpcy5jb2x1bW5zQ291bnQrKztcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCEhY29uZmlnLmJyZWFrT24pIHtcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gcGFyc2VJbnQoY29uZmlnLmJyZWFrT24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmJyZWFrT25PcmRlciA9IDA7XG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zKCk7XG5cdH07XG5cblx0VGFidWxhckxpc3QucHJvdG90eXBlLmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmNvbmZpZy5jb2x1bW5zV2lkdGggPT09ICdBdXRvJykge1xuXHRcdFx0aWYgKHRoaXMuJHdpZGdldExpc3Qud2lkdGgoKSA+IDEpIHtcblx0XHRcdFx0Zm9yIChpID0gMTsgaSA8PSB0aGlzLmNvbHVtbnNDb3VudDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIG1heFdpZHRoQ29udGVudCA9IE1hdGgubWF4LmFwcGx5KFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdHRoaXMuJHdpZGdldFxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlRhYnVsYXJMaXN0Q29sdW1uJyArIGkpXG5cdFx0XHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmdldCgpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Q29sdW1uJyArIGkpLndpZHRoKG1heFdpZHRoQ29udGVudCk7XG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKS5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoISF0aGlzLmNvbmZpZy5wcm9wZXJ0eU1pbldpZHRoKSB7XG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXByb3BlcnR5JykuY3NzKCdtaW4td2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5wcm9wZXJ0eU1pbldpZHRoKSk7XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWF4V2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctcHJvcGVydHknKS5jc3MoJ21heC13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLnByb3BlcnR5TWF4V2lkdGgpKTtcblx0XHR9XG5cdFx0aWYgKCEhdGhpcy5jb25maWcuYWN0aW9uc01pbldpZHRoKSB7XG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LWFjdGlvbnMnKS5jc3MoJ21pbi13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLmFjdGlvbnNNaW5XaWR0aCkpO1xuXHRcdH1cblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWF4V2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctYWN0aW9ucycpLmNzcygnbWF4LXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcuYWN0aW9uc01heFdpZHRoKSk7XG5cdFx0fVxuXHR9O1xuXG5cdFRhYnVsYXJMaXN0LnByb3RvdHlwZS5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcyA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50YWJ1bGFyTGlzdFJlc2l6ZVRpbWVyKTtcblx0XHR0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LnJlbW92ZUNsYXNzKGZ1bmN0aW9uKGluZGV4LCBjbGFzc05hbWUpIHtcblx0XHRcdFx0cmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylzY3JlZW4tXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LnJlbW92ZUNsYXNzKCdpc0JyZWFraW5nJyk7XG5cblx0XHRcdHZhciB3aWRnZXRXaWR0aCA9IF90aGlzLiR3aWRnZXRMaXN0Lm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0XHRpZiAod2lkZ2V0V2lkdGggPT09IDApIHtcblx0XHRcdFx0d2lkZ2V0V2lkdGggPSBfdGhpcy4kd2lkZ2V0TGlzdFxuXHRcdFx0XHRcdC5wYXJlbnRzKCc6dmlzaWJsZScpXG5cdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0Lm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh3aWRnZXRXaWR0aCA+PSAxOTAwKSB7XG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tRGVza3RvcEhEJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gNikge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gMTYwMCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BCaWcnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSA1KSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh3aWRnZXRXaWR0aCA+PSAxMzY2KSB7XG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tRGVza3RvcCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDQpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEwMjQpIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wU21hbGwnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSAzKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh3aWRnZXRXaWR0aCA+PSA0MjApIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1UYWJsZXQnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSAyKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1QaG9uZScpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDEpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSwgdGltZW91dCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0ID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdGFsbDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gYWxsVGFidWxhckxpc3RzO1xuXHRcdH0sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRJbkNTU1ZhbHVlKHZhbHVlX2luKSB7XG5cdHZhciByZXR1cm5lZDtcblx0aWYgKHZhbHVlX2luLmluY2x1ZGVzKCdweCcpIHx8IHZhbHVlX2luLmluY2x1ZGVzKCclJykpIHtcblx0XHRyZXR1cm5lZCA9IHZhbHVlX2luO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybmVkID0gdmFsdWVfaW4gKyAncHgnO1xuXHR9XG5cdHJldHVybiByZXR1cm5lZDtcbn1cbiIsIi8qIENvbXBvbmVudCBUYWJ1bGFyU2Nyb2xsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdHNldHVwVGFidWxhclNjcm9sbCgkKGVsKSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0b3NBamF4QmFja2VuZCAmJlxuXHRcdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoJy5UYWJ1bGFyU2Nyb2xsJykuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuXHRcdFx0XHRcdFx0c2V0dXBUYWJ1bGFyU2Nyb2xsKCQoZWwpKTtcblx0XHRcdFx0XHRcdHJlc2l6ZVJvd3MoJChlbCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLnRhYnVsYXJzY3JvbGwnLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5UYWJ1bGFyU2Nyb2xsJykuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuXHRcdFx0XHR2YXIgJGNlbnRlclRhYmxlID0gJChlbCkuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XG5cdFx0XHRcdHZhciB0YWJsZVdpZHRoID0gJGNlbnRlclRhYmxlLmZpbmQoJ3RhYmxlJykud2lkdGgoKTtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyIC5Ub3BTY3JvbGxEcmFnZ2VyJylcblx0XHRcdFx0XHQud2lkdGgodGFibGVXaWR0aCk7XG5cdFx0XHRcdGlmICgkY2VudGVyVGFibGVbMF0uc2Nyb2xsV2lkdGggPiAkY2VudGVyVGFibGUud2lkdGgoKSkge1xuXHRcdFx0XHRcdCQoZWwpXG5cdFx0XHRcdFx0XHQuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKVxuXHRcdFx0XHRcdFx0LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JChlbClcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBzZXR1cFRhYnVsYXJTY3JvbGwgPSBmdW5jdGlvbigkdGFidWxhclNjcm9sbCkge1xuXHRcdHZhciAkdG9wU2Nyb2xsV3JhcHBlciA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJyk7XG5cdFx0dmFyICRjZW50ZXJUYWJsZSA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlci10YWJsZScpO1xuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0JGNlbnRlclRhYmxlLnNjcm9sbExlZnQoJHRvcFNjcm9sbFdyYXBwZXIuc2Nyb2xsTGVmdCgpKTtcblx0XHR9KTtcblx0XHQkY2VudGVyVGFibGUuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRvcFNjcm9sbFdyYXBwZXIuc2Nyb2xsTGVmdCgkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgpKTtcblx0XHR9KTtcblx0XHQvLyBzaW1pbGFyIHRvIFJlc2l6ZVxuXHRcdHZhciB0YWJsZVdpZHRoID0gJGNlbnRlclRhYmxlLmZpbmQoJ3RhYmxlJykud2lkdGgoKTtcblx0XHQkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXIgLlRvcFNjcm9sbERyYWdnZXInKS53aWR0aCh0YWJsZVdpZHRoKTtcblx0XHRpZiAoJGNlbnRlclRhYmxlWzBdLnNjcm9sbFdpZHRoID4gJGNlbnRlclRhYmxlLndpZHRoKCkpIHtcblx0XHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZVJvd3MgPSBmdW5jdGlvbigkdGFidWxhclNjcm9sbCkge1xuXHRcdGxldCBhcnJyYXlIZWlnaHQgPSBbXTtcblx0XHRjb25zdCAkdGFibGVDZW50ZXIgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUgdGFibGUgdGJvZHknKTtcblx0XHRjb25zdCAkdGFibGVSaWdodCA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLXJpZ2h0IC5MaXN0UmVjb3JkcycpO1xuXHRcdGNvbnN0ICR0YWJsZUxlZnQgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1sZWZ0IC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0YXJycmF5SGVpZ2h0ID0gJHRhYmxlQ2VudGVyXG5cdFx0XHQuY2hpbGRyZW4oJ3RyJylcblx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xuXHRcdFx0fSlcblx0XHRcdC5nZXQoKTtcblxuXHRcdCR0YWJsZVJpZ2h0LmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0JCh0aGlzKS5jc3MoJ2hlaWdodCcsIGFycnJheUhlaWdodFtpbmRleF0gKyAncHgnKTtcblx0XHR9KTtcblxuXHRcdCR0YWJsZUxlZnQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0JywgYXJycmF5SGVpZ2h0W2luZGV4XSArICdweCcpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5UYWJ1bGFyU2Nyb2xsID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIFRpbWVsaW5lIEhlbHBlcnMgKi9cblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZUNvdW50ZXJJdGVtcyA9IGZ1bmN0aW9uKHRpdGxlSXRlbUlELCBsYWJlbCkge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkc2VjdGlvbiA9ICQoYCMke3RpdGxlSXRlbUlEfWApLnBhcmVudHMoJy5UaW1lbGluZUl0ZW1TZWN0aW9uJyk7XG5cdFx0Y29uc3QgJHRpdGxlID0gJHNlY3Rpb24uZmluZCgnLlRpbWVsaW5lSXRlbUhlYWRlciBhJyk7XG5cdFx0Y29uc3QgJGl0ZW1zID0gJHNlY3Rpb24uZmluZCgnLlRpbWVsaW5lSXRlbScpO1xuXG5cdFx0JHRpdGxlLmFwcGVuZCgkKGA8ZGl2IGNsYXNzPSdDb2xvckdyZXlUZXh0IFRleHRMYXJnZSBUZXh0UmVndWxhcic+ICgkeyRpdGVtcy5sZW5ndGh9KTwvZGl2PmApKTtcblx0fSk7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuU2Nyb2xsVG9FdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS5zY3JvbGxUb0VsZW1lbnQoJChgIyR7ZWxlbWVudElkfTpmaXJzdGAsIHdpbmRvdy50b3AuZG9jdW1lbnQpLCA1Mik7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuTGluZVRpbWVsaW5lQ29tcG9uZW50ID0gZnVuY3Rpb24od2lkZ2V0SWQsIGhhc0NvbnRlbnQsIGlzRXhwYW5kYWJsZSkge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cblx0XHRpZiAoaGFzQ29udGVudCAmJiBpc0V4cGFuZGFibGUpIHtcblx0XHRcdGNvbnN0ICRleHBhbmRhYmxlTGluayA9ICRjb21wb25lbnQuZmluZCgnLkxpbmVUaW1lTGluZV9fSGVhZGVyJyk7XG5cdFx0XHRjb25zdCAkYWN0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLkxpbmVUaW1lTGluZV9fQWN0aW9ucycpO1xuXG5cdFx0XHQkZXhwYW5kYWJsZUxpbmsuY2xpY2soKCkgPT4ge1xuXHRcdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdMaW5lVGltZUxpbmUtLWV4cGFuZGVkJyk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRhY3Rpb25zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuVGltZWxpbmVQYWdlRXZlbnRzID0gZnVuY3Rpb24oc2hvd01vcmVUaW1lbGluZUxpbmspIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0JCh3aW5kb3cpXG5cdFx0XHQub2ZmKCdzY3JvbGwuVGltZWxpbmUnKVxuXHRcdFx0Lm9uKCdzY3JvbGwuVGltZWxpbmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGl0ZW0gPSAkKCcuVGltZWxpbmVBbmNob3InKS5maXJzdCgpO1xuXHRcdFx0XHRcdGNvbnN0ICRsaXN0ID0gJCgnLlRpbWVsaW5lUGFnZV9fTmF2aWdhdGlvbiAuTGlzdFJlY29yZHMnKTtcblxuXHRcdFx0XHRcdHNlbGVjdEl0ZW0oJGl0ZW0uYXR0cignaWQnKSk7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvdy5zY3JvbGxGaW5pc2hlZCk7XG5cblx0XHRcdFx0XHQkbGlzdC5zY3JvbGxUb3AoMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvdy5zY3JvbGxGaW5pc2hlZCk7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGxldCBpZCA9IDA7XG5cblx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZUFuY2hvcicpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0aWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSArIDE5MCA+PSAkKHRoaXMpLm9mZnNldCgpLnRvcCkge1xuXHRcdFx0XHRcdFx0XHRcdGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluZGV4ID09ICQoJy5UaW1lbGluZUFuY2hvcicpLmxlbmd0aCAtIDEpIHNlbGVjdEl0ZW0oaWQpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdEl0ZW0oaWQsIHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93Lmxhc3RJdGVtSUQgPSBpZDtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQodGhpcykuaGVpZ2h0KCkgLSAxNTAgPCAkKHRoaXMpLnNjcm9sbFRvcCgpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRsaXN0ID0gJCgnLlRpbWVsaW5lUGFnZV9fTmF2aWdhdGlvbiAuTGlzdFJlY29yZHMnKTtcblxuXHRcdFx0XHRcdFx0XHQkKGAjJHtzaG93TW9yZVRpbWVsaW5lTGlua31gKS5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19SaWdodCAuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjaGVja0VuZE9mUGFnZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRpbmZpbml0ZVNjcm9sbExpc3Qoc2hvd01vcmVUaW1lbGluZUxpbmspO1xuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVJlc3RvcmVFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xuXHQkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpLnNjcm9sbFRvcCh3aW5kb3cuc2Nyb2xsTGlzdFBvc2l0aW9uKTtcblx0JCgnLlRpbWVsaW5lUGFnZV9fTG9hZGluZ01vcmUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdHdpbmRvdy5hbHJlYWR5Q2xpY2tlZCA9IGZhbHNlO1xuXG5cdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XG5cblx0aWYgKHdpbmRvdy5sYXN0SXRlbUlEKSBzZWxlY3RJdGVtKHdpbmRvdy5sYXN0SXRlbUlEKTtcbn07XG5cbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oaWQsIHNjcm9sbFRvKSB7XG5cdGNvbnN0ICRuYXZJdGVtID0gJChgW2RhdGEtaXRlbT1ldmVudC0ke2lkfV0gLlRpbWVsaW5lSXRlbWApO1xuXG5cdCQoJy5UaW1lbGluZUl0ZW0uVGltZWxpbmVJdGVtLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnVGltZWxpbmVJdGVtLS1hY3RpdmUnKTtcblx0JG5hdkl0ZW0uYWRkQ2xhc3MoJ1RpbWVsaW5lSXRlbS0tYWN0aXZlJyk7XG5cblx0aWYgKHNjcm9sbFRvICYmICRuYXZJdGVtLmxlbmd0aCkgc2Nyb2xsVG9WaWV3KCRuYXZJdGVtKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9WaWV3KGVsZW1lbnQpIHtcblx0Y29uc3QgJHBhcmVudERpdiA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XG5cblx0JHBhcmVudERpdi5zY3JvbGxUb3AoXG5cdFx0JHBhcmVudERpdi5zY3JvbGxUb3AoKSArIGVsZW1lbnQucG9zaXRpb24oKS50b3AgLSAkcGFyZW50RGl2LmhlaWdodCgpIC8gMiArIGVsZW1lbnQuaGVpZ2h0KCkgLyAyXG5cdCk7XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZU5hdkxpbmssIG5hbWUpIHtcblx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdCRsaXN0Lm9mZignbW91c2V3aGVlbC5UaW1lbGluZU5hdicpLm9uKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2JywgZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgbGlzdEhlaWdodCA9ICRsaXN0LmhlaWdodCgpO1xuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICRsaXN0LnNjcm9sbFRvcCgpO1xuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9ICRsaXN0LnByb3AoJ3Njcm9sbEhlaWdodCcpO1xuXG5cdFx0aWYgKGxpc3RIZWlnaHQgKyBzY3JvbGxUb3AgKyAxMDAgPiBzY3JvbGxIZWlnaHQgJiYgc2Nyb2xsVG9wID4gMCAmJiAhd2luZG93LmFscmVhZHlDbGlja2VkKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbExpc3RGaW5pc2hlZCk7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsTGlzdEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JChgIyR7c2hvd01vcmVOYXZMaW5rfWApLmNsaWNrKCk7XG5cblx0XHRcdFx0JCgnLlRpbWVsaW5lUGFnZV9fTG9hZGluZ01vcmUnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24gPSAkbGlzdC5zY3JvbGxUb3AoKTtcblx0XHRcdFx0d2luZG93LmFscmVhZHlDbGlja2VkID0gdHJ1ZTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFbmRPZlBhZ2UoKSB7XG5cdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHtcblx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmxhc3QoKTtcblx0XHR3aW5kb3cubGFzdEl0ZW1JRCA9ICRpdGVtLmF0dHIoJ2lkJyk7XG5cdH1cbn1cbiIsIi8qIENvbXBvbmVudCBUcmlnZ2VySWZyYW1lVG9vbHRpcCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyICRlbGVtZW50SWQgPSAkKCcjJyArIGNvbmZpZy5lbGVtZW50SWQpO1xuXG5cdFx0JGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcCcpO1xuXG5cdFx0aWYgKGNvbmZpZy50cmlnZ2VySWQgPT09ICdjbGljaycpICRlbGVtZW50SWQuYWRkQ2xhc3MoJ3Rvb2x0aXBzdGVyZWQtLXBvaW50ZXInKTtcblxuXHRcdGNvbnN0IHdpZGdldE5vdGlmeURpdiA9ICQuZmluZCgnW2RhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIicgKyBjb25maWcuZWxlbWVudElkICsgJ1wiXScpO1xuXHRcdGxldCB3aWRnZXROb3RpZnlJZCA9ICcnO1xuXG5cdFx0aWYgKHdpZGdldE5vdGlmeURpdi5sZW5ndGggPT09IDEpIHtcblx0XHRcdHdpZGdldE5vdGlmeUlkID0gJCh3aWRnZXROb3RpZnlEaXYpLmRhdGEoJ2lmcmFtZXRvb2x0aXBub3RpZnlpZCcpO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50SWQudG9vbHRpcHN0ZXIoe1xuXHRcdFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcblx0XHRcdHRoZW1lOiBjb25maWcudGhlbWUsXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcblx0XHRcdHBvc2l0aW9uOiBjb25maWcucG9zaXRpb25JZCxcblx0XHRcdHRyaWdnZXI6IGNvbmZpZy50cmlnZ2VySWQsXG5cdFx0XHRtaW5XaWR0aDogY29uZmlnLm1pbldpZHRoLFxuXHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcblx0XHRcdHppbmRleDogY29uZmlnLnppbmRleCxcblx0XHRcdG9ubHlPbmU6IHRydWUsXG5cdFx0XHRjb250ZW50OiBgPGlmcmFtZSBpZD1cInRvb2x0aXBzdGVyLWZyYW1lXCIgZGF0YS11aT1cImlmcmFtZS10b29sdGlwXCIgc3JjPVwiJHtjb25maWcuVVJMfVwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7IG1pbi1oZWlnaHQ6JHtjb25maWcubWluSGVpZ2h0fXB4O1wiIGRhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIiR7Y29uZmlnLmVsZW1lbnRJZH1cIiBpZnJhbWV0b29sdGlwbm90aWZ5aWQ9XCIke3dpZGdldE5vdGlmeUlkfVwiPjwvaWZyYW1lPmAsXG5cdFx0XHRmdW5jdGlvblJlYWR5OiBmdW5jdGlvbihpbnN0YW5jZSwgaGVscGVyKSB7XG5cdFx0XHRcdCQoaGVscGVyKS5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcblxuXHRcdFx0XHRpZiAoY29uZmlnLm5vUGFkZGluZykgJCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5hZGRDbGFzcygndG9vbHRpcHN0ZXItLW5vUGFkZGluZycpO1xuXHRcdFx0XHRpZiAoY29uZmlnLmN1c3RvbUNsYXNzKSAkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLmFkZENsYXNzKGNvbmZpZy5jdXN0b21DbGFzcyk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItYmFzZScpLmNzcyh7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IGNvbmZpZy5taW5IZWlnaHQgPiAwID8gY29uZmlnLm1pbkhlaWdodCA6ICdhdXRvJyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJUb29sdGlwc3RlckxvYWRpbmdcIj48ZGl2IGNsYXNzPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG5cdFx0XHRcdGNvbnN0IGlzTGVmdE9yUmlnaHQgPSBjb25maWcucG9zaXRpb25JZCA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5wb3NpdGlvbklkID09PSAncmlnaHQnO1xuXG5cdFx0XHRcdC8vIFNldCBhIGZpeGVkIGhlaWdodCBpbiBvcmRlciB0byBrZWVwIHRoZSBhcnJvdyBpbiB0aGUgc2FtZSBwb3NpdGlvblxuXHRcdFx0XHRpZiAoaXNMZWZ0T3JSaWdodCkge1xuXHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXG5cdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHQub2ZmKCdzY3JvbGwuVG9vbHRpcCcpXG5cdFx0XHRcdFx0XHQub24oJ3Njcm9sbC5Ub29sdGlwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbkFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh3aW5kb3cpLm9mZignc2Nyb2xsLlRvb2x0aXAnKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Rml4SGVpZ2h0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhcnJvdyA9ICQoJy50b29sdGlwc3Rlci1hcnJvdycpO1xuXG5cdFx0JGFycm93LmhlaWdodCgkYXJyb3cuaGVpZ2h0KCkpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5UcmlnZ2VySWZyYW1lVG9vbHRpcCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgVHJ1bmNhdGVkQ29udGVudCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcgPSB7fSkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRhbGxUcnVuY2F0ZWQgPSAkKFtdKTtcblx0XHRcdHZhciByb290U2VsZWN0b3IgPSBgIyR7Y29uZmlnLndpZGdldElkfWA7XG5cdFx0XHR2YXIgb3BlbmVyU2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWFsbCc7XG5cdFx0XHR2YXIgYm9keVNlbGVjdG9yID0gJy5UcnVuY2F0ZWRDb250ZW50LS1ib2R5JztcblxuXHRcdFx0JChyb290U2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciAkZWwgPSAkKHRoaXMpO1xuXHRcdFx0XHQkYWxsVHJ1bmNhdGVkID0gJGFsbFRydW5jYXRlZC5hZGQoJGVsKTtcblx0XHRcdFx0dmFyICRlbEJvZHkgPSAkZWwuZmluZChib2R5U2VsZWN0b3IpO1xuXHRcdFx0XHR2YXIgbWF4TGluZXMgPSAkZWwuZGF0YSgnbWF4bGluZXMnKTtcblx0XHRcdFx0dmFyIGxpbmVIZWlnaHQgPSB3aW5kb3dcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSgkZWwuZmluZCgnPiBkaXYnKVswXSlcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnbGluZS1oZWlnaHQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdFx0dmFyIGxpbmVDb3VudCA9IE1hdGguY2VpbCgkZWwuaGVpZ2h0KCkgLyBsaW5lSGVpZ2h0KTtcblx0XHRcdFx0aWYgKGxpbmVDb3VudCA+IG1heExpbmVzKSB7XG5cdFx0XHRcdFx0JGVsQm9keS5jc3Moe1xuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBsaW5lSGVpZ2h0ICogbWF4TGluZXMgKyAncHgnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHZhciBzZW50ZW5jZSA9ICRlbC5kYXRhKCdhZGRpdGlvbmFsJykucmVwbGFjZSgne259JywgbGluZUNvdW50IC0gbWF4TGluZXMpO1xuXHRcdFx0XHRcdCRlbC5hcHBlbmQoJzxwIGNsYXNzPVwiJyArIG9wZW5lclNlbGVjdG9yLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+JyArIHNlbnRlbmNlICsgJzwvcD4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdCQocm9vdFNlbGVjdG9yKS5vbignY2xpY2snLCBvcGVuZXJTZWxlY3RvciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbCA9ICQodGhpcykuY2xvc2VzdChyb290U2VsZWN0b3IpO1xuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQgPSBmdW5jdGlvbihlbCkge1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKGJvZHlTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZChvcGVuZXJTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuaWQgPT09ICd0b29sdGlwc3Rlci1mcmFtZScpIHtcblx0XHRcdFx0JChyb290U2VsZWN0b3IpLm9mZignY2xpY2snLCBvcGVuZXJTZWxlY3Rvcik7XG5cdFx0XHRcdCQob3BlbmVyU2VsZWN0b3IpLmFkZENsYXNzKCdpbi10b29sdGlwJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRydW5jYXRlZENvbnRlbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdG9wZW46IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0fSxcblx0XHRvcGVuQWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdCRhbGxUcnVuY2F0ZWQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQoJCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLkNsaW5pY2lhbldvcmtBcmVhID0gZnVuY3Rpb24oY29udGFpbmVySUQpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9ICQoYCMke2NvbnRhaW5lcklEfWApO1xuXHRcdGNvbnN0ICR0b2dnbGVyID0gJGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlcicpO1xuXG5cdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0bGV0ICR0b2dnbGVyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XG5cblx0XHRcdCR0b2dnbGVyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdGJ1dHRvbkNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xuXG5cdFx0XHRcdGlmICgkdG9nZ2xlclN0YXRlKSB7XG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcblx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxoaWRlXScpLmRhdGEoJ2xhYmVsaGlkZScpKTtcblxuXHRcdFx0XHRcdCR0b2dnbGVyLmhpZGUoKTtcblxuXHRcdFx0XHRcdGNvbnN0ICRjYW5jZWxCdXR0b24gPSAkKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCAuQnV0dG9uQ2FuY2VsU2VhcmNoJyk7XG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5jbGljaygoKSA9PiBidXR0b25DbGljaygpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuaGlkZSgpO1xuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xuXG5cdFx0XHRcdFx0JHRvZ2dsZXIuc2hvdygpO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGNhbmNlbEJ1dHRvbiA9ICQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkIC5CdXR0b25DYW5jZWxTZWFyY2gnKTtcblx0XHRcdFx0XHQkY2FuY2VsQnV0dG9uLm9mZignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIlNhcHBoaXJlV2lkZ2V0cy5RUkNvZGVTY2FubmVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRIdG1sNVFyY29kZS5nZXRDYW1lcmFzKClcblx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdGlmIChkZXZpY2VzICYmIGRldmljZXMubGVuZ3RoKSBzdGFydENhbWVyYShkZXZpY2VzWzBdLmlkKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0Ly8gQXBwIGRvZXNuJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIGNhbWVyYS4uLlxuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJCgnLkFjY2Vzc0NvZGVPcHRpb24nKTtcblxuXHRcdFx0XHQkY2hlY2tib3guYXR0cignY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdCQoJy5MYXlvdXRTY2FuQ29kZScpLmFkZENsYXNzKCdMYXlvdXRTY2FuQ29kZS0tbW9kZU9ubHlDb2RlJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dFNjYW5Db2RlX19TcGxhc2gnKS5mYWRlT3V0KDUwMCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0pO1xuXG5cdGZ1bmN0aW9uIHN0YXJ0Q2FtZXJhKGNhbWVyYUlEKSB7XG5cdFx0Y29uc3QgaHRtbDVRckNvZGUgPSBuZXcgSHRtbDVRcmNvZGUoJ3FycmVhZGVyJyk7XG5cdFx0Y29uc3QgY29uZmlnID0geyBmcHM6IDUsIHFyYm94OiAyNTAgfTtcblxuXHRcdGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0JCgnLlNjYW5PdmVybGF5JykuYWRkQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xuXG5cdFx0XHRPc05vdGlmeVdpZGdldChvcHRpb25zLndpZGdldEZha2VOb3RpZnlJZCwgcmVzcG9uc2UpO1xuXG5cdFx0XHQvL3NldFRpbWVvdXQoKCkgPT4gaHRtbDVRckNvZGUuc3RvcCgpLCAxMDAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZXJyb3JDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuXHRcdH07XG5cblx0XHRodG1sNVFyQ29kZVxuXHRcdFx0LnN0YXJ0KHsgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9LCBjb25maWcsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaylcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKSwgNTAwKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRsZXQgaXNQb3J0cmFpdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XG5cdGxldCBpc09yaWVudGFyaW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdCQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcblx0XHRcdGlzT3JpZW50YXJpb25DaGFuZ2VkID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCA9ICEoaXNQb3J0cmFpdCBeIGlzT3JpZW50YXJpb25DaGFuZ2VkKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0fSk7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuT25Nb2RlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5TY2FuT3ZlcmxheScpLnJlbW92ZUNsYXNzKCdTY2FuT3ZlcmxheS0tY29ycmVjdENvZGUnKTtcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1pbmNvcnJlY3RDb2RlJyk7XG5cblx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCAmJiAhJCgnLk1vZGVBY2Nlc3NDb2RlJykubGVuZ3RoKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuR29OZXh0SW5wdXQgPSBmdW5jdGlvbihjdXJyZW50SW5wdXQsIG5leHRJbnB1dENsYXNzKSB7XG5cdGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cdGNvbnN0IGlzTnVtYmVyID0gIWlzTmFOKGV2ZW50LmtleSkgJiYgIWlzTmFOKHBhcnNlRmxvYXQoZXZlbnQua2V5KSk7XG5cblx0Y29uc3QgJGN1cnIgPSAkKGN1cnJlbnRJbnB1dCk7XG5cdGNvbnN0ICRuZXh0ID0gJChgLiR7bmV4dElucHV0Q2xhc3N9YCk7XG5cdGNvbnN0ICRwcmV2ID0gJGN1cnIucHJldkFsbCgnaW5wdXQnKS5maXJzdCgpO1xuXG5cdGlmIChrZXkgPT09IDggfHwga2V5ID09PSA0Nikge1xuXHRcdCRwcmV2LmZvY3VzKCk7XG5cdFx0JGN1cnIucmVtb3ZlQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc051bWJlcikge1xuXHRcdCRuZXh0LmZvY3VzKCk7XG5cdFx0JGN1cnIuYWRkQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblx0XHQkKCcuVmFsaWRhdGVJbnB1dEJ1dHRvbicpLmNsaWNrKCk7XG5cdH0gZWxzZSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcbiIsIihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRoZWFkZXIgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fSGVhZGVyJyk7XG5cdFx0Y29uc3QgJG1pbmltaXplID0gJGhlYWRlci5maW5kKCcuTWluaW1pemUnKTtcblx0XHRjb25zdCAkc21hbGxTaXplID0gJGhlYWRlci5maW5kKCcuU21hbGwnKTtcblx0XHRjb25zdCAkbWVkaXVtU2l6ZSA9ICRoZWFkZXIuZmluZCgnLk1lZGl1bScpO1xuXHRcdGNvbnN0ICRmdWxsU2NyZWVuID0gJGhlYWRlci5maW5kKCcuRnVsbFNjcmVlbicpO1xuXHRcdGNvbnN0ICRyZXN0b3JlV2luZG93ID0gJHdpZGdldC5maW5kKCcuUmVtb3RlQXBwb2ludG1lbnRfX1Jlc3RvcmVXaW5kb3cnKTtcblxuXHRcdGxldCBpc1ByZXZpb3VzU21hbGwgPSAkc21hbGxTaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0JG1pbmltaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdGlzUHJldmlvdXNTbWFsbCA9ICRtZWRpdW1TaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XG5cblx0XHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5oaWRlKCk7XG5cdFx0XHQkbWVkaXVtU2l6ZS5zaG93KCk7XG5cblx0XHRcdCR3aWRnZXQuYW5pbWF0ZShtaW5pbWl6ZWRQb3NpdGlvbigkaGVhZGVyLmhlaWdodCgpKSk7XG5cdFx0fSk7XG5cblx0XHQkc21hbGxTaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5zaG93KCk7XG5cdFx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6ICcyODBweCcsXG5cdFx0XHRcdGhlaWdodDogJzM4MHB4Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JG1lZGl1bVNpemUuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXNDYWxsU3RhcnRlZCA9ICR3aWRnZXQuaGFzQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKCdlbmFibGUnKTtcblxuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xuXHRcdFx0JG1pbmltaXplLnNob3coKTtcblx0XHRcdCRtZWRpdW1TaXplLmhpZGUoKTtcblx0XHRcdGlmIChpc0NhbGxTdGFydGVkKSAkc21hbGxTaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2dycgOiAnNDUwcHgnLFxuXHRcdFx0XHRoZWlnaHQ6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2aCcgOiAnMjYwcHgnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQkZnVsbFNjcmVlbi5jbGljaygoKSA9PiB7XG5cdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUmVtb3RlQXBwb2ludG1lbnQgaWZyYW1lJyk7XG5cblx0XHRcdGlmIChpZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWZyYW1lLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRyZXN0b3JlV2luZG93LmNsaWNrKCgpID0+IHtcblx0XHRcdGlmIChpc1ByZXZpb3VzU21hbGwpICRzbWFsbFNpemUuY2xpY2soKTtcblx0XHRcdGVsc2UgJG1lZGl1bVNpemUuY2xpY2soKTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JHdpZGdldC5kcmFnZ2FibGUoe1xuXHRcdFx0XHRjb250YWlubWVudDogJ3dpbmRvdycsXG5cdFx0XHRcdGhhbmRsZTogJGhlYWRlcixcblx0XHRcdFx0c2Nyb2xsOiBmYWxzZSxcblx0XHRcdFx0c25hcDogdHJ1ZSxcblx0XHRcdFx0aWZyYW1lRml4OiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdGZha2VBamF4UmVmcmVzaCgpO1xuXHRcdH0pO1xuXG5cdFx0Y2hlY2tJZnJhbWVMb2FkZWQoKTtcblx0fTtcblxuXHRjb25zdCBtaW5pbWl6ZWRQb3NpdGlvbiA9IChoZWFkZXJIZWlnaHQgPSA0OCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6ICQod2luZG93KS5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCAtIDE2LFxuXHRcdFx0cmlnaHQ6ICc3NnB4Jyxcblx0XHRcdGxlZnQ6ICQod2luZG93KS53aWR0aCgpIC0gMjgwIC0gNjAgLSAxNixcblx0XHRcdHdpZHRoOiAnMjc1cHgnLFxuXHRcdFx0aGVpZ2h0OiAnNDhweCcsXG5cdFx0fTtcblx0fTtcblxuXHRjb25zdCByZXNpemVXaGVuSm9pbiA9ICgpID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICR3aWRnZXQuZmluZCgnLlNtYWxsJyk7XG5cblx0XHQkc21hbGxTaXplLnNob3coKTtcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcblxuXHRcdCR3aWRnZXQuY3NzKHtcblx0XHRcdGhlaWdodDogJzQ1dmgnLFxuXHRcdFx0d2lkdGg6ICc0NXZ3Jyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNlbnRlclB4ID0gKCQod2luZG93LnRvcCkud2lkdGgoKSAtICR3aWRnZXQud2lkdGgoKSkgLyAyO1xuXG5cdFx0JHdpZGdldC5jc3Moe1xuXHRcdFx0aW5zZXQ6IGAyMzBweCBhdXRvIGF1dG8gJHtjZW50ZXJQeH1weGAsXG5cdFx0fSk7XG5cblx0XHRsZXQgdGltZW91dDtcblxuXHRcdGZ1bmN0aW9uIHdhcm5pbmcoZSkge1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIEhhY2sgdG8ga2VlcCB0aGUgY3VycmVudCB0YWIgc2VsZWN0ZWQgaWYgdXNlciBkb2Vzbid0IGdvIHRvIGFub3RoZXIgcGFnZVxuXHRcdFx0XHRjb25zdCBpZnJhbWVDb250ZW50cyA9IHdpbmRvdy50b3AuJCgnLk1haW5Db250ZW50ID4gaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdFx0Y29uc3QgdGFiSXRlbXMgPSBpZnJhbWVDb250ZW50cy5maW5kKCcuVGFiV3JhcHBlcicpO1xuXG5cdFx0XHRcdHRhYkl0ZW1zLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHRcdFx0dGFiSXRlbXMuZmlyc3QoKS5hZGRDbGFzcygnQWN0aXZlJyk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0cmV0dXJuIChlLnJldHVyblZhbHVlID0gJ1lvdSBhcmUgbGVhdmluZyB0aGUgcGFnZScpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5vVGltZW91dCgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR9XG5cblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gd2FybmluZztcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG5vVGltZW91dDtcblxuXHRcdC8qd2luZG93LnRvcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnJldHVyblZhbHVlID0gJzEyMyc7XG5cdFx0fSk7Ki9cblx0fTtcblxuXHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRzbWFsbFNpemUgPSAkd2lkZ2V0LmZpbmQoJy5TbWFsbCcpO1xuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJHdpZGdldC5maW5kKCcuTWVkaXVtJyk7XG5cblx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHQkbWVkaXVtU2l6ZS5oaWRlKCk7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuUmVtb3RlQXBwb2ludG1lbnQnKS5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2luaXRpYWwnLFxuXHRcdFx0cmlnaHQ6ICcyMiUnLFxuXHRcdFx0dG9wOiAnMzAlJyxcblx0XHRcdGhlaWdodDogJzI2MHB4Jyxcblx0XHRcdHdpZHRoOiAnNDUwcHgnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldE1vZGFsTWluaW1pemVkID0gKCkgPT4ge1xuXHRcdC8vIFRvIHVzZSBvbmx5IGluc2lkZSBTYXBwaGlyZSBpRnJhbWUgcGFnZXNcblx0XHRjb25zdCAkbW9kYWxSZW1vdGVBcHB0ID0gd2luZG93LnRvcC4kKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcblxuXHRcdGlmICgkbW9kYWxSZW1vdGVBcHB0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgJG1pbmltaXplTW9kYWwgPSAkbW9kYWxSZW1vdGVBcHB0LmZpbmQoJy5NaW5pbWl6ZScpO1xuXHRcdFx0JG1pbmltaXplTW9kYWwuY2xpY2soKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2hlY2tJZnJhbWVMb2FkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnU2FwcGhpcmVGcmFtZScpWzBdO1xuXHRcdGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cblx0XHRpZiAoaWZyYW1lRG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldEluaXRpYWxTdGF0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrSWZyYW1lTG9hZGVkLCAxMDApO1xuXHR9O1xuXG5cdGNvbnN0IHNldENhbGxTdGFydGVkID0gKCkgPT4ge307XG5cblx0Y29uc3QgZmFrZUFqYXhSZWZyZXNoID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRpZnJhbWUgPSAkKCcuU2FwcGhpcmVGcmFtZScpO1xuXG5cdFx0JGlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlmcmFtZVswXS5jb250ZW50V2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5zaG93KCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5oaWRlKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgb3Blbk1vZGFsTGVhdmVDb250ZXh0ID0gdXJsID0+IHtcblx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQubGVhdmVVUkwgPSB1cmw7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuT3Blbk1vZGFsTGVhdmVDb250ZXh0JykuY2xpY2soKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdHJlc2l6ZVdoZW5Kb2luLFxuXHRcdHNldENhbGxTdGFydGVkLFxuXHRcdHNldEluaXRpYWxTdGF0ZSxcblx0XHRmYWtlQWpheFJlZnJlc2gsXG5cdFx0c2V0TW9kYWxNaW5pbWl6ZWQsXG5cdFx0b3Blbk1vZGFsTGVhdmVDb250ZXh0LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvL1NhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzIHx8IHt9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==